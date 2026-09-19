export type ProseLine =
  | { kind: "opener"; text: string }
  | { kind: "drop-cap"; text: string }
  | { kind: "plain"; text: string }
  | { kind: "center-italic"; text: string };

export type MediaRef = { publicId: string; resourceType: "image" | "video" };

export type MemoirBlock =
  | { type: "hero"; book: string; chLabel: string; title: string; em?: string; subtitle: string; meta: string }
  | { type: "fpVideo"; eyebrow: string; video: MediaRef; poster: MediaRef; caption: string }
  | { type: "fpImage"; eyebrow: string; image: MediaRef; alt: string; caption: string }
  | { type: "poem"; title: string; translit: string; arabic?: string; align?: "center" | "left"; stanzas: { lines: string[]; accent?: boolean }[] }
  | { type: "prose"; lines: ProseLine[] }
  | { type: "pullquote"; lines: string[]; src: string }
  | { type: "sectionCard"; roman: string; heading: string; lede: string }
  | { type: "duaCard"; label: string; arabic: string; translit: string; meaning: string; gloss: string }
  | { type: "artifactCard"; label: string; heading: string; imageSrc: string; alt: string; caption: string }
  | { type: "artifactGrid"; label: string; heading: string; images: { src: string; alt: string }[]; caption: string }
  | { type: "quoteBlock"; text: string }
  | { type: "essayDrop"; label: string; title: string; byline: string; paragraphs: string[] }
  | { type: "births"; label: string; entries: { name: string; date: string }[] }
  | { type: "driveVideo"; label: string; heading: string; src: string; caption: string }
  | { type: "driveVideoRow"; rowLabel: string; heading: string; items: { src: string; caption: string }[] }
  | { type: "asideCard"; label: string; heading: string; paragraphs: string[] }
  | { type: "spine"; label: string; lines: { text: string; emphasis?: boolean }[] }
  | {
      type: "hinaPoem";
      imageSrc: string;
      alt: string;
      meta: string;
      title: string;
      paragraphs: { text: string; accent?: boolean }[];
    }
  | {
      type: "artifactRow";
      rowLabel: string;
      heading: string;
      intro?: string;
      items: { imageSrc: string; alt: string; caption: string }[];
    }
  | { type: "ornament" }
  | { type: "chapterEnd"; nextTitle: string; symbol?: string };

export type MemoirChapterContent = {
  number: number;
  slug: string;
  title: string;
  blocks: MemoirBlock[];
  soundtrack?: { name: string; tracks: { media: MediaRef; title: string }[] };
};
