import type { Metadata } from "next";
import Container from "@/components/Container";
import { signIn } from "@/auth";

export const metadata: Metadata = {
  title: "Admin Sign In",
  robots: { index: false },
};

export default function AdminLoginPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
        Admin
      </p>
      <h1 className="mt-3 font-display text-3xl text-cream-100">Sign in</h1>
      <p className="mt-3 max-w-sm font-body text-cream-300">
        Access is limited to approved Google accounts.
      </p>

      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/admin" });
        }}
        className="mt-8"
      >
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-2.5 text-sm font-semibold text-night-950 transition-colors hover:bg-gold-300"
        >
          Sign in with Google
        </button>
      </form>
    </Container>
  );
}
