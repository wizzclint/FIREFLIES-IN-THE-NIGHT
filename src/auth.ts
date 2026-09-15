import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Only these Google accounts may reach /admin — comma-separated in the
// ADMIN_EMAILS env var. Anyone else who signs in is rejected at the
// sign-in callback, before a session is ever created.
const allowedEmails = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      return allowedEmails.includes(user.email.toLowerCase());
    },
  },
});
