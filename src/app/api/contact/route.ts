import { NextResponse } from "next/server";
import { Resend } from "resend";

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.error("Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { error: "The contact form isn't set up yet. Please try again later." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const subject = about ? `Fireflies in the Night — ${about}` : "Fireflies in the Night — new message";

  try {
    const { error } = await resend.emails.send({
      from: "Fireflies in the Night <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject,
      text: `From: ${name} <${email}>${about ? `\nRegarding: ${about}` : ""}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 500 });
  }
}
