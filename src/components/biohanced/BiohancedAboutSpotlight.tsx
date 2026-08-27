import { BiohancedVialShowcase, DEFAULT_VIAL_SHOWCASE } from "./BiohancedVialShowcase";

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
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-bio-neutral-400">
          Every SKU ships as a lyophilized vial with category-coded labeling, third-party purity
          verification, and a published Certificate of Analysis.
        </p>
        <BiohancedVialShowcase items={DEFAULT_VIAL_SHOWCASE} layout="grid" className="mt-8" />
      </div>
    </section>
  );
}
