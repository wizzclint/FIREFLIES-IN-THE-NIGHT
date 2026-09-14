import CtaLink from "./CtaLink";
import ShareButton from "./ShareButton";

// The general per-work response action specified in the implementation
// handoff: every individual work page carries a "Respond to This Piece"
// action that auto-fills the piece title on the contact form, distinct from
// the site-wide Contact page and the memoir's own "Tell Ahmad" CTA. Paired
// with the share control the brief also requires on every work page.
export default function RespondToPiece({ title }: { title: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
      <CtaLink href={`/contact?about=${encodeURIComponent(title)}`} variant="outline">
        Respond to this piece
      </CtaLink>
      <ShareButton title={`${title} — Fireflies in the Night`} />
    </div>
  );
}
