# Controluce — Italian restaurant landing page

A single-page, frontend-only landing page for **Controluce** ("backlit" /
against-the-light), a fictional Italian restaurant. Built with Next.js
(App Router) and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

`npm run build` produces a production build; `npm run start` serves it.

## What's here

```
app/
  layout.tsx     — fonts (Fraunces + Inter via next/font/google) and metadata
  globals.css    — Tailwind v4 theme: colors, type, the tricolore hairline
  page.tsx       — assembles the sections below
components/
  Nav.tsx        — transparent-over-hero nav that solidifies on scroll
  Hero.tsx       — full-bleed hero, asymmetric layout
  Story.tsx      — "La Storia" — narrative + portrait image
  Menu.tsx       — "Il Menu" — printed-menu-style dish list (edit the
                   `courses` array to change dishes/prices)
  Gallery.tsx    — "L'Interno" — asymmetric photo grid
  Testimonial.tsx— single pull-quote
  Reserve.tsx    — "Prenota" — reservation form (see note below)
  Location.tsx   — "Dove Siamo" — address + hours
  Footer.tsx
public/images/   — placeholder images (see IMAGE-GUIDE.md to replace them)
```

## Design notes

- **Colors**: the Italian flag shows up once, deliberately, as a thin
  three-bar hairline (`.tricolore-rule` in `globals.css`) near the
  testimonial and in the footer — not as a background or a loud accent.
  Everything else pulls from the flag indirectly: bottle green, oxblood
  wine, brass/gold, marble ivory.
- **Type**: Fraunces (italic, for headlines) + Inter (body). Section
  labels use `font-variant-caps: small-caps` instead of tracked-out
  ALL CAPS.
- **Fonts need internet access at build time** (next/font/google fetches
  them from Google Fonts on first build/dev-server start, then caches
  locally). This is normal for any Next.js project — if you're ever
  building somewhere fully offline, swap `next/font/google` for
  `next/font/local` in `app/layout.tsx`.

## The reservation form

`components/Reserve.tsx` is a real-looking reservation form, but this is
a **frontend-only** project — submitting it just shows a confirmation
message locally; nothing is sent anywhere. To make it functional you'd
wire the `onSubmit` handler to an API route, a form service (Formspree,
Resend, etc.), or a booking provider (OpenTable, Tock).

## Images

The site ships with generated placeholder images (dark gradient panels
labeled "Controluce") at the exact filenames and aspect ratios the
layout expects, so it looks intentional and the layout won't shift once
you drop real photos in. See **IMAGE-GUIDE.md** for exactly what to
search for and where, and the filenames to save each photo as.
