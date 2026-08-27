# Biohanced Labs — Design System

The brand system for **Biohanced Labs**, a research-grade peptide lab and e-commerce brand. Positioning: "Biology, upgraded." — US-synthesized, third-party-verified (HPLC & mass spec) research peptides for labs that don't compromise on purity. Voice is clinical, confident, transparency-obsessed.

Everything here is derived from the brand's own working files in the parent project:
- `Biohanced Labs Store.dc.html` — full interactive storefront (home, catalog, product detail, cart, checkout, COA, FAQ) and the product catalog data (17 SKUs).
- `Biohanced Labs Logos.dc.html` — logo directions and the Voltage lockup system.
- `Biohanced Labs Colorways.dc.html` — the six approved colorways.
- `logos/` and `assets/products/` — exported brand + product PNGs (copied into `assets/` here).

---

## Index / manifest

- **`styles.css`** — the single entry point consumers link. `@import`s the four token files.
- **`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `effects.css` (CSS custom properties).
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand).
- **`components/`** — reusable React primitives: `Button`, `Badge`, `Logo`, `ProductCard`, `CategoryTile`.
- **`ui_kits/store/`** — storefront homepage recreation + Starting Point.
- **`assets/`** — `logos/` (18 marks/lockups/badges), `products/` (17 product shots), `hero/three-vials.png`.
- **`SKILL.md`** — makes this folder usable as a downloadable Agent Skill.

---

## Content fundamentals

- **Voice:** clinical, precise, confidence through evidence — never hype. The hero is a two-word declarative: "Biology, upgraded." Body copy leads with proof ("third-party verified by HPLC & mass spectrometry").
- **Person:** third-person / imperative for the brand ("Browse catalog", "View COAs"); customer testimonials are first-person.
- **Casing:** Sentence case for body and buttons. UPPERCASE only for eyebrows (`.24em` tracking), small labels, and the wordmark. Product names keep their scientific casing exactly (BPC-157, GHK-Cu, CJC-1295, MOTS-c, NAD+, 5-Amino-1MQ).
- **Numbers everywhere, but earned:** purity percentages (99.7%), batch IDs (BH-0806), doses (5mg), receptor mechanisms. Specificity IS the brand.
- **Compliance framing:** "For research use only", "Not for human consumption" appear in labels and footer. Products are described in research terms ("studied for…", "research interest"), never as treatments.
- **Emoji:** none. Ever.
- **Punctuation motif:** the middle dot `·` separates metadata ("Peptides · engineered", "Research peptide · lyophilized").

---

## Visual foundations

- **Palette:** an Ink (`#0A0B0E`) + Warm White (`#F6F5F2`) base carries everything. The signal color is **Voltage Green `#B6FF3A`** — used sparingly for the single primary CTA and accent ticks. Electric Blue `#2E6BFF` → Indigo `#7C5CFF` → Voltage Green is the mark gradient. Five alternate colorways (Plasma, Ember, Biotic, Aurora, Graphite) exist for campaigns but keep the same Ink/Warm-White frame.
- **Type:** two families only. **Archivo 900** (very tight tracking, −.02 to −.03em) for all display — headlines, product names, prices. **Space Grotesk** for body, UI, labels, eyebrows. The wordmark = Archivo `BIOHANCED` + Space Grotesk `LABS` tracked `.5em`.
- **Backgrounds:** two modes. Light surfaces = warm white with white cards. Dark surfaces = ink with subtle radial "glow" gradients (blue/green) bleeding from a corner. Hero uses `--grad-hero` (dark blue-green). No photography backgrounds; product imagery is shot on dark and floated.
- **Product imagery:** vials/products on dark blue gradient panels, floated with a soft drop shadow; on light heroes they sit on a soft white radial panel so labels stay legible.
- **Cards:** white, 1px `#ECECEA` border, generous radius (14px tiles / 16px products / 18px bundles), soft low-contrast shadow (`0 1px 3px + 0 8px 30px` at 6–10% black). They lift −3/−4px on hover with a stronger shadow.
- **Corner radii:** buttons/inputs 10px, tiles 14px, product cards 16px, bundle cards 18px, hero panels 26px, app-mark ~29% of its size.
- **Shadows:** soft and diffuse, never harsh. The gradient mark gets a colored glow (`rgba(46,107,255,.4)`).
- **Motion:** one signature ease `cubic-bezier(.2,.8,.3,1)`. Hover = `translateY(-2 to -4px)` + `brightness(1.03)` over .22s. Press = `translateY(0) scale(.97) brightness(.98)` over .08s (quick snap). No bounces, no long fades.
- **Borders & dividers:** hairlines — `#ECECEA` on light, `#1C1F27` on ink.
- **Transparency/blur:** minimal. Used only for the corner glow radials and the hero's soft white product panel. No glassmorphism.
- **Layout:** 1180px max container, 24px gutters, sticky ink nav (64px). Sections separated by ~64px vertical rhythm. Category grid is 6-up, featured products 4-up, bundles 3-up.

---

## Iconography

- **Brand mark:** a single custom **bolt** glyph (`M57 9 L29 55 L46 55 L43 91 L73 41 L55 41 Z` on a 0–100 viewBox), knocked out of the gradient tile. This is the one proprietary shape and recurs at every size (nav 18px → app icon 74px).
- **UI icons:** the working storefront is icon-light — it leans on the bolt, colored dots (category taxonomy, trust ticks), and text rather than a broad icon set. There is **no bundled icon font or SVG icon library** in the source.
- **Recommendation (intentional addition):** for future UI needs, pair with **Lucide** (CDN) — thin 1.5–2px strokes match the clinical tone. Flagged as a substitution, not part of the original brand; confirm before standardizing.
- **Emoji / unicode:** emoji never used. The middle dot `·` is used typographically as a separator, not as an icon.
- **Credential badges:** raster PNGs in `assets/logos/` (`badge-gmp.png`, `badge-usa-real.png`, `stamp-on-green.png`).

---

## Components

| Component | What it is |
|---|---|
| `Button` | Voltage-green primary CTA + dark/outline/ghost variants, 3 sizes |
| `Badge` | purity %, save pill, category dot+label, cart-count chip |
| `Logo` | bolt mark + BIOHANCED/LABS lockup (horizontal/stacked/mark) |
| `ProductCard` | dark image panel + category, name, from-price, purity |
| `CategoryTile` | gradient mark + category name + count |

These mirror the primitives the storefront actually uses. The store DC itself is authored in vanilla (not React); these React versions package the same visual vocabulary for reuse.

### Intentional additions
- **Lucide icons** (recommendation only) — the source ships no icon library; see Iconography.

---

## Caveats / substitutions

- **Fonts** (Archivo, Space Grotesk) load from **Google Fonts**, matching the source files exactly — no local binaries are shipped. If you need offline/self-hosted webfonts, drop the `.woff2` files in `assets/fonts/` and add `@font-face` rules.
- **No icon set** in the source — Lucide is only a suggested pairing.
- Component **card previews are static HTML mirrors** of the JSX (they render the exact same markup/tokens) so they display reliably; the `.jsx`/`.d.ts` files are the real importable components.
