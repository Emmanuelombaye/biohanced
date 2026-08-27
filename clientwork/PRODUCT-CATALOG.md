# Biohanced Labs — Product Catalog

Structured from `Biohanced Labs Store.dc.html` `products()` and `bundleDeals()`. Prices are **1 / 2 / 3 vial** tiers from store prototype. Cross-check with `Biohanced_Labs_Pricing_Guide_Public.pdf` before production.

**Pricing format:** `tier(1vial, 2vials, 3vials)` → labels "1 vial", "2 vials", "3 vials"

## Categories

| ID | Display name | Products | Dot color |
|----|--------------|----------|-----------|
| `recovery` | Healing & Recovery | 4 | `#4F7BFF` |
| `gh` | Growth Hormone | 5 | `#8F74F5` |
| `metabolic` | Metabolic & Weight | 2 | `#5A9E1F` |
| `longevity` | Longevity & Cellular | 4 | `#14B89A` |
| `specialty` | Specialty | 3 | `#E0772E` |
| `essentials` | Essentials | 1 | `#9AA0A8` |

## SKU table

| ID | Name | Category | Dose | Purity | Batch | From $ (1 vial) | 2 vials | 3 vials | Image |
|----|------|----------|------|--------|-------|-----------------|---------|---------|-------|
| `retatrutide` | Retatrutide | metabolic | 15mg | 99.5% | BH-0801 | $249 | $469 | $669 | retatrutide.png |
| `cjcdac` | CJC-1295 (with DAC) | gh | 5mg | 99.3% | BH-0802 | $139 | $259 | $369 | cjcdac.png |
| `ipamorelin` | Ipamorelin | gh | 5mg | 99.6% | BH-0803 | $79 | $149 | $209 | ipamorelin.png |
| `tesamorelin` | Tesamorelin | gh | 5mg | 99.5% | BH-0804 | $139 | $259 | $369 | tesamorelin.png |
| `sermorelin` | Sermorelin | gh | 5mg | 99.2% | BH-0805 | $49 | $89 | $129 | sermorelin.png |
| `bpc157` | BPC-157 | recovery | 5mg | 99.7% | BH-0806 | $59 | $109 | $159 | bpc157.png |
| `tb500` | TB-500 | recovery | 5mg | 99.4% | BH-0807 | $69 | $129 | $185 | tb500.png |
| `ghkcu` | GHK-Cu | longevity | 50mg | 99.8% | BH-0808 | $129 | $239 | $339 | ghkcu.png |
| `igf1lr3` | IGF-1 LR3 | recovery | 0.1mg | 99.1% | BH-0809 | $79 | $149 | $215 | igf1lr3.png |
| `semax` | Semax | specialty | 10mg | 99.3% | BH-0810 | $69 | $129 | $185 | semax.png |
| `epithalon` | Epithalon | longevity | 10mg | 99.4% | BH-0811 | $59 | $109 | $159 | epithalon.png |
| `motsc` | MOTS-c | longevity | 10mg | 99.2% | BH-0812 | $99 | $189 | $269 | motsc.png |
| `nad` | NAD+ | longevity | 500mg | 99.0% | BH-0813 | $99 | $189 | $269 | nad.png |
| `pt141` | PT-141 | specialty | 10mg | 99.3% | BH-0814 | $74 | $139 | $199 | pt141.png |
| `mt2` | MT-2 (Melanotan 2) | specialty | 10mg | 99.3% | BH-0815 | $64 | $119 | $169 | mt2.png |
| `aminomq` | 5-Amino-1MQ | metabolic | 50mg | 99.0% | BH-0816 | $79 | $149 | $215 | aminomq.png |
| `bacwater` | Bacteriostatic Water | essentials | 10mL | USP grade | BH-0817 | $12.99 | $23.99 | $32.99 | bacwater.png |

### Featured on homepage (store specimen)

BPC-157 ($59), Retatrutide ($249), GHK-Cu ($129), Ipamorelin ($79).

## Default product specs (peptides)

| Field | Value |
|-------|-------|
| Appearance | White lyophilized powder |
| Identity | Conforms (MS) |
| Test method | HPLC / Mass Spec |
| Reconstitution | Bacteriostatic water |
| Storage | -20°C, desiccated |
| Shelf life | 24 months |

**Exceptions:** 5-Amino-1MQ and Bacteriostatic Water have `customSpecs` in source (solubility, preservative, etc.).

## Bundle deals

| Bundle ID | Products | Bundle $ | Regular $ | Note |
|-----------|----------|----------|------------|------|
| `bpc-tb` | BPC-157 + TB-500 | $119 | $128 | Recovery stack |
| `cjc-ipa` | CJC-1295 DAC + Ipamorelin | $199 | $218 | GH-axis pairing |
| `tesa-igf` | Tesamorelin + IGF-1 LR3 | $199 | $218 | GHRH + IGF analog |
| `ghk-mots` | GHK-Cu + MOTS-c | $209 | $228 | Cellular + mitochondrial |
| `ghk-nad` | GHK-Cu + NAD+ | $209 | $228 | Longevity pairing |
| `semax-nad` | Semax + NAD+ | $155 | $168 | Cognitive + cellular energy |
| `pt-mt2` | PT-141 + MT-2 | $125 | $138 | Melanocortin pathway |

Homepage shows up to 6 bundle cards; catalog product pages filter bundles that include current SKU.

## Shipping (store logic)

| Rule | Value |
|------|-------|
| Shipping under $150 | $12 |
| Shipping $150+ | Free |
| Dispatch | 1–2 business days |
| Returns | Unopened, 14 days |

## Research metadata (per SKU)

Full `researchData()` in Store DC includes molecular weight, sequence, typical research dose/frequency/duration. Use for PDP "Research profile" tabs — not for human dosing claims.

Example entries:

- **BPC-157:** 1419.5 Da · 250–500 mcg · 1–2× daily · 4–6 week cycles
- **Retatrutide:** ≈4731 Da · 2–12 mg titrated · 1× weekly
- **NAD+:** 663.4 g/mol · 100–500 mg · cyclical

## Testimonials (prototype)

Store includes sample reviews (Dr. Lena Ortiz, Marcus Feld, etc.) — replace with verified client content for production.

## JSON extraction

Product array is embedded in `Biohanced Labs Store.dc.html` inside `products()` (~line 1014). For app seed data, copy that function output or parse into `src/lib/biohanced-products.ts`.
