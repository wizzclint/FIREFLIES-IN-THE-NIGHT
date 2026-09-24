// Builds the header logo from the master full-lockup logo
// (public/images/fireflies-logo.png: crescent emblem stacked over the
// "FIREFLIES / IN THE NIGHT" wordmark on a black square).
//
// The master's black background is converted to real transparency (so the
// glow sits cleanly on the hero photo), then the emblem and the wordmark are
// cut out and laid side by side. The wordmark is scaled up relative to the
// emblem so its lettering stays legible at header size.
//
//   node scripts/build-logo-assets.mjs

import sharp from "sharp";

const MASTER = "public/images/fireflies-logo.png";
const OUT = "public/images/fireflies-logo-horizontal.png";

const EMBLEM_HEIGHT = 384; // output height of the emblem, px
const WORDMARK_BOOST = 2.2; // wordmark scale relative to the emblem
const GAP = 28; // space between emblem and wordmark, px
const ALPHA_FLOOR = 10; // luminance at or below this is background
const EMBLEM_WORDMARK_SPLIT = 880; // master row that separates emblem from text
const PAD = 6;

const { data, info } = await sharp(MASTER).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;

// Luminance -> alpha: alpha follows the brightest channel, colour is
// un-premultiplied so the gold stays saturated wherever the glow fades out.
const rgba = Buffer.alloc(W * H * 4);
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = Math.max(r, g, b);
  if (a <= ALPHA_FLOOR) continue;
  const k = 255 / a;
  rgba[j] = Math.min(255, Math.round(r * k));
  rgba[j + 1] = Math.min(255, Math.round(g * k));
  rgba[j + 2] = Math.min(255, Math.round(b * k));
  rgba[j + 3] = Math.round(((a - ALPHA_FLOOR) * 255) / (255 - ALPHA_FLOOR));
}

// Tight bounding box of visible pixels within rows [y0, y1).
function bbox(y0, y1) {
  let minX = W, maxX = -1, minY = H, maxY = -1;
  for (let y = y0; y < y1; y++) {
    for (let x = 0; x < W; x++) {
      if (rgba[(y * W + x) * 4 + 3] > 24) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const left = Math.max(0, minX - PAD);
  const top = Math.max(0, minY - PAD);
  return {
    left,
    top,
    width: Math.min(W, maxX + PAD + 1) - left,
    height: Math.min(H, maxY + PAD + 1) - top,
  };
}

const raw = { raw: { width: W, height: H, channels: 4 } };
const emblemBox = bbox(0, EMBLEM_WORDMARK_SPLIT);
const wordmarkBox = bbox(EMBLEM_WORDMARK_SPLIT, H);
console.log("emblem box", emblemBox, "wordmark box", wordmarkBox);

const emblemScale = EMBLEM_HEIGHT / emblemBox.height;
const wordmarkScale = emblemScale * WORDMARK_BOOST;

const emblem = await sharp(rgba, raw)
  .extract(emblemBox)
  .resize({ height: EMBLEM_HEIGHT })
  .png()
  .toBuffer({ resolveWithObject: true });
const wordmark = await sharp(rgba, raw)
  .extract(wordmarkBox)
  .resize({ width: Math.round(wordmarkBox.width * wordmarkScale) })
  .png()
  .toBuffer({ resolveWithObject: true });

const width = emblem.info.width + GAP + wordmark.info.width;
const height = Math.max(emblem.info.height, wordmark.info.height);

await sharp({ create: { width, height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([
    { input: emblem.data, left: 0, top: Math.round((height - emblem.info.height) / 2) },
    {
      input: wordmark.data,
      left: emblem.info.width + GAP,
      top: Math.round((height - wordmark.info.height) / 2),
    },
  ])
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(`wrote ${OUT} (${width}x${height})`);
