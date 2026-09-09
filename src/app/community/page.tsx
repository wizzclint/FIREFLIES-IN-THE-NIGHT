import type { Metadata } from "next";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import PieceCallout from "@/components/PieceCallout";

export const metadata: Metadata = {
  title: "Community",
  description:
    "What community gave, what it built, what it failed at, and what's worth passing forward.",
};

export default function CommunityPage() {
  return (
    <Container className="py-14 sm:py-20">
      <PageIntro
        title="Community"
        intro="What community gave, what it built, what it failed at, and what's worth passing forward."
      />

      <div className="mt-10 max-w-2xl sm:mt-14">
        <PieceCallout
          flagship
          label="Featured piece"
          title="I Remember — Dar ul Islah"
          description="A personal account of the community that shaped a marriage, a family, and a history."
          ctaLabel="Read the piece"
          ctaHref="/community/i-remember-dar-ul-islah"
        />
      </div>
    </Container>
  );
}
