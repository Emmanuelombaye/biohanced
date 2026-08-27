import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedProductCardGrid } from "./BiohancedProductCard";
import { BiohancedSection, BiohancedSectionHeader } from "./BiohancedSection";

const MEDICARE_PRODUCTS = ["bpc157", "ghkcu", "retatrutide"];

export function BiohancedMedicare() {
  return (
    <BiohancedSection id="medicare" tone="mint">
      <div className="bio-container grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <BiohancedSectionHeader
            eyebrow="Manufacturing · USA"
            title="From synthesis to sealed vial — twelve verified steps"
            description="US-synthesized, HPLC-purified, and third-party tested. Every batch ships with a Certificate of Analysis and cold-chain handling."
          />

          <ul className="mt-8 space-y-3 text-[15px] text-bio-neutral-400">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F9E6B]" />
              ≥99% purity by HPLC, identity confirmed by mass spec
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F9E6B]" />
              COA published for every lot
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F9E6B]" />
              Discreet packaging with tracking on every order
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={BIOHENCED_LINKS.manufacturing}
              className="bio-cta inline-flex items-center justify-center rounded-[10px] px-8 py-3.5 text-[15px]"
            >
              View quality standards
            </a>
            <div className="rounded-[12px] border border-[#CFE9CF] bg-bio-white px-5 py-3 shadow-[0_4px_16px_rgba(10,11,14,0.04)]">
              <p className="text-[13px] text-bio-neutral-400 line-through">Gray-market imports</p>
              <p className="font-[Archivo,sans-serif] text-[20px] font-black leading-tight text-bio-ink">
                US verified
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] border border-[#CFE9CF] bg-bio-white p-6 shadow-[0_12px_40px_rgba(10,11,14,0.05)] md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1F9E6B]">
            Representative compounds
          </p>
          <p className="mt-2 text-[15px] text-bio-neutral-400">
            Recovery, longevity, and metabolic pathways — same QC on every SKU.
          </p>
          <BiohancedProductCardGrid
            productIds={MEDICARE_PRODUCTS}
            columns={3}
            className="mt-6"
            mobileRail
            showActions
          />
        </div>
      </div>
    </BiohancedSection>
  );
}
