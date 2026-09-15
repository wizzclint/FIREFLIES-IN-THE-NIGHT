// One-off build tool: encrypts the memoir's chapter text (AES-256-GCM) so the
// prose never ships in plaintext. Run manually whenever the source chapters
// or the key change:
//
//   node scripts/encrypt-memoir.mjs
//
// Reads src/content/buyahka-and-abrar.json (plaintext, kept out of the app
// bundle) and writes src/content/buyahka-and-abrar.locked.json (ciphertext,
// safe to ship — this is the file the site actually imports). The key
// defaults to "001100"; override with MEMOIR_KEY=xxxxxx.

import { readFileSync, writeFileSync } from "node:fs";
import { randomBytes, pbkdf2Sync, createCipheriv } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "../src/content/buyahka-and-abrar.json");
const OUT = path.join(__dirname, "../src/content/buyahka-and-abrar.locked.json");

const KEY = process.env.MEMOIR_KEY || "001100";
const ITERATIONS = 100_000;

const chapters = JSON.parse(readFileSync(SRC, "utf8"));
const salt = randomBytes(16);
const key = pbkdf2Sync(KEY, salt, ITERATIONS, 32, "sha256");

const locked = chapters.map((chapter) => {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const plaintext = JSON.stringify(chapter.paragraphs);
  const ciphertext = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return {
    number: chapter.number,
    title: chapter.title,
    iv: iv.toString("base64"),
    // Web Crypto's AES-GCM decrypt expects the auth tag appended to the
    // ciphertext, matching what SubtleCrypto.decrypt() produces/expects.
    ciphertext: Buffer.concat([ciphertext, authTag]).toString("base64"),
  };
});

writeFileSync(
  OUT,
  JSON.stringify(
    {
      algorithm: "AES-GCM",
      hash: "SHA-256",
      iterations: ITERATIONS,
      salt: salt.toString("base64"),
      chapters: locked,
    },
    null,
    2
  )
);

console.log(`Encrypted ${locked.length} chapters -> ${path.relative(process.cwd(), OUT)}`);
