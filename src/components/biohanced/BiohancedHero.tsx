import Link from "next/link";
import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedButton } from "./BiohancedButton";
import { BiohancedImg } from "./BiohancedImg";

const HIGHLIGHTS = [
  {
    icon: BIOHENCED_ASSETS.icons.scale,
    mobileIcon: BIOHENCED_ASSETS.icons.mobileScale,
    text: "Up to 15-20% weight loss with Wegovy® and Zepbound®*",
  },
  {
    icon: BIOHENCED_ASSETS.icons.phone,
    mobileIcon: BIOHENCED_ASSETS.icons.mobilePhone,
    text: "Affordable GLP-1s, delivered fast**",
  },
  {
    icon: BIOHENCED_ASSETS.icons.insurance,
    mobileIcon: BIOHENCED_ASSETS.icons.mobileInsurance,
    text: "Covered by top insurance plans",
  },
];

function DesktopHero() {
  return (
    <div className="hidden bg-bio-neutral-100 p-6 md:block md:p-10">
      <div className="relative mx-auto min-h-[min(744px,80vh)] overflow-hidden rounded-[26px]">
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
        <div className="bio-hero-gradient absolute inset-0 opacity-90" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_20%_10%,rgba(79,123,255,0.22),transparent_60%)]"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[744px] flex-col justify-between p-12 text-bio-white">
          <div className="flex max-w-[550px] flex-col items-start gap-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B6FF3A]">
              Peptides · engineered
            </p>
            <h1 className="bio-headline mt-4 text-[58px] leading-[0.98] text-bio-white">
              Biology,
              <br />
              upgraded.
            </h1>

            <div className="flex w-full max-w-[341px] flex-col gap-2">
              <BiohancedButton href={BIOHENCED_LINKS.getStarted} variant="hero-white">
                Get started
              </BiohancedButton>
              <BiohancedButton href={BIOHENCED_LINKS.getStarted} variant="hero-ghost">
                Start with a free insurance check
              </BiohancedButton>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 pt-10">
            {HIGHLIGHTS.map((item) => (
              <div key={item.text} className="w-[214px]">
                <BiohancedImg
                  src={item.icon}
                  alt=""
                  width={72}
                  height={72}
                  loading="eager"
                  className="h-[72px] w-[72px] object-contain"
                />
                <p className="mt-3 text-[20px] leading-snug text-bio-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileHero() {
  const logos = [...BIOHENCED_ASSETS.insurers, ...BIOHENCED_ASSETS.insurers];

  return (
    <div className="bg-bio-neutral-100 px-6 pt-6 pb-0 md:hidden">
      <div className="flex flex-col gap-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E6BFF]">
          Peptides · engineered
        </p>
        <h2 className="bio-headline mt-3 text-[38px] leading-[1.02] text-bio-ink">
          Biology,
          <br />
          upgraded.
        </h2>

        <div className="flex flex-col gap-2">
          {HIGHLIGHTS.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-bio-neutral-400">
              <BiohancedImg
                src={item.mobileIcon}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 shrink-0 object-contain"
              />
              <p className="text-base leading-snug">{item.text}</p>
            </div>
          ))}
        </div>

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

        <div className="overflow-hidden">
          <div className="bio-marquee flex w-max items-center gap-4">
            {logos.map((logo, index) => (
              <BiohancedImg
                key={`${logo.name}-${index}`}
                src={logo.src}
                alt={logo.name}
                className="h-[33px] w-[88px] object-contain opacity-70"
              />
            ))}
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-2xl">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={BIOHENCED_ASSETS.hero.mobilePoster}
          >
            <source src={BIOHENCED_ASSETS.hero.mobileVideo} type="video/mp4" />
          </video>
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
