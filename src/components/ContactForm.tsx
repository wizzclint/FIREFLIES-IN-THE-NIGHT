"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full rounded-lg border border-night-600/60 bg-night-800/60 px-4 py-2.5 font-body text-cream-100 placeholder:text-cream-300/40 focus-visible:border-gold-400";

export default function ContactForm({ about }: { about?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field; bots often do.
    if (data.get("company")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          about: data.get("about"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-lg border border-gold-400/30 bg-night-800/40 p-5 font-body text-cream-200">
        Thank you — your note has been sent.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {about && (
        <>
          <input type="hidden" name="about" value={about} />
          <p className="font-body text-sm text-gold-400">
            Regarding: <span className="text-cream-200">{about}</span>
          </p>
        </>
      )}

      {/* Honeypot field — hidden from real visitors via CSS, left open for bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block font-body text-sm text-cream-300">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block font-body text-sm text-cream-300">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-body text-sm text-cream-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${inputClasses} resize-y`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="font-body text-sm text-red-300">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-400 px-6 py-2.5 text-sm font-semibold text-night-950 transition-colors hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
