import type { Metadata } from "next";
import Container from "@/components/Container";
import BackLink from "@/components/BackLink";
import ComingSoonNotice from "@/components/ComingSoonNotice";
import RespondToPiece from "@/components/RespondToPiece";

export const metadata: Metadata = {
  title: "I Remember — Dar ul Islah",
  description:
    "A personal account of the community that shaped a marriage, a family, and a history.",
};

export default function IRememberDarUlIslahPage() {
  return (
    <Container className="py-14 sm:py-20">
      <BackLink href="/community" label="Community" />

      <article className="mt-6 max-w-2xl">
        <h1 className="font-display text-3xl text-cream-100 sm:text-4xl">
          I Remember — Dar ul Islah
        </h1>
        <p className="mt-3 font-body text-lg italic text-cream-300">
          A personal account of the community that shaped a marriage, a family, and a history.
        </p>

        <ComingSoonNotice kind="piece" />
        <RespondToPiece title="I Remember — Dar ul Islah" />
      </article>
    </Container>
  );
}
