import type { Metadata } from "next";
import Container from "@/components/Container";
import BackLink from "@/components/BackLink";
import ComingSoonNotice from "@/components/ComingSoonNotice";
import RespondToPiece from "@/components/RespondToPiece";

export const metadata: Metadata = {
  title: "Movement Was My Oxygen",
  description: "The opening essay — where this collection starts.",
};

export default function MovementWasMyOxygenPage() {
  return (
    <Container className="py-14 sm:py-20">
      <BackLink href="/in-search-of-beauty" label="In Search of Beauty" />

      <article className="mt-6 max-w-2xl">
        <h1 className="font-display text-3xl text-cream-100 sm:text-4xl">
          Movement Was My Oxygen
        </h1>
        <p className="mt-3 font-body text-lg italic text-cream-300">
          The opening essay — where this collection starts.
        </p>

        <ComingSoonNotice kind="essay" />
        <RespondToPiece title="Movement Was My Oxygen" />
      </article>
    </Container>
  );
}
