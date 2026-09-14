import type { Metadata } from "next";
import Container from "@/components/Container";
import BackLink from "@/components/BackLink";
import ComingSoonNotice from "@/components/ComingSoonNotice";
import RespondToPiece from "@/components/RespondToPiece";

export const metadata: Metadata = {
  title: "Critical Thinking Did Not Weaken My Faith",
  description: "On questioning belief without losing it.",
};

export default function CriticalThinkingPage() {
  return (
    <Container className="py-14 sm:py-20">
      <BackLink href="/sitting-with-buyahka" label="Sitting with Buyahka" />

      <article className="mt-6 max-w-2xl">
        <h1 className="font-display text-3xl text-cream-100 sm:text-4xl">
          Critical Thinking Did Not Weaken My Faith
        </h1>
        <p className="mt-3 font-body text-lg italic text-cream-300">
          On questioning belief without losing it.
        </p>

        <ComingSoonNotice kind="essay" />
        <RespondToPiece title="Critical Thinking Did Not Weaken My Faith" />
      </article>
    </Container>
  );
}
