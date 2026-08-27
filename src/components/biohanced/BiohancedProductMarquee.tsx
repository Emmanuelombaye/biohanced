import Link from "next/link";
import { BIOHENCED_CATALOG, catalogImage, medicationHref } from "@/lib/biohanced-catalog";
import { BiohancedImg } from "./BiohancedImg";

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
              className="flex w-[120px] shrink-0 flex-col items-center rounded-xl border border-[#262932] bg-[#14161A] p-3 transition-colors hover:border-[#B6FF3A]/40"
            >
              <div className="flex h-[100px] w-full items-center justify-center">
                <BiohancedImg
                  src={catalogImage(product.id)}
                  alt={product.name}
                  className="max-h-[90%] max-w-[80%] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
                />
              </div>
              <p className="mt-2 text-center text-[11px] font-medium text-[#C9CCD2]">{product.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
