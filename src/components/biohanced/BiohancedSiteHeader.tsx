"use client";

import { useEffect, useRef } from "react";
import { BiohancedNavbar } from "./BiohancedNavbar";
import { BiohancedPromoBar } from "./BiohancedPromoBar";

/** Sticky header with live height for mobile menu positioning */
export function BiohancedSiteHeader() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      document.documentElement.style.setProperty("--site-header-height", `${el.offsetHeight}px`);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <header
        ref={ref}
        data-bio-site-header
        className="fixed top-0 right-0 left-0 z-[60] w-full border-b border-[#1C1F27] bg-[#0A0B0E]/95 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md"
      >
        <BiohancedPromoBar />
        <BiohancedNavbar />
      </header>
      {/* Spacer — keeps content below fixed header */}
      <div aria-hidden className="h-[var(--site-header-height,112px)] shrink-0" />
    </>
  );
}
