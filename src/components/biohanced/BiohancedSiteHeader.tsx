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
    <header ref={ref} data-bio-site-header className="sticky top-0 z-50">
      <BiohancedPromoBar />
      <BiohancedNavbar />
    </header>
  );
}
