// Downloads every Google-Drive-hosted "thumbnail?id=..." document scan
// referenced across the memoir chapters and re-hosts it on Cloudinary as a
// plain public asset (matching the fact these were already unauthenticated
// public links) — fixes intermittent load failures caused by Drive's
// thumbnail endpoint being rate-limited / not meant for hotlinking at scale.
//
// Usage: node scripts/migrate-drive-images.mjs <ids-file>
// Writes scripts/drive-id-map.json: { "<driveId>": "<cloudinarySecureUrl>" }

import { v2 as cloudinary } from "cloudinary";
import { readFileSync, writeFileSync } from "node:fs";
import loadEnv from "./load-env.mjs";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
loadEnv();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const [, , idsFile] = process.argv;
if (!idsFile) {
  console.error("Usage: node scripts/migrate-drive-images.mjs <ids-file>");
  process.exit(1);
}

const ids = readFileSync(idsFile, "utf8").split("\n").map((s) => s.trim()).filter(Boolean);
const map = {};

for (const id of ids) {
  const url = `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
  try {
    console.log(`Uploading ${id} ...`);
    const result = await cloudinary.uploader.upload(url, {
      resource_type: "image",
      type: "upload",
      folder: "buyahka-abrar/drive-docs",
      public_id: id,
      overwrite: true,
    });
    map[id] = result.secure_url;
    console.log(`  done: ${result.secure_url}`);
  } catch (err) {
    console.error(`  FAILED ${id}: ${err.message}`);
  }
}

writeFileSync("scripts/drive-id-map.json", JSON.stringify(map, null, 2));
console.log(`\nWrote scripts/drive-id-map.json with ${Object.keys(map).length}/${ids.length} entries.`);
