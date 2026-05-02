# Internationalization (i18n) Plan for XALT AI Website

## Goal
Add German (DE) translation alongside existing English (EN) content. Default to EN, switchable via navbar language toggle. URL-based routing (`/de/...`).

## Architecture Decision

**Approach: Next.js Middleware + Parallel Routes + URL-based locale**

- `en/` route prefix (default, can be optional)
- `de/` route prefix
- Shared UI components (Navbar, Footer, etc.)
- Translation data stored as JSON in `src/i18n/dictionaries/`
- `NextIntlProvider` from `next-intl` for React context

**Why `next-intl`?** It's the standard Next.js i18n library, well-maintained, works with App Router, and handles URL prefixes natively.

## Scope
Translate **all visible text** on all pages:
- Navbar (labels, links, CTA, language switcher)
- Hero/Home page
- Contact page
- Events page
- Jobs page
- Products page
- Services page
- Vibe Coding Workshop page
- C-Level Workshop page
- Footer
- Metadata (title, description) on all pages

## Tasks

### Phase 1: Setup (Dependencies & Config)
1. Install `next-intl`
2. Create i18n config (`src/i18n/request.ts`)
3. Create middleware (`src/middleware.ts`)
4. Update `layout.tsx` with NextIntlProvider
5. Update `next.config.ts` for locale prefix detection

### Phase 2: Translation Dictionary Files
6. Create `src/i18n/dictionaries/en.json` — extract all English strings from current code
7. Create `src/i18n/dictionaries/de.json` — translate all strings

### Phase 3: Components
8. Extract hardcoded strings in Navbar → use translation functions
9. Create LanguageSwitcher component
10. Update Footer with translated links
11. Update all page components with translation functions

### Phase 4: Pages & Metadata
12. Wrap routes with locale groups (`src/app/[locale]/...`)
13. Update page metadata (title, description) per locale
14. Translate all page content (Hero, Contact, Events, Jobs, Products, Services, Workshops)
15. Translate `data.ts` card titles/descriptions (or create separate DE data)

### Phase 5: FilterBar & Dynamic Content
16. Translate FilterBar category names
17. Update card metadata (tags) for DE
18. Handle mixed-language content (some items are inherently bilingual like "Vibe Coding Workshop")

### Phase 6: Polish & Test
19. Test locale routing (`/`, `/de/`, `/de/contact`, etc.)
20. Test language switcher persistence (cookie)
21. Verify build & deploy

## File Structure (after)
```
src/
├── i18n/
│   ├── dictionaries/
│   │   ├── en.json
│   │   └── de.json
│   └── request.ts
├── middleware.ts
├── app/
│   ├── [locale]/
│   │   ├── page.tsx
│   │   ├── contact/page.tsx
│   │   ├── events/page.tsx
│   │   ├── jobs/page.tsx
│   │   ├── products/page.tsx
│   │   ├── services/page.tsx
│   │   ├── workshops/
│   │   │   ├── vibe-coding/page.tsx
│   │   │   └── c-level/page.tsx
│   │   └── layout.tsx
│   ├── layout.tsx          # locale redirect
│   └── ...
└── components/
    ├── Navbar.tsx           # with LanguageSwitcher
    ├── LanguageSwitcher.tsx
    └── ...
```
