import type { Metadata } from "next";
import MemoirChapterView from "@/components/memoir/MemoirChapterView";
import chapter12 from "@/content/memoir/chapter-12";
import { cormorant, ebGaramond } from "@/lib/memoirFonts";

// TEMPORARY design review route — not linked from navigation, not in the
// sitemap. Delete once the cinematic redesign is approved and merged into
// the real (encrypted) chapter route.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Design preview — Chapter Twelve",
};

export default function PreviewChapterTwelve() {
  return (
    <div className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <MemoirChapterView
        blocks={chapter12.blocks}
        prev={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-11", title: "The Stores Close" }}
        next={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-appendix-b", title: "Hina's Hand" }}
        soundtrack={chapter12.soundtrack}
      />
    </div>
  );
}
