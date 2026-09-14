import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Fireflies in the Night handles the information you share.",
};

export default function PrivacyPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl text-cream-100 sm:text-4xl">Privacy</h1>

        <div className="mt-8 flex flex-col gap-6 font-body text-lg leading-relaxed text-cream-200">
          <p>
            Fireflies in the Night does not require an account and does not sell or share your
            information with advertisers.
          </p>
          <p>
            <strong className="text-cream-100">The contact form.</strong> When you send a message,
            your name, email address, and message are delivered by email to Ahmad so he can reply.
            They are not added to a mailing list and are not used for anything beyond that reply.
          </p>
          <p>
            <strong className="text-cream-100">Analytics.</strong> This site uses privacy-respecting
            visitor analytics (page views and general location/device information) to understand
            which writing people find, without tracking you individually across other sites.
          </p>
          <p>
            Questions about this page, or a request to have a message you sent removed, can go
            through the <a href="/contact" className="text-gold-400 underline decoration-gold-400/50 underline-offset-4 hover:text-gold-300">contact form</a>.
          </p>
        </div>

        <p className="mt-14 border-t border-night-600/50 pt-6 font-body text-sm text-cream-300/70">
          This page is a plain-language summary, not a legal document.
        </p>
      </div>
    </Container>
  );
}
