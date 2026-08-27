import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedImg } from "./BiohancedImg";

export function BiohancedMedicare() {
  return (
    <section id="medicare" className="bg-[#EEF7EE] py-16 md:py-[104px] text-[#0A0B0E]">
      <div className="bio-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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

          <ul className="mt-6 space-y-3 text-base">
            <li className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#B6FF3A]" />
              ≥99% purity by HPLC, identity confirmed by mass spec
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#B6FF3A]" />
              COA published for every lot
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#B6FF3A]" />
              Discreet packaging with tracking on every order
            </li>
          </ul>

          <div className="mt-8">
            <a
              href={BIOHENCED_LINKS.manufacturing}
              className="bio-cta inline-flex items-center justify-center rounded-[10px] px-[42px] py-4 text-[15px]"
            >
              View quality standards
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[28px] border border-[#CFE9CF] bg-[#0A0B0E] p-4">
          <BiohancedImg
            src={BIOHENCED_ASSETS.sections.mockups}
            alt="Biohanced Labs vial manufacturing mockups"
            className="h-auto w-full rounded-2xl object-contain"
          />
          <div className="absolute bottom-6 left-6 rounded-[10px] bg-[#B6FF3A] px-5 py-3 text-bio-ink shadow-lg">
            <p className="text-base text-bio-ink/60 line-through">Gray-market imports</p>
            <p className="font-[Archivo,sans-serif] text-[20px] font-black leading-none">
              US verified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
