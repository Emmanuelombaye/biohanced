import Link from "next/link";
import {
  CATALOG_CATEGORIES,
  catalogImage,
  getCatalogProduct,
  medicationHref,
} from "@/lib/biohanced-catalog";
import { BiohancedVialStage } from "./BiohancedVialStage";

type CardSize = "standard" | "compact" | "full";

type ProductCardProps = {
  productId: string;
  className?: string;
  size?: CardSize;
  showPrice?: boolean;
};

function CategoryBadge({ name, color }: { name: string; color: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-bio-neutral-200 bg-bio-neutral-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-bio-neutral-400">
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} aria-hidden />
      {name}
    </span>
  );
}

function PurityBadge({ purity }: { purity: string }) {
  return (
    <span className="rounded-full bg-[#EEF7EE] px-2.5 py-1 text-[11px] font-semibold text-[#1F9E6B]">
      {purity}
    </span>
  );
}

/** Editorial product card — standard, compact strip, or full end-to-end showcase */
export function BiohancedProductCard({
  productId,
  className = "",
  size = "standard",
  showPrice = false,
}: ProductCardProps) {
  const product = getCatalogProduct(productId);
  if (!product) return null;

  const cat = CATALOG_CATEGORIES[product.category];
  const isCompact = size === "compact";
  const isFull = size === "full";
  const stageSize = isFull ? "lg" : isCompact ? "sm" : "md";

  return (
    <Link
      href={medicationHref(product.id)}
      className={`group bio-product-card flex flex-col ${isFull ? "bio-product-card-full" : ""} ${className}`}
    >
      <BiohancedVialStage
        src={catalogImage(product.id)}
        alt={product.name}
        accent={cat.dot}
        size={stageSize}
        className="rounded-t-[16px]"
      />

      <div
        className={`flex flex-1 flex-col ${isCompact ? "p-3" : isFull ? "p-6" : "p-5"}`}
      >
        <CategoryBadge name={cat.name} color={cat.dot} />

        <h3
          className={`mt-3 font-[Archivo,sans-serif] font-black leading-tight tracking-[-0.02em] text-bio-ink ${
            isCompact ? "text-[15px]" : isFull ? "text-[22px] md:text-[24px]" : "text-[20px] md:text-[22px]"
          }`}
        >
          {product.name}
        </h3>

        {isFull && product.subtitle ? (
          <p className="mt-1.5 text-[13px] font-medium text-bio-neutral-400">{product.subtitle}</p>
        ) : null}

        {product.doseLabel && !isFull ? (
          <p className="mt-1.5 text-[13px] leading-snug text-bio-neutral-400">{product.doseLabel}</p>
        ) : null}

        {isFull ? (
          <>
            <p className="mt-3 text-[14px] leading-relaxed text-bio-neutral-400 line-clamp-3">
              {product.blurb}
            </p>
            <ul className="mt-4 space-y-1.5 border-t border-bio-neutral-200 pt-4 text-[13px] text-bio-neutral-400">
              <li className="flex justify-between gap-3">
                <span>Dose</span>
                <span className="font-medium text-bio-ink">{product.doseLabel}</span>
              </li>
              <li className="flex justify-between gap-3">
                <span>Batch</span>
                <span className="font-medium text-bio-ink">{product.batch}</span>
              </li>
              <li className="flex justify-between gap-3">
                <span>Form</span>
                <span className="font-medium text-bio-ink">{product.formLabel}</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-bio-neutral-200 pt-4">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-bio-neutral-400">From</p>
                <p className="font-[Archivo,sans-serif] text-[22px] font-black text-bio-ink">
                  ${product.priceFrom}
                </p>
              </div>
              <PurityBadge purity={product.purity} />
            </div>
            <p className="mt-4 text-[13px] font-medium text-[#2E6BFF] transition-colors group-hover:text-bio-ink">
              View compound · COA published →
            </p>
          </>
        ) : showPrice ? (
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-bio-neutral-200 pt-3">
            <span className="font-[Archivo,sans-serif] text-[17px] font-extrabold text-bio-ink">
              From ${product.priceFrom}
            </span>
            <PurityBadge purity={product.purity} />
          </div>
        ) : isCompact ? (
          <div className="mt-3 flex justify-end">
            <PurityBadge purity={product.purity} />
          </div>
        ) : (
          <p className="mt-4 text-[13px] font-medium text-bio-neutral-400 transition-colors group-hover:text-bio-ink">
            View details
          </p>
        )}
      </div>
    </Link>
  );
}

export function BiohancedProductCardGrid({
  productIds,
  columns = 3,
  className = "",
  mobileRail = true,
  showPrice = false,
  compact = false,
  cardSize,
}: {
  productIds: string[];
  columns?: 2 | 3 | 4;
  className?: string;
  mobileRail?: boolean;
  showPrice?: boolean;
  compact?: boolean;
  cardSize?: CardSize;
}) {
  const resolvedSize: CardSize = cardSize ?? (compact ? "compact" : "standard");

  const gridCols =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-3";

  const railWidth =
    resolvedSize === "full"
      ? "w-[min(340px,90vw)]"
      : resolvedSize === "compact"
        ? "w-[min(260px,72vw)]"
        : "w-[min(280px,78vw)]";

  if (mobileRail) {
    return (
      <div className={`bio-scroll-rail -mx-6 px-6 md:mx-0 md:px-0 ${className}`}>
        <div
          className={`flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:gap-6 md:overflow-visible ${gridCols}`}
        >
          {productIds.map((id) => (
            <div key={id} className={`${railWidth} shrink-0 snap-center md:w-auto md:shrink`}>
              <BiohancedProductCard productId={id} size={resolvedSize} showPrice={showPrice} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const colClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
        ? "grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-5 md:gap-6 ${colClass} ${className}`}>
      {productIds.map((id) => (
        <BiohancedProductCard
          key={id}
          productId={id}
          size={resolvedSize}
          showPrice={showPrice}
        />
      ))}
    </div>
  );
}
