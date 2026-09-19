import type { Metadata } from "next";
import MemoirChapterView from "@/components/memoir/MemoirChapterView";
import chapter05 from "@/content/memoir/chapter-05";
import { cormorant, ebGaramond } from "@/lib/memoirFonts";

// TEMPORARY design review route — not linked from navigation, not in the
// sitemap. Delete once the cinematic redesign is approved and merged into
// the real (encrypted) chapter route.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Design preview — Chapter Five",
};

export default function PreviewChapterFive() {
  return (
    <div className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <MemoirChapterView
        blocks={chapter05.blocks}
        prev={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-4", title: "November 10, 1989" }}
        next={null}
        soundtrack={chapter05.soundtrack}
      />
    </div>
  );
}
