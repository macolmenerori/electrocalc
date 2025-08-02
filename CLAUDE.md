# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **electrocalc**, a React-based web application for calculating electricity consumption costs. Users input power consumption (watts) and electricity price (€/kWh) to get cost calculations for different time periods.

## Development Commands

### Essential Commands

- `pnpm start` - Start development server on port 3000
- `pnpm build` - Production build using webpack
- `pnpm test` - Run Jest tests
- `pnpm test <TEST_FILE_NAME>` - Run specific test file
- `pnpm verify` - Complete verification pipeline (lint + prettify + types + test + audit + build)

### Code Quality

- `pnpm lint` - ESLint with auto-fix
- `pnpm prettify` - Prettier formatting
- `pnpm types` - TypeScript type checking (no emit)

### Requirements

- Node.js >= 22.11.0
- PNPM >= 10.12.1 (package manager)

## Architecture

### Tech Stack

- **Framework**: React 19 with TypeScript
- **UI Library**: Material-UI (MUI) v7
- **Styling**: Styled Components + Emotion
- **Forms**: React Hook Form with Zod validation
- **i18n**: react-i18next (English/Spanish support)
- **Build**: Webpack 5 with custom configuration
- **Testing**: Jest + React Testing Library

### Project Structure

```
src/
├── components/          # Reusable UI components (each with test file)
│   ├── InputComponent/  # Main form for power/price input
│   ├── ResultComponent/ # Displays calculated costs
│   ├── Navbar/         # Navigation with theme/language switchers
│   └── ...
├── ui/                 # Layout and theme components
│   ├── MainLayout/     # Top-level app layout
│   ├── CalculatorLayout/ # Calculator-specific layout
│   └── theme/          # Theme context and definitions
├── validation/         # Zod schemas for form validation
└── i18n.ts            # Internationalization setup
```

### Key Patterns

- **TypeScript Path Mapping**: Use `@/` for src imports (configured in tsconfig.json)
- **Component Structure**: Each component has its own folder with `.tsx` and `.test.tsx` files
- **Form Validation**: Uses Zod schemas with React Hook Form integration
- **Theming**: Custom theme context with MUI integration
- **i18n**: Translation keys follow nested object structure (e.g., `components.inputComponent.labelPower`)

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
