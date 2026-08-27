import { BiohancedVialShowcase } from "./BiohancedVialShowcase";

export function BiohancedApplicationsSection() {
  return (
    <section className="bg-bio-neutral-100 py-14 md:py-20">
      <div className="bio-container grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-14">
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
          <ul className="mt-6 space-y-2 text-[15px] text-bio-neutral-400">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E6BFF]" />
              Six application categories · 17 in-stock SKUs
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6FF3A]" />
              Color-coded caps and labels for fast bench identification
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8F74F5]" />
              COA and lot data on every vial
            </li>
          </ul>
        </div>
        <BiohancedVialShowcase layout="bento" />
      </div>
    </section>
  );
}
