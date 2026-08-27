---
name: biohanced-labs-design
description: Use this skill to generate well-branded interfaces and assets for Biohanced Labs (research-grade peptide e-commerce brand), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files:
- `readme.md` — full brand guide (voice, visual foundations, iconography).
- `styles.css` — link this for all tokens; `tokens/` holds the raw custom properties.
- `components/` — Button, Badge, Logo, ProductCard, CategoryTile (React + `.d.ts` + `.prompt.md`).
- `ui_kits/store/` — storefront homepage recreation.
- `assets/` — logos, credential badges, 17 product shots.

Brand shorthand: Ink `#0A0B0E` + Warm White `#F6F5F2` base; Voltage Green `#B6FF3A` is the single signal/CTA color; blue→indigo→green bolt mark. Archivo 900 for display, Space Grotesk for text. Clinical, evidence-first voice. No emoji.
