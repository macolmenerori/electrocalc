# Review: i18next & react-i18next Upgrade (PRs #289 and #288)

---

## Part 1: i18next v25.10.9 → v26.0.1 (PR #289)

### Verdict: Safe to merge with one minor cleanup

### Breaking Changes in i18next v26.0.0

| Breaking Change | Used in Project? | Impact |
|---|---|---|
| `showSupportNotice` option removed | **YES** | **Code change needed** (see below) |
| `interpolation.format` function removed | No | None |
| `initImmediate` option removed (use `initAsync`) | No | None |
| `simplifyPluralSuffix` option removed | No | None |
| `@babel/polyfill` removed from devDeps | No | None |

### Required Code Change: Remove `showSupportNotice`

The `showSupportNotice` option was removed in v26.0.0 (the console notice itself was removed).
This option must be deleted from two files to avoid TypeScript errors on unknown properties:

**File 1: `src/i18n.ts` (line 32)**
```diff
 i18nInstance.init({
   resources,
   fallbackLng: 'en',
-  lng: isBrowser ? undefined : 'en', // Force English during SSR
-  showSupportNotice: false // Disable i18next support notice in console
+  lng: isBrowser ? undefined : 'en' // Force English during SSR
 });
```

**File 2: `src/test/setupTests.tsx` (line 39)**
```diff
 i18n.use(initReactI18next).init({
   lng: 'en',
   fallbackLng: 'en',
   debug: false,
   interpolation: {
     escapeValue: false
   },
   resources: {
     en: { translation: enTranslation },
     es: { translation: esTranslation }
-  },
-  showSupportNotice: false // Disable ads warning
+  }
 });
```

### Not Affected (verified)

- No `interpolation.format` usage anywhere
- No `initImmediate` usage (project uses synchronous `init()`)
- No plural suffixes in translation files (no `_one`, `_other`, etc.)
- Translation JSON files are simple key-value strings — fully compatible
- `useTranslation()`, `I18nextProvider`, `initReactI18next`, `LanguageDetector` APIs unchanged

---

## Part 2: react-i18next v16.6.6 → v17.0.1 (PR #288)

### Verdict: Safe to merge after PR #289

### Peer Dependency Requirement

react-i18next v17.0.1 requires `i18next >= 26.0.1`.
**PR #289 must be merged first** to satisfy this.

### Breaking Changes in react-i18next v17.0.0

| Breaking Change | Used in Project? | Impact |
|---|---|---|
| `transKeepBasicHtmlNodesFor` fix in `Trans` component | No (`Trans` not used) | None |

**No code changes needed for react-i18next v17.**

---

## Merge Order

1. Merge **PR #289** (i18next 25.10.9 → 26.0.1)
2. Remove `showSupportNotice: false` from `src/i18n.ts` and `src/test/setupTests.tsx`
3. Merge **PR #288** (react-i18next 16.6.6 → 17.0.1)
4. Run `pnpm verify` to confirm everything passes

## Files Using i18next/react-i18next (checked for compatibility)

| File | Usage | Impact |
|------|-------|--------|
| `src/i18n.ts` | `i18next.init()`, `initReactI18next`, `LanguageDetector` | Remove `showSupportNotice` |
| `src/test/setupTests.tsx` | `i18n.init()`, `initReactI18next`, `I18nextProvider` | Remove `showSupportNotice` |
| `src/components/InputComponent/InputComponent.tsx` | `useTranslation` | None |
| `src/components/SEO/JsonLd.tsx` | `useTranslation` | None |
| `src/components/SEO/SEOHead.tsx` | `useTranslation` | None |
| `src/components/FooterComponent/FooterComponent.tsx` | `useTranslation` | None |
| `src/components/ThemeToggle/ThemeToggle.tsx` | `useTranslation` | None |
| `src/components/HeaderComponent/HeaderComponent.tsx` | `useTranslation` | None |
| `src/components/ResultComponent/ResultComponent.tsx` | `useTranslation` | None |
| `src/components/LanguageSwitcher/LanguageSwitcher.tsx` | `useTranslation` | None |
