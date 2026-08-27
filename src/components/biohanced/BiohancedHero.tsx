import Link from "next/link";
import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedImg } from "./BiohancedImg";

const TRUST_ITEMS = [
  { label: "≥99% purity, every batch", icon: BIOHENCED_ASSETS.icons.scale },
  { label: "Third-party HPLC & MS tested", icon: BIOHENCED_ASSETS.icons.insurance },
  { label: "COA on every product", icon: BIOHENCED_ASSETS.icons.phone },
  { label: "Cold-chain shipping", icon: BIOHENCED_ASSETS.icons.scale },
];

export function BiohancedHero() {
  return (
    <section className="bg-bio-neutral-100 px-4 pb-4 pt-4 md:px-6 md:pb-6 lg:px-10 lg:pt-10">
      <div
        className="bio-hero-gradient relative mx-auto max-w-[1180px] overflow-hidden rounded-[24px] md:rounded-[26px]"
        style={{
          background: "linear-gradient(135deg, #0b0d12, #121a2b 60%, #15241f)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_18%_12%,rgba(79,123,255,0.28),transparent_58%)]"
          aria-hidden
        />

        <div className="relative flex flex-col gap-6 p-6 md:gap-10 md:p-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="max-w-[560px] lg:flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B6FF3A]">
              Peptides · engineered
            </p>
            <h1 className="bio-headline mt-3 text-[38px] leading-[0.98] text-white sm:text-[48px] md:text-[58px]">
              Biology,
              <br />
              upgraded.
            </h1>
            <p className="font-bio-greycliff-medium mt-4 max-w-[430px] text-[15px] leading-relaxed text-[#9AA0A8] md:text-[16px]">
              US-synthesized research-grade peptides, third-party verified by HPLC &amp; mass
              spectrometry. Built for labs that don&apos;t compromise on purity.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={BIOHENCED_LINKS.browseCatalog}
                className="bio-btn-primary w-full px-8 text-[16px] sm:w-auto"
              >
                Browse catalog
              </Link>
              <Link
                href={BIOHENCED_LINKS.viewCoas}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-[#3f434d] px-8 text-[16px] font-semibold text-white sm:w-auto"
              >
                View COAs
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[360px] items-end justify-center lg:max-w-[440px] lg:flex-1">
            <div
              className="pointer-events-none absolute inset-x-[-8%] bottom-0 top-[10%] rounded-[24px] bg-[radial-gradient(55%_70%_at_50%_55%,rgba(255,255,255,0.95),rgba(233,238,245,0.5)_55%,transparent_78%)]"
              aria-hidden
            />
            <BiohancedImg
              src={BIOHENCED_ASSETS.hero.threeVials}
              alt="Biohanced Labs research vials — BPC-157, GHK-cu, Retatrutide"
              width={440}
              height={500}
              loading="eager"
              className="relative z-[1] w-full max-h-[min(280px,38vh)] object-contain object-bottom sm:max-h-[320px] md:max-h-[380px] drop-shadow-[0_28px_48px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

        <div className="relative border-t border-[#1C1F27] bg-[#0A0B0E] px-4 py-5 md:px-10">
          <BiohancedImg
            src={BIOHENCED_ASSETS.hero.poster}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
          />
          <div className="relative grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-8">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-2 text-[11px] leading-snug text-[#C9CCD2] sm:text-[13px]"
              >
                <img src={item.icon} alt="" className="mt-0.5 h-4 w-4 shrink-0 opacity-80" aria-hidden />
                <span>{item.label}</span>
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
    <section className="bg-bio-neutral-100 px-4 pb-2 pt-4">
      <div className="bio-container text-center text-[11px] leading-relaxed text-bio-neutral-400">
        For research use only · Not for human consumption ·{" "}
        <Link href={BIOHENCED_LINKS.disclaimers} className="underline">Full disclaimers</Link>
      </div>
    </section>
  );
}
