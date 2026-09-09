import CtaLink from "./CtaLink";

export default function PieceCallout({
  label,
  title,
  description,
  ctaLabel,
  ctaHref,
  flagship = false,
}: {
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  flagship?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-5 sm:p-6 ${
        flagship
          ? "border border-gold-400/40 bg-linear-to-br from-night-700/80 to-night-800"
          : "border border-night-600/50 bg-night-900/40"
      }`}
    >
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
        {label}
      </p>
      <h3 className="mt-2 font-display text-xl sm:text-2xl text-cream-100">{title}</h3>
      <p className="mt-2 font-body text-cream-300">{description}</p>
      <div className="mt-4">
        <CtaLink href={ctaHref}>{ctaLabel}</CtaLink>
      </div>
    </div>
  );
}
