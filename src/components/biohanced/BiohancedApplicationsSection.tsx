import { BiohancedProductCardGrid } from "./BiohancedProductCard";
import { BiohancedSection, BiohancedSectionHeader } from "./BiohancedSection";

const APPLICATION_PRODUCTS = ["bpc157", "retatrutide", "ghkcu", "ipamorelin", "tb500", "semax"];

export function BiohancedApplicationsSection() {
  return (
    <BiohancedSection tone="white" bordered>
      <div className="bio-container">
        <BiohancedSectionHeader
          eyebrow="Applications"
          title="Built for serious research workflows"
          description="From recovery and metabolic studies to longevity and specialty pathways — lyophilized, documented, and ready for your bench."
        />

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-bio-neutral-400">
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
          mobileRail
        />
      </div>
    </BiohancedSection>
  );
}
