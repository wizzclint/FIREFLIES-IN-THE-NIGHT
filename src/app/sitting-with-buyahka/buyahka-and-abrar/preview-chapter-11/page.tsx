import type { Metadata } from "next";
import MemoirChapterView from "@/components/memoir/MemoirChapterView";
import chapter11 from "@/content/memoir/chapter-11";
import { cormorant, ebGaramond } from "@/lib/memoirFonts";

// TEMPORARY design review route — not linked from navigation, not in the
// sitemap. Delete once the cinematic redesign is approved and merged into
// the real (encrypted) chapter route.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Design preview — Chapter Eleven",
};

export default function PreviewChapterEleven() {
  return (
    <div className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <MemoirChapterView
        blocks={chapter11.blocks}
        prev={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-10", title: "The Bridge" }}
        next={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-12", title: "Return" }}
        soundtrack={chapter11.soundtrack}
      />
    </div>
  );
}
