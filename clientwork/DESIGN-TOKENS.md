# Biohanced Labs — Design Tokens

Copy-paste reference from `branding-kit/biohanced-design-system/tokens/`. Import via `styles.css` or map into Tailwind / `globals.css`.

## Colors (Voltage)

### Brand accents

| CSS variable | Hex | Notes |
|--------------|-----|-------|
| `--volt-blue` | `#2E6BFF` | Electric Blue |
| `--volt-blue-soft` | `#4F7BFF` | Mark gradient |
| `--volt-indigo` | `#7C5CFF` | Indigo |
| `--volt-indigo-soft` | `#8F74F5` | Mark gradient mid |
| `--volt-green` | `#B6FF3A` | Voltage Green — primary CTA |
| `--volt-green-hover` | `#C6FF5C` | CTA hover |
| `--volt-green-soft` | `#B6EE6C` | Mark gradient tail |

### Neutrals

| Variable | Hex |
|----------|-----|
| `--ink` | `#0A0B0E` |
| `--ink-2` | `#14161A` |
| `--ink-3` | `#16181D` |
| `--line-dark` | `#1C1F27` |
| `--line-dark-2` | `#262932` |
| `--slate` | `#6C7280` |
| `--steel` | `#9AA0A8` |
| `--mist` | `#E6E8EC` |
| `--line-light` | `#ECECEA` |
| `--warm-white` | `#F6F5F2` |
| `--cream` | `#FBF4EC` |
| `--white` | `#FFFFFF` |

### Semantic

| Variable | Hex | Use |
|----------|-----|-----|
| `--success` | `#1F9E6B` | Purity on white |
| `--success-ink` | `#1F7A52` | Purity pill text |
| `--success-bg` | `#EEF7EE` | Purity pill bg |
| `--success-line` | `#CFE9CF` | Purity pill border |
| `--price-strike` | `#A3A6AD` | Strikethrough |

### Category dots

| Variable | Hex | Category |
|----------|-----|----------|
| `--cat-recovery` | `#4F7BFF` | Healing & Recovery |
| `--cat-gh` | `#8F74F5` | Growth Hormone |
| `--cat-metabolic` | `#5A9E1F` | Metabolic & Weight |
| `--cat-longevity` | `#14B89A` | Longevity & Cellular |
| `--cat-specialty` | `#E0772E` | Specialty |
| `--cat-essentials` | `#9AA0A8` | Essentials |

### Gradients

```css
--grad-mark: linear-gradient(150deg, #2E6BFF, #7C5CFF 55%, #B6FF3A);
--grad-mark-soft: linear-gradient(145deg, #4F7BFF, #8F74F5 50%, #B6EE6C);
--grad-hero: linear-gradient(135deg, #0B0D12, #121A2B 60%, #15241F);
```

### Semantic aliases (use in product code)

| Variable | Maps to |
|----------|---------|
| `--bg-page` | `--warm-white` |
| `--bg-surface` | `--white` |
| `--bg-invert` | `--ink` |
| `--text-strong` | `--ink-3` |
| `--text-body` | `#14161A` |
| `--text-muted` | `#71757D` |
| `--text-on-dark` | `#C9CCD2` |
| `--text-on-dark-muted` | `--steel` |
| `--border-card` | `--line-light` |
| `--accent` | `--volt-green` |
| `--accent-on` | `--ink` |
| `--link` | `#5566CC` |
| `--link-hover` | `#2E6BFF` |

## Typography

### Families

```css
--font-display: "Archivo", sans-serif;
--font-text: "Space Grotesk", sans-serif;
```

### Weights

`--fw-regular` 400 · `--fw-medium` 500 · `--fw-semibold` 600 · `--fw-bold` 700 · `--fw-black` 900

### Size scale

| Variable | Size | Use |
|----------|------|-----|
| `--fs-hero` | 58px | Hero |
| `--fs-display` | 42px | Page title |
| `--fs-h1` | 34px | |
| `--fs-h2` | 28px | Section |
| `--fs-h3` | 22px | |
| `--fs-product` | 20px | Card name |
| `--fs-price` | 17px | Price |
| `--fs-lead` | 16px | Lead paragraph |
| `--fs-body` | 15px | |
| `--fs-sm` | 14px | Nav, buttons |
| `--fs-xs` | 13px | |
| `--fs-2xs` | 12px | |
| `--fs-micro` | 11px | Eyebrow / legal |

### Letter-spacing

| Variable | Value | Use |
|----------|-------|-----|
| `--ls-tight` | −0.03em | Hero |
| `--ls-display` | −0.02em | Headings |
| `--ls-eyebrow` | 0.24em | Uppercase eyebrows |
| `--ls-label` | 0.14em | Card labels |
| `--ls-lockup` | 0.5em | LABS wordmark |

### Line height

`--lh-tight` 0.98 · `--lh-snug` 1.2 · `--lh-body` 1.55

## Spacing & layout

| Variable | Value |
|----------|-------|
| `--sp-1` … `--sp-20` | 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px |
| `--container` | 1180px |
| `--gutter` | 24px |
| `--nav-height` | 64px |
| `--section-pad-y` | 64px |

### Border radius

| Variable | Value | Use |
|----------|-------|-----|
| `--r-xs` | 8px | Small pills |
| `--r-sm` | 10px | Buttons, inputs |
| `--r-md` | 14px | Category tiles |
| `--r-lg` | 16px | Product cards |
| `--r-xl` | 18px | Bundle cards |
| `--r-2xl` | 26px | Hero panels |
| `--r-pill` | 999px | Pills |
| `--r-mark` | 22px | Mark at 34px nav size |

## Effects & motion

### Shadows

```css
--shadow-card: 0 1px 3px rgba(0,0,0,.10), 0 8px 30px rgba(0,0,0,.06);
--shadow-hover: 0 16px 36px rgba(0,0,0,.10);
--shadow-tile: 0 12px 30px rgba(0,0,0,.08);
--shadow-mark: 0 12px 36px rgba(46,107,255,.40);
--shadow-vial: 0 18px 44px rgba(0,0,0,.30);
```

### Borders

`--border-light`: 1px solid `--line-light` · `--border-dark`: 1px solid `--line-dark`

### Motion

```css
--ease-lift: cubic-bezier(.2,.8,.3,1);
--dur-hover: .22s;
--dur-press: .08s;
```

**Hover:** `translateY(-2 to -4px)` + `brightness(1.03)` over `--dur-hover`  
**Press:** `translateY(0) scale(.97) brightness(.98)` over `--dur-press`

## Tailwind migration sketch

When replacing Found tokens in `src/app/globals.css`, map:

- Page bg → `#F6F5F2`
- Primary CTA → `#B6FF3A` / text `#0A0B0E`
- Dark surfaces → `#0A0B0E`
- Font families → Archivo + Space Grotesk (already partially imported)

Reference components: `biohanced-design-system/components/Button/Button.jsx`, `Badge`, `ProductCard`, `CategoryTile`.
