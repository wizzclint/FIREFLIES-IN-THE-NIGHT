import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export type MediaRef = { publicId: string; resourceType: "image" | "video" };

// Signed delivery URL for a private ("authenticated") Cloudinary asset.
// The signature makes the URL work at all - without it Cloudinary refuses
// the request - so a link only becomes usable once we generate it here,
// which only happens after the caller has proven they know the memoir key
// (see verifyMemoirKey below).
export function signedMediaUrl({ publicId, resourceType }: MediaRef): string {
  return cloudinary.url(publicId, {
    resource_type: resourceType,
    type: "authenticated",
    sign_url: true,
    secure: true,
  });
}

export function verifyMemoirKey(key: string): boolean {
  const expected = process.env.MEMOIR_KEY;
  return typeof expected === "string" && expected.length > 0 && key === expected;
}
