import CtaLink from "./CtaLink";

// The general per-work response action specified in the implementation
// handoff: every individual work page carries a "Respond to This Piece"
// action that auto-fills the piece title on the contact form, distinct from
// the site-wide Contact page and the memoir's own "Tell Ahmad" CTA.
export default function RespondToPiece({ title }: { title: string }) {
  return (
    <div className="mt-6">
      <CtaLink href={`/contact?about=${encodeURIComponent(title)}`} variant="outline">
        Respond to this piece
      </CtaLink>
    </div>
  );
}
