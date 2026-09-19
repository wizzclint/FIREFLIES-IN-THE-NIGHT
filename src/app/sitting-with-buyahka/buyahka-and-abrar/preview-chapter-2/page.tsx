import type { Metadata } from "next";
import MemoirChapterView from "@/components/memoir/MemoirChapterView";
import chapter02 from "@/content/memoir/chapter-02";
import { cormorant, ebGaramond } from "@/lib/memoirFonts";

// TEMPORARY design review route — not linked from navigation, not in the
// sitemap. Delete once the cinematic redesign is approved and merged into
// the real (encrypted) chapter route.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Design preview — Chapter Two",
};

export default function PreviewChapterTwo() {
  return (
    <div className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <MemoirChapterView
        blocks={chapter02.blocks}
        prev={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-1", title: "Sargodha, 1971" }}
        next={null}
        soundtrack={chapter02.soundtrack}
      />
    </div>
  );
}
