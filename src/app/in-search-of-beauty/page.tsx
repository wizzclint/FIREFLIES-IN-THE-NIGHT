import type { Metadata } from "next";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import PieceCallout from "@/components/PieceCallout";

export const metadata: Metadata = {
  title: "In Search of Beauty",
  description:
    "Essays about sacrifice, attention, and what holds a family or a 'we' together — written from inside one imperfect life, not above it.",
};

export default function InSearchOfBeautyPage() {
  return (
    <Container className="py-14 sm:py-20">
      <PageIntro
        title="In Search of Beauty"
        intro="Essays about sacrifice, attention, and what holds a family or a 'we' together — written from inside one imperfect life, not above it."
      />

      <div className="mt-10 max-w-2xl sm:mt-14">
        <PieceCallout
          flagship
          label="Featured essay"
          title="Movement Was My Oxygen"
          description="The opening essay — where this collection starts."
          ctaLabel="Read the essay"
          ctaHref="/in-search-of-beauty/movement-was-my-oxygen"
        />
      </div>
    </Container>
  );
}
