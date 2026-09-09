import type { Metadata } from "next";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import PieceCallout from "@/components/PieceCallout";

export const metadata: Metadata = {
  title: "Recommended",
  description:
    "Books, talks, and people worth spending time with — chosen for why they mattered to Ahmad, not as a best-of list.",
};

export default function RecommendedPage() {
  return (
    <Container className="py-14 sm:py-20">
      <PageIntro
        title="Recommended"
        intro="Books, talks, and people worth spending time with — chosen for why they mattered to Ahmad, not as a best-of list."
      />

      <div className="mt-10 max-w-2xl sm:mt-14">
        <PieceCallout
          flagship
          label="Featured list"
          title="Three Books I Read Before Fifteen"
          description="The books that set his thinking in motion, before he had language for it."
          ctaLabel="Read the list"
          ctaHref="/recommended/three-books-i-read-before-fifteen"
        />
      </div>
    </Container>
  );
}
