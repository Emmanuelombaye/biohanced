import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedProductCardGrid } from "./BiohancedProductCard";

const MEDICARE_PRODUCTS = ["bpc157", "ghkcu", "retatrutide"];

export function BiohancedMedicare() {
  return (
    <section id="medicare" className="bg-[#EEF7EE] py-16 md:py-24 text-[#0A0B0E]">
      <div className="bio-container grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1F9E6B]">
            Manufacturing · USA
          </p>
          <h2 className="bio-headline mt-4 max-w-[560px] text-[32px] leading-[1.15] md:text-[40px] md:leading-[1.12]">
            From synthesis to sealed vial — verified in twelve steps
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-bio-neutral-400">
            US-synthesized, HPLC-purified, and third-party tested. Every batch ships with a
            Certificate of Analysis and cold-chain handling.
          </p>

          <ul className="mt-6 space-y-3 text-[15px] md:text-base">
            <li className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6FF3A]" />
              ≥99% purity by HPLC, identity confirmed by mass spec
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6FF3A]" />
              COA published for every lot
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6FF3A]" />
              Discreet packaging with tracking on every order
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={BIOHENCED_LINKS.manufacturing}
              className="bio-cta inline-flex items-center justify-center rounded-[10px] px-8 py-3.5 text-[15px]"
            >
              View quality standards
            </a>
            <div className="rounded-[12px] border border-[#CFE9CF] bg-white px-5 py-3 shadow-[0_4px_16px_rgba(10,11,14,0.05)]">
              <p className="text-[13px] text-bio-neutral-400 line-through">Gray-market imports</p>
              <p className="font-[Archivo,sans-serif] text-[20px] font-black leading-tight text-bio-ink">
                US verified
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#CFE9CF] bg-white/80 p-5 shadow-[0_16px_48px_rgba(10,11,14,0.06)] md:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1F9E6B]">
            Representative catalog compounds
          </p>
          <p className="mt-2 text-[15px] text-bio-neutral-400">
            Recovery, longevity, and metabolic pathways — same QC on every SKU.
          </p>
          <BiohancedProductCardGrid
            productIds={MEDICARE_PRODUCTS}
            columns={3}
            imageHeight="sm"
            className="mt-6"
          />
        </div>
      </div>
    </section>
  );
}
