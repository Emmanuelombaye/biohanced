import Link from "next/link";
import { BIOHENCED_CATALOG } from "@/lib/biohanced-catalog";
import { BiohancedProductCard } from "./BiohancedProductCard";

/** Full-catalog strip — studio cards in a smooth horizontal rail */
export function BiohancedProductMarquee() {
  const items = [...BIOHENCED_CATALOG, ...BIOHENCED_CATALOG];

  return (
    <section className="border-y border-[#ececea] bg-bio-white py-10 md:py-12" aria-label="Full catalog">
      <div className="bio-container mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-bio-neutral-400">
            Full catalog
          </p>
          <p className="mt-1 font-[Archivo,sans-serif] text-[22px] font-black text-bio-ink md:text-[26px]">
            {BIOHENCED_CATALOG.length} research-grade compounds
          </p>
        </div>
        <Link
          href="/catalog"
          className="shrink-0 text-[14px] font-semibold text-[#2E6BFF] hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="bio-scroll-rail overflow-hidden">
        <div className="bio-marquee flex w-max gap-3 px-6 md:gap-4 md:px-10">
          {items.map((product, index) => (
            <BiohancedProductCard
              key={`${product.id}-${index}`}
              productId={product.id}
              variant="mini"
              className="w-[148px] shrink-0 shadow-[0_8px_28px_rgba(10,11,14,0.06)] md:w-[164px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
