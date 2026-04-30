# XALT AI Website Build Plan

**Project:** localai_guide  
**Source:** xalt.de/ai (scraped 2026-04-30)  
**Goal:** Rebuild the XALT AI landing page as a standalone, production-ready website

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (matching existing design tokens)
- **Font:** Montserrat + Roboto (Google Fonts)
- **Deployment:** Vercel (or static export for any host)
- **Language:** TypeScript

## Design System (from scraped site)

| Token | Value |
|-------|-------|
| Primary dark | #081327 |
| Accent teal | #01FFCD |
| Accent green | #2F9C86 |
| Blue | #0052CC |
| Text white | #ffffff |
| Text gray | #6b778c |
| Background cards | rgba(255,255,255,0.03) |

Fonts: Montserrat (headings), Roboto (body)  
Style: Dark theme, glassmorphism cards, gradient accents, responsive

## Site Structure

### 1. `app/page.tsx` — Main Landing Page
- **Hero section:** "AI-Powered Services" / "Build Faster. Lead Smarter." with gradient text
- **Filter bar:** All, Workshops, Forge Apps, Events, Venture, Jobs, Case Studies, Products, Branchen, Blog
- **Cards grid (auto-fit, min 340px):** 27 cards organized by category
  - Each card: tag, icon, title, description, meta badges (duration, language, price, etc.)
  - Hover effects: translateY(-6px), gradient top border, shadow
- **Footer:** Logo, links (Atlassian Services, LinkedIn, Contact, Impressum), copyright

### 2. `/pages/workshop-vibe-coding.md` — Vibe Coding Workshop Detail
- Description, duration (4h), format (online), capacity (12), language (EN)
- CTA: "Explore Workshop →"

### 3. `/pages/c-level-workshop.md` — C-Level Workshop Detail
- Strategic AI briefing, ROI-driven, executive audience

### 4. `/pages/services` — Sub-page for key services
- Enterprise AI, KMU program, White-label, Co-branded partnerships
- BlueFlag Security partnership, Aviation AI, Baustelle+AI

### 5. `/pages/ventures` — Venture Studio & Products
- XALT Venture Studio (Batch 01 open, pre-seed)
- Marketplace Apps (9 Atlassian apps, 7 free)
- Advanced Calendar for Jira, Advanced Menu Maker for Confluence

### 6. `/pages/jobs` — Jobs listing
- 7 positions with location, type, skills

### 7. `/pages/events` — Events
- CloudBound (Munich), Enterprise AI Summit (San Jose), 10 Jahre XALT

### 8. `/pages/contact` — Contact / "Get in Touch"
- Form with name, email, message
- CTA button "GET IN TOUCH"

### 9. `/pages/blog` — Blog listing
- 15 articles on Atlassian expertise

## Pages to Build (priority order)

1. **Main landing page** (`/`) — Full hero, cards grid, footer
2. **Workshop pages** — Vibe Coding + C-Level (two pages)
3. **Services pages** — KMU, Enterprise, White-label, Co-branded
4. **Products page** — Atlassian apps, Venture Studio
5. **Jobs page** — Job listings with cards
6. **Events page** — CloudBound, Summit, Jubilee
7. **Contact page** — Form + CTA
8. **Blog listing** — Article cards

## Implementation Details

### Navbar
- Fixed top, glassmorphism background (rgba(10,22,40,0.95) + blur)
- Logo left, links center, "GET IN TOUCH" CTA right
- Language toggle (EN/DE)
- Scroll behavior: sticky with backdrop blur

### Cards Component
- Reusable `Card` component with props: tag, title, description, meta[], icon, href
- Background: rgba(255,255,255,0.03), border: 1px solid rgba(78,205,196,0.12)
- Hover: translateY(-6px), border-color accent, gradient top line
- Tag: small uppercase pill with accent color
- Meta badges: icons + text (duration, language, price, etc.)

### Hero
- Min-height 70vh, centered content
- Gradient radial backgrounds (teal + blue)
- H1: 52px Montserrat, bold, white text
- Highlight span: linear gradient (accent → #7ee8e0) as background-clip text
- CTA button: accent background, dark text, hover glow

### Footer
- Dark background (#060e1a), flex row
- Logo left, links right
- Copyright bottom

### Responsive
- Mobile-first breakpoint approach
- Cards grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Nav collapses to hamburger on mobile
- Padding adjusts with `max(60px, (100vw - 1200px) / 2)`

## File Structure

```
localai_guide/
├── app/
│   ├── layout.tsx          # Root layout with fonts, styles
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Tailwind imports + custom CSS
│   └── workshops/
│       ├── vibe-coding/page.tsx
│       └── c-level/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Card.tsx
│   ├── Hero.tsx
│   ├── FilterBar.tsx
│   └── MetaBadge.tsx
├── lib/
│   └── data.ts             # All card data, workshop info, jobs, events
├── public/
│   └── favicon.ico
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── plan.md
```

## Build Steps for Subagents

1. **Initialize Next.js project** with TypeScript + Tailwind
2. **Create base components** (Navbar, Footer, Card, Hero, FilterBar)
3. **Populate data** from scraped content (`lib/data.ts`)
4. **Build main page** (`/`) with full hero, cards grid, footer
5. **Build detail pages** for workshops, services, products
6. **Build listing pages** for jobs, events, blog
7. **Build contact page** with form
8. **Final polish** — responsive checks, hover effects, gradients
9. **Commit & push** to GitHub

## Git Remote
`origin → https://github.com/Aivan-bot/local_ai_guide.git`
