import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a note about anything on Fireflies in the Night.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ about?: string }>;
}) {
  const { about } = await searchParams;

  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-xl">
        <h1 className="font-display text-3xl text-cream-100 sm:text-4xl">Get in touch</h1>
        <p className="mt-4 font-body text-lg italic text-cream-300">
          Thoughts on a piece, a correction, or just to say hello — this goes straight to Ahmad.
        </p>
        <div className="mt-10">
          <ContactForm about={about} />
        </div>
      </div>
    </Container>
  );
}
