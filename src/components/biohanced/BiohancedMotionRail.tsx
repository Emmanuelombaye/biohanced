"use client";

import { Children, type ReactNode } from "react";

type BiohancedMotionRailProps = {
  children: ReactNode;
  className?: string;
  /** Duplicate track for seamless desktop loop */
  loop?: boolean;
  /** Marquee duration in seconds (desktop) */
  duration?: number;
  /** Edge fade hint */
  fadeEdges?: boolean;
};

/**
 * Horizontal product rail:
 * - Mobile: snap scroll — swipe and stop to tap/select
 * - Desktop: auto marquee — pauses on hover or focus-within
 */
export function BiohancedMotionRail({
  children,
  className = "",
  loop = true,
  duration = 48,
  fadeEdges = true,
}: BiohancedMotionRailProps) {
  const items = Children.toArray(children);
  const desktopItems = loop ? [...items, ...items] : items;

  return (
    <div
      className={`bio-motion-rail ${fadeEdges ? "bio-motion-rail-fade" : ""} ${className}`}
    >
      {/* Phone / tablet — manual scroll, snap to each card */}
      <div className="bio-scroll-rail bio-scroll-rail-touch bio-motion-rail-touch md:hidden">
        <div className="bio-scroll-rail-track gap-4 px-6 snap-x snap-mandatory">
          {items.map((child, index) => (
            <div key={`touch-${index}`} className="bio-motion-rail-item">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — continuous motion, pause on pointer */}
      <div
        className="bio-marquee-pause hidden overflow-hidden md:block"
        style={{ "--bio-marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="bio-marquee flex w-max gap-5 px-6 md:px-10">
          {desktopItems.map((child, index) => (
            <div key={`desk-${index}`} className="bio-motion-rail-item">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
