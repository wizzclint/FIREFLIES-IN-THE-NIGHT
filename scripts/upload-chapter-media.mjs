// Uploads a chapter's extracted media to Cloudinary as "authenticated"
// (private) assets — they can't be viewed from a bare URL, only via a
// signed URL we generate server-side after a reader unlocks the chapter.
//
// Usage: node scripts/upload-chapter-media.mjs <chapter-folder> <cloudinary-folder>
// Example: node scripts/upload-chapter-media.mjs public/memoir-preview/chapter-01 buyahka-abrar/chapter-01

import { v2 as cloudinary } from "cloudinary";
import { readdirSync } from "node:fs";
import path from "node:path";
import loadEnv from "./load-env.mjs";

loadEnv();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const [, , srcDir, cloudFolder] = process.argv;
if (!srcDir || !cloudFolder) {
  console.error("Usage: node scripts/upload-chapter-media.mjs <local-dir> <cloudinary-folder>");
  process.exit(1);
}

const files = readdirSync(srcDir);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const resourceType = [".mp4", ".mov", ".webm"].includes(ext)
    ? "video"
    : [".mp3", ".m4a", ".wav"].includes(ext)
      ? "video" // Cloudinary treats audio under the "video" resource type
      : "image";
  const publicId = path.basename(file, ext);

  console.log(`Uploading ${file} as ${resourceType} -> ${cloudFolder}/${publicId} ...`);
  const result = await cloudinary.uploader.upload(path.join(srcDir, file), {
    resource_type: resourceType,
    type: "authenticated",
    folder: cloudFolder,
    public_id: publicId,
    overwrite: true,
  });
  console.log(`  done: ${result.public_id} (${(result.bytes / 1024).toFixed(0)} KB)`);
}

console.log("\nAll uploads complete.");
