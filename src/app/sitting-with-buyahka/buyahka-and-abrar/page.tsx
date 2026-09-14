import type { Metadata } from "next";
import Container from "@/components/Container";
import BackLink from "@/components/BackLink";
import CtaLink from "@/components/CtaLink";
import ShareButton from "@/components/ShareButton";
import rawChapters from "@/content/buyahka-and-abrar.json";

export const metadata: Metadata = {
  title: "Buyahka & Abrar",
  description: "The complete family memoir — finished, and free to read online.",
};

type RawChapter = { number: number; title: string; paragraphs: string[] };

const chapters = (rawChapters as RawChapter[]).map((c) => ({
  id: `chapter-${c.number}`,
  title: c.title,
  paragraphs: c.paragraphs,
}));

// Groups chapters under their book part, per the memoir's own table of
// contents, for the "Chapters" navigation list.
const parts = [
  { title: "Part One — Inheriting", range: [1, 4] },
  { title: "Part Two — Building", range: [5, 7] },
  { title: "Part Three — Rupture & Collapse", range: [8, 11] },
  { title: "Part Four — Return", range: [12, 12] },
] as const;

export default function BuyahkaAndAbrarPage() {
  return (
    <Container className="py-14 sm:py-20">
      <BackLink href="/sitting-with-buyahka" label="Sitting with Buyahka" />

      <header className="mt-6 max-w-2xl">
        <h1 className="font-display text-3xl text-cream-100 sm:text-4xl md:text-5xl">
          Buyahka & Abrar
        </h1>
        <p className="mt-3 font-body text-lg italic text-cream-300">
          The complete family memoir — finished, and free to read online.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <CtaLink href="/contact?about=Buyahka%20%26%20Abrar" variant="outline">
            Tell Ahmad what you think
          </CtaLink>
          <ShareButton title="Buyahka & Abrar — Fireflies in the Night" />
        </div>
      </header>

      <nav aria-label="Chapters" className="mt-10 max-w-2xl rounded-xl border border-night-600/50 bg-night-800/40 p-5 sm:p-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          Chapters
        </p>
        <div className="mt-4 flex flex-col gap-4">
          {parts.map((part) => (
            <div key={part.title}>
              <p className="font-body text-xs font-semibold text-cream-300/70">{part.title}</p>
              <ol className="mt-1.5 flex flex-col gap-1.5">
                {chapters
                  .filter((c, i) => i + 1 >= part.range[0] && i + 1 <= part.range[1])
                  .map((chapter, i) => (
                    <li key={chapter.id}>
                      <a
                        href={`#${chapter.id}`}
                        className="font-body text-cream-200 hover:text-gold-300"
                      >
                        {part.range[0] + i}. {chapter.title}
                      </a>
                    </li>
                  ))}
              </ol>
            </div>
          ))}
        </div>
      </nav>

      <article className="mt-10 max-w-prose font-body text-cream-200 sm:mt-14">
        {chapters.map((chapter, i) => (
          <div key={chapter.id}>
            {i > 0 && <hr className="my-12 border-night-600/50" />}
            <section id={chapter.id} className="scroll-mt-24">
              <h2 className="font-display text-2xl text-cream-100 sm:text-3xl">
                {chapter.title}
              </h2>
              <div className="mt-4 flex flex-col gap-5 text-lg leading-loose">
                {chapter.paragraphs.map((paragraph, j) =>
                  paragraph.trim() === "❦" ? (
                    <p
                      key={j}
                      aria-hidden="true"
                      className="my-2 text-center text-2xl text-gold-400/60"
                    >
                      ❦
                    </p>
                  ) : (
                    <p key={j}>{paragraph}</p>
                  )
                )}
              </div>
            </section>
          </div>
        ))}
      </article>
    </Container>
  );
}
