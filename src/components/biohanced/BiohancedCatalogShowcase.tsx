import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedProductCardGrid } from "./BiohancedProductCard";
import { BiohancedSection, BiohancedSectionHeader } from "./BiohancedSection";

/** Centerpiece catalog grid — full editorial cards with blurbs and batch info */
const SHOWCASE_IDS = [
  "bpc157",
  "retatrutide",
  "ghkcu",
  "ipamorelin",
  "tb500",
  "cjcdac",
];

export function BiohancedCatalogShowcase() {
  return (
    <BiohancedSection tone="white" bordered id="catalog-showcase">
      <div className="bio-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <BiohancedSectionHeader
            eyebrow="Full catalog"
            title="Research-grade compounds, fully documented"
            description="Every SKU includes dose, batch lot, purity by HPLC, lyophilized form, and a published COA — the detail your lab expects from a serious supplier."
            className="max-w-2xl"
          />
          <a
            href={BIOHENCED_LINKS.catalog}
            className="shrink-0 text-[15px] font-semibold text-[#2E6BFF] hover:underline"
          >
            Browse all 17 →
          </a>
        </div>

        <BiohancedProductCardGrid
          productIds={SHOWCASE_IDS}
          columns={3}
          className="mt-12"
          showActions
        />

        <div className="mt-12 grid gap-4 rounded-[16px] border border-bio-neutral-200 bg-bio-neutral-100 p-6 md:grid-cols-3 md:gap-8 md:p-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2E6BFF]">
              Documentation
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-bio-neutral-400">
              COA, HPLC chromatograms, and mass-spec identity on every release.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1F9E6B]">
              Storage &amp; form
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-bio-neutral-400">
              Lyophilized powder · reconstitute with bacteriostatic water · store at −20°C.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8F74F5]">
              Made in USA
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-bio-neutral-400">
              US synthesis and packaging from start to finish — no relabeling.
            </p>
          </div>
        </div>
      </div>
    </BiohancedSection>
  );
}
