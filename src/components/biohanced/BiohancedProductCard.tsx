import Link from "next/link";
import {
  CATALOG_CATEGORIES,
  catalogImage,
  getCatalogProduct,
  medicationHref,
} from "@/lib/biohanced-catalog";
import { BiohancedVialStage } from "./BiohancedVialStage";

type ProductCardProps = {
  productId: string;
  className?: string;
  imageHeight?: "sm" | "md" | "lg";
  showMeta?: boolean;
  showPrice?: boolean;
  /** Mini strip card — vial + name only */
  variant?: "default" | "mini";
};

/** Premium catalog card — studio-lit single vial on warm white (client mockup style) */
export function BiohancedProductCard({
  productId,
  className = "",
  imageHeight = "md",
  showMeta = true,
  showPrice = false,
  variant = "default",
}: ProductCardProps) {
  const product = getCatalogProduct(productId);
  if (!product) return null;

  const cat = CATALOG_CATEGORIES[product.category];
  const isMini = variant === "mini";

  return (
    <Link
      href={medicationHref(product.id)}
      className={`group flex flex-col overflow-hidden rounded-[20px] border border-[#e8e6e1] bg-bio-white shadow-[0_1px_2px_rgba(10,11,14,0.04),0_14px_40px_rgba(10,11,14,0.06)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#d8d6d0] hover:shadow-[0_20px_48px_rgba(10,11,14,0.1)] ${className}`}
    >
      {!isMini ? (
        <div className="flex items-center gap-2 px-4 pt-4">
          <span
            className="h-2 w-2 shrink-0 rounded-full ring-2 ring-white"
            style={{ backgroundColor: cat.dot, boxShadow: `0 0 10px ${cat.dot}55` }}
            aria-hidden
          />
          <span className="truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-bio-neutral-400">
            {cat.name}
          </span>
        </div>
      ) : null}

      <BiohancedVialStage
        src={catalogImage(product.id)}
        alt={product.name}
        accent={cat.dot}
        size={isMini ? "sm" : imageHeight}
        className={`${isMini ? "mx-1 mt-1 rounded-[12px]" : "mx-2 mt-1 rounded-[14px]"}`}
      />

      {isMini ? (
        <p className="px-3 pb-3 text-center text-[11px] font-semibold text-bio-ink">{product.name}</p>
      ) : null}

      {showMeta && !isMini ? (
        <div className="flex flex-1 flex-col border-t border-[#f0eeea] px-4 pb-4 pt-3">
          <p className="font-[Archivo,sans-serif] text-[19px] font-black leading-tight tracking-[-0.02em] text-bio-ink md:text-[21px]">
            {product.name}
          </p>
          {product.doseLabel ? (
            <p className="mt-1.5 text-[13px] leading-relaxed text-bio-neutral-400">
              {product.doseLabel}
              <span className="mx-1.5 text-[#d8d6d0]">·</span>
              <span className="font-medium text-[#1F9E6B]">{product.purity}</span>
            </p>
          ) : null}
          {showPrice ? (
            <div className="mt-4 flex items-center justify-between border-t border-[#f0eeea] pt-3">
              <span className="text-[15px] font-semibold text-bio-ink">From ${product.priceFrom}</span>
              <span className="rounded-full bg-[#eef7ee] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#1F9E6B]">
                In stock
              </span>
            </div>
          ) : (
            <p className="mt-3 text-[13px] font-medium text-[#2E6BFF] transition-colors group-hover:text-bio-ink">
              View compound →
            </p>
          )}
        </div>
      ) : null}
    </Link>
  );
}

export function BiohancedProductCardGrid({
  productIds,
  columns = 3,
  imageHeight = "md",
  className = "",
  mobileRail = true,
  showPrice = false,
}: {
  productIds: string[];
  columns?: 2 | 3 | 4;
  imageHeight?: "sm" | "md" | "lg";
  className?: string;
  mobileRail?: boolean;
  showPrice?: boolean;
}) {
  if (mobileRail) {
    return (
      <div className={`bio-scroll-rail -mx-6 px-6 md:mx-0 md:px-0 ${className}`}>
        <div
          className={`flex gap-4 overflow-x-auto pb-1 snap-x snap-mandatory md:grid md:gap-5 md:overflow-visible ${
            columns === 2
              ? "md:grid-cols-2"
              : columns === 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {productIds.map((id) => (
            <div
              key={id}
              className="w-[min(292px,82vw)] shrink-0 snap-center md:w-auto md:shrink"
            >
              <BiohancedProductCard
                productId={id}
                imageHeight={imageHeight}
                showPrice={showPrice}
              />
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
    <div className={`grid gap-4 md:gap-5 ${colClass} ${className}`}>
      {productIds.map((id) => (
        <BiohancedProductCard key={id} productId={id} imageHeight={imageHeight} showPrice={showPrice} />
      ))}
    </div>
  );
}
