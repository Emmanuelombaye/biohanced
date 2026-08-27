# Biohanced Labs — Implementation Checklist

Map `clientwork/` brand assets to the Next.js app at repo root. Check off as you complete each item.

## Phase 0 — Assets on disk

- [ ] Re-extract `Biohanced Labs Voltage Kit Branding.zip` so PNGs exist under `biohanced-design-system/assets/`
- [ ] Copy logos to `public/biohanced/voltage/logos/`
- [ ] Copy product PNGs to `public/biohanced/voltage/products/`
- [ ] Copy `hero/three-vials.png` to `public/biohanced/voltage/hero/`
- [ ] Add `favicon.ico` / app icons from `favicon.png`
- [ ] Verify pricing against `uploads/Biohanced_Labs_Pricing_Guide_Public.pdf`

## Phase 1 — Design tokens

- [ ] Replace Found color tokens in `src/app/globals.css` with Voltage tokens from [DESIGN-TOKENS.md](./DESIGN-TOKENS.md)
- [ ] Option A: `@import` client `biohanced-design-system/styles.css`
- [ ] Option B: Map CSS variables into Tailwind v4 `@theme` block
- [ ] Remove or isolate Found fonts (Quincy, Greycliff) if no longer needed
- [ ] Confirm Archivo + Space Grotesk weights match typography.css

## Phase 2 — Core components

| Component | File | Status | Action |
|-----------|------|--------|--------|
| Logo / mark | `BiohancedVoltageLogo.tsx` | Partial | Use everywhere; replace `BiohancedLogo.tsx` |
| Navbar | `BiohancedNavbar.tsx` | Found | Ink bar, Catalog/Mfg/Lab/FAQ/Cart links |
| Promo bar | `BiohancedPromoBar.tsx` | Found | RUO or shipping promo per client |
| Footer | `BiohancedFooter.tsx` | Partial Biohanced | Align columns + legal text with [SITE-REFERENCE.md](./SITE-REFERENCE.md) |
| Button | `BiohancedButton.tsx` | Found | Voltage green primary from `Button.jsx` |
| Product card | — | Missing | Port `ProductCard.jsx` or build in TSX |
| Category tile | — | Missing | Port `CategoryTile.jsx` |

Reference implementations:

```
clientwork/branding-kit/biohanced-design-system/components/
```

## Phase 3 — Routes & content

Replace or add pages per [SITE-REFERENCE.md](./SITE-REFERENCE.md):

- [ ] **Home** — `BiohancedHomePage.tsx`: hero, trust strip, categories, featured, bundles, contact, CTA (not Found benefits/timeline)
- [ ] **Catalog** — new page + category filter
- [ ] **Product PDP** — `/catalog/[id]` from [PRODUCT-CATALOG.md](./PRODUCT-CATALOG.md)
- [ ] **Manufacturing** — 12-step story from Store DC `mfgPhases()`
- [ ] **Lab results / COA** — batch table + detail
- [ ] **FAQ** — global + product FAQs from Store DC
- [ ] **Cart / checkout** — shipping rules ($12 &lt; $150)
- [ ] **Contact** — `BiohancedContactForm.tsx` + research@biohancedlabs.com

Update link registry:

- [ ] `src/lib/biohanced-links.ts` — peptide routes, remove Found external URLs where inappropriate
- [ ] `src/lib/biohanced-site-pages.ts` — drop Found medication pages or replace with catalog/legal set

## Phase 4 — Data layer

- [ ] Create `src/lib/biohanced-products.ts` — 17 SKUs, variants, bundles (from Store DC)
- [ ] Create `src/lib/biohanced-categories.ts` — six categories
- [ ] Optional: `src/lib/biohanced-faqs.ts`, `src/lib/biohanced-mfg.ts`

## Phase 5 — Remove Found-specific UI

Components to retire or rewrite:

- `BiohancedMedications.tsx`, `BiohancedMicrodose.tsx`, `BiohancedMedicare.tsx`
- `BiohancedDoctor.tsx`, `BiohancedInsurance.tsx`, `BiohancedTimeline.tsx` (unless repurposed)
- Found-specific stats/benefits copy in `BiohancedBenefits.tsx`, `BiohancedStats.tsx`

Keep if reusable:

- `BiohancedReveal.tsx`, `BiohancedImg.tsx`, `BiohancedPageChrome.tsx`, `BiohancedCookieBanner.tsx`

## Phase 6 — SEO & meta

- [ ] Page titles: "Biohanced Labs" + section
- [ ] Meta description: research-grade peptides, HPLC verified
- [ ] Open Graph image from `logo-horizontal-on-light.png`
- [ ] Legal pages: align with footer RUO disclosures (may keep some Found legal structure until client legal review)

## Phase 7 — Compliance copy audit

- [ ] Every PDP: "For research use only"
- [ ] Footer: full 7 disclosure blocks from Store DC
- [ ] No treatment / cure language
- [ ] Prop 65 + jurisdiction (NY, MA, CT) warnings
- [ ] Contact form research-use affirmation

## Phase 8 — QA visual

- [ ] Compare homepage to `ui_kits/store/index.html`
- [ ] Compare footer to Store DC footer (~line 895)
- [ ] Test responsive: 1180 container, 6→3→2 category grid
- [ ] Hover lifts and CTA colors match tokens
- [ ] Dark hero + light catalog contrast

## Quick file map

```
clientwork/                          → documentation (this folder)
clientwork/branding-kit/biohanced-design-system/  → tokens + components
src/app/(site)/                      → site layout + pages
src/components/biohanced/            → React components
src/lib/biohanced-*.ts               → links, pages, products (to add)
public/biohanced/voltage/            → static assets (to populate)
```

## Priority order (recommended)

1. Assets on disk + tokens in CSS
2. Navbar + logo swap
3. Homepage hero + trust strip
4. Product data file + catalog grid
5. Footer legal alignment (partially done)
6. Manufacturing + FAQ pages
7. Cart/checkout (if ecommerce scope confirmed)

## Client inputs still needed

- [ ] Official social URLs
- [ ] Live payment processor / checkout integration
- [ ] Real testimonials and review count
- [ ] Legal review of disclosure text
- [ ] Confirm international shipping list
- [ ] Analytics / GTM IDs
