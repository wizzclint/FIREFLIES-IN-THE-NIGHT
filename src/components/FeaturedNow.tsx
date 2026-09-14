import CtaLink from "./CtaLink";

// The homepage's single entry-point spotlight, per the site's IA spec:
// "one current film, essay, conversation, poem, or work worth entering
// first." Distinct from the per-section cards below it — this is the one
// pick, not a listing.
export default function FeaturedNow({
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="border-b border-night-700/60 pb-10 sm:pb-14">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
        Featured Now
      </p>
      <h2 className="mt-3 font-display text-3xl text-cream-100 sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl font-body text-lg text-cream-300">{description}</p>
      <div className="mt-6">
        <CtaLink href={ctaHref}>{ctaLabel}</CtaLink>
      </div>
    </div>
  );
}
