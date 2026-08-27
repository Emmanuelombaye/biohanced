"use client";

import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedVoltageLogo } from "./BiohancedVoltageLogo";

const PROGRAM_LINKS = [
  { label: "Recovery peptides", href: BIOHENCED_LINKS.allMedications },
  { label: "GH secretagogues", href: BIOHENCED_LINKS.allMedications },
  { label: "Metabolic", href: BIOHENCED_LINKS.allMedications },
  { label: "Longevity", href: BIOHENCED_LINKS.allMedications },
  { label: "Specialty", href: BIOHENCED_LINKS.allMedications },
  { label: "Essentials", href: BIOHENCED_LINKS.allMedications },
];

const COMPANY_LINKS = [
  { label: "Who we are", href: BIOHENCED_LINKS.about },
  { label: "Quality & COAs", href: BIOHENCED_LINKS.disclaimers },
  { label: "Contact", href: BIOHENCED_LINKS.contactPage },
  { label: "My account", href: BIOHENCED_LINKS.login, external: true },
];

const LEGAL_ROW_1 = [
  { label: "Privacy Policy", href: BIOHENCED_LINKS.privacy },
  { label: "State-Privacy Law Addendum", href: BIOHENCED_LINKS.statePrivacy },
  { label: "Notice of Privacy Practices", href: BIOHENCED_LINKS.npp },
  { label: "Important safety information", href: BIOHENCED_LINKS.disclaimers },
  { label: "Telehealth consent", href: BIOHENCED_LINKS.telehealth },
];

const LEGAL_ROW_2 = [
  { label: "Payment & billing consent", href: BIOHENCED_LINKS.billing },
  { label: "Refund policy", href: BIOHENCED_LINKS.refund },
  { label: "Terms of service", href: BIOHENCED_LINKS.terms },
  { label: "SMS terms of service", href: BIOHENCED_LINKS.sms },
];

const LEGAL_ROW_3 = [
  { label: "Programs", href: BIOHENCED_LINKS.programPage },
  { label: "Tools", href: BIOHENCED_LINKS.tools },
  { label: "Help center", href: BIOHENCED_LINKS.help, external: true },
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
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden"
        aria-hidden
      >
        <span
          className="translate-y-[18%] font-[Archivo,sans-serif] text-[clamp(120px,22vw,280px)] font-black tracking-[-0.04em] text-white/[0.04] select-none"
        >
          BIOHANCED
        </span>
      </div>

      <div className="bio-container relative z-10 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_1fr_1fr] lg:gap-10">
          <div>
            <Link href={BIOHENCED_LINKS.home} className="inline-block">
              <BiohancedVoltageLogo size={44} />
            </Link>
            <div className="mt-8 space-y-2 font-[Space_Grotesk,sans-serif] text-[15px]">
              <p>
                <FooterLink href={BIOHENCED_LINKS.home}>Biohanced Labs</FooterLink>
              </p>
              <p>
                <FooterLink href={BIOHENCED_LINKS.contactPage}>Contact support</FooterLink>
              </p>
            </div>
            <div className="mt-8">
              <Link
                href={BIOHENCED_LINKS.getStarted}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#B6FF3A] px-7 py-3.5 text-[15px] font-semibold text-[#0A0B0E] transition-[filter,transform] duration-200 hover:brightness-[1.03] active:scale-[0.98]"
              >
                Get started
              </Link>
            </div>
          </div>

          <FooterColumn title="Programs" links={PROGRAM_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <img
            src="/biohanced/voltage/logos/badge-usa-real.png"
            alt="Compounded by licensed pharmacies in the USA"
            className="h-14 w-auto object-contain md:h-16"
          />
          <img
            src="/biohanced/voltage/logos/badge-gmp.png"
            alt="GMP certified"
            className="h-14 w-auto object-contain md:h-16"
          />
          <img
            src="/biohanced/voltage/logos/stamp-on-green.png"
            alt="Research-grade quality stamp"
            className="h-14 w-auto object-contain md:h-16"
          />
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center font-[Space_Grotesk,sans-serif] text-[13px] leading-relaxed text-[#9AA0A8]">
          Products are for research use only and are not for human consumption. Medical and
          telehealth services, where offered, are provided by licensed professionals employed by or
          contracted with independent entities. Biohanced Labs provides administrative support and
          does not replace advice from your physician. Information on this site is educational and
          not a substitute for professional medical advice.
        </p>

        <div className="mt-10 space-y-4 border-t border-[#1C1F27] pt-8">
          <LegalRow links={LEGAL_ROW_1} />
          <LegalRow links={LEGAL_ROW_2} />
          <LegalRow links={LEGAL_ROW_3} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-[#1C1F27] pt-8 md:flex-row">
          <p className="font-[Space_Grotesk,sans-serif] text-[12px] text-[#9AA0A8]">
            © {new Date().getFullYear()} Biohanced Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-5 font-[Space_Grotesk,sans-serif] text-[13px]">
            <FooterLink href={BIOHENCED_LINKS.social.facebook} external>Facebook</FooterLink>
            <FooterLink href={BIOHENCED_LINKS.social.instagram} external>Instagram</FooterLink>
            <FooterLink href={BIOHENCED_LINKS.social.linkedin} external>LinkedIn</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
