# Review: react-i18next v16.6.6 to v17.0.1 Upgrade (PR #288)

## Verdict: NOT safe to merge alone — merge PR #289 first

## Critical Issue: Peer Dependency Mismatch

react-i18next v17.0.1 requires `i18next >= 26.0.1` as a peer dependency.
The project currently uses `i18next@^25.10.9` (resolves to 25.10.9).

**Action required:** Merge PR #289 (i18next 25.10.9 -> 26.0.1) **before** merging PR #288.

## Breaking Change Analysis

### `transKeepBasicHtmlNodesFor` in `Trans` component (v17.0.0) — NO IMPACT

The only breaking change in v17.0.0 fixes how HTML tag names are preserved when children
contain interpolations or mixed content in the `Trans` component.

This project does **not** use the `Trans` component anywhere. All i18n usage is via:
- `useTranslation()` hook (in 8 components)
- `I18nextProvider` (in test setup)
- `initReactI18next` plugin

**No code changes needed.**

### Deprecated `interpolation.format` removed in i18next v26 — NO IMPACT

react-i18next v17.0.1 migrated its own tests from `interpolation.format` to
`i18n.services.formatter.add()`. This project does not use `interpolation.format`
(only `interpolation.escapeValue` in test setup, which is unrelated and still supported).

**No code changes needed.**

## Merge Order

1. Merge **PR #289** first (i18next 25.10.9 -> 26.0.1)
2. Then merge **PR #288** (react-i18next 16.6.6 -> 17.0.1)
3. Run `pnpm verify` after both are merged to confirm everything passes

## Files Using react-i18next (checked for compatibility)

| File | Usage | Impact |
|------|-------|--------|
| `src/i18n.ts` | `initReactI18next` plugin | None |
| `src/test/setupTests.tsx` | `initReactI18next`, `I18nextProvider` | None |
| `src/components/InputComponent/InputComponent.tsx` | `useTranslation` | None |
| `src/components/SEO/JsonLd.tsx` | `useTranslation` | None |
| `src/components/SEO/SEOHead.tsx` | `useTranslation` | None |
| `src/components/FooterComponent/FooterComponent.tsx` | `useTranslation` | None |
| `src/components/ThemeToggle/ThemeToggle.tsx` | `useTranslation` | None |
| `src/components/HeaderComponent/HeaderComponent.tsx` | `useTranslation` | None |
| `src/components/ResultComponent/ResultComponent.tsx` | `useTranslation` | None |
| `src/components/LanguageSwitcher/LanguageSwitcher.tsx` | `useTranslation` | None |

## No Code Changes Required

The project's usage of react-i18next is fully compatible with v17.0.1.
The only action needed is ensuring the correct merge order for the two Dependabot PRs.
