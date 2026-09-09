import Link from "next/link";

export default function CtaLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? "bg-gold-400 text-night-950 hover:bg-gold-300"
      : "border border-gold-400/60 text-gold-300 hover:border-gold-300 hover:text-gold-200";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        &rarr;
      </span>
    </Link>
  );
}
