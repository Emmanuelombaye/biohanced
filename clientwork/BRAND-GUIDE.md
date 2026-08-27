# Biohanced Labs — Brand Guide (implementation)

Operational summary for developers and designers. Full design-system narrative: `branding-kit/biohanced-design-system/readme.md`.

## Positioning

- **What:** US-synthesized, research-grade peptides for laboratory use.
- **Promise:** Purity you can verify — third-party HPLC & mass spectrometry on every batch.
- **Hero line:** **Biology, upgraded.**
- **Eyebrow:** Peptides · engineered
- **Sub-hero:** US-synthesized research-grade peptides, third-party verified by HPLC & mass spectrometry. Built for labs that don't compromise on purity.

## Voice & copy

| Rule | Detail |
|------|--------|
| Tone | Clinical, precise, evidence-first — never hype |
| Person | Brand: third-person / imperative ("Browse catalog", "View COAs"). Testimonials: first-person |
| Casing | Sentence case for body and buttons. UPPERCASE only for eyebrows (`.24em` tracking), small labels, wordmark |
| Product names | Keep scientific casing: BPC-157, GHK-Cu, CJC-1295, MOTS-c, NAD+, 5-Amino-1MQ |
| Numbers | Purity %, batch IDs (BH-0806), doses (5mg), mechanisms — specificity is the brand |
| Separator | Middle dot `·` for metadata ("Peptides · engineered", "Research peptide · lyophilized") |
| Emoji | None |

### Compliance language (required)

Use on product pages, footer, and checkout:

- **For research use only**
- **Not for human consumption**
- Products described as "studied for…", "research interest" — never as treatments or cures
- Footer regulatory block includes RUO exemption (21 CFR § 809.10(c)(2)), not a compounding pharmacy, Prop 65 warning, jurisdiction limits (no NY, MA, CT per store copy)

## Visual identity — Voltage (primary)

| Role | Hex | Usage |
|------|-----|--------|
| Ink | `#0A0B0E` | Nav, hero fields, footer |
| Warm White | `#F6F5F2` | Page background |
| Voltage Green | `#B6FF3A` | Primary CTA, accent ticks, LABS label on dark |
| Electric Blue | `#2E6BFF` | Mark gradient start, links |
| Indigo | `#7C5CFF` | Mark gradient mid |
| Success green | `#1F9E6B` | Purity % on cards (readable on white) |

**Signal color rule:** Voltage Green is the **single** primary action color. Do not use it for decorative fills everywhere — reserve for CTA + small accent dots.

## Logo system

### Bolt mark (SVG)

```svg
<path d="M57 9 L29 55 L46 55 L43 91 L73 41 L55 41 Z" />
```

ViewBox `0 0 100 100`. White knockout on gradient tile in most contexts.

### Wordmark lockup

- **BIOHANCED** — Archivo 900, tight tracking (−0.02em)
- **LABS** — Space Grotesk 600, letter-spacing `0.5em` (nav uses ~0.3em), Voltage Green on dark backgrounds

### Variants (exported PNG names)

| Asset | When to use |
|-------|-------------|
| `logo-horizontal-on-dark` | Nav, footer on ink |
| `logo-horizontal-on-light` | Light headers, documents |
| `logo-stacked-on-dark` | Hero, splash |
| `wordmark-on-dark` | Text-only lockup |
| `logo-mono-black` | Print / mono contexts |
| `logo-reversed-on-dark` | White mark tile on ink-2 |
| `favicon` / `icon-gradient-on-dark` | App icon, favicon |
| `stamp-on-green` | Social / stamp treatments |

Live UI: prefer `Logo` component (`biohanced-design-system/components/Logo/`) or `BiohancedVoltageLogo.tsx` in the app. Use PNGs for pixel-final marketing exports.

### Credential badges

- `badge-gmp.png` — GMP certified
- `badge-usa-real.png` — Made in the USA
- `stamp-on-green.png` — Brand stamp on green field

## Typography

| Family | Role | Weights |
|--------|------|---------|
| Archivo | Display — headlines, product names, prices | 900 primary |
| Space Grotesk | Body, UI, labels, eyebrows | 400–700 |

Google Fonts URL (matches source files):

```
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Archivo:wght@500;600;700;800;900&display=swap
```

### Display scale

| Token | Size | Use |
|-------|------|-----|
| Hero | 58px | Home hero headline |
| Display | 42px | Page titles |
| H2 | 28px | Section titles |
| Product name | 20px | Product cards |
| Price | 17px | From $XX |

## Layout patterns

- **Container:** 1180px max, 24px gutters
- **Nav:** sticky, 64px height, ink background
- **Section rhythm:** ~64px vertical padding between major blocks
- **Grids:** categories 6-up, featured products 4-up, bundles 3-up

## Surfaces & components

- **Light mode:** warm white page, white cards, `#ECECEA` borders
- **Dark mode:** ink with subtle blue/green radial glows in corners
- **Product imagery:** vials on dark blue gradient panels; soft drop shadow
- **Cards:** radius 14px (tiles) / 16px (products) / 18px (bundles); hover lift −3px, `.22s` ease
- **Primary button:** Voltage green fill, ink text, 10px radius, hover `#C6FF5C`
- **Outline button on dark:** 1px `#262932` border, white text

## Trust strip (homepage)

Repeat with green dot ticks:

- ≥99% purity, every batch
- Third-party HPLC & MS tested
- COA on every product
- Cold-chain shipping

## Iconography

- **Brand:** bolt only (no bundled icon library in client files)
- **UI:** colored category dots, green trust ticks, text-forward nav
- **Suggested add-on (not in client kit):** Lucide — thin strokes; confirm with client before standardizing

## Contact & business

| Field | Value |
|-------|--------|
| Email | research@biohancedlabs.com |
| Hours | Mon–Fri · 9am–6pm ET |
| Response SLA | Within one business day (contact section copy) |

No official social URLs in the Alex HTML store export — add when client provides.

## Manufacturing story (key stats)

Use on mfg / quality pages:

- **>99%** HPLC-MS Purity
- **ISO 17025** Accredited Testing
- **12 Steps** Verified Process
- **100%** Third-Party Tested

Headline: **From lab to your research in 12 steps.**

US manufacturing angle: synthesis through lyophilization in the USA — not import-and-relabel.

## Alternate colorways

Six approved campaign accents — same Ink + Warm White frame. Details: [COLORWAYS.md](./COLORWAYS.md). Do not change mark gradients outside these palettes without client approval.
