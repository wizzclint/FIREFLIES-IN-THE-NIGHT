import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import BackLink from "@/components/BackLink";
import ShareButton from "@/components/ShareButton";
import LockedChapterBody from "@/components/LockedChapterBody";
import { chapters, getChapterBySlug, getLockedChapterBySlug, getAdjacentChapters, getPartForChapter, memoirLock } from "@/lib/memoir";

export function generateStaticParams() {
  return chapters.map((c) => ({ chapterSlug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapterSlug: string }>;
}): Promise<Metadata> {
  const { chapterSlug } = await params;
  const chapter = getChapterBySlug(chapterSlug);
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
  const chapter = getChapterBySlug(chapterSlug);
  const lockedChapter = getLockedChapterBySlug(chapterSlug);
  if (!chapter || !lockedChapter) notFound();

  const { previous, next } = getAdjacentChapters(chapter.number);
  const part = getPartForChapter(chapter.number);

  return (
    <Container className="py-14 sm:py-20">
      <BackLink href="/sitting-with-buyahka/buyahka-and-abrar" label="Buyahka & Abrar" />

      <article className="mt-6 max-w-2xl">
        {part && (
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            {part.title}
          </p>
        )}
        <h1 className="mt-2 font-display text-3xl text-cream-100 sm:text-4xl">
          {chapter.title}
        </h1>
        <p className="mt-3 font-body text-sm text-cream-300/70">
          Chapter {chapter.number} of {chapters.length}
        </p>

        <div className="mt-4">
          <ShareButton title={`${chapter.title} — Buyahka & Abrar`} />
        </div>

        <LockedChapterBody lock={memoirLock} chapter={lockedChapter} />

        <nav
          aria-label="Chapter navigation"
          className="mt-14 flex items-center justify-between gap-4 border-t border-night-600/50 pt-6"
        >
          {previous ? (
            <Link
              href={`/sitting-with-buyahka/buyahka-and-abrar/${previous.slug}`}
              className="flex flex-col text-sm text-cream-200 hover:text-gold-300"
            >
              <span className="text-xs uppercase tracking-wide text-cream-300/60">Previous</span>
              <span className="font-semibold">&larr; {previous.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/sitting-with-buyahka/buyahka-and-abrar/${next.slug}`}
              className="flex flex-col text-right text-sm text-cream-200 hover:text-gold-300"
            >
              <span className="text-xs uppercase tracking-wide text-cream-300/60">Next</span>
              <span className="font-semibold">{next.title} &rarr;</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </Container>
  );
}
