import { sql } from "@vercel/postgres";

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  message: string;
  about: string | null;
  handled: boolean;
  created_at: string;
};

let tableReady: Promise<unknown> | null = null;

// Created on first use rather than via a separate migration step — fine at
// this scale (a single small table for contact-form messages).
function ensureMessagesTable() {
  if (!tableReady) {
    tableReady = sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        about TEXT,
        handled BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;
  }
  return tableReady;
}

export async function saveMessage(data: {
  name: string;
  email: string;
  message: string;
  about?: string | null;
}) {
  await ensureMessagesTable();
  await sql`
    INSERT INTO messages (name, email, message, about)
    VALUES (${data.name}, ${data.email}, ${data.message}, ${data.about ?? null})
  `;
}

export async function listMessages(): Promise<ContactMessage[]> {
  await ensureMessagesTable();
  const { rows } = await sql<ContactMessage>`
    SELECT id, name, email, message, about, handled, created_at
    FROM messages
    ORDER BY created_at DESC
  `;
  return rows;
}

export async function setMessageHandled(id: number, handled: boolean) {
  await ensureMessagesTable();
  await sql`UPDATE messages SET handled = ${handled} WHERE id = ${id}`;
}
