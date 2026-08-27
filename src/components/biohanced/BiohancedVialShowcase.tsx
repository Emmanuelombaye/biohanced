import Link from "next/link";
import {
  CATALOG_CATEGORIES,
  catalogImage,
  medicationHref,
  type CatalogCategory,
} from "@/lib/biohanced-catalog";
import { BiohancedImg } from "./BiohancedImg";

export type VialShowcaseItem = {
  id: string;
  name: string;
  category: CatalogCategory;
};

export const DEFAULT_VIAL_SHOWCASE: VialShowcaseItem[] = [
  { id: "bpc157", name: "BPC-157", category: "recovery" },
  { id: "tb500", name: "TB-500", category: "recovery" },
  { id: "retatrutide", name: "Retatrutide", category: "metabolic" },
  { id: "ghkcu", name: "GHK-Cu", category: "longevity" },
  { id: "ipamorelin", name: "Ipamorelin", category: "gh" },
  { id: "semax", name: "Semax", category: "specialty" },
];

type VialSize = "sm" | "md" | "lg" | "xl";

const VIAL_HEIGHT: Record<VialSize, string> = {
  sm: "max-h-[96px] md:max-h-[110px]",
  md: "max-h-[120px] md:max-h-[150px]",
  lg: "max-h-[160px] md:max-h-[200px]",
  xl: "max-h-[200px] md:max-h-[260px]",
};

/** Isolated product vial — trimmed visually for dark spotlight cards */
export function BiohancedProductVial({
  id,
  name,
  accent,
  size = "md",
  className = "",
}: {
  id: string;
  name: string;
  accent: string;
  size?: VialSize;
  className?: string;
}) {
  return (
    <div className={`relative flex items-end justify-center ${className}`}>
      <div
        className="pointer-events-none absolute bottom-[8%] left-[10%] right-[10%] h-[55%] rounded-full blur-2xl"
        style={{ background: `radial-gradient(circle, ${accent}55 0%, transparent 72%)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-[12%] bottom-0 h-[42%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14),transparent_70%)]"
        aria-hidden
      />
      <BiohancedImg
        src={catalogImage(id)}
        alt={name}
        className={`relative z-10 w-auto object-contain object-bottom drop-shadow-[0_28px_44px_rgba(0,0,0,0.55)] transition-transform duration-300 ${VIAL_HEIGHT[size]} [clip-path:inset(0_0_6%_0)] scale-[1.08] origin-bottom`}
      />
    </div>
  );
}

function VialCell({
  item,
  className = "",
  featured = false,
}: {
  item: VialShowcaseItem;
  className?: string;
  featured?: boolean;
}) {
  const category = CATALOG_CATEGORIES[item.category];
  const categoryName = category.name;
  const accent = category.dot;

  return (
    <Link
      href={medicationHref(item.id)}
      className={`group relative flex min-h-[168px] flex-col overflow-hidden rounded-[20px] border border-[#262932] bg-gradient-to-b from-[#1A2238] via-[#10141E] to-[#0A0B0E] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#B6FF3A]/35 hover:shadow-[0_24px_56px_rgba(0,0,0,0.48)] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(80% 70% at 50% 18%, ${accent}2a 0%, transparent 62%)`,
        }}
        aria-hidden
      />
      <div className="relative z-10 flex items-center gap-2 px-4 pt-4">
        <span
          className="h-2 w-2 shrink-0 rounded-full shadow-[0_0_12px_currentColor]"
          style={{ backgroundColor: accent, color: accent }}
          aria-hidden
        />
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C9CCD2]">
          {categoryName}
        </p>
      </div>
      <div
        className={`relative z-10 flex flex-1 items-end justify-center px-3 ${
          featured ? "min-h-[220px] md:min-h-[280px]" : "min-h-[140px] md:min-h-[168px]"
        }`}
      >
        <BiohancedProductVial
          id={item.id}
          name={item.name}
          accent={accent}
          size={featured ? "xl" : "lg"}
          className="w-full"
        />
      </div>
      <div className="relative z-10 border-t border-[#262932]/80 bg-[#0A0B0E]/55 px-4 py-3">
        <p className="text-[15px] font-semibold text-white">{item.name}</p>
        <p className="mt-0.5 text-[12px] text-[#9AA0A8]">View compound →</p>
      </div>
    </Link>
  );
}

export function BiohancedVialShowcase({
  items = DEFAULT_VIAL_SHOWCASE,
  layout = "bento",
  className = "",
}: {
  items?: VialShowcaseItem[];
  layout?: "bento" | "row" | "grid";
  className?: string;
}) {
  if (layout === "row") {
    return (
      <div className={`grid gap-4 sm:grid-cols-3 ${className}`}>
        {items.slice(0, 3).map((item) => (
          <VialCell key={item.id} item={item} />
        ))}
      </div>
    );
  }

  if (layout === "grid") {
    return (
      <div className={`grid grid-cols-2 gap-4 md:grid-cols-3 ${className}`}>
        {items.map((item) => (
          <VialCell key={item.id} item={item} />
        ))}
      </div>
    );
  }

  const [a, b, c, d, e, f] = items;

  return (
    <div className={`grid auto-rows-[minmax(168px,auto)] grid-cols-2 gap-3 md:grid-cols-12 md:gap-4 ${className}`}>
      {a ? <VialCell item={a} className="col-span-2 row-span-2 md:col-span-6 md:row-span-2" featured /> : null}
      {b ? <VialCell item={b} className="col-span-1 md:col-span-3" /> : null}
      {c ? <VialCell item={c} className="col-span-1 md:col-span-3" /> : null}
      {d ? <VialCell item={d} className="col-span-1 md:col-span-4" /> : null}
      {e ? <VialCell item={e} className="col-span-1 md:col-span-4" /> : null}
      {f ? <VialCell item={f} className="col-span-2 md:col-span-4" /> : null}
    </div>
  );
}
