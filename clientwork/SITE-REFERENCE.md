# Biohanced Labs — Site Reference (Alex HTML Store)

UX and page map from `website-alex-html/Biohanced Labs Store.dc.html` — the client's intended peptide storefront. Use this to replace Found clone page structure.

## Site type

Single-page app with internal `page` state (not separate URLs in prototype). Map each `page` to a Next.js route when implementing.

## Navigation (sticky ink bar, 64px)

| Label | Action | Target page |
|-------|--------|---------------|
| Logo | Home | `home` |
| Catalog | Open catalog | `catalog` |
| Manufacturing Process | Mfg story | `mfg` |
| Lab Results | COA index | `coa` |
| FAQ | FAQ | `faq` |
| Cart | Cart | `cart` (badge = cart count) |

**Next.js route suggestions:**

| Page | Suggested path |
|------|----------------|
| home | `/` |
| catalog | `/catalog` |
| product | `/catalog/[id]` |
| cart | `/cart` |
| checkout | `/checkout` |
| confirm | `/order/confirm` |
| coa | `/lab-results` |
| coa (product) | `/lab-results/[id]` |
| mfg | `/manufacturing` |
| faq | `/faq` |

## Homepage sections (order)

1. **Hero** — eyebrow "Peptides · engineered", headline "Biology, upgraded.", sub copy, CTAs Browse catalog / View COAs, three-vials hero image
2. **Trust strip** (ink) — four green-dot claims (purity, HPLC/MS, COA, cold-chain)
3. **Shop by category** — 6 category tiles with counts
4. **Featured** — 4 product cards + View all
5. **Bundle & save** — up to 6 bundle cards with Add bundle to cart
6. **Manufacturing brief** — stats cards (≥99%, 12-step, COA)
7. **Reviews** — "480+ verified reviews" + testimonial cards
8. **Contact** — split card: ink left (email, hours) + form right
9. **Final CTA** — ink panel "Purity you can verify. Delivery you can count on."

## Catalog page

- Title: **Catalog**
- Sub: Research-grade peptides, organized by application. All compounds ≥99% purity with batch COAs.
- Category filter tabs (all + 6 categories)
- Product grid with from-price and purity

## Product detail page

- Back to catalog link
- Vial visual (DC import component in prototype)
- Category dot + name, purity pill, variant selector (1/2/3 vials)
- Large price, Add to cart
- Tabs: Description, Mechanism, Highlights, Specs, Research profile, FAQ
- View COA button
- Related bundles including this SKU
- Verified reviews count (synthetic in prototype)

## Cart & checkout

- Line items with variant label and per-unit price
- Quantity adjust, remove
- Subtotal, shipping ($12 if &lt; $150)
- Checkout form: contact + payment fields (prototype UI only)
- Order confirm: generated order no `BH######`

## Lab results / COA

- Searchable batch table
- Per-product COA detail: purity hero %, HPLC + Mass Spec, spec table
- Link from product pages

## Manufacturing (`mfg`)

- Headline: **From lab to your research in 12 steps.**
- Stats: >99% HPLC-MS, ISO 17025, 12 Steps, 100% Third-Party Tested
- Guarantee bullets (cleanroom, HPLC, endotoxin, lyophilization, nitrogen seal, -80°C storage)
- **12-step timeline** in 3 phases:
  - Synthesis (steps 1–4)
  - Purification & Testing (5–8)
  - Finishing & Release (9–12)
- Comparison table vs gray-market imports
- Made in USA narrative

## FAQ

Six global FAQs (see below). Product pages have extended `productFaqData()` (9 items).

### Global FAQ topics

1. Not for human use
2. COA provided (HPLC + MS)
3. Shipping and storage (-20°C)
4. Reconstitution (bacteriostatic water)
5. Purity expectations (≥99%)
6. Shipping/returns (1–2 days, 14-day returns, free over $150)

### Product FAQ topics (additional)

Discreet shipping, storage after reconstitution, payment methods (cards + crypto), international shipping, etc.

## Footer structure

### Column 1 — Brand

Logo + short RUO statement

### Column 2 — Shop

Catalog, Lab results, Cart

### Column 3 — Company

About, Manufacturing, Quality

### Column 4 — Support

FAQ, Shipping, Contact

### Badges row

GMP + USA badges + **FOR RESEARCH USE ONLY · NOT FOR USE IN DIAGNOSTIC PROCEDURES · 21 CFR § 809.10(C)(2)**

### Legal disclosures (7 blocks)

1. RUO purchaser affirmation (21+, licensed professional)
2. FDA RUO/IUO exemption citation
3. Not 503A/503B compounding
4. Not drugs/supplements/food
5. CSA / anti-doping responsibility
6. Jurisdiction — no NY, MA, CT; import/export compliance
7. California Prop 65 warning
8. Limitation of liability

### Copyright bar

© 2026 Biohanced Labs · For research use only · Not for human consumption

## Contact block copy

| Field | Value |
|-------|--------|
| Headline | Questions about a compound or your order? |
| Body | Team replies within one business day. Bulk/institutional welcome. |
| Email | research@biohancedlabs.com |
| Hours | Mon–Fri · 9am–6pm ET |
| Form fields | Full name, email, message |
| Submit note | Inquiry relates to laboratory research use only |

## Key marketing lines (reuse)

| Context | Copy |
|---------|------|
| Hero CTA | Browse catalog |
| Secondary CTA | View COAs / View lab results |
| Final CTA headline | Purity you can verify. Delivery you can count on. |
| Final CTA body | Every batch third-party tested, every vial documented, shipped cold-chain from our lab to yours. |
| Mfg US angle | Manufacturing and packaging from start to finish in the USA — no relabeling |

## Other Alex HTML files

| File | Purpose |
|------|---------|
| `biohanced-labs-store.html` | Large embedded store export |
| `Biohanced Labs Carousel.dc.html` | Marketing carousel slides |
| `Biohanced Labs Applications.dc.html` | App / device mockups |
| `doc-page.js` | DC page tooling |

## Found clone vs Biohanced (current app)

| Biohanced intended | Current Next.js app |
|--------------------|---------------------|
| Peptide catalog ecommerce | Found weight-loss medication marketing |
| Catalog / COA / Manufacturing nav | Program, meds, pricing, reviews |
| research@biohancedlabs.com | Found contact patterns |
| Voltage ink + green | Found sage + Quincy/Greycliff |
| 17 peptide SKUs | GLP-1 / oral medication pages |

See [IMPLEMENTATION-CHECKLIST.md](./IMPLEMENTATION-CHECKLIST.md).
