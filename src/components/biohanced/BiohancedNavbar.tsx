"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CATALOG_NAV_CATEGORIES } from "@/lib/biohanced-catalog";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { useCart } from "@/lib/biohanced-cart-context";
import { BiohancedVoltageLogo } from "./BiohancedVoltageLogo";

const MAIN_LINKS = [
  { label: "Manufacturing Process", href: BIOHENCED_LINKS.manufacturing },
  { label: "Lab Results", href: BIOHENCED_LINKS.labResults },
  { label: "FAQ", href: BIOHENCED_LINKS.faqPage },
] as const;

function BoltIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
      <path d="M57 9 L29 55 L46 55 L43 91 L73 41 L55 41 Z" fill="#fff" />
    </svg>
  );
}

function NavDropdown({
  label,
  href,
  items,
  panel = "light",
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
  panel?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const panelClass =
    panel === "light"
      ? "border-[#262932] bg-bio-white shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
      : "border-[#262932] bg-[#14161A] shadow-[0_12px_40px_rgba(0,0,0,0.45)]";
  const itemClass =
    panel === "light"
      ? "text-bio-ink hover:bg-bio-neutral-100"
      : "text-[#C9CCD2] hover:bg-[#16181D] hover:text-white";

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
          open ? "bg-[#16181D] text-white" : "text-[#C9CCD2] hover:bg-[#16181D] hover:text-white"
        }`}
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
      {open ? (
        <div className="absolute top-full left-0 z-50 min-w-[240px] pt-2">
          <ul className={`rounded-xl border py-2 ${panelClass}`}>
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2.5 text-[15px] font-medium transition-colors ${itemClass}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function BiohancedNavbar() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const { itemCount } = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1C1F27] bg-[#0A0B0E]">
      <div className="bio-container flex h-16 items-center justify-between gap-6 md:h-[64px]">
        <div className="flex items-center gap-8 lg:gap-10">
          <Link href={BIOHENCED_LINKS.home} aria-label="Biohanced Labs home" className="shrink-0">
            <BiohancedVoltageLogo size={34} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <NavDropdown
              label="Catalog"
              href={BIOHENCED_LINKS.catalog}
              items={CATALOG_NAV_CATEGORIES.map((c) => ({ label: c.label, href: c.href }))}
              panel="light"
            />
            {MAIN_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-[14px] font-medium text-[#C9CCD2] transition-colors hover:bg-[#16181D] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={BIOHENCED_LINKS.cart}
              className="ml-1 inline-flex items-center gap-2 rounded-lg border border-[#262932] bg-[#14161A] px-4 py-2 text-[14px] font-medium text-white transition-colors hover:border-[#3f434d]"
            >
              Cart
              <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#B6FF3A] px-1.5 text-[12px] font-bold text-[#0A0B0E]">
                {itemCount}
              </span>
            </Link>
          </nav>
        </div>

        <Link
          href={BIOHENCED_LINKS.contact}
          className="hidden rounded-lg px-4 py-2 text-[14px] font-medium text-[#C9CCD2] transition-colors hover:text-white lg:inline-flex"
        >
          Contact
        </Link>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-5 flex-col gap-[6px]">
            <span className={`h-[1.5px] w-full bg-[#C9CCD2] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[1.5px] w-full bg-[#C9CCD2] ${open ? "opacity-0" : ""}`} />
            <span className={`h-[1.5px] w-[85%] bg-[#C9CCD2] transition-transform ${open ? "-translate-y-[7px] -rotate-45 w-full" : ""}`} />
          </div>
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-16 z-40 bg-[#0A0B0E] lg:hidden">
          <div className="bio-container flex h-full flex-col gap-2 overflow-y-auto py-6">
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between py-3 text-left text-[17px] font-medium text-white"
                onClick={() => setMobileSection((c) => (c === "catalog" ? null : "catalog"))}
              >
                Catalog
                <span>{mobileSection === "catalog" ? "−" : "+"}</span>
              </button>
              {mobileSection === "catalog" ? (
                <div className="flex flex-col gap-1 border-l border-[#262932] pl-4 pb-2">
                  {CATALOG_NAV_CATEGORIES.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="py-2 text-[15px] text-[#9AA0A8]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            {MAIN_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-3 text-[17px] font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={BIOHENCED_LINKS.cart}
              className="py-3 text-[17px] font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Cart ({itemCount})
            </Link>
            <Link
              href={BIOHENCED_LINKS.contact}
              className="py-3 text-[17px] font-medium text-[#C9CCD2]"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4 flex flex-col gap-3 border-t border-[#1C1F27] pt-6">
              <Link
                href={BIOHENCED_LINKS.browseCatalog}
                className="bio-cta inline-flex items-center justify-center rounded-[10px] py-3.5 text-[17px]"
                onClick={() => setOpen(false)}
              >
                Browse catalog
              </Link>
              <Link
                href={BIOHENCED_LINKS.viewCoas}
                className="inline-flex items-center justify-center rounded-[10px] border border-[#262932] py-3.5 text-[17px] font-medium text-white"
                onClick={() => setOpen(false)}
              >
                View COAs
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
