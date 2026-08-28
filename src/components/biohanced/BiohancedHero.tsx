import Link from "next/link";
import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedImg } from "./BiohancedImg";

export function BiohancedHero() {
  return (
    <section className="bg-bio-neutral-100 px-4 pb-4 pt-4 md:px-6 md:pb-6 lg:px-10 lg:pt-10">
      <div className="relative mx-auto max-w-[1180px] rounded-[24px] md:rounded-[26px]">
        {/* Background layers — clipped to rounded card */}
        <div
          className="bio-hero-gradient absolute inset-0 overflow-hidden rounded-[24px] md:rounded-[26px]"
          style={{
            background: "linear-gradient(135deg, #0b0d12, #121a2b 60%, #15241f)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px] bg-[radial-gradient(70%_90%_at_18%_12%,rgba(79,123,255,0.28),transparent_58%)] md:rounded-[26px]"
          aria-hidden
        />

        <div className="relative flex flex-col gap-8 p-6 pb-8 md:gap-10 md:p-10 md:pb-10 lg:flex-row lg:items-center lg:gap-14">
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

          <div className="relative mx-auto flex w-full items-center justify-center lg:flex-1 lg:justify-end">
            <div className="relative w-full max-w-[min(100%,420px)] sm:max-w-[460px] lg:max-w-[520px]">
              <div
                className="pointer-events-none absolute inset-[-12%] rounded-[32px] bg-[radial-gradient(58%_62%_at_50%_48%,rgba(255,255,255,0.92),rgba(233,238,245,0.45)_52%,transparent_72%)]"
                aria-hidden
              />
              <BiohancedImg
                src={BIOHENCED_ASSETS.hero.threeVials}
                alt="Biohanced Labs research vials — BPC-157, GHK-Cu, Retatrutide"
                width={520}
                height={580}
                loading="eager"
                className="relative z-[1] block h-auto w-full object-contain drop-shadow-[0_28px_56px_rgba(0,0,0,0.5)]"
              />
            </div>
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
