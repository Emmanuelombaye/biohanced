import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedButton } from "./BiohancedButton";

export function BiohancedPageHero({
  title,
  lede,
  showCta = true,
}: {
  title: string;
  lede?: string;
  showCta?: boolean;
}) {
  return (
    <section className="bg-bio-neutral-100 py-16 md:py-24">
      <div className="bio-container max-w-3xl">
        <h1 className="bio-headline text-[36px] leading-[1.15] text-bio-ink md:text-[56px] md:leading-[1.1]">
          {title}
        </h1>
        {lede ? (
          <p className="font-bio-quincy mt-5 text-[18px] leading-relaxed text-bio-neutral-400 md:text-[20px]">
            {lede}
          </p>
        ) : null}
        {showCta ? (
          <div className="mt-8 flex flex-wrap gap-3">
            <BiohancedButton href={BIOHENCED_LINKS.browseCatalog} variant="solid-dark">
              Browse catalog
            </BiohancedButton>
            <BiohancedButton href={BIOHENCED_LINKS.contact} variant="ghost-light">
              Contact us
            </BiohancedButton>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function BiohancedPageSection({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-bio-white py-12 md:py-16">
      <div className="bio-container max-w-3xl">
        {title ? (
          <h2 className="bio-headline text-[28px] leading-tight text-bio-ink md:text-[40px]">
            {title}
          </h2>
        ) : null}
        <div
          className={`space-y-4 text-[17px] leading-relaxed text-bio-neutral-400 ${title ? "mt-5" : ""}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export function BiohancedCtaBand() {
  return (
    <section className="bio-hero-gradient py-16 text-center text-bio-white">
      <div className="bio-container">
        <h2 className="bio-headline text-[32px] md:text-[44px]">
          Purity you can verify. Delivery you can count on.
        </h2>
        <p className="mt-3 text-[#C9CCD2]">
          Every batch third-party tested, every vial documented.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={BIOHENCED_LINKS.browseCatalog}
            className="bio-cta inline-flex rounded-[10px] px-8 py-3.5 text-[17px]"
          >
            Browse catalog
          </Link>
          <Link
            href={BIOHENCED_LINKS.viewCoas}
            className="inline-flex rounded-[10px] border border-white/30 px-8 py-3.5 text-[17px] font-medium text-white"
          >
            View COAs
          </Link>
        </div>
      </div>
    </section>
  );
}
