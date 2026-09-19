import type { Metadata } from "next";
import MemoirChapterView from "@/components/memoir/MemoirChapterView";
import chapter09 from "@/content/memoir/chapter-09";
import { cormorant, ebGaramond } from "@/lib/memoirFonts";

// TEMPORARY design review route — not linked from navigation, not in the
// sitemap. Delete once the cinematic redesign is approved and merged into
// the real (encrypted) chapter route.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Design preview — Chapter Nine",
};

export default function PreviewChapterNine() {
  return (
    <div className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <MemoirChapterView
        blocks={chapter09.blocks}
        prev={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-8", title: "The Last Year" }}
        next={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-10", title: "The Bridge" }}
        soundtrack={chapter09.soundtrack}
      />
    </div>
  );
}
