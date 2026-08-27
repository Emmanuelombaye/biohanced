import Link from "next/link";
import {
  BIOHENCED_CATALOG,
  CATALOG_CATEGORIES,
  medicationHref,
} from "@/lib/biohanced-catalog";
import { BiohancedProductVial } from "./BiohancedVialShowcase";

/** Marquee of every catalog vial image — uses all 17 product PNGs */
export function BiohancedProductMarquee() {
  const items = [...BIOHENCED_CATALOG, ...BIOHENCED_CATALOG];

  return (
    <section className="border-y border-[#262932] bg-[#0A0B0E] py-8" aria-label="Full catalog">
      <div className="bio-container mb-4 flex items-center justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9AA0A8]">
          Full catalog · {BIOHENCED_CATALOG.length} compounds
        </p>
        <Link href="/catalog" className="text-[13px] font-semibold text-[#B6FF3A] hover:underline">
          View all →
        </Link>
      </div>
      <div className="overflow-hidden">
        <div className="bio-marquee flex w-max gap-4 px-4">
          {items.map((product, index) => (
            <Link
              key={`${product.id}-${index}`}
              href={medicationHref(product.id)}
              className="flex w-[132px] shrink-0 flex-col overflow-hidden rounded-xl border border-[#262932] bg-gradient-to-b from-[#1A2238] to-[#0A0B0E] transition-colors hover:border-[#B6FF3A]/40"
            >
              <div className="flex h-[118px] items-end justify-center px-2 pt-3">
                <BiohancedProductVial
                  id={product.id}
                  name={product.name}
                  accent={CATALOG_CATEGORIES[product.category].dot}
                  size="sm"
                  className="w-full"
                />
              </div>
              <p className="border-t border-[#262932] px-3 py-2.5 text-center text-[11px] font-medium text-[#C9CCD2]">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
