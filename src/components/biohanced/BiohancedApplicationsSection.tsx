import { BiohancedProductCardGrid } from "./BiohancedProductCard";

const APPLICATION_PRODUCTS = ["bpc157", "retatrutide", "ghkcu", "ipamorelin", "tb500", "semax"];

export function BiohancedApplicationsSection() {
  return (
    <section className="bg-bio-neutral-100 py-14 md:py-20">
      <div className="bio-container">
        <div className="max-w-2xl">
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

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-bio-neutral-400">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2E6BFF]" />
            Six application categories
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B6FF3A]" />
            17 in-stock SKUs
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8F74F5]" />
            COA on every batch
          </li>
        </ul>

        <BiohancedProductCardGrid
          productIds={APPLICATION_PRODUCTS}
          columns={3}
          className="mt-10"
        />
      </div>
    </section>
  );
}
