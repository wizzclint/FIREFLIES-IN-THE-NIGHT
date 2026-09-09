# Fireflies in the Night

The landing page for *Fireflies in the Night* — Ahmad's essay/memoir/community
site. Built with Next.js (App Router), TypeScript, and Tailwind CSS, ready to
deploy on Vercel.

## Structure

- `/` — homepage with hero image and one featured card per section
- `/in-search-of-beauty` — essays; featured: *Movement Was My Oxygen*
- `/sitting-with-buyahka` — faith essays; flagship: *Buyahka & Abrar*
- `/sitting-with-buyahka/buyahka-and-abrar` — the full memoir reading page
  (nested route, deliberately not in the main nav)
- `/community` — featured: *I Remember — Dar ul Islah*
- `/recommended` — featured: *Three Books I Read Before Fifteen*
- `/about`

Each featured piece has its own route under its section, built as a shell
ready to receive real content (see the "Chapters" placeholder structure in
`buyahka-and-abrar/page.tsx` for the memoir specifically).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content to update before launch

- Replace the placeholder chapter text in
  `src/app/sitting-with-buyahka/buyahka-and-abrar/page.tsx` with the real
  memoir, chapter by chapter (the `chapters` array at the top of the file).
- The remaining featured pieces (`movement-was-my-oxygen`,
  `critical-thinking-did-not-weaken-my-faith`, `i-remember-dar-ul-islah`,
  `three-books-i-read-before-fifteen`) each show a "still being written down"
  placeholder — swap in the real essay/list body when ready.
- The "Tell Ahmad what you think" link on the memoir page points to a
  placeholder address (`hello@firefliesinthenight.com`) — update it to a real
  inbox or contact form.

## Deploying on Vercel

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the GitHub repo. No configuration
   needed — Vercel auto-detects Next.js.
