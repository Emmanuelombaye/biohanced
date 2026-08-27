import Link from "next/link";
import {
  CATALOG_CATEGORIES,
  catalogImage,
  getCatalogProduct,
  medicationHref,
} from "@/lib/biohanced-catalog";
import { BiohancedImg } from "./BiohancedImg";

type ProductCardProps = {
  productId: string;
  className?: string;
  imageHeight?: "sm" | "md" | "lg";
  showMeta?: boolean;
  showPrice?: boolean;
};

const IMAGE_HEIGHT = {
  sm: "h-[120px] md:h-[132px]",
  md: "h-[148px] md:h-[160px]",
  lg: "h-[180px] md:h-[200px]",
} as const;

/** Found-style catalog card — white shell, dark image well, consistent vial scale */
export function BiohancedProductCard({
  productId,
  className = "",
  imageHeight = "md",
  showMeta = true,
  showPrice = false,
}: ProductCardProps) {
  const product = getCatalogProduct(productId);
  if (!product) return null;

  const cat = CATALOG_CATEGORIES[product.category];

  return (
    <Link
      href={medicationHref(product.id)}
      className={`group flex flex-col overflow-hidden rounded-[16px] border border-bio-neutral-200 bg-bio-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(10,11,14,0.1)] ${className}`}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#16203A] to-[#0B0B0E] ${IMAGE_HEIGHT[imageHeight]}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_42%,rgba(79,123,255,0.2),transparent_70%)]"
          aria-hidden
        />
        <BiohancedImg
          src={catalogImage(product.id)}
          alt={product.name}
          className="relative z-10 max-h-[76%] max-w-[58%] object-contain object-bottom drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      {showMeta ? (
        <div className="flex flex-1 flex-col p-4">
          <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-bio-neutral-400">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: cat.dot }}
              aria-hidden
            />
            <span className="truncate">{cat.name}</span>
          </span>
          <p className="mt-2 font-[Archivo,sans-serif] text-[18px] font-black leading-tight text-bio-ink md:text-[20px]">
            {product.name}
          </p>
          {product.doseLabel ? (
            <p className="mt-1 text-[13px] text-bio-neutral-400">
              {product.doseLabel} · {product.purity}
            </p>
          ) : null}
          {showPrice ? (
            <div className="mt-3 flex items-center justify-between">
              <span className="font-semibold text-bio-ink">From ${product.priceFrom}</span>
              <span className="text-sm font-semibold text-[#1F9E6B]">{product.purity}</span>
            </div>
          ) : (
            <p className="mt-3 text-[13px] font-semibold text-[#2E6BFF] group-hover:underline">
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
}: {
  productIds: string[];
  columns?: 2 | 3 | 4;
  imageHeight?: "sm" | "md" | "lg";
  className?: string;
}) {
  const colClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
        ? "grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-4 md:gap-5 ${colClass} ${className}`}>
      {productIds.map((id) => (
        <BiohancedProductCard key={id} productId={id} imageHeight={imageHeight} />
      ))}
    </div>
  );
}
