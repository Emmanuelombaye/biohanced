import type { ReactNode } from "react";

type RailProps = {
  children: ReactNode;
  className?: string;
  /** Classes when switching from horizontal scroll to grid (include grid + overflow-visible) */
  desktopClass?: string;
};

/** Horizontal snap scroll on phone; grid or stack from a larger breakpoint */
export function BiohancedMobileRail({
  children,
  className = "",
  desktopClass = "md:grid md:grid-cols-2 md:items-stretch md:gap-5 md:overflow-visible",
}: RailProps) {
  return (
    <div className={`bio-scroll-rail max-md:overflow-x-auto md:overflow-x-visible ${className}`}>
      <div className={`bio-scroll-rail-track snap-x snap-mandatory md:gap-5 ${desktopClass}`}>
        {children}
      </div>
    </div>
  );
}

export function BiohancedMobileRailItem({
  children,
  className = "",
  widthClass = "w-[min(280px,78vw)]",
  resetClass = "md:w-auto md:shrink",
}: {
  children: ReactNode;
  className?: string;
  widthClass?: string;
  /** Undo fixed mobile width at desktop breakpoint */
  resetClass?: string;
}) {
  return (
    <div className={`${widthClass} shrink-0 snap-center ${resetClass} ${className}`}>
      {children}
    </div>
  );
}
