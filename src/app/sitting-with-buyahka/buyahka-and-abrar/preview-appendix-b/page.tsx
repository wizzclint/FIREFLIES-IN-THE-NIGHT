import type { Metadata } from "next";
import MemoirChapterView from "@/components/memoir/MemoirChapterView";
import appendixB from "@/content/memoir/appendix-b";
import { cormorant, ebGaramond } from "@/lib/memoirFonts";

// TEMPORARY design review route — not linked from navigation, not in the
// sitemap. Delete once the cinematic redesign is approved and merged into
// the real (encrypted) chapter route.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Design preview — Appendix B",
};

export default function PreviewAppendixB() {
  return (
    <div className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <MemoirChapterView
        blocks={appendixB.blocks}
        prev={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-chapter-12", title: "Return" }}
        next={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-appendix-c", title: "Family Precious" }}
      />
    </div>
  );
}
