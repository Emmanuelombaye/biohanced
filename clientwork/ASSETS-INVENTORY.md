# Biohanced Labs — Assets Inventory

Expected raster and reference assets from the client Voltage Kit. Paths below are **canonical** once extracted from `Biohanced Labs Voltage Kit Branding.zip`.

## Current workspace status

As of documentation build: **no `.png` / `.jpeg` files** are present under `clientwork/` (HTML/CSS/JS/PDF only). The design system references assets that should live in:

```
clientwork/branding-kit/biohanced-design-system/assets/
├── logos/
├── products/
└── hero/
```

**Action:** Re-extract the branding zip, or run exports from `_export_assets.dc.html` and product DC files. Copy production assets to:

```
public/biohanced/voltage/logos/
public/biohanced/voltage/products/
public/biohanced/voltage/hero/
```

## Logo & mark exports

From `_export_assets.dc.html` and design guidelines:

| File | Description |
|------|-------------|
| `favicon.png` | App icon / favicon (gradient mark on ink) |
| `icon-gradient-on-dark.png` | Large app icon on ink |
| `icon-gradient-on-light.png` | Large app icon on warm white |
| `icon-white-bluebolt.png` | White tile, blue bolt |
| `logo-horizontal-on-dark.png` | Mark + wordmark, ink bg |
| `logo-horizontal-on-light.png` | Mark + wordmark, warm white bg |
| `logo-stacked-on-dark.png` | Stacked lockup on ink |
| `wordmark-on-dark.png` | Text lockup only |
| `logo-mono-black.png` | Mono mark on white |
| `logo-reversed-on-dark.png` | White mark tile on ink-2 |
| `avatar.png` | Circular social avatar |
| `stamp-on-green.png` | Stamp on Voltage green |

### Credential badges

| File | Alt text (store) |
|------|------------------|
| `badge-gmp.png` | GMP Certified |
| `badge-usa-real.png` | Made in the USA |

Store HTML also references `logos/badge-gmp.png` at kit root (parallel to `assets/logos/`).

## Product images (17 SKUs)

Expected at `assets/products/{id}.png`:

| File | Product |
|------|---------|
| `retatrutide.png` | Retatrutide |
| `cjcdac.png` | CJC-1295 (with DAC) |
| `ipamorelin.png` | Ipamorelin |
| `tesamorelin.png` | Tesamorelin |
| `sermorelin.png` | Sermorelin |
| `bpc157.png` | BPC-157 |
| `tb500.png` | TB-500 |
| `ghkcu.png` | GHK-Cu |
| `igf1lr3.png` | IGF-1 LR3 |
| `semax.png` | Semax |
| `epithalon.png` | Epithalon |
| `motsc.png` | MOTS-c |
| `nad.png` | NAD+ |
| `pt141.png` | PT-141 |
| `mt2.png` | MT-2 (Melanotan 2) |
| `aminomq.png` | 5-Amino-1MQ |
| `bacwater.png` | Bacteriostatic Water |

**Hero:** `assets/hero/three-vials.png` — three vials for homepage hero.

## Design canvas exports (reference, not runtime)

| File | Contents |
|------|----------|
| `Biohanced Labs Store.dc.html` | Full store + embedded product JSON |
| `Biohanced Labs Colorways.dc.html` | Six colorway boards |
| `Biohanced Labs Logos.dc.html` | Logo directions |
| `Biohanced Labs Voltage Kit.dc.html` | Voltage kit board |
| `Biohanced Labs Carousel.dc.html` | Carousel slides |
| `Biohanced Labs Applications.dc.html` | Application mockups |
| `Biohanced Labs Vial Mockups.dc.html` | Vial renders |
| `Vial.dc.html` / `VialReal.dc.html` | Vial component templates |
| `_export_assets.dc.html` | Logo export definitions |

## Guidelines specimens (HTML)

Open in browser for visual QA:

```
biohanced-design-system/guidelines/
├── colors-voltage.html
├── colors-colorways.html
├── colors-neutrals.html
├── colors-gradients.html
├── colors-semantic.html
├── type-display.html
├── type-scale.html
├── type-lockup.html
├── type-text.html
├── spacing-scale.html
├── spacing-radii.html
├── brand-mark.html
├── brand-logos.html
└── brand-badges.html
```

## React / HTML components

```
biohanced-design-system/components/
├── Button/
├── Badge/
├── Logo/
├── ProductCard/
└── CategoryTile/
```

Each folder: `.jsx`, `.d.ts`, `.prompt.md`, `*.card.html` preview.

## Store UI kit

```
biohanced-design-system/ui_kits/store/index.html  — homepage specimen
biohanced-design-system/ui_kits/store/README.md
```

## PDF & uploads

| Path | Description |
|------|-------------|
| `branding-kit/uploads/Biohanced_Labs_Pricing_Guide_Public.pdf` | Public pricing guide |
| `website-alex-html/uploads/Biohanced_Labs_Pricing_Guide_Public.pdf` | Duplicate |

## Archives (if present at `clientwork/` root)

| File | Notes |
|------|-------|
| `Biohanced Labs Voltage Kit Branding.zip` | Full branding kit (~103 MB) |
| `Biohanced Labs Website Alex HTML.zip` | Alex HTML export |
| `Biohanced Labs Voltage Kit Branding PDF.pdf` | Printable kit |
| `WhatsApp Image 2026-08-26*.jpeg` | Client reference screenshots |

## App assets today

```
public/biohanced/icons/          — Found-era SVGs (insurance, phone, scale) — replace when rebranding
src/components/biohanced/BiohancedVoltageLogo.tsx — SVG bolt + lockup (no raster dependency)
```

## SVG bolt (inline)

Use when PNGs unavailable:

```svg
<svg viewBox="0 0 100 100">
  <path d="M57 9 L29 55 L46 55 L43 91 L73 41 L55 41 Z" fill="currentColor"/>
</svg>
```

Mark tile background: `var(--grad-mark)` or `var(--grad-mark-soft)`.
