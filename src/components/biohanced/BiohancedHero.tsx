import Link from "next/link";
import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedButton } from "./BiohancedButton";
import { BiohancedImg } from "./BiohancedImg";

const TRUST_ITEMS = [
  "≥99% purity, every batch",
  "Third-party HPLC & MS tested",
  "COA on every product",
  "Cold-chain shipping",
];

function HeroBackground() {
  return (
    <>
      <BiohancedImg
        src={BIOHENCED_ASSETS.hero.poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={BIOHENCED_ASSETS.hero.poster}
      >
        <source src={BIOHENCED_ASSETS.hero.video} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0B0D12]/95 via-[#121A2B]/88 to-[#15241F]/55"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_18%_12%,rgba(79,123,255,0.28),transparent_58%)]"
        aria-hidden
      />
    </>
  );
}

function DesktopHero() {
  return (
    <div className="hidden bg-bio-neutral-100 p-6 md:block md:p-10">
      <div className="relative mx-auto min-h-[min(720px,82vh)] overflow-hidden rounded-[26px]">
        <HeroBackground />

        <div className="relative z-10 flex min-h-[720px] items-center justify-between gap-10 p-10 lg:p-12">
          <div className="flex max-w-[560px] flex-col items-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B6FF3A]">
              Peptides · engineered
            </p>
            <h1 className="bio-headline mt-4 text-[58px] leading-[0.98] text-white">
              Biology,
              <br />
              upgraded.
            </h1>
            <p className="mt-5 max-w-[430px] text-[16px] leading-relaxed text-[#9AA0A8]">
              US-synthesized research-grade peptides, third-party verified by HPLC &amp; mass
              spectrometry. Built for labs that don&apos;t compromise on purity.
            </p>

            <div className="mt-7 flex w-full max-w-[360px] flex-col gap-3">
              <BiohancedButton href={BIOHENCED_LINKS.getStarted} variant="hero-white">
                Get started
              </BiohancedButton>
              <BiohancedButton href={BIOHENCED_LINKS.getStarted} variant="hero-ghost">
                Start with a free insurance check
              </BiohancedButton>
            </div>
          </div>

          <div className="relative hidden shrink-0 lg:block lg:w-[min(440px,42%)]">
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
          </div>
        </div>
      </div>

      <div className="mx-auto mt-0 max-w-[1180px] rounded-b-[26px] bg-[#0A0B0E] px-6 py-4 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {TRUST_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-2 text-[13px] text-[#C9CCD2]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6FF3A]" aria-hidden />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileHero() {
  const badges = BIOHENCED_ASSETS.insurers;

  return (
    <div className="bg-bio-neutral-100 px-6 pt-6 pb-0 md:hidden">
      <div className="flex flex-col gap-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E6BFF]">
          Peptides · engineered
        </p>
        <h2 className="bio-headline text-[38px] leading-[1.02] text-bio-ink">
          Biology,
          <br />
          upgraded.
        </h2>
        <p className="text-[15px] leading-relaxed text-bio-neutral-400">
          US-synthesized research-grade peptides, third-party verified by HPLC &amp; mass
          spectrometry.
        </p>

        <div className="flex flex-col gap-2">
          <Link
            href={BIOHENCED_LINKS.getStarted}
            className="bio-cta inline-flex h-[57px] items-center justify-center rounded-[10px] px-[42px] text-[17px]"
          >
            Get started
          </Link>
          <Link
            href={BIOHENCED_LINKS.getStarted}
            className="inline-flex h-[60px] items-center justify-center rounded-[10px] border border-bio-neutral-200 bg-bio-white px-6 text-[17px] font-medium text-bio-ink"
          >
            Start with a free insurance check
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge) => (
            <BiohancedImg
              key={badge.name}
              src={badge.src}
              alt={badge.name}
              className="h-12 w-auto max-w-[100px] object-contain"
            />
          ))}
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#0B0D12]">
          <HeroBackground />
          <div className="relative z-10 flex items-end justify-center p-6 pt-16">
            <BiohancedImg
              src={BIOHENCED_ASSETS.hero.threeVials}
              alt="Biohanced Labs research vials"
              className="max-h-[280px] w-full max-w-[320px] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BiohancedHero() {
  return (
    <section>
      <DesktopHero />
      <MobileHero />
    </section>
  );
}

export function BiohancedHeroDisclaimer() {
  return (
    <section className="bg-bio-white py-8">
      <div className="bio-container space-y-3 text-[11px] leading-[1.4] text-bio-sage-300">
        <p>
          *In a 68- and 72-week clinical trial studying Wegovy (2.4 mg) and Zepbound (15 mg) in
          patients without diabetes and with BMI ≥30, or BMI ≥27 with a weight-related condition,
          the average weight loss was 15% and 20% respectively, when paired with diet and exercise
          changes (compared to 2.4% and 3.1%, respectively, with diet and exercise alone). Rx are up
          to a medical provider&apos;s discretion. GLP-1s have black box warnings. See full risk info{" "}
          <Link href={BIOHENCED_LINKS.riskInfo} className="underline">
            here
          </Link>
          . **Cost does not include the subscription fees and clinical care, which vary depending on
          coverage. See offer terms{" "}
          <Link href={BIOHENCED_LINKS.offerTerms} className="underline">
            here
          </Link>
          .
        </p>
        <p>
          ‡Offer Details: Save $100/mo or more on compounded tirzepatide and semaglutide when you
          choose a prepaid annual plan, compared to paying monthly. Save $100 off today&apos;s
          checkout supporting brand-name GLP-1 prescriptions (including Zepbound® vials, Wegovy®
          pens, and Wegovy® pills) when paying cash for your Found Membership. Save $50 off
          today&apos;s checkout on plans supporting brand-name GLP-1 prescriptions when Found is
          in-network with your insurance. Med Kit plans are excluded from all discounts. This offer
          is valid for a one-time redemption per account. Discount applies to today&apos;s checkout
          only. Offer terms are subject to change.
        </p>
      </div>
    </section>
  );
}
