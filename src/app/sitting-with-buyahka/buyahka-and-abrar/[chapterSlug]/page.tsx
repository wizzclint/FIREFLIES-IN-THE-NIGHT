import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MemoirChapterView from "@/components/memoir/MemoirChapterView";
import { cormorant, ebGaramond } from "@/lib/memoirFonts";
import type { MemoirChapterContent } from "@/lib/memoirBlocks";

import chapter01 from "@/content/memoir/chapter-01";
import chapter02 from "@/content/memoir/chapter-02";
import chapter03 from "@/content/memoir/chapter-03";
import chapter04 from "@/content/memoir/chapter-04";
import chapter05 from "@/content/memoir/chapter-05";
import chapter06 from "@/content/memoir/chapter-06";
import chapter07 from "@/content/memoir/chapter-07";
import chapter08 from "@/content/memoir/chapter-08";
import chapter09 from "@/content/memoir/chapter-09";
import chapter10 from "@/content/memoir/chapter-10";
import chapter11 from "@/content/memoir/chapter-11";
import chapter12 from "@/content/memoir/chapter-12";
import appendixB from "@/content/memoir/appendix-b";
import appendixC from "@/content/memoir/appendix-c";

// The reading order of the whole book — chapters, then the appendices —
// drives both the static params and the prev/next chapter nav.
const order: MemoirChapterContent[] = [
  chapter01, chapter02, chapter03, chapter04, chapter05, chapter06,
  chapter07, chapter08, chapter09, chapter10, chapter11, chapter12,
  appendixB, appendixC,
];

const bySlug = new Map(order.map((c) => [c.slug, c]));

export function generateStaticParams() {
  return order.map((c) => ({ chapterSlug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}): Promise<Metadata> {
  const { chapterSlug } = await params;
  const chapter = bySlug.get(chapterSlug);
  if (!chapter) return {};
  return {
    title: `${chapter.title} — Buyahka & Abrar`,
    description: "From the Buyahka & Abrar memoir.",
  };
}

export default async function MemoirChapterPage({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}) {
  const { chapterSlug } = await params;
  const index = order.findIndex((c) => c.slug === chapterSlug);
  if (index === -1) notFound();

  const chapter = order[index];
  const previous = index > 0 ? order[index - 1] : null;
  const next = index < order.length - 1 ? order[index + 1] : null;

  return (
    <div className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <MemoirChapterView
        blocks={chapter.blocks}
        prev={previous ? { href: `/sitting-with-buyahka/buyahka-and-abrar/${previous.slug}`, title: previous.title } : null}
        next={next ? { href: `/sitting-with-buyahka/buyahka-and-abrar/${next.slug}`, title: next.title } : null}
        soundtrack={chapter.soundtrack}
      />
    </div>
  );
}
