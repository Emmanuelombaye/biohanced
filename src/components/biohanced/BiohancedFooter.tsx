"use client";

import Link from "next/link";
import { BIOHENCED_ASSETS, FOOTER_BADGE_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedVoltageLogo } from "./BiohancedVoltageLogo";

const SHOP_LINKS = [
  { label: "Catalog", href: BIOHENCED_LINKS.catalog },
  { label: "Lab results", href: BIOHENCED_LINKS.labResults },
  { label: "Cart", href: BIOHENCED_LINKS.cart },
];

const COMPANY_LINKS = [
  { label: "About", href: BIOHENCED_LINKS.about },
  { label: "Manufacturing", href: BIOHENCED_LINKS.manufacturing },
  { label: "Quality", href: BIOHENCED_LINKS.disclaimers },
];

const SUPPORT_LINKS = [
  { label: "FAQ", href: BIOHENCED_LINKS.faqPage },
  { label: "Shipping", href: BIOHENCED_LINKS.faqPage },
  { label: "Pricing guide", href: BIOHENCED_LINKS.pricingGuide, external: true },
  { label: "Contact", href: BIOHENCED_LINKS.contactPage },
];

const LEGAL_ROW_1 = [
  { label: "Privacy Policy", href: BIOHENCED_LINKS.privacy },
  { label: "State privacy addendum", href: BIOHENCED_LINKS.statePrivacy },
  { label: "Notice of privacy practices", href: BIOHENCED_LINKS.npp },
  { label: "Disclaimers", href: BIOHENCED_LINKS.disclaimers },
];

const LEGAL_ROW_2 = [
  { label: "Payment & billing", href: BIOHENCED_LINKS.billing },
  { label: "Refund policy", href: BIOHENCED_LINKS.refund },
  { label: "Terms of service", href: BIOHENCED_LINKS.terms },
];

const FOOTER_LEGAL_BLOCKS = [
  "By purchasing from Biohanced Labs, you affirm that you are at least 21 years of age and a licensed professional or qualified researcher purchasing solely for laboratory research use.",
  "Products offered are research-use-only (RUO) or investigational-use-only (IUO) materials exempt from FDA clearance under 21 CFR § 809.10(c)(2) when used for research purposes.",
  "Biohanced Labs is not a 503A or 503B compounding pharmacy and does not manufacture or dispense drug products for clinical use.",
  "Products are not drugs, dietary supplements, food, or cosmetics. They are not intended for human or animal consumption, diagnosis, treatment, cure, or prevention of any disease.",
  "Purchasers are solely responsible for compliance with the Controlled Substances Act, anti-doping regulations, and institutional research protocols.",
  "Products may not be shipped to certain jurisdictions including New York, Massachusetts, and Connecticut. International purchasers are responsible for import/export compliance.",
  "WARNING: This product can expose you to chemicals including peptides and solvents, which are known to the State of California to cause reproductive harm. For more information go to www.P65Warnings.ca.gov.",
  "Biohanced Labs disclaims all liability for misuse, improper handling, or use contrary to research-only labeling. Limited to the purchase price of goods supplied.",
];

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const externalProps = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <Link
      href={href}
      {...externalProps}
      className="text-[#C9CCD2] transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h2 className="font-[Space_Grotesk,sans-serif] text-[15px] font-semibold text-white">
        {title}
      </h2>
      <ul className="mt-4 space-y-3 border-t border-[#1C1F27] pt-4">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href} external={link.external}>
              <span className="text-[14px]">{link.label}</span>
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LegalRow({ links }: { links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-[12px] leading-relaxed">
      {links.map((link, index) => (
        <span key={link.label} className="inline-flex items-center">
          <FooterLink href={link.href} external={link.external}>{link.label}</FooterLink>
          {index < links.length - 1 ? (
            <span className="mx-2 text-[#6C7280]" aria-hidden>·</span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

export function BiohancedFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#0A0B0E] text-white">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden items-end justify-center overflow-hidden sm:flex"
        aria-hidden
      >
        <span
          className="translate-y-[28%] font-[Archivo,sans-serif] text-[clamp(100px,18vw,240px)] font-black tracking-[-0.04em] text-white/[0.035] select-none"
        >
          BIOHANCED
        </span>
      </div>

      <div className="bio-container relative z-10 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_1fr_1fr_1fr] lg:gap-8">
          <div>
            <Link href={BIOHENCED_LINKS.home} className="inline-block">
              <BiohancedVoltageLogo size={44} />
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[#9AA0A8]">
              US-synthesized research-grade peptides. For research use only — not for human
              consumption.
            </p>
            <div className="mt-8">
              <Link
                href={BIOHENCED_LINKS.browseCatalog}
                className="inline-flex items-center justify-center rounded-[10px] bg-[#B6FF3A] px-7 py-3.5 text-[15px] font-semibold text-[#0A0B0E] transition-[filter,transform] duration-200 hover:brightness-[1.03] active:scale-[0.98]"
              >
                Browse catalog
              </Link>
            </div>
          </div>

          <FooterColumn title="Shop" links={SHOP_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Support" links={SUPPORT_LINKS} />
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {FOOTER_BADGE_ASSETS.map((badge) => (
            <img
              key={badge.src}
              src={badge.src}
              alt={badge.alt}
              className="h-12 w-auto object-contain md:h-14"
            />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center font-[Space_Grotesk,sans-serif] text-[13px] leading-relaxed text-[#9AA0A8]">
          FOR RESEARCH USE ONLY · NOT FOR USE IN DIAGNOSTIC PROCEDURES · 21 CFR § 809.10(c)(2)
        </p>

        <div className="mx-auto mt-8 max-w-4xl space-y-4 text-center font-bio-greycliff text-[12px] leading-relaxed text-[#9AA0A8]">
          {FOOTER_LEGAL_BLOCKS.map((block) => (
            <p key={block}>{block}</p>
          ))}
        </div>

        <div className="mt-10 space-y-4 border-t border-[#1C1F27] pt-8">
          <LegalRow links={LEGAL_ROW_1} />
          <LegalRow links={LEGAL_ROW_2} />
        </div>

        <div className="relative z-20 mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#1C1F27] bg-[#0A0B0E] pt-8 md:flex-row md:gap-6">
          <p className="font-[Space_Grotesk,sans-serif] text-center text-[12px] text-[#9AA0A8] md:text-left">
            © {new Date().getFullYear()} Biohanced Labs · For research use only · Not for human
            consumption
          </p>
          <p className="font-[Space_Grotesk,sans-serif] text-[13px]">
            <a
              href={BIOHENCED_LINKS.email}
              className="inline-flex min-h-[44px] items-center rounded-full border border-[#262932] bg-[#14161A] px-5 py-2 text-[#C9CCD2] hover:text-white"
            >
              research@biohancedlabs.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
