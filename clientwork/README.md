# Biohanced Labs — Client Work Index

Source-of-truth folder for **Biohanced Labs** branding, store UX, product data, and implementation reference. Use this when rebranding the Next.js app away from the Found clone.

## Quick brand snapshot

| Item | Value |
|------|--------|
| **Brand** | Biohanced Labs |
| **Tagline** | Biology, upgraded. |
| **Category** | Research-grade peptide e-commerce (RUO) |
| **Primary colorway** | Voltage — Ink + Warm White + Voltage Green |
| **Fonts** | Archivo 900 (display) · Space Grotesk (UI/body) |
| **Mark** | Bolt on blue→indigo→green gradient tile |
| **Contact** | research@biohancedlabs.com · Mon–Fri 9am–6pm ET |

## Documentation map

| File | Use when you need… |
|------|---------------------|
| [BRAND-GUIDE.md](./BRAND-GUIDE.md) | Voice, positioning, compliance, logo rules, copy patterns |
| [DESIGN-TOKENS.md](./DESIGN-TOKENS.md) | CSS variables, typography scale, spacing, motion |
| [COLORWAYS.md](./COLORWAYS.md) | All six approved colorways with hex values |
| [ASSETS-INVENTORY.md](./ASSETS-INVENTORY.md) | Logos, badges, products, heroes — paths and export list |
| [PRODUCT-CATALOG.md](./PRODUCT-CATALOG.md) | 17 SKUs, pricing tiers, bundles, categories |
| [SITE-REFERENCE.md](./SITE-REFERENCE.md) | Alex HTML store pages, nav, sections, policies |
| [IMPLEMENTATION-CHECKLIST.md](./IMPLEMENTATION-CHECKLIST.md) | Map client brand → `src/` Next.js app |

## Folder layout

```
clientwork/
├── README.md                    ← you are here
├── BRAND-GUIDE.md
├── DESIGN-TOKENS.md
├── COLORWAYS.md
├── ASSETS-INVENTORY.md
├── PRODUCT-CATALOG.md
├── SITE-REFERENCE.md
├── IMPLEMENTATION-CHECKLIST.md
│
├── branding-kit/                ← canonical design export (mirror of alex-html core)
│   ├── biohanced-design-system/ ← tokens, components, guidelines, store UI kit
│   ├── Biohanced Labs Store.dc.html
│   ├── Biohanced Labs Colorways.dc.html
│   ├── Biohanced Labs Logos.dc.html
│   ├── Biohanced Labs Voltage Kit.dc.html
│   ├── uploads/Biohanced_Labs_Pricing_Guide_Public.pdf
│   └── … (vial mockups, carousel, applications DC exports)
│
├── website-alex-html/           ← same kit + doc-page.js; use for store HTML reference
│   └── (parallel structure to branding-kit)
│
├── _downloads/                  ← ignore (failed Google Drive stubs)
│
└── (archives at repo root of clientwork, if present)
    Biohanced Labs Voltage Kit Branding.zip
    Biohanced Labs Website Alex HTML.zip
    Biohanced Labs Voltage Kit Branding PDF.pdf
    WhatsApp Image *.jpeg          ← client reference screenshots
```

## Which folder to use

| Task | Path |
|------|------|
| Design tokens & React primitives | `branding-kit/biohanced-design-system/` |
| Full interactive store (data + UX) | `website-alex-html/Biohanced Labs Store.dc.html` |
| Store homepage specimen | `biohanced-design-system/ui_kits/store/index.html` |
| Public pricing PDF | `branding-kit/uploads/Biohanced_Labs_Pricing_Guide_Public.pdf` |
| Colorway specimens | `Biohanced Labs Colorways.dc.html` (either folder) |

`branding-kit/` and `website-alex-html/` are largely duplicates. Prefer **branding-kit** for the design system; use **website-alex-html** when you need the same DC files with `doc-page.js` tooling.

## Canonical design system entry

Link or import:

```
clientwork/branding-kit/biohanced-design-system/styles.css
```

That file `@import`s `tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css`.

Full narrative brand guide also lives at:

```
clientwork/branding-kit/biohanced-design-system/readme.md
clientwork/branding-kit/biohanced-design-system/SKILL.md
```

## Asset status (important)

Raster PNGs (logos, product shots, hero) are **referenced** by the design system at `biohanced-design-system/assets/` but are **not present** in the current workspace extract (no `.png` files under `clientwork/`). Re-extract from `Biohanced Labs Voltage Kit Branding.zip` or export from `_export_assets.dc.html` / the Voltage Kit DC files. See [ASSETS-INVENTORY.md](./ASSETS-INVENTORY.md).

## App integration status

The Next.js app (`src/`) is still a **Found** marketing clone for most pages. Partial Biohanced work exists:

- `BiohancedFooter.tsx` + `BiohancedVoltageLogo.tsx` — Voltage footer/chrome
- `BiohancedLogo.tsx` + `BiohancedNavbar.tsx` — still Found wordmark/nav patterns
- `globals.css` — Found tokens + Google Fonts import for Archivo/Space Grotesk

See [IMPLEMENTATION-CHECKLIST.md](./IMPLEMENTATION-CHECKLIST.md) for the full migration plan.
