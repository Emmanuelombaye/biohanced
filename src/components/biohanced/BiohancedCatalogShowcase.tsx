import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedMotionRail } from "./BiohancedMotionRail";
import { BiohancedProductCard } from "./BiohancedProductCard";
import { BiohancedSection, BiohancedSectionHeader } from "./BiohancedSection";

const SHOWCASE_IDS = [
  "bpc157",
  "retatrutide",
  "ghkcu",
  "ipamorelin",
  "tb500",
  "cjcdac",
] as const;

const INFO_CARDS = [
  {
    eyebrow: "Documentation",
    eyebrowColor: "text-[#2E6BFF]",
    body: "COA, HPLC chromatograms, and mass-spec identity on every release.",
  },
  {
    eyebrow: "Storage & form",
    eyebrowColor: "text-[#1F9E6B]",
    body: "Lyophilized powder · reconstitute with bacteriostatic water · store at −20°C.",
  },
  {
    eyebrow: "Made in USA",
    eyebrowColor: "text-[#8F74F5]",
    body: "US synthesis and packaging from start to finish — no relabeling.",
  },
] as const;

/** Centerpiece catalog — motion rail on desktop, snap scroll on phone */
export function BiohancedCatalogShowcase() {
  return (
    <BiohancedSection tone="white" bordered id="catalog-showcase" className="overflow-x-hidden">
      <div className="bio-container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <BiohancedSectionHeader
            eyebrow="Full catalog"
            title="Research-grade compounds, fully documented"
            description="Every SKU includes dose, batch lot, purity by HPLC, lyophilized form, and a published COA — the detail your lab expects from a serious supplier."
            className="max-w-2xl"
          />
          <Link
            href={BIOHENCED_LINKS.catalog}
            className="bio-btn-outline shrink-0 self-start px-5 py-2.5 text-[14px] sm:self-auto"
          >
            Browse all 17
          </Link>
        </div>

        <p className="mt-4 text-[13px] text-bio-neutral-400 md:hidden">
          Swipe to browse · tap a card to view or add to cart
        </p>
        <p className="mt-4 hidden text-[13px] text-bio-neutral-400 md:block">
          Hover to pause · cards scroll automatically
        </p>

        <BiohancedMotionRail className="mt-6 sm:mt-8" loop duration={52}>
          {SHOWCASE_IDS.map((id) => (
            <BiohancedProductCard
              key={id}
              productId={id}
              showActions
              className="h-full w-full"
            />
          ))}
        </BiohancedMotionRail>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-12 lg:gap-6">
          {INFO_CARDS.map((card) => (
            <div
              key={card.eyebrow}
              className="rounded-[14px] border border-bio-neutral-200 bg-bio-neutral-100 p-5 sm:p-6"
            >
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${card.eyebrowColor}`}
              >
                {card.eyebrow}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-bio-neutral-400">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </BiohancedSection>
  );
}
