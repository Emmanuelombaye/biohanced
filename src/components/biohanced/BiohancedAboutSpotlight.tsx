import { BIOHENCED_ASSETS, SPOTLIGHT_VIALS } from "@/lib/biohanced-assets";
import { BiohancedImg } from "./BiohancedImg";

export function BiohancedAboutSpotlight() {
  return (
    <section className="bg-bio-neutral-100 py-14 md:py-20">
      <div className="bio-container">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E6BFF]">
          Catalog · spotlight
        </p>
        <h2 className="bio-headline mt-3 text-[28px] text-bio-ink md:text-[36px]">
          Research-grade compounds, documented end to end
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-[16px] border border-bio-neutral-200 lg:col-span-2">
            <BiohancedImg
              src={BIOHENCED_ASSETS.sections.featured}
              alt="Biohanced Labs featured vials"
              className="h-full min-h-[200px] w-full object-cover"
            />
          </div>
          {SPOTLIGHT_VIALS.map((src) => (
            <div
              key={src}
              className="flex min-h-[160px] items-center justify-center rounded-[16px] border border-bio-neutral-200 bg-gradient-to-b from-[#16203A] to-[#0B0D12] p-6"
            >
              <BiohancedImg src={src} alt="" className="max-h-[140px] object-contain drop-shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
