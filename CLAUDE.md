# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Static export build (outputs to /out)
npm run start     # Serve production build on port 3000
npm run lint      # Run ESLint
```

There are no tests in this project.

## Architecture

This is a **Next.js 15 static site** for Sangi Group — a Bangladeshi conglomerate with subsidiaries (SAN Motors, Sangi Trade, Sangi Properties, SAN Safety Footwear, etc.). It uses the App Router and is configured for **static export** (`output: 'export'`, `trailingSlash: true` in [next.config.ts](next.config.ts)), so there is no server-side rendering and no API routes.

### Routing & Pages

All routes live under [src/app/](src/app/). Service subsidiaries each have their own route under `services/`:

- `/services/san-motors` — car dealership with a dynamic `[car-slug]` sub-route for individual car detail pages
- `/services/sangi-trade`, `/services/sangi-properties`, `/services/san-safety-footwear`, `/services/central-shariah-board`, `/services/global-care-foundation`

The only dynamic route is `[car-slug]` under san-motors. **Important:** The car listing in `san-motors/page.tsx` uses the car name string as the slug (e.g. `"Toyota Crolla Cross"`), while `[car-slug]/page.tsx` defines `generateStaticParams()` with separate kebab-case slugs (e.g. `"toyota-hiace"`) and its own car data array. These two arrays are not shared — keep them in sync manually when adding or renaming cars.

Most pages are `"use client"` because they use Framer Motion (`motion.*` components require browser APIs). The `[car-slug]/page.tsx` is a server component that passes data down to `CarDetailClient.tsx` (client component).

### Contact Form

The contact form in `/contact` has no backend. On submit it builds a `mailto:info@sangibd.com` link and redirects the user's browser to open their mail client.

### Styling

- **Tailwind CSS v4** (imported via `@import "tailwindcss"` in [src/app/globals.css](src/app/globals.css))
- Custom theme colors use the **oklch** color space, defined as CSS variables
- Use `cn()` from [src/lib/utils.ts](src/lib/utils.ts) (re-export of `clsx` + `tailwind-merge`) for conditional class names
- **Shadcn/ui** components (new-york style) live in [src/components/ui/](src/components/ui/)
- Dark mode is supported via CSS variables

### Internationalization

Language switching uses the **Google Translate widget** — not `next-intl` (that package is installed but intentionally unused). The implementation:

- An inline blocking script in [src/app/layout.tsx](src/app/layout.tsx) reads a `selectedLanguage` cookie and sets the `googtrans` cookie before page paint to avoid a flash of the wrong language
- [src/components/LanguageSwitcher.tsx](src/components/LanguageSwitcher.tsx) triggers `google.translate.TranslateElement`, stores the selection in `selectedLanguage` cookie, and toggles `document.documentElement.dir` for RTL (Arabic)
- The native Google Translate toolbar is hidden via CSS in `globals.css`
- RTL-aware font stacks for Arabic (Noto Naskh Arabic), Chinese (Noto Sans SC), and Latin (Poppins/Geist) are loaded via Next.js Google Fonts in the layout

### Animation Pattern

Framer Motion is used for scroll-triggered entry animations across most pages. The common pattern is a local `fadeUp()` helper that returns `{ initial, whileInView, transition }` props:

```tsx
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});
// Usage: <motion.div {...fadeUp(0.2)}>
```

### Key Components

- [src/components/Header.tsx](src/components/Header.tsx) — sticky nav with service dropdowns (CSS hover), mobile drawer (slide-in), and language switcher
- [src/components/PosterCarousel.tsx](src/components/PosterCarousel.tsx) — auto-rotating hero carousel (4s interval) with Framer Motion captions and dot indicators
- [src/components/LanguageSwitcher.tsx](src/components/LanguageSwitcher.tsx) — Google Translate integration

### Deployment

Deployed to **Azure Static Web Apps** via the GitHub Actions workflow in [.github/workflows/](.github/workflows/). The workflow uses OIDC authentication and triggers on pushes to **`master`** (not `main`). The Azure action handles the build internally; `output_location` is left empty.

Images are served unoptimized (`images.unoptimized: true`) due to the static export constraint.
