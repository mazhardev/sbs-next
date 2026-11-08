# SBS Next.js Agent Guide

Read this file first. It is the compact source of truth for repository work; inspect code only in the relevant paths below.

## Project in one minute

- Marketing and lead-generation site for **Smart Brain Solutions** using Next.js 16 App Router, React 19, and plain JavaScript/CSS.
- Fully static: `next.config.mjs` sets `output: "export"`, unoptimized images, and trailing slashes. Build output is `out/`; there is no server, API, database, auth, or test suite. The only environment value is `NEXT_PUBLIC_BASE_PATH`, set by the deploy workflow.
- Pushes to `main` deploy to GitHub Pages at https://mazhardev.github.io/sbs-next/ through `.github/workflows/deploy.yml`. The Pages environment only accepts `main`. The domain in `site.url` answered from a separate LiteSpeed host in November 2026, so canonical URLs still name that domain while the Pages copy lives on github.io.
- Production identity/contact/content is centralized; avoid copying it into components.

## Fast change map

| Need | Edit |
|---|---|
| Company details, navigation, CTAs, services, metrics, leaders, insights, industries | `app/data.js` |
| Google and Meta tracking IDs, consent requirement | `tracking` in `app/data.js` |
| Tag loading, events, campaign attribution | `app/tracking.js`, `app/components/Analytics.js` |
| Titles, descriptions, canonical/OG tags, JSON-LD helpers | `app/seo.js` |
| Site-wide shell/default metadata/fonts | `app/layout.js` |
| Shared cards, grids, heroes, CTA | `app/components/Sections.js` |
| Service and UI icons | `app/components/Icons.js` |
| Header/mobile navigation | `app/components/SiteHeader.js` (client component) |
| Sticky phone CTA bar, floating WhatsApp button | `app/components/MobileCtaBar.js` (client component) |
| Lead form behavior | `app/components/ContactPanel.js` (prepares a WhatsApp or `mailto:` message; no submission backend) |
| Page-specific copy/layout | `app/<route>/page.js` |
| Service landing pages/FAQs | `app/services/[slug]/page.js` |
| All visual styling/responsiveness | `app/globals.css` |
| Sitemap, robots, PWA manifest | `app/sitemap.js`, `app/robots.js`, `app/manifest.js` |
| Long-term SEO plan (not runtime code) | `docs/seo-strategy.md` |
| Logo/icons/domain assets | `public/` |

## Architecture and data flow

`app/layout.js` wraps every route with `SiteHeader`, `<main>`, `SiteFooter`, `MobileCtaBar`, and `Analytics`. Most route files are server components composed from `Sections.js`. Only components using browser state/events carry `"use client"`.

The `services` array in `app/data.js` drives service cards, navigation, footer links, form options, sitemap URLs, schema, and `generateStaticParams()`. Each service page is an ad landing page: it finds a service by slug, then combines it with local `serviceFaqs` and `serviceFit` maps (`serviceFit` holds the headline and pain points) and an icon in `servicePaths` in `Icons.js`. When adding or renaming a service, update all four structures; the sitemap and static route generation then update automatically.

Conversion flow: primary CTAs come from `cta` in `app/data.js`. They link to `/contact/?intent=<consultation|proposal>&service=<slug>`, and `ContactPanel` reads those values on mount. On service pages `consultationHref()` points consultation buttons at the on-page form (`#consultation`).

Tracking flow: with every ID in `tracking` empty, no third-party script loads and no consent banner shows. Once an ID is set, tags load after a visitor accepts the banner (unless `requireConsent` is false). `Analytics` tracks WhatsApp, phone, email, and `data-cta` clicks through one document listener, so server components only need a `data-cta` attribute. `ContactPanel` sends `form_start`, `form_submit`, and `generate_lead`. `generate_lead` fires when a visitor picks WhatsApp or email, because the site cannot see whether they press send in that app. UTM and click IDs are kept per session and appended to the lead message.

SEO flow: static pages call `buildMetadata(key)`; service pages call `serviceMetadata(service)`. Titles are used as written, with no layout template. `JsonLd` safely serializes schema helpers from `app/seo.js`. The homepage uses root metadata from `app/layout.js`.

Styling is one global file. Reuse CSS variables in `:root`, existing class families, and breakpoints at 1020px/680px. Fonts load through `next/font/google` in `app/layout.js`. Preserve reduced-motion behavior.

## Commands and verification

```powershell
npm.cmd install       # or npm.cmd ci for a clean install
npm.cmd run dev
npm.cmd run build     # required verification; creates out/
```

On shells where `npm` works normally, omit `.cmd`. The declared `npm run lint` script uses the removed `next lint` command and is not a valid verifier with Next 16. A successful build currently emits nine `/services/<slug>/` pages and the sitemap lists 17 URLs.

After changes, run the build and inspect affected static HTML/assets in `out/` or the page in dev mode. For content changes, also check internal links, metadata/canonical URLs, JSON-LD, mobile layout, and contact values as relevant. For layout changes, check widths of 320, 375, and 1366 pixels, and take a full-page screenshot.

Windows builds write `__next.*` prefetch files into nested folders while Linux writes flat filenames, so any default-prefetch `next/link` can show harmless 404s in a local Windows static preview.

## Guardrails

- Do not edit or commit generated/dependency directories: `.next/`, `out/`, `node_modules/`.
- Preserve static-export compatibility: no request-time server features, server actions, API routes, or runtime-only dynamic routes unless hosting architecture is intentionally changed.
- Keep internal URLs trailing-slash compatible and use `next/link` for navigation, with `prefetch={false}` so phones do not download pages visitors may never open.
- The site must work from a subpath. Wrap root-relative images, icons, and manifest URLs in `asset()` from `app/data.js`; `next/link` adds the base path itself. Avoid root-relative `url()` paths in CSS. Test with `NEXT_PUBLIC_BASE_PATH=/sbs-next` before changing assets.
- Keep the production base URL in `app/data.js` (`site.url`) aligned with `public/CNAME`.
- In Next 16 dynamic pages, `params` is awaited; retain that pattern.
- Prefer extending centralized arrays/shared components over duplicating markup or business facts.
- Mobile speed is a campaign requirement. Do not add autoplay video, endless animations, or state updates on every animation frame, and do not fade or hide content until it scrolls into view.
- Prerender real values. Do not count metrics up from zero, and do not show invented dashboard figures or label static numbers as live.
- Do not add partner status, certifications, client results, or testimonials unless SBS has confirmed them.
- Do not read the large SEO strategy for ordinary UI edits; consult it only for SEO/content-roadmap work.
