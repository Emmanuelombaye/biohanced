import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BiohancedImg } from "./BiohancedImg";
import { BiohancedProductCard } from "./BiohancedProductCard";

export function BiohancedDoctor() {
  return (
    <section className="bg-bio-neutral-100 py-16 md:py-32 md:pb-16">
      <div className="bio-container grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E6BFF]">
            Science · verified
          </p>
          <h2 className="bio-headline mt-4 max-w-[592px] text-[29px] leading-[1.1] text-bio-ink md:text-[48px] md:leading-[52.8px]">
            Every batch documented. Every vial traceable.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-bio-neutral-400">
            US-synthesized peptides with third-party HPLC and mass-spec verification — the
            transparency research labs expect from a serious supplier.
          </p>
        </div>

        <article className="overflow-hidden rounded-2xl border border-bio-neutral-200 bg-bio-white shadow-[0_8px_32px_rgba(10,11,14,0.06)]">
          <BiohancedProductCard
            productId="bpc157"
            imageHeight="lg"
            showMeta={false}
            className="rounded-none border-0 shadow-none hover:translate-y-0 hover:shadow-none"
          />
          <div className="border-t border-bio-neutral-200 p-8">
            <BiohancedImg
              src={BIOHENCED_ASSETS.badges.stamp}
              alt=""
              width={120}
              height={48}
              className="mb-6 h-10 w-auto object-contain opacity-90"
            />
            <p className="text-[20px] leading-snug text-bio-neutral-500 md:text-[24px] md:leading-8">
              We cross-check every release with independent HPLC and mass spectrometry — then publish
              the COA so your lab never has to guess what is in the vial.
            </p>
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-bio-neutral-200 pt-6">
              <div>
                <p className="text-[18px] font-semibold text-bio-ink">Dr. Elias Renner</p>
                <p className="text-sm text-bio-neutral-400">Chief Science Officer · Biohanced Labs</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F7BFF] via-[#8F74F5] to-[#B6EE6C] font-[Archivo,sans-serif] text-lg font-black text-white">
                ER
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
