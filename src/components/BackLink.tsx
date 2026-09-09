import Link from "next/link";

export default function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:text-gold-300"
    >
      <span aria-hidden="true">&larr;</span>
      {label}
    </Link>
  );
}
