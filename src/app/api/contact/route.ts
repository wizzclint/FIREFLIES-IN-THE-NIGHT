import { NextResponse } from "next/server";
import { Resend } from "resend";
import { saveMessage } from "@/lib/db";

export async function POST(request: Request) {
  const { name, email, message, about } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const aboutValue = typeof about === "string" && about.trim() ? about.trim() : null;

  // Always try to persist the message first, so it shows up in /admin even
  // if email delivery isn't configured or fails. This should never block
  // the response on its own.
  let saved = false;
  try {
    await saveMessage({ name, email, message, about: aboutValue });
    saved = true;
  } catch (err) {
    console.error("Contact form: failed to save message to database:", err);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    if (saved) return NextResponse.json({ ok: true });
    console.error("Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL, and saving failed");
    return NextResponse.json(
      { error: "The contact form isn't set up yet. Please try again later." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const subject = aboutValue
    ? `Fireflies in the Night — ${aboutValue}`
    : "Fireflies in the Night — new message";

  try {
    const { error } = await resend.emails.send({
      from: "Fireflies in the Night <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject,
      text: `From: ${name} <${email}>${aboutValue ? `\nRegarding: ${aboutValue}` : ""}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      if (saved) return NextResponse.json({ ok: true });
      return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    if (saved) return NextResponse.json({ ok: true });
    return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 500 });
  }
}
