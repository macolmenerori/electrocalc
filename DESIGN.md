---
version: alpha
name: Electrocalc
description: Design system for the Electrocalc electricity cost calculator web app. Clean, utilitarian Material Design aesthetic with full light/dark theme support and i18n.

colors:
  # Light mode
  primary: '#1976d2'
  primary-light: '#42a5f5'
  primary-dark: '#1565c0'
  on-primary: '#ffffff'
  secondary: '#9c27b0'
  secondary-light: '#ba68c8'
  secondary-dark: '#7b1fa2'
  surface: '#f5f5f5'
  surface-elevated: '#ffffff'
  text-primary: '#000000'
  text-secondary: 'rgba(0,0,0,0.6)'
  text-tertiary: '#595959'
  text-disabled: 'rgba(0,0,0,0.38)'
  error: '#d32f2f'
  # Dark mode overrides (token names suffixed with -dark)
  primary-dark-mode: '#90caf9'
  primary-light-dark-mode: '#e3f2fd'
  primary-dark-dark-mode: '#42a5f5'
  secondary-dark-mode: '#ce93d8'
  secondary-light-dark-mode: '#f3e5f5'
  secondary-dark-dark-mode: '#ab47bc'
  surface-dark-mode: '#121212'
  surface-elevated-dark-mode: '#1e1e1e'
  text-primary-dark-mode: '#ffffff'
  text-secondary-dark-mode: 'rgba(255,255,255,0.7)'
  text-tertiary-dark-mode: 'rgba(255,255,255,0.7)'
  text-disabled-dark-mode: 'rgba(255,255,255,0.5)'

typography:
  body-md:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
  headline-lg:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: '2.5rem'
    fontWeight: 500
  headline-md:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: '2rem'
    fontWeight: 500
  headline-sm:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: '1.75rem'
    fontWeight: 500
  title-lg:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: '1.5rem'
    fontWeight: 500
  title-md:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: '1.25rem'
    fontWeight: 500
  title-sm:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: '1rem'
    fontWeight: 500
  label-sm:
    fontFamily: 'Roboto, Arial, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 400

rounded:
  none: '0px'
  sm: '4px'
  md: '8px'
  lg: '12px'
  full: '9999px'

spacing:
  1: '8px'
  2: '16px'
  3: '24px'
  4: '32px'
  5: '40px'
  6: '48px'

components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    padding: '8px 16px'
  button-outlined:
    backgroundColor: '{colors.surface-elevated}'
    textColor: '{colors.primary}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    padding: '8px 16px'
  input:
    backgroundColor: '{colors.surface-elevated}'
    textColor: '{colors.text-primary}'
    typography: '{typography.body-md}'
    rounded: '{rounded.md}'
    width: '150px'
  appbar:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.title-md}'
  results-table:
    backgroundColor: '{colors.surface-elevated}'
    textColor: '{colors.text-primary}'
    rounded: '{rounded.md}'
    width: '350px'
---

## Overview

Electrocalc is a focused, single-purpose electricity cost calculator. The design is utilitarian and trustworthy — it should feel fast, legible, and uncluttered. There is exactly one user action (calculate), and the result is a simple data table. Every design decision should serve clarity and reduce friction.

**Personality:** Practical, clean, efficient. Not playful, not decorative.

**Target users:** General consumers checking appliance costs; tech-aware but not technical.

**Emotional tone:** Reliable, immediate, unfussy. Like a well-designed utility app.

**Key constraints:**

- Fully bilingual (English/Spanish) — all text comes from i18n translation files.
- Full light/dark theme — every token must have a defined value in both modes.
- Static site generation (SSG) — browser-only APIs must be wrapped in `typeof window !== 'undefined'` guards.

---

## Colors

The palette is built on Material Design defaults with semantic naming. Two modes are defined: **light** (default) and **dark** (OS-aware with manual override).

### Light mode

| Token              | Value              | Role                                                            |
| ------------------ | ------------------ | --------------------------------------------------------------- |
| `primary`          | `#1976d2`          | AppBar background, primary button fill, focused outlines        |
| `primary-light`    | `#42a5f5`          | Hover/active states on primary                                  |
| `primary-dark`     | `#1565c0`          | Pressed state, high-contrast primary                            |
| `on-primary`       | `#ffffff`          | Text/icons on primary-colored surfaces (AppBar, filled buttons) |
| `secondary`        | `#9c27b0`          | Accent only — links, occasional emphasis                        |
| `surface`          | `#f5f5f5`          | Page background                                                 |
| `surface-elevated` | `#ffffff`          | Cards, Paper, input backgrounds                                 |
| `text-primary`     | `#000000`          | Primary body text                                               |
| `text-secondary`   | `rgba(0,0,0,0.6)`  | Supporting/descriptive text                                     |
| `text-tertiary`    | `#595959`          | Subdued labels (input field labels, subtitle)                   |
| `text-disabled`    | `rgba(0,0,0,0.38)` | Disabled controls                                               |
| `error`            | `#d32f2f`          | Validation errors                                               |

### Dark mode

| Token              | Value                   | Role                                      |
| ------------------ | ----------------------- | ----------------------------------------- |
| `primary`          | `#90caf9`               | Same role; lightened for contrast on dark |
| `primary-light`    | `#e3f2fd`               | Hover/active                              |
| `primary-dark`     | `#42a5f5`               | Pressed state                             |
| `on-primary`       | `rgba(0,0,0,0.87)`      | Text on primary in dark mode              |
| `secondary`        | `#ce93d8`               | Accent                                    |
| `surface`          | `#121212`               | Page background                           |
| `surface-elevated` | `#1e1e1e`               | Cards, Paper, inputs                      |
| `text-primary`     | `#ffffff`               | Primary body text                         |
| `text-secondary`   | `rgba(255,255,255,0.7)` | Supporting text                           |
| `text-tertiary`    | `rgba(255,255,255,0.7)` | Subdued labels                            |
| `text-disabled`    | `rgba(255,255,255,0.5)` | Disabled controls                         |

### Accent (secondary) usage

Purple (`secondary`) is reserved for sparse accent use — decorative links, future badge/chip elements. It must not compete with the primary blue CTA. Do not use it for interactive controls.

---

## Typography

**Font stack:** `Roboto, Arial, sans-serif`

Roboto must be loaded by importing `@fontsource/roboto` in the app entry point (`src/index.tsx`). Without the import, the font silently falls back to Arial. Do not rely on system Roboto.

```ts
// src/index.tsx — required
import '@fontsource/roboto';
```

### Type scale

| Token                      | Size     | Weight | Usage                    |
| -------------------------- | -------- | ------ | ------------------------ |
| `headline-lg` (h1)         | 2.5rem   | 500    | Page title               |
| `headline-md` (h2)         | 2rem     | 500    | Section headings         |
| `headline-sm` (h3)         | 1.75rem  | 500    | Sub-section headings     |
| `title-lg` (h4)            | 1.5rem   | 500    | Card/panel titles        |
| `title-md` (h5)            | 1.25rem  | 500    | Navbar brand label       |
| `title-sm` (h6)            | 1rem     | 500    | Small titles             |
| `body-md` (body1)          | 1rem     | 400    | Default body, table rows |
| `label-sm` (body2/caption) | 0.875rem | 400    | Helper text, captions    |

Line heights and letter spacing are MUI defaults (not overridden). Do not set custom line heights on heading variants.

---

## Layout

Single centered column. No sidebars, no multi-column content.

**Page structure (top to bottom):**

1. `<header>` — Navbar (AppBar, full width)
2. `<main>` — HeaderComponent + CalculatorLayout (centered, MUI Container)
3. `<footer>` — FooterComponent

**Container:** MUI `<Container>` with default `maxWidth` provides responsive gutters automatically.

**Spacing system:** 8px base unit. All gaps, margins, and padding must be multiples of 8px. Use MUI `spacing(n)` or equivalent `n * 8px` values (`spacing(1)` = 8px, `spacing(4)` = 32px).

**Breakpoints (MUI defaults, not customized):**

| Name | Width  |
| ---- | ------ |
| xs   | 0px    |
| sm   | 600px  |
| md   | 900px  |
| lg   | 1200px |
| xl   | 1536px |

**Responsive behavior:**

- Below `sm` (600px): input fields stack vertically (`direction="column"`); footer links stack vertically.
- Above `sm`: inputs in a row; footer links in a row.
- No other layout changes between breakpoints.

**Internal component spacing:**

- Main content stack: `spacing={3}` (24px) between header, calculator, footer
- Calculator internal stack: `spacing={4}` (32px) between form and results table
- Input form: `gap: 3` (24px) column, inputs `spacing={2}` (16px) row

---

## Elevation & Depth

The design is mostly flat. Depth is communicated sparingly via surfaces and one custom shadow.

| Surface                                                    | Elevation                                    |
| ---------------------------------------------------------- | -------------------------------------------- |
| Page background (`surface`)                                | 0 — no shadow                                |
| Results table, input field background (`surface-elevated`) | Flat Paper — MUI default elevation 1         |
| AppBar                                                     | Custom shadow: `0px 2px 4px rgba(0,0,0,0.1)` |

In **dark mode**, do not add shadows. Dark mode elevation is signaled by the surface color step (`#121212` → `#1e1e1e`), per Material Design dark theme guidance.

Do not introduce cards, modals, or floating elements that require new shadow levels. If new surfaces are added, use the existing two-level system (`surface` / `surface-elevated`).

---

## Shapes

**Global radius:** `8px` — applied to all interactive and container elements.

| Element                      | Radius                        |
| ---------------------------- | ----------------------------- |
| Buttons                      | 8px                           |
| Input fields (OutlinedInput) | 8px                           |
| Results table (Paper)        | 8px (MUI Paper default)       |
| Language switcher (Select)   | 8px                           |
| AppBar s                     | 8px                           |
| Input fields (OutlinedInput) | 8px                           |
| Results table (Paper)        | 8px (MUI Paper default)       |
| Language switcher (Select)   | 8px                           |
| AppBar                       | 0px (full-width, no rounding) |

Do not use the full `border-radius: 9999px` (pill) shape on any element currently in the app. The visual language is rectangular with softened corners.

---

## Components

### Button — primary CTA

The "Calculate" button is the single primary action. It must be visually dominant.

- **Variant:** `contained` (filled solid)
- **Color:** `primary` (`#1976d2` light / `#90caf9` dark)
- **Text color:** `on-primary`
- **Text transform:** sentence case (e.g. "Calculate") — **not** `UPPERCASE`
- **Radius:** 8px
- **Padding:** `8px 16px`

```tsx
<Button variant="contained" color="primary">
  Calculate
</Button>
```

Do not use `outlined` for the primary CTA. The `outlined` variant may be used for secondary actions if they are added in the future.

### Input fields

Use MUI `OutlinedInput` (not `TextField`) with `InputLabel` and `InputAdornment`.

- **Background:** `surface-elevated` (`background.paper`)
- **Max width:** `150px` — keeps form compact, inputs are numeric values
- **Label:** above the input, `body-md`, `color: text-tertiary`, 8px left padding
- **Adornments:** unit suffix (`W`, `€/kWh`) right-aligned inside input
- **Error state:** `FormHelperText` below, `color: error`
- **Radius:** 8px (MUI default with global shape)

Both inputs render in a responsive row (`sm:row` / `xs:column`). Keep them grouped visually, `spacing={2}` (16px) apart.

### Results table

Displays cost calculations for multiple time periods.

- **Container:** MUI `TableContainer` with `component={Paper}`, `maxWidth: 350px`, centered
- **Structure:** `Table > TableHead > TableRow > TableCell` (Time / Cost columns)
- **Header cells:** bold (`<b>` or `fontWeight: 600`)
- **Body cells:** `body-md` (`1rem` / 400)
- **No striping, no hover highlight** — plain rows separated by default MUI dividers
- **Alignment:** center-aligned horizontally on the page

### AppBar / Navbar

- **Position:** `static` (scrolls with page, not sticky)
- **Background:** `primary` color
- **Text/icon color:** `on-primary` (white in light, `rgba(0,0,0,0.87)` in dark)
- **Brand:** `ElectricBoltIcon` + app name (`Typography variant="h5"`)
- **Right controls:** language switcher + theme toggle in a `Stack direction="row" spacing={1}`
- **Custom shadow:** `0px 2px 4px rgba(0,0,0,0.1)`
- **Padding:** `0.35rem 1rem`

### ThemeToggle

- MUI `IconButton color="inherit"` (inherits `on-primary`)
- `Brightness4Icon` in light mode, `Brightness7Icon` in dark mode
- Wrapped in `Tooltip` with descriptive label
- No background, no border

### LanguageSwitcher

- MUI `FormControl size="small"`, `minWidth: 60px`
- `Select variant="outlined"`, options: `EN` / `ES`
- Background: `surface` (`background.default`) — **not** AppBar primary color
- Wrapped in `Tooltip placement="left" arrow`

### HeaderComponent

- `Stack spacing={2}`, `marginBottom: 4` (32px)
- Title: `Typography variant="h1"`, centered, `text-primary`
- Subtitle: `Typography variant="body1"`, centered, `color: text-tertiary`, `fontStyle: italic`

### FooterComponent

- Responsive `Stack direction={{ xs: 'column', sm: 'row' }}`, `spacing={1}`, centered
- Vertical `Divider` between items (visible on `sm+`)
- `paddingBottom: 2` (16px), `marginTop: 2` (16px)
- Links use MUI `Link` component, open in new tab (`target="_blank"`)

### LoadingSpinner

- `Box` flex container + MUI `CircularProgress`
- Accepts `position` prop: `'center'` | `'left'` | `'right'` → maps to `justifyContent`

---

## Do's and Don'ts

### Spacing

**Do:** use 8px multiples only. `spacing(1)` = 8, `spacing(2)` = 16, etc.

**Don't:** use arbitrary pixel values like `padding: '7px 13px'`.

### Colors

**Do:** reference semantic color tokens from the MUI palette (`color: 'text.tertiary'`, `bgcolor: 'background.paper'`).

**Don't:** hardcode raw hex values in component `sx` props. The theme handles light/dark switching — hardcoded values break it.

**Don't:** use `text.secondary` for text that appears on primary-colored surfaces (AppBar). Use `on-primary` (white). The original `text.secondary` token in the codebase was incorrectly set to near-white `#f5f5f5`; the corrected value is `rgba(0,0,0,0.6)`.

### Typography

**Do:** import `@fontsource/roboto` in `src/index.tsx` so the correct font loads.

**Don't:** assume Roboto is available as a system font. It is not reliably present on all platforms.

**Do:** use sentence case for all button labels ("Calculate", not "CALCULATE").

**Don't:** add `textTransform: 'uppercase'` to button text. The theme override sets `textTransform: 'none'` globally.

### SSR / SSG guards

**Do:** wrap all browser-only APIs in `typeof window !== 'undefined'` checks.

```tsx
// Correct
const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
```

**Don't:** access `localStorage`, `window.matchMedia`, `navigator`, `document.cookie`, or any DOM API at module-level or in SSR-executed code paths.

### Components

**Do:** keep the Calculate button as `variant="contained"` — it is the app's single primary action and must be visually prominent.

**Don't:** use `variant="outlined"` for the primary CTA.

**Do:** use the two-level surface system (`surface` / `surface-elevated`) for backgrounds. Introduce no new shadow levels.

**Don't:** add cards, floating panels, or decorative containers that require new elevation tokens.

### Theme

**Do:** keep `borderRadius: 8` global. All interactive elements use the same corner radius.

**Don't:** mix radii (e.g., pill buttons alongside rounded-8 inputs).

**Do:** ensure every new color token has defined values for both light and dark mode.

**Don't:** add a token with a value only for one mode.
