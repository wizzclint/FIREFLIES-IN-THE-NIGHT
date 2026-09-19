// Retry pass for migrate-drive-images.mjs: downloads each Drive file to a
// local temp file first (with a delay between requests, since Drive's
// thumbnail endpoint rate-limits rapid-fire hits), then uploads the local
// file to Cloudinary. Merges results into the existing drive-id-map.json.

import { v2 as cloudinary } from "cloudinary";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import loadEnv from "./load-env.mjs";

loadEnv();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const [, , idsFile] = process.argv;
const ids = readFileSync(idsFile, "utf8").split("\n").map((s) => s.trim()).filter(Boolean);

const mapPath = "scripts/drive-id-map.json";
const map = existsSync(mapPath) ? JSON.parse(readFileSync(mapPath, "utf8")) : {};

const tmpDir = "scripts/.drive-tmp";
if (!existsSync(tmpDir)) mkdirSync(tmpDir, { recursive: true });

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

for (const id of ids) {
  const localPath = path.join(tmpDir, `${id}.bin`);
  const url = `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
  try {
    console.log(`Downloading ${id} ...`);
    execFileSync("curl", ["-sk", "-L", "-o", localPath, "-A", "Mozilla/5.0", url], { stdio: "inherit" });
    const buf = readFileSync(localPath);
    if (buf.slice(0, 15).toString("utf8").includes("<!DOCTYPE") || buf.slice(0, 6).toString("utf8").includes("<html")) {
      console.error(`  still HTML for ${id}, skipping`);
      await sleep(3000);
      continue;
    }
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
    console.error(`  FAILED ${id}: ${err.message}`);
  }
  await sleep(2500);
}

writeFileSync(mapPath, JSON.stringify(map, null, 2));
console.log(`\nUpdated ${mapPath}, now ${Object.keys(map).length} total entries.`);
