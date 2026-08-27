import Link from "next/link";
import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedImg } from "./BiohancedImg";

const TRUST_ITEMS = [
  { label: "≥99% purity, every batch", icon: BIOHENCED_ASSETS.icons.scale },
  { label: "Third-party HPLC & MS tested", icon: BIOHENCED_ASSETS.icons.insurance },
  { label: "COA on every product", icon: BIOHENCED_ASSETS.icons.phone },
  { label: "Cold-chain shipping", icon: BIOHENCED_ASSETS.icons.phone },
];

export function BiohancedHero() {
  return (
    <section>
      <div className="bg-bio-neutral-100 p-4 md:p-6 md:pb-0 lg:p-10 lg:pb-0">
        <div
          className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#0B0D12,#121A2B_60%,#15241F)]"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_18%_12%,rgba(79,123,255,0.28),transparent_58%)]"
            aria-hidden
          />
          <div className="relative flex flex-col items-start justify-between gap-10 p-8 md:p-12 lg:flex-row lg:items-center lg:gap-14">
            <div className="max-w-[560px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B6FF3A]">
                Peptides · engineered
              </p>
              <h1 className="bio-headline mt-4 text-[48px] leading-[0.98] text-white md:text-[58px]">
                Biology,
                <br />
                upgraded.
              </h1>
              <p className="font-bio-greycliff-medium mt-5 max-w-[430px] text-[16px] leading-relaxed text-[#9AA0A8]">
                US-synthesized research-grade peptides, third-party verified by HPLC &amp; mass
                spectrometry. Built for labs that don&apos;t compromise on purity.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={BIOHENCED_LINKS.browseCatalog}
                  className="bio-cta inline-flex items-center justify-center rounded-[10px] px-8 py-3.5 text-[17px] font-semibold"
                >
                  Browse catalog
                </Link>
                <Link
                  href={BIOHENCED_LINKS.viewCoas}
                  className="inline-flex items-center justify-center rounded-[10px] border border-[#262932] px-8 py-3.5 text-[17px] font-medium text-white transition-colors hover:border-[#3f434d]"
                >
                  View COAs
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-[440px] shrink-0 lg:w-[42%]">
              <div
                className="pointer-events-none absolute inset-[-6%_-4%] rounded-[26px] bg-[radial-gradient(60%_62%_at_50%_44%,rgba(255,255,255,0.94),rgba(233,238,245,0.86)_58%,rgba(210,218,230,0)_82%)]"
                aria-hidden
              />
              <BiohancedImg
                src={BIOHENCED_ASSETS.hero.threeVials}
                alt="Biohanced Labs research vials"
                width={440}
                height={520}
                loading="eager"
                className="relative w-full drop-shadow-[0_30px_44px_rgba(0,0,0,0.5)]"
              />
              <BiohancedImg
                src={BIOHENCED_ASSETS.hero.vialsWide}
                alt=""
                width={200}
                height={120}
                className="pointer-events-none absolute -bottom-2 -right-2 hidden w-[42%] opacity-90 drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)] xl:block"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-b-[26px] bg-[#0A0B0E] px-6 py-4 md:px-10">
          <BiohancedImg
            src={BIOHENCED_ASSETS.hero.poster}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-[13px] text-[#C9CCD2]">
                <img src={item.icon} alt="" className="h-4 w-4 opacity-80" aria-hidden />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BiohancedHeroDisclaimer() {
  return (
    <section className="bg-bio-neutral-100 py-6">
      <div className="bio-container text-center text-[11px] leading-relaxed text-bio-neutral-400">
        For research use only · Not for human consumption ·{" "}
        <Link href={BIOHENCED_LINKS.disclaimers} className="underline">Full disclaimers</Link>
      </div>
    </section>
  );
}
