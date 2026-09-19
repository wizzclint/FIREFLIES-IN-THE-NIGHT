"use server";

import { signedMediaUrl, verifyMemoirKey, type MediaRef } from "@/lib/cloudinaryMedia";

// Called only after a reader has already unlocked the chapter text with the
// memoir key. Re-checks the key server-side (the client-side text unlock is
// just a local AES decrypt - it never proves anything to the server) before
// handing back real, signed URLs to the private Cloudinary assets.
export async function getSignedChapterMedia(
  key: string,
  items: MediaRef[]
): Promise<{ ok: true; urls: string[] } | { ok: false }> {
  if (!verifyMemoirKey(key)) {
    return { ok: false };
  }
  return { ok: true, urls: items.map(signedMediaUrl) };
}
