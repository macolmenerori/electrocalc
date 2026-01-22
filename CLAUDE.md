# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **electrocalc**, a React-based web application for calculating electricity consumption costs. Users input power consumption (watts) and electricity price (€/kWh) to get cost calculations for different time periods.

## Development Commands

### Essential Commands

- `pnpm dev` - Start Vite SSG development server on port 3000
- `pnpm build` - Generate sitemap + TypeScript check + Vite SSG production build
- `pnpm preview` - Preview production build locally on port 3000
- `pnpm test` - Run Jest tests
- `pnpm test <TEST_FILE_NAME>` - Run specific test file
- `pnpm verify` - Complete verification pipeline (lint + prettify + types + test + audit + build)

### Code Quality

- `pnpm lint` - ESLint with auto-fix
- `pnpm prettify` - Prettier formatting
- `pnpm types` - TypeScript type checking (no emit)

### Requirements

- Node.js >= 24.0.0
- PNPM >= 10.12.1 (package manager)

## Architecture

### Tech Stack

- **Framework**: React 19 with TypeScript
- **UI Library**: Material-UI (MUI) v7
- **Styling**: Styled Components + Emotion
- **Forms**: React Hook Form with Zod validation
- **i18n**: react-i18next (English/Spanish support)
- **Build**: Vite with vite-react-ssg for static site generation
- **SEO**: react-helmet-async for dynamic meta tags and structured data
- **Testing**: Jest + React Testing Library

### Project Structure

```
src/
├── components/          # Reusable UI components (each with test file)
│   ├── InputComponent/  # Main form for power/price input
│   ├── ResultComponent/ # Displays calculated costs
│   ├── Navbar/         # Navigation with theme/language switchers
│   ├── SEO/            # SEO components (SEOHead, JsonLd)
│   └── ...
├── ui/                 # Layout and theme components
│   ├── MainLayout/     # Top-level app layout
│   ├── CalculatorLayout/ # Calculator-specific layout
│   └── theme/          # Theme context and definitions
├── validation/         # Zod schemas for form validation
└── i18n.ts            # Internationalization setup

scripts/
└── generate-sitemap.ts # Pre-build script to generate sitemap.xml
```

### Key Patterns

- **TypeScript Path Mapping**: Use `@/` for src imports (configured in tsconfig.json)
- **Component Structure**: Each component has its own folder with `.tsx` and `.test.tsx` files
- **Form Validation**: Uses Zod schemas with React Hook Form integration
- **Theming**: Custom theme context with MUI integration
- **i18n**: Translation keys follow nested object structure (e.g., `components.inputComponent.labelPower`)
- **SSR Guards**: Browser-only APIs must be wrapped with `typeof window !== 'undefined'` checks (see SSG section)

### Core Calculation Logic

The main calculation is in `InputComponent`: `(power_watts / 1000) * price_per_kwh = hourly_cost`

### State Management

Simple prop drilling for calculator state - no complex state management library needed.

## Testing

- Component tests use React Testing Library
- Run `pnpm test` for all tests or `pnpm test <filename>` for specific tests
- Test files are co-located with components

## Validation Schema

Form validation is centralized in `src/validation/formSchema.ts` using Zod with custom error messages that support i18n.

## Static Site Generation & SEO

This project uses **vite-react-ssg** for static site generation (SSG) to improve SEO and performance.

### SSG Implementation

- **Entry Point**: `src/index.tsx` uses `ViteReactSSG` from 'vite-react-ssg/single-page' (single-page app mode)
- **Helmet Provider**: Wraps the entire app with `HelmetProvider` from 'react-helmet-async'
- **SEO Components**: Located in `src/components/SEO/`
  - `SEOHead.tsx` - Dynamic meta tags (Open Graph, Twitter Cards, canonical, hreflang)
  - `JsonLd.tsx` - Structured data (WebSite, WebApplication, BreadcrumbList schemas)
- **Sitemap**: Auto-generated before each build via `scripts/generate-sitemap.ts`
- **Production URL**: `https://electrocalc.miguelangelcolmenero.es`

### SSR Guards - CRITICAL

When adding new code that uses browser-only APIs, you MUST add SSR guards to prevent build failures:

```tsx
// Check if running in browser before using browser APIs
if (typeof window !== 'undefined') {
  // Browser-only code here (localStorage, window.matchMedia, navigator, etc.)
}
```

**Files with SSR guards:**
- `src/i18n.ts` - Guards for LanguageDetector (uses localStorage/navigator)
- `src/ui/theme/ThemeContext.tsx` - Guards for localStorage and window.matchMedia

**Common browser APIs that need guards:**
- `localStorage` / `sessionStorage`
- `window.matchMedia()`
- `navigator` object
- `document.cookie`
- Any DOM manipulation outside of React components

### SEO Best Practices

- All SEO metadata is bilingual (English/Spanish) via i18next
- Translation files include `title` and `description` keys for SEO
- Helmet components are rendered inside `ThemeProvider` to access theme context
- Meta tags update dynamically when language changes client-side
- Structured data (JSON-LD) provides rich search results

### Build Process

1. `tsx scripts/generate-sitemap.ts` - Generates sitemap.xml with current date
2. `tsc` - TypeScript compilation
3. `vite-react-ssg build` - Static site generation build

The final output is pre-rendered static HTML with full SEO meta tags in the `dist/` folder.
