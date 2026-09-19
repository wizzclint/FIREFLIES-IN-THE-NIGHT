import type { Metadata } from "next";
import MemoirChapterView from "@/components/memoir/MemoirChapterView";
import appendixC from "@/content/memoir/appendix-c";
import { cormorant, ebGaramond } from "@/lib/memoirFonts";

// TEMPORARY design review route — not linked from navigation, not in the
// sitemap. Delete once the cinematic redesign is approved and merged into
// the real (encrypted) chapter route.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Design preview — Appendix C",
};

export default function PreviewAppendixC() {
  return (
    <div className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <MemoirChapterView
        blocks={appendixC.blocks}
        prev={{ href: "/sitting-with-buyahka/buyahka-and-abrar/preview-appendix-b", title: "Hina's Hand" }}
        next={null}
      />
    </div>
  );
}
