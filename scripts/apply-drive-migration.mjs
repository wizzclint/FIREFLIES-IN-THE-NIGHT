// Rewrites every `https://drive.google.com/thumbnail?id=<ID>&sz=...` URL in
// the memoir content files to the corresponding Cloudinary secure_url from
// drive-id-map.json, wherever a mapping exists. IDs with no mapping (Drive
// files that require sign-in / aren't actually publicly shared) are left
// untouched and reported at the end.

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const map = JSON.parse(readFileSync("scripts/drive-id-map.json", "utf8"));
const dir = "src/content/memoir";
const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));

const pattern = /https:\/\/drive\.google\.com\/thumbnail\?id=([A-Za-z0-9_-]+)&sz=w\d+/g;
let totalReplaced = 0;
const unmapped = new Set();

for (const file of files) {
  const full = path.join(dir, file);
  const content = readFileSync(full, "utf8");
  let changed = false;
  const next = content.replace(pattern, (match, id) => {
    if (map[id]) {
      changed = true;
      totalReplaced++;
      return map[id];
    }
    unmapped.add(id);
    return match;
  });
  if (changed) {
    writeFileSync(full, next);
    console.log(`Updated ${file}`);
  }
}

console.log(`\nReplaced ${totalReplaced} URLs.`);
if (unmapped.size) {
  console.log(`\n${unmapped.size} Drive IDs left unmapped (require sign-in / not publicly shared):`);
  for (const id of unmapped) console.log(`  ${id}`);
}
