import Link from "next/link";
import { BIOHENCED_CATALOG, catalogImage, medicationHref } from "@/lib/biohanced-catalog";
import { BiohancedImg } from "./BiohancedImg";

/** Marquee of every catalog vial — compact cards, consistent scale */
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
        <div className="bio-marquee flex w-max gap-3 px-4">
          {items.map((product, index) => (
            <Link
              key={`${product.id}-${index}`}
              href={medicationHref(product.id)}
              className="flex w-[128px] shrink-0 flex-col overflow-hidden rounded-xl border border-[#262932] bg-[#14161A] transition-colors hover:border-[#B6FF3A]/35"
            >
              <div className="flex h-[118px] items-center justify-center bg-gradient-to-b from-[#16203A] to-[#0B0B0E]">
                <BiohancedImg
                  src={catalogImage(product.id)}
                  alt={product.name}
                  className="max-h-[76%] max-w-[58%] object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]"
                />
              </div>
              <p className="border-t border-[#262932] px-2 py-2.5 text-center text-[11px] font-medium leading-tight text-[#C9CCD2]">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
