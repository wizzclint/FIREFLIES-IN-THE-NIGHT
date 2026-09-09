import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description: "The intellectual and creative home for Ahmad's writing.",
};

export default function AboutPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl text-cream-100 sm:text-4xl md:text-5xl">
          About
        </h1>

        <div className="mt-8 flex flex-col gap-6 font-body text-lg leading-relaxed text-cream-200">
          <p>
            Fireflies in the Night is the intellectual and creative home for
            Ahmad&apos;s writing — a builder, husband, father, grandfather, and
            community participant, using one imperfect life as evidence, not
            as proof of authority.
          </p>
          <p>
            Buyahka is where faith gets questioned out loud. Ababeel is where
            the community&apos;s history lives. Fireflies holds all of it
            together.
          </p>
        </div>

        <p className="mt-14 border-t border-night-600/50 pt-6 font-body text-sm text-cream-300/70">
          Some material here involves real people and real history. What&apos;s
          shared publicly has been chosen with that in mind.
        </p>
      </div>
    </Container>
  );
}
