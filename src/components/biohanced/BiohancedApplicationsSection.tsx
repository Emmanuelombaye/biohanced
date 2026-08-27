import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BiohancedImg } from "./BiohancedImg";

export function BiohancedApplicationsSection() {
  return (
    <section className="bg-bio-neutral-100 py-14 md:py-20">
      <div className="bio-container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E6BFF]">
            Applications · lab-ready
          </p>
          <h2 className="bio-headline mt-4 text-[32px] text-bio-ink md:text-[40px]">
            Built for serious research workflows
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-bio-neutral-400">
            From recovery and metabolic studies to longevity and specialty pathways — every compound
            ships lyophilized, documented, and ready for your bench protocol.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-[18px] border border-bio-neutral-200 bg-[#0A0B0E]">
            <BiohancedImg
              src={BIOHENCED_ASSETS.sections.mockups}
              alt="Biohanced Labs application mockups"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-[18px] border border-bio-neutral-200 bg-[#0A0B0E]">
            <BiohancedImg
              src={BIOHENCED_ASSETS.sections.detailMedia}
              alt="Biohanced Labs vial detail"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
