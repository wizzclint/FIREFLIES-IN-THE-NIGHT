import type { Metadata } from "next";
import MemoirChapterView from "@/components/memoir/MemoirChapterView";
import chapter10 from "@/content/memoir/chapter-10";
import { cormorant, ebGaramond } from "@/lib/memoirFonts";

// TEMPORARY design review route — not linked from navigation, not in the
// sitemap. Delete once the cinematic redesign is approved and merged into
// the real (encrypted) chapter route.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Design preview — Chapter Ten",
};

export default function PreviewChapterTen() {
  return (
    <div className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <MemoirChapterView
        blocks={chapter10.blocks}
        prev={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-9", title: "The Moon Gone" }}
        next={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-11", title: "The Stores Close" }}
        soundtrack={chapter10.soundtrack}
      />
    </div>
  );
}
