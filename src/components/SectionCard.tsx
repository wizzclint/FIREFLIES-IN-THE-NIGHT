import Link from "next/link";
import { ReactNode } from "react";

export default function SectionCard({
  title,
  href,
  intro,
  children,
  size = "lg",
}: {
  title: string;
  href: string;
  intro: string;
  children?: ReactNode;
  size?: "lg" | "sm";
}) {
  return (
    <article
      className={`flex flex-col rounded-2xl border border-night-600/60 bg-night-800/60 ${
        size === "lg" ? "p-6 sm:p-8 gap-5" : "p-6 gap-4"
      }`}
    >
      <h2 className={size === "lg" ? "font-display text-2xl sm:text-3xl" : "font-display text-xl"}>
        <Link
          href={href}
          className="text-cream-100 decoration-gold-400/50 underline-offset-4 hover:text-gold-300 hover:underline"
        >
          {title}
        </Link>
      </h2>
      <p className={`font-body text-cream-300 ${size === "lg" ? "text-base sm:text-lg" : "text-sm sm:text-base"}`}>
        {intro}
      </p>
      {children}
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-gold-400 hover:text-gold-300"
      >
        Visit {title}
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
