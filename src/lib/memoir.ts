import locked from "@/content/buyahka-and-abrar.locked.json";

export type Chapter = {
  number: number;
  slug: string;
  title: string;
};

type LockedChapter = { number: number; title: string; iv: string; ciphertext: string };

const lockedChapters = locked.chapters as LockedChapter[];

// Chapter titles and numbers are public (the table of contents shows them);
// only the prose itself is encrypted — see LockedChapterBody.
export const chapters: Chapter[] = lockedChapters.map((c) => ({
  number: c.number,
  slug: `chapter-${c.number}`,
  title: c.title,
}));

export const memoirLock = {
  algorithm: locked.algorithm,
  hash: locked.hash,
  iterations: locked.iterations,
  salt: locked.salt,
};

// Groups chapters under their book part, per the memoir's own table of
// contents.
export const parts = [
  { title: "Part One — Inheriting", range: [1, 4] },
  { title: "Part Two — Building", range: [5, 7] },
  { title: "Part Three — Rupture & Collapse", range: [8, 11] },
  { title: "Part Four — Return", range: [12, 12] },
] as const;

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getLockedChapterBySlug(slug: string): LockedChapter | undefined {
  return lockedChapters.find((c) => `chapter-${c.number}` === slug);
}

export function getAdjacentChapters(number: number) {
  return {
    previous: chapters.find((c) => c.number === number - 1) ?? null,
    next: chapters.find((c) => c.number === number + 1) ?? null,
  };
}

export function getPartForChapter(number: number) {
  return parts.find((p) => number >= p.range[0] && number <= p.range[1]);
}
