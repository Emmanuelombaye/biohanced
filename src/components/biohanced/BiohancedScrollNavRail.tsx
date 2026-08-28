"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type BiohancedScrollNavRailProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  /** Label for prev/next buttons */
  ariaLabel?: string;
};

/**
 * Horizontal rail with scrollbar + prev/next on desktop.
 * Mobile: snap scroll with touch scrollbar hint.
 */
export function BiohancedScrollNavRail({
  children,
  className = "",
  itemClassName = "bio-motion-rail-item-wide",
  ariaLabel = "Scroll items",
}: BiohancedScrollNavRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState, items.length]);

  const scrollByDir = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.max(el.clientWidth * 0.82, 280);
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        aria-label={`Previous ${ariaLabel}`}
        disabled={!canScrollLeft}
        onClick={() => scrollByDir(-1)}
        className="bio-scroll-nav-btn absolute top-[42%] left-2 z-10 hidden -translate-y-1/2 md:flex lg:left-4"
      >
        ←
      </button>

      <div
        ref={trackRef}
        className="bio-scroll-rail bio-scroll-rail-touch bio-scroll-rail-desktop overflow-x-auto"
      >
        <div className="bio-scroll-rail-track gap-4 px-6 snap-x snap-mandatory md:gap-5 md:px-10 lg:gap-6">
          {items.map((child, index) => (
            <div key={index} className={`shrink-0 snap-center ${itemClassName}`}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label={`Next ${ariaLabel}`}
        disabled={!canScrollRight}
        onClick={() => scrollByDir(1)}
        className="bio-scroll-nav-btn absolute top-[42%] right-2 z-10 hidden -translate-y-1/2 md:flex lg:right-4"
      >
        →
      </button>
    </div>
  );
}
