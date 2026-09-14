import type { Metadata } from "next";
import Container from "@/components/Container";
import BackLink from "@/components/BackLink";
import CtaLink from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "Buyahka & Abrar",
  description: "The complete family memoir — finished, and free to read online.",
};

// Placeholder chapter structure. Replace each chapter's `paragraphs` with the
// real memoir text when it's ready — the anchor ids (used by the "Chapters"
// list below) can stay the same, or be renamed to match real chapter breaks.
// Placeholder episode structure — awaiting the approved videos and the
// Samples & Specs document. Swap `videoUrl: null` for a real embeddable URL
// (YouTube/Vimeo) or a hosted file per episode once they're ready; nothing
// else on the page needs to change.
const episodes = [
  { id: "episode-1", title: "Episode 1", description: "Video coming soon.", videoUrl: null },
  { id: "episode-2", title: "Episode 2", description: "Video coming soon.", videoUrl: null },
  { id: "episode-3", title: "Episode 3", description: "Video coming soon.", videoUrl: null },
  { id: "episode-4", title: "Episode 4", description: "Video coming soon.", videoUrl: null },
];

const chapters = [
  {
    id: "chapter-one",
    title: "Chapter One — Beginnings",
    paragraphs: [
      "This is placeholder text standing in for Chapter One of Buyahka & Abrar. It's here only to preview line length, spacing, and rhythm on this page — replace it with the real opening of the memoir when it's ready.",
      "A second paragraph, so the reading layout can be checked across several lines of running prose, the way the finished chapter eventually will read.",
    ],
  },
  {
    id: "chapter-two",
    title: "Chapter Two — What the House Remembered",
    paragraphs: [
      "More placeholder text for Chapter Two. This section exists to hold the shape of a longer chapter — several paragraphs, a natural break, a return.",
      "When the real content arrives, it can be dropped in paragraph by paragraph without changing the surrounding template.",
    ],
  },
  {
    id: "chapter-three",
    title: "Chapter Three — Buyahka & Abrar",
    paragraphs: [
      "A final placeholder chapter, closing out the preview structure. Add, remove, or rename chapters freely — the anchor list above will follow whatever is listed here.",
    ],
  },
];

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
        <div className="mt-6">
          <CtaLink
            href="mailto:hello@firefliesinthenight.com?subject=Buyahka%20%26%20Abrar"
            variant="outline"
          >
            Tell Ahmad what you think
          </CtaLink>
        </div>
      </header>

      <nav aria-label="Chapters" className="mt-10 max-w-2xl rounded-xl border border-night-600/50 bg-night-800/40 p-5 sm:p-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          Chapters
        </p>
        <ol className="mt-3 flex flex-col gap-2">
          {chapters.map((chapter, i) => (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                className="font-body text-cream-200 hover:text-gold-300"
              >
                {i + 1}. {chapter.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section aria-labelledby="episodes-heading" className="mt-10 max-w-3xl sm:mt-14">
        <h2
          id="episodes-heading"
          className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-400"
        >
          Episodes
        </h2>
        <p className="mt-2 font-body text-cream-300">
          A few videos accompany the memoir — they&apos;ll appear here once they&apos;re ready.
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {episodes.map((episode) => (
            <li
              key={episode.id}
              className="overflow-hidden rounded-xl border border-night-600/50 bg-night-800/40"
            >
              <div className="flex aspect-video items-center justify-center bg-night-950/60">
                {episode.videoUrl ? (
                  <video src={episode.videoUrl} controls className="h-full w-full" />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-10 w-10 text-cream-300/40"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9.25" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 8.5v7l6-3.5-6-3.5Z" />
                  </svg>
                )}
              </div>
              <div className="p-4">
                <p className="font-display text-lg text-cream-100">{episode.title}</p>
                <p className="mt-1 font-body text-sm text-cream-300">{episode.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <article className="mt-10 max-w-prose font-body text-cream-200 sm:mt-14">
        {chapters.map((chapter, i) => (
          <div key={chapter.id}>
            {i > 0 && <hr className="my-12 border-night-600/50" />}
            <section id={chapter.id} className="scroll-mt-24">
              <h2 className="font-display text-2xl text-cream-100 sm:text-3xl">
                {chapter.title}
              </h2>
              <div className="mt-4 flex flex-col gap-5 text-lg leading-loose">
                {chapter.paragraphs.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            </section>
          </div>
        ))}
      </article>
    </Container>
  );
}
