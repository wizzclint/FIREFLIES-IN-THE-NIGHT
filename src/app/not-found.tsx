import type { Metadata } from "next";
import Container from "@/components/Container";
import CtaLink from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl text-cream-100 sm:text-4xl">
        This page went out like a firefly.
      </h1>
      <p className="mt-4 max-w-md font-body text-lg text-cream-300">
        The page you're looking for isn't here — it may have moved, or the
        link may be out of date.
      </p>
      <div className="mt-8">
        <CtaLink href="/">Back to the homepage</CtaLink>
      </div>
    </Container>
  );
}
