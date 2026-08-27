# Biohanced Labs

Pixel-matched clone of [joinfound.com](https://joinfound.com/) — Next.js + TypeScript + Tailwind.

## Run

```powershell
$env:Path = "D:\ceo\Biohanced Labs\.tools\node;" + $env:Path
npm run dev
```

Open http://localhost:3000

## Structure

```
public/biohanced/
  fonts/     # Quincy CF + Greycliff CF
  hero/      # poster
  icons/     # hero SVGs

src/
  app/                          # App Router + globals
  components/biohanced/         # one component per section
  lib/biohanced-assets.ts       # local + CDN asset map
  lib/biohanced-links.ts        # all URLs (anchors + Found destinations)
  lib/biohanced-insurance-plans.ts  # state → insurer logos
```

## Sections (top → bottom)

Promo bar → Navbar → Hero → Disclaimer → Benefits → Testimonials → Stats → Medicare → Doctor → Timeline → Medications → Microdose → Insurance → FAQ → Footer

All sections pixel-matched and linked. Nav dropdowns wired for Medication + For organizations.

## Notes

- Hero video streams from Found CDN (keeps local disk/RAM light)
- Fonts, hero poster, and icons are local under `public/biohanced/`
- Portable Node lives at `.tools/node` if system Node is missing
