import type { Metadata } from "next";
import Container from "@/components/Container";
import BackLink from "@/components/BackLink";
import ComingSoonNotice from "@/components/ComingSoonNotice";
import RespondToPiece from "@/components/RespondToPiece";

export const metadata: Metadata = {
  title: "Three Books I Read Before Fifteen",
  description: "The books that set his thinking in motion, before he had language for it.",
};

export default function ThreeBooksPage() {
  return (
    <Container className="py-14 sm:py-20">
      <BackLink href="/recommended" label="Recommended" />

      <article className="mt-6 max-w-2xl">
        <h1 className="font-display text-3xl text-cream-100 sm:text-4xl">
          Three Books I Read Before Fifteen
        </h1>
        <p className="mt-3 font-body text-lg italic text-cream-300">
          The books that set his thinking in motion, before he had language for it.
        </p>

        <ComingSoonNotice kind="list" />
        <RespondToPiece title="Three Books I Read Before Fifteen" />
      </article>
    </Container>
  );
}
