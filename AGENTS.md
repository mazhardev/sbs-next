# SBS Next.js Agent Guide

Read this file first. It is the compact source of truth for repository work; inspect code only in the relevant paths below.

## Project in one minute

- Marketing site for **Smart Brain Solutions** using Next.js 16 App Router, React 19, and plain JavaScript/CSS.
- Fully static: `next.config.mjs` sets `output: "export"`, unoptimized images, and trailing slashes. Build output is `out/`; there is no server, API, database, auth, test suite, or environment configuration.
- GitHub Pages deploys pushes to `main`. Two near-duplicate workflows currently exist in `.github/workflows/`.
- Production identity/contact/content is centralized; avoid copying it into components.

## Fast change map

| Need | Edit |
|---|---|
| Company details, navigation, services, metrics, leaders, insights, industries | `app/data.js` |
| Titles, descriptions, canonical/OG tags, JSON-LD helpers | `app/seo.js` |
| Site-wide shell/default metadata | `app/layout.js` |
| Shared cards, grids, heroes, CTA | `app/components/Sections.js` |
| Header/mobile navigation | `app/components/SiteHeader.js` (client component) |
| Contact form behavior | `app/components/ContactPanel.js` (opens a prefilled `mailto:`; no submission backend) |
| Page-specific copy/layout | `app/<route>/page.js` |
| Service detail pages/FAQs | `app/services/[slug]/page.js` |
| All visual styling/responsiveness | `app/globals.css` |
| Sitemap, robots, PWA manifest | `app/sitemap.js`, `app/robots.js`, `app/manifest.js` |
| Long-term SEO plan (not runtime code) | `docs/seo-strategy.md` |
| Logo/icons/domain assets | `public/` |

## Architecture and data flow

`app/layout.js` wraps every route with `SiteHeader`, `<main>`, and `SiteFooter`. Most route files are server components composed from `Sections.js`. Only components using browser state/events carry `"use client"`.

The `services` array in `app/data.js` drives service cards, footer links, contact options, sitemap URLs, schema, and `generateStaticParams()`. Each service detail page finds a service by slug, then combines it with local `serviceFaqs` and `serviceFit` maps. When adding or renaming a service, update all three structures; the sitemap and static route generation then update automatically.

SEO flow: static pages call `buildMetadata(key)`; service pages call `serviceMetadata(service)`. `JsonLd` safely serializes schema helpers from `app/seo.js`. The homepage uses root metadata from `app/layout.js`.

Styling is one global file. Reuse CSS variables in `:root`, existing class families, and breakpoints at 1020px/680px. Fonts are imported from Google Fonts in CSS. Preserve reduced-motion behavior.

## Commands and verification

```powershell
npm.cmd install       # or npm.cmd ci for a clean install
npm.cmd run dev
npm.cmd run build     # required verification; creates out/
```

On shells where `npm` works normally, omit `.cmd`. The declared `npm run lint` script uses the removed `next lint` command and is not a valid verifier with Next 16. A successful build currently emits 19 static pages, including seven `/services/<slug>/` pages.

After changes, run the build and inspect affected static HTML/assets in `out/` or the page in dev mode. For content changes, also check internal links, metadata/canonical URLs, JSON-LD, mobile layout, and contact values as relevant.

## Guardrails

- Do not edit or commit generated/dependency directories: `.next/`, `out/`, `node_modules/`.
- Preserve static-export compatibility: no request-time server features, server actions, API routes, or runtime-only dynamic routes unless hosting architecture is intentionally changed.
- Keep internal URLs trailing-slash compatible and use `next/link` for navigation.
- Keep the production base URL in `app/data.js` (`site.url`) aligned with `CNAME` and `public/CNAME`.
- In Next 16 dynamic pages, `params` is awaited; retain that pattern.
- Prefer extending centralized arrays/shared components over duplicating markup or business facts.
- Do not read the large SEO strategy for ordinary UI edits; consult it only for SEO/content-roadmap work.
