# Saraswati Sisu Vidya Mandir — Static Informational Website

A fast, lightweight, fully static informational website built with **Astro**, **TypeScript** and **Tailwind CSS**. This site is for general school information only — there is no database, backend, authentication, admin dashboard, forms or payment functionality.

## Features

- **15 static pages** covering the full school website (Home, About, Principal's Message, Vision & Mission, Academics, Classes & Learning, Facilities, Sports & Activities, Faculty & Staff, Gallery, Events & Celebrations, News & Notices, Achievements, Contact Us, School Information & Policies)
- **Indian school design** — navy blue, green and white palette with warm gold accents
- **Mobile-first & responsive** — sticky header with desktop dropdowns and a working mobile hamburger menu
- **Image gallery** — responsive grid with category filters and an accessible lightbox (works with JavaScript enabled; images remain visible without JS)
- **Performance-focused** — static HTML at build time, minimal vanilla JavaScript, lazy-loaded images, WebP via Astro's image pipeline, system-font friendly styling
- **SEO-ready** — per-page titles/descriptions, Open Graph tags, canonical URLs, JSON-LD (School + Breadcrumbs), `sitemap.xml`, `robots.txt`, favicon
- **Accessibility** — skip link, keyboard-friendly navigation, visible focus states, sufficient color contrast, alt text on images
- **Safe placeholders** — all unverified school facts (address, phone, email, affiliation, principal name, awards) live in `src/data/school.ts` as bracketed placeholders and are clearly labelled on the site

## Project Structure

```text
src/
  assets/images/        # Source images (processed by Astro)
  components/           # Reusable UI components
  data/                 # Local static data (school, notices, events, gallery, faculty, classes, etc.)
  layouts/              # Base layout
  pages/                # Astro pages (routes)
  styles/               # Global CSS (Tailwind)
public/
  favicon.svg
  robots.txt
  images/og-default.jpg
scripts/
  generate-og.mjs       # Utility to regenerate the OG image
```

## Quick Start

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Type-check
npm run check

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Updating School Information

Edit **`src/data/school.ts`** to update the school name, placeholders, contact details, office hours and other editable values. Most pages pull their data from this file and the other files in `src/data/`.

Notes on content:
- **Notices**, **Events**, **Gallery**, **Faculty**, **Classes**, **Facilities** and **Achievements** use local TypeScript files under `src/data/`. Replace sample content with verified information as it becomes available.
- **Gallery images** are illustrative stock photographs by default. Add the school's own images to `src/assets/images/` and update `src/data/gallery.ts`.
- **Placeholders** appear as `[Add ...]` text and are styled distinctly throughout the site so they are easy to spot.
- **Sample/illustrative labels** appear wherever content could be mistaken for an official claim.

## Deployment

This is a pure static site. Build the output (`dist/`) and deploy to any static host:

- **Cloudflare Pages** — connect the repo, build command `npm run build`, output directory `dist`
- **Netlify** — build command `npm run build`, publish directory `dist`
- **GitHub Pages** — build and publish `dist/` (set `site` in `astro.config.mjs` to your GitHub Pages URL)

Before deploying, update `site` in `astro.config.mjs` (or set `SITE_URL` env var) so the sitemap and canonical URLs are correct. Update `public/robots.txt` with the final sitemap URL if needed.

## Notes

- No database, server, API or authentication is used. All pages are pre-rendered as static HTML.
- JavaScript is kept to an absolute minimum (mobile menu, gallery lightbox + filters, back-to-top button).
- Images are optimised by Astro; original source images live in `src/assets/images/`.
- Do not publish unverified official claims (affiliation, results, awards, student data) until confirmed by the school.
