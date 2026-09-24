// Builds the header logo from the master logo (public/images/fireflies-logo.png:
// the crescent emblem stacked over the "FIREFLIES / IN THE NIGHT" wordmark,
// on a black square).
//
// The artwork is used exactly as supplied. The only change is that the black
// square behind it is converted to real transparency (so no dark box shows
// over the hero photo) and the empty margin is trimmed away.
//
//   node scripts/build-logo-assets.mjs

import sharp from "sharp";

const MASTER = "public/images/fireflies-logo.png";
const OUT = "public/images/fireflies-logo-full.png";

const OUT_HEIGHT = 640; // px; the header shows it far smaller, so this stays sharp on hi-dpi screens
const ALPHA_FLOOR = 10; // luminance at or below this counts as background
const PAD = 8;

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

// Tight bounding box of visible pixels.
let minX = W, maxX = -1, minY = H, maxY = -1;
for (let y = 0; y < H; y++) {
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
const box = {
  left,
  top,
  width: Math.min(W, maxX + PAD + 1) - left,
  height: Math.min(H, maxY + PAD + 1) - top,
};
console.log("content box", box);

const result = await sharp(rgba, { raw: { width: W, height: H, channels: 4 } })
  .extract(box)
  .resize({ height: OUT_HEIGHT })
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(`wrote ${OUT} (${result.width}x${result.height})`);
