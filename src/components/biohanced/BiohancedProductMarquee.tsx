import Link from "next/link";
import { BIOHENCED_CATALOG } from "@/lib/biohanced-catalog";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedMotionRail } from "./BiohancedMotionRail";
import { BiohancedProductCard } from "./BiohancedProductCard";
import { BiohancedSection, BiohancedSectionHeader } from "./BiohancedSection";

/** Full-catalog strip — compact cards, motion rail with hover pause */
export function BiohancedProductMarquee() {
  const items = BIOHENCED_CATALOG;

  return (
    <BiohancedSection tone="white" bordered aria-label="Full catalog" className="overflow-x-hidden">
      <div className="bio-container mb-6 flex flex-wrap items-end justify-between gap-4 md:mb-8">
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

      <p className="bio-container mb-4 text-[13px] text-bio-neutral-400 md:hidden">
        Swipe the strip to explore every compound
      </p>
      <p className="bio-container mb-4 hidden text-[13px] text-bio-neutral-400 md:block">
        Hover to pause the catalog strip
      </p>

      <BiohancedMotionRail duration={80} fadeEdges>
        {items.map((product) => (
          <BiohancedProductCard
            key={product.id}
            productId={product.id}
            size="compact"
            showActions={false}
            className="h-full w-full"
          />
        ))}
      </BiohancedMotionRail>
    </BiohancedSection>
  );
}
