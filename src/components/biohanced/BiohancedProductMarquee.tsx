import Link from "next/link";
import { BIOHENCED_CATALOG } from "@/lib/biohanced-catalog";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedProductCard } from "./BiohancedProductCard";
import { BiohancedSection, BiohancedSectionHeader } from "./BiohancedSection";

/** Full-catalog strip — compact studio cards in a smooth marquee */
export function BiohancedProductMarquee() {
  const items = [...BIOHENCED_CATALOG, ...BIOHENCED_CATALOG];

  return (
    <BiohancedSection tone="white" bordered aria-label="Full catalog">
      <div className="bio-container mb-8 flex flex-wrap items-end justify-between gap-4">
        <BiohancedSectionHeader
          eyebrow="Full catalog"
          title={`${BIOHENCED_CATALOG.length} research-grade compounds`}
          description="Every SKU in the catalog — same documentation standard, same cold-chain handling."
          className="max-w-xl"
        />
        <Link
          href={BIOHENCED_LINKS.catalog}
          className="shrink-0 text-[15px] font-semibold text-[#2E6BFF] hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="bio-scroll-rail overflow-hidden">
        <div className="bio-marquee flex w-max gap-4 px-6 md:px-10">
          {items.map((product, index) => (
            <BiohancedProductCard
              key={`${product.id}-${index}`}
              productId={product.id}
              size="compact"
              showActions={false}
              className="w-[240px] shrink-0 md:w-[260px]"
            />
          ))}
        </div>
      </div>
    </BiohancedSection>
  );
}
