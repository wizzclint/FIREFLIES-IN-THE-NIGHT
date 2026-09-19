import type { Metadata } from "next";
import MemoirChapterView from "@/components/memoir/MemoirChapterView";
import chapter08 from "@/content/memoir/chapter-08";
import { cormorant, ebGaramond } from "@/lib/memoirFonts";

// TEMPORARY design review route — not linked from navigation, not in the
// sitemap. Delete once the cinematic redesign is approved and merged into
// the real (encrypted) chapter route.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Design preview — Chapter Eight",
};

export default function PreviewChapterEight() {
  return (
    <div className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <MemoirChapterView
        blocks={chapter08.blocks}
        prev={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-7", title: "The Loop" }}
        next={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-9", title: "The Moon Gone" }}
        soundtrack={chapter08.soundtrack}
      />
    </div>
  );
}
