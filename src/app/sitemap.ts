import type { MetadataRoute } from "next";

const baseUrl = "https://fireflies-in-the-night.vercel.app";

const routes = [
  "",
  "/in-search-of-beauty",
  "/in-search-of-beauty/movement-was-my-oxygen",
  "/sitting-with-buyahka",
  "/sitting-with-buyahka/buyahka-and-abrar",
  "/sitting-with-buyahka/critical-thinking-did-not-weaken-my-faith",
  "/community",
  "/community/i-remember-dar-ul-islah",
  "/recommended",
  "/recommended/three-books-i-read-before-fifteen",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
