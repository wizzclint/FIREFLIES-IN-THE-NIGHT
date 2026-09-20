// Uploads Drive images that were supplied locally (because the Drive files
// themselves aren't publicly shared) to Cloudinary under the same
// "drive-docs/<driveId>" naming as the automated migration, and records them
// in drive-id-map.json so apply-drive-migration.mjs can rewrite the content
// files' old Drive URLs.

import { v2 as cloudinary } from "cloudinary";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import loadEnv from "./load-env.mjs";

loadEnv();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const dir = "FIRE/some drive image";

// local filename -> Drive file ID it replaces
const files = {
  "Hina 50th Birthday Trip to Mecca 2017 Abrar Zaanab and Hina .jpg": "1YJPjuiAvxwLf_pnZUQmX1Nxy8AqCz_xlug",
  "Zanab & Moaaz Baraat Shahdi Nov 24 2018.JPG": "1usCYFhBJWome7aFHFPcUh5WgkM-ny29SQQ",
  "Moaaz & Hina 8.jpg": "1M3nMF86DehHN7t6VmgxwP63X_CwcrSA5",
  "Moaaz Zanab Shahbaaz 4.jpg": "11qSJqad_GrxcqWRRpj1mANL6s2UkA28K",
  "Our Family 16.jpg": "16-ca3_qeZSv7LV9UknfA0Atdmq97fJ9t",
  "Hina close up-seaside.jpg": "1CHz7_5CjY0118D7-rTiHeQVW2HlsklHf",
  "Hina-closed eyes.jpg": "1F52n3TdM9uU57EdxBzuxpf3FbQE8-39s",
  "Hina Grave Burial May 26 2019 .jpg": "1-YmFt3hImsDhZZZJPmCAHoE2PJyTbIuJ",
};

const mapPath = "scripts/drive-id-map.json";
const map = existsSync(mapPath) ? JSON.parse(readFileSync(mapPath, "utf8")) : {};

for (const [file, id] of Object.entries(files)) {
  const localPath = path.join(dir, file);
  try {
    console.log(`Uploading ${file} -> ${id}`);
    const result = await cloudinary.uploader.upload(localPath, {
      resource_type: "image",
      type: "upload",
      folder: "buyahka-abrar/drive-docs",
      public_id: id,
      overwrite: true,
    });
    map[id] = result.secure_url;
    console.log(`  done: ${result.secure_url}`);
  } catch (err) {
    console.error(`  FAILED ${file}: ${err.message}`);
  }
}

writeFileSync(mapPath, JSON.stringify(map, null, 2));
console.log(`\nWrote ${mapPath}, now ${Object.keys(map).length} entries.`);
