// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE_URL at build time (e.g. SITE_URL=https://www.example.com npm run build)
// to emit canonical URLs, absolute Open Graph URLs and sitemap-ready links.
const site = process.env.SITE_URL?.replace(/\/$/, '') || undefined;

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  compressHTML: true,
  devToolbar: { enabled: false },
  server: { host: '127.0.0.1', port: 4378 },
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    // Product cartons and portraits are pre-cropped at build time; keep encoders sharp but light.
    service: { entrypoint: 'astro/assets/services/sharp', config: { limitInputPixels: false } },
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "media-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-src 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
});
