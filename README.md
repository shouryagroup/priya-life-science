# Priya Life Science — Company Website

Static, single-page company website for **Priya Life Science**, a Gujarat-based partnership firm that manufactures, markets and supplies pharmaceutical and nutraceutical products (own brands and third-party / contract manufacturing) since 2008.

All company copy comes from [`docs/company-profile.md`](docs/company-profile.md). Product details are transcribed only from what is printed on each carton photograph. Nothing else is invented.

## Stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | [Astro 7](https://astro.build) + TypeScript (strict) | Outputs plain static HTML, ships no framework JavaScript, components stay maintainable |
| Images | `astro:assets` + sharp | Build-time resizing/cropping, responsive `srcset`, WebP with JPEG fallback, fixed dimensions (no layout shift) |
| Styling | Scoped component CSS + design tokens in `src/styles/global.css` | No CSS framework needed for one page |
| Font | Inter Variable, self-hosted via `@fontsource-variable/inter` | No third-party font requests; metric-matched fallback avoids layout shift |
| JS | ~4 tiny vanilla modules (header/menu, reveal, lightbox, video, enquiry) | Everything works without JS except progressive enhancements |

Runtime dependencies: `astro`, `sharp`, `@fontsource-variable/inter`. Dev-only: `@astrojs/check`, `typescript`, `@types/node`.

## Run locally

Requires **Node.js ≥ 22.12**.

```bash
npm install
npm run dev        # http://127.0.0.1:4378 (hot reload)
npm run build      # static output in dist/
npm run preview    # serve the production build on http://127.0.0.1:4378
npm run check      # TypeScript + Astro diagnostics
npm run verify     # check + build
```

The Content-Security-Policy `<meta>` tag is only generated in production builds, so test CSP behaviour with `build` + `preview`.

## Project structure

```
docs/company-profile.md      Source of truth for company information
public/                      favicon, robots.txt, _headers (security + cache headers)
scripts/optimize-image.mjs   Prepares raw photos: resize + strip EXIF/GPS metadata
src/
  assets/images/             Sanitised source photos (processed again at build time)
  data/
    company.ts               Company facts, capabilities, quality, network, mission, contact, video, navigation
    products.ts              8 featured products + product-range photo
    media.ts                 Hero/about/quality photos, facility gallery, partners
    types.ts                 Content types
  components/                One component per section, plus ui/ primitives
  layouts/BaseLayout.astro   <head>: SEO, Open Graph, Twitter, JSON-LD, font preload
  lib/                       Structured data + contact-link helpers
  scripts/reveal.ts          Scroll reveal (respects prefers-reduced-motion)
  pages/index.astro          Page composition
```

## Updating content

Edit the data files in `src/data/`; components update automatically.

### Information still needed (not in the supplied files)

These items were **not** in the company profile or assets, so the UI is ready for them but shows nothing invented:

1. **Contact details**: fill `contact` in `src/data/company.ts` (address lines, phones, emails, WhatsApp, website, map share URL, socials). The Contact section, footer and JSON-LD update automatically. Adding an email also turns on the **enquiry form**, which opens a pre-filled email in the visitor's mail app (no backend or third-party service).
2. **Factory video**: none was supplied. Put the file at `public/media/factory-tour.mp4` (H.264, `-movflags +faststart`, ideally ≤ 1080p) and set `factoryVideo` in `src/data/company.ts`:
   ```ts
   import posterImg from '../assets/images/liquid-filling-line.jpg';
   export const factoryVideo: FactoryVideoConfig | null = {
     src: '/media/factory-tour.mp4',
     type: 'video/mp4',
     poster: { src: posterImg, alt: 'Liquid oral filling line' },
     title: 'Inside our manufacturing facility',
     description: 'A short walk through our production and packing areas.',
     duration: '1:30',
   };
   ```
   The section then appears after the facility gallery. The video loads only when the visitor presses play, and plays muted, inline, with native controls.
3. **Logo**: the official logo renders via `src/components/ui/BrandMark.astro`; favicons (`public/favicon.ico`, `icon-192.png`, `apple-touch-icon.png`) are generated from `src/assets/images/brand/priya-life-science-icon-source.png`.
4. **Partner photos**: the photo-to-name pairing in `src/data/media.ts` follows the partners' patronymic order in the profile (Hasmukh Chimanbhai Patel; Trushar **Hasmukhbhai** Patel). Please confirm before publishing.
5. **Production domain**: build with `SITE_URL=https://your-domain npm run build` to emit the canonical URL, `og:url` and absolute Open Graph image URLs.

### Adding or replacing photos

Raw camera photos contain EXIF data including **GPS coordinates**. Always sanitise them before committing:

```bash
node scripts/optimize-image.mjs path/to/raw.jpg src/assets/images/new-photo.jpg
```

Then import the file in the relevant `src/data/*.ts` entry with descriptive `alt` text.

## Deployment

`dist/` is a fully static site and can go on any static host (Netlify, Cloudflare Pages, Vercel, S3/CloudFront, nginx).

- `public/_headers` sets security headers (`X-Frame-Options`, `frame-ancestors`, `nosniff`, HSTS, `Referrer-Policy`, `Permissions-Policy`) and long-term caching for hashed `/_astro/*` assets on Netlify / Cloudflare Pages. Replicate these on other hosts.
- Script and style hashes for the CSP are generated per build into a `<meta http-equiv="content-security-policy">` tag. No inline `style=""` attributes are used, and no external scripts, trackers or embeds are loaded.

## Quality checks performed

- `astro check`: 0 errors, 0 warnings.
- Lighthouse, production build: Performance / Accessibility / Best Practices / SEO = **100 / 100 / 100 / 100** on both mobile and desktop presets. Mobile: LCP 1.6 s, CLS 0, TBT 0 ms, ~125 KB initial transfer.
- Automated viewport sweep at 320, 360, 375, 390, 414, 600, 768, 834, 1024, 1180, 1280, 1366, 1440 and 1920 px: no horizontal overflow, no broken images, no console errors or CSP violations.
- Interaction checks: mobile menu (focus, Esc, link close), lightbox (keyboard, focus return), skip link, active-section nav, video facade (no media request before play), enquiry form validation.
