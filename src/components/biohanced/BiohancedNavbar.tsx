"use client";

import Link from "next/link";
import { useState } from "react";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedLogo } from "./BiohancedLogo";

const MEDICATION_ITEMS = [
  { label: "All medications", href: BIOHENCED_LINKS.allMedications },
  { label: "Compounded Tirzepatide", href: BIOHENCED_LINKS.meds.compoundedTirzepatide },
  { label: "Compounded Semaglutide", href: BIOHENCED_LINKS.meds.compoundedSemaglutide },
  { label: "Metformin", href: BIOHENCED_LINKS.meds.metformin },
  { label: "Ozempic®", href: BIOHENCED_LINKS.meds.ozempic },
  { label: "Mounjaro®", href: BIOHENCED_LINKS.meds.mounjaro },
  { label: "Zepbound®", href: BIOHENCED_LINKS.meds.zepbound },
  { label: "Foundayo™", href: BIOHENCED_LINKS.meds.foundayo },
  { label: "Microdosing", href: BIOHENCED_LINKS.microdosingPage },
];

const ORG_ITEMS = [
  { label: "For business", href: BIOHENCED_LINKS.business },
  { label: "For health plans", href: BIOHENCED_LINKS.healthPlans },
  { label: "Resource center", href: BIOHENCED_LINKS.resources },
];

const NAV_LINKS = [
  { label: "Program", href: BIOHENCED_LINKS.programPage },
  {
    label: "Medication",
    href: BIOHENCED_LINKS.allMedications,
    items: MEDICATION_ITEMS,
  },
  { label: "Pricing", href: BIOHENCED_LINKS.plansAndPricing },
  { label: "Reviews", href: BIOHENCED_LINKS.reviewsPage },
  {
    label: "For organizations",
    href: BIOHENCED_LINKS.organizations,
    items: ORG_ITEMS,
  },
];

function NavDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-base font-medium text-bio-neutral-500"
      >
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className="invisible absolute top-full left-0 z-50 min-w-[240px] pt-3 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="rounded-xl border border-bio-neutral-200 bg-bio-white py-2 shadow-[0_8px_24px_rgba(25,50,49,0.08)]">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block px-4 py-2.5 text-[15px] font-medium text-bio-neutral-500 transition-colors hover:bg-bio-neutral-100 hover:text-bio-sage-500"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function BiohancedNavbar() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-bio-white">
      <div className="bio-container flex h-16 items-center justify-between gap-8 md:h-[84px] md:py-5">
        <div className="flex items-center gap-10">
          <Link href={BIOHENCED_LINKS.home} aria-label="home" className="text-bio-neutral-500">
            <BiohancedLogo className="h-5 w-[72px] md:h-[26px] md:w-[90px]" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) =>
              link.items ? (
                <NavDropdown key={link.label} label={link.label} href={link.href} items={link.items} />
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-base font-medium text-bio-neutral-500"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="hidden items-center lg:flex">
          <Link
            href={BIOHENCED_LINKS.login}
            className="rounded-full px-5 py-2 text-base font-semibold text-bio-neutral-500"
          >
            Log in
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-16 w-[72px] items-center justify-center lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-[6px]">
            <span className="h-[1.5px] w-full bg-bio-neutral-500" />
            <span className="h-[1.5px] w-[85%] bg-bio-neutral-500" />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-bio-neutral-200 bg-bio-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) =>
              link.items ? (
                <div key={link.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-base font-medium text-bio-neutral-500"
                    onClick={() =>
                      setMobileSection((current) => (current === link.label ? null : link.label))
                    }
                  >
                    {link.label}
                    <span aria-hidden>{mobileSection === link.label ? "−" : "+"}</span>
                  </button>
                  {mobileSection === link.label ? (
                    <div className="mt-2 flex flex-col gap-2 border-l border-bio-neutral-200 pl-3">
                      {link.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="text-[15px] text-bio-neutral-400"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-bio-neutral-500"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href={BIOHENCED_LINKS.login}
              className="text-base font-semibold text-bio-neutral-500"
            >
              Log in
            </Link>
            <Link
              href={BIOHENCED_LINKS.getStarted}
              className="inline-flex items-center justify-center rounded-full bg-bio-neutral-500 px-5 py-2 text-base font-semibold text-bio-white"
            >
              Get started
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
