import type { Metadata } from "next";
import Container from "@/components/Container";
import { auth, signOut } from "@/auth";
import { listMessages } from "@/lib/db";
import { toggleHandled } from "./actions";

export const metadata: Metadata = {
  title: "Admin — Messages",
  robots: { index: false },
};

export default async function AdminMessagesPage() {
  const session = await auth();
  const messages = await listMessages();
  const unhandledCount = messages.filter((m) => !m.handled).length;

  return (
    <Container className="py-14 sm:py-20">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            Admin
          </p>
          <h1 className="mt-2 font-display text-3xl text-cream-100">Messages</h1>
          <p className="mt-2 font-body text-sm text-cream-300">
            Signed in as {session?.user?.email} &middot; {unhandledCount} unhandled
          </p>
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/admin/login" });
          }}
        >
          <button
            type="submit"
            className="text-sm font-semibold text-gold-400 hover:text-gold-300"
          >
            Sign out
          </button>
        </form>
      </div>

      {messages.length === 0 ? (
        <p className="mt-10 font-body italic text-cream-300">
          No messages yet — submissions from the contact form will appear here.
        </p>
      ) : (
        <ul className="mt-10 flex flex-col gap-4">
          {messages.map((m) => (
            <li
              key={m.id}
              className={`rounded-xl border p-5 sm:p-6 ${
                m.handled
                  ? "border-night-600/40 bg-night-800/20"
                  : "border-gold-400/40 bg-night-800/50"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg text-cream-100">{m.name}</p>
                  <p className="font-body text-sm text-cream-300">
                    <a href={`mailto:${m.email}`} className="hover:text-gold-300">
                      {m.email}
                    </a>
                  </p>
                  {m.about && (
                    <p className="mt-1 font-body text-xs uppercase tracking-wide text-gold-400">
                      Re: {m.about}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <time className="font-body text-xs text-cream-300/60">
                    {new Date(m.created_at).toLocaleString()}
                  </time>
                  <form action={toggleHandled}>
                    <input type="hidden" name="id" value={m.id} />
                    <input type="hidden" name="handled" value={(!m.handled).toString()} />
                    <button
                      type="submit"
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        m.handled
                          ? "border border-night-600/60 text-cream-300 hover:text-cream-100"
                          : "bg-gold-400 text-night-950 hover:bg-gold-300"
                      }`}
                    >
                      {m.handled ? "Mark unhandled" : "Mark handled"}
                    </button>
                  </form>
                </div>
              </div>
              <p className="mt-4 whitespace-pre-wrap font-body text-cream-200">{m.message}</p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
