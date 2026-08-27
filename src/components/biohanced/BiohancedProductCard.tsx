"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CATALOG_CATEGORIES,
  catalogImage,
  getCatalogProduct,
  medicationHref,
} from "@/lib/biohanced-catalog";
import { getVariantsForProduct } from "@/lib/biohanced-price-tiers";
import { useCart } from "@/lib/biohanced-cart-context";
import { BiohancedVialStage } from "./BiohancedVialStage";

type CardSize = "standard" | "compact" | "full";

type ProductCardProps = {
  productId: string;
  className?: string;
  size?: CardSize;
  showPrice?: boolean;
  /** View + Add to cart pill buttons (catalog-style) */
  showActions?: boolean;
};

function PurityBadge({ purity }: { purity: string }) {
  return (
    <span className="rounded-full bg-[#EEF7EE] px-2.5 py-1 text-[11px] font-semibold text-[#1F9E6B]">
      {purity}
    </span>
  );
}

function CardActions({ productId, productName }: { productId: string; productName: string }) {
  const { addProduct } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const product = getCatalogProduct(productId);
    const variants = getVariantsForProduct(productId);
    const first = variants[0];

    if (first) {
      addProduct(productId, productName, first.label, first.price);
    } else if (product) {
      addProduct(productId, productName, "1 vial", product.priceFrom);
    } else {
      return;
    }

    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      <Link
        href={medicationHref(productId)}
        className="bio-btn-view z-10 text-center text-[12px] sm:text-[13px]"
      >
        View
      </Link>
      <button
        type="button"
        onClick={handleAdd}
        className={`bio-btn-cart z-10 text-[12px] sm:text-[13px] ${added ? "brightness-95" : ""}`}
        aria-label={`Add ${productName} to cart`}
      >
        {added ? "Added ✓" : "Add to cart"}
      </button>
    </div>
  );
}

/** Retail-style product card — image, brand, title, price, divider, View + Add actions */
export function BiohancedProductCard({
  productId,
  className = "",
  size = "standard",
  showPrice = false,
  showActions = false,
}: ProductCardProps) {
  const product = getCatalogProduct(productId);
  if (!product) return null;

  const cat = CATALOG_CATEGORIES[product.category];
  const isCompact = size === "compact";
  const isFull = size === "full";
  const stageSize = isFull ? "lg" : isCompact ? "sm" : "md";

  const body = (
    <>
      <BiohancedVialStage
        src={catalogImage(product.id)}
        alt={product.name}
        accent={cat.dot}
        size={stageSize}
        className="rounded-t-[16px]"
        label={product.name}
        doseLabel={product.doseLabel}
      />

      <div className={`flex flex-1 flex-col ${isCompact ? "p-3" : isFull ? "p-5 sm:p-6" : "p-5"}`}>
        <p className="text-[12px] font-medium text-bio-neutral-400">
          Biohanced Labs · {cat.name}
        </p>

        <h3
          className={`mt-2 font-[Archivo,sans-serif] font-black leading-snug tracking-[-0.02em] text-[#2E3A59] ${
            isCompact
              ? "text-[15px] line-clamp-2"
              : isFull
                ? "text-[20px] sm:text-[22px]"
                : "text-[17px] sm:text-[19px] line-clamp-2"
          }`}
        >
          {product.name}
          {product.doseLabel && !isFull ? ` · ${product.doseLabel}` : ""}
        </h3>

        {isFull && product.subtitle ? (
          <p className="mt-1.5 text-[13px] font-medium text-bio-neutral-400">{product.subtitle}</p>
        ) : null}

        {isFull ? (
          <>
            <p className="mt-3 text-[14px] leading-relaxed text-bio-neutral-400">{product.blurb}</p>
            <ul className="mt-4 space-y-2 text-[13px] text-bio-neutral-400">
              <li className="flex justify-between gap-3 border-b border-bio-neutral-100 pb-2">
                <span>Dose</span>
                <span className="font-semibold text-bio-ink">{product.doseLabel}</span>
              </li>
              <li className="flex justify-between gap-3 border-b border-bio-neutral-100 pb-2">
                <span>Batch</span>
                <span className="font-semibold text-bio-ink">{product.batch}</span>
              </li>
              <li className="flex justify-between gap-3">
                <span>Form</span>
                <span className="font-semibold text-bio-ink">{product.formLabel}</span>
              </li>
            </ul>
          </>
        ) : null}

        {(showPrice || showActions || isFull) && (
          <>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <p className="font-[Archivo,sans-serif] text-[18px] font-extrabold text-bio-ink sm:text-[20px]">
                ${product.priceFrom}
                <span className="ml-1 text-[12px] font-medium text-bio-neutral-400">from</span>
              </p>
              <PurityBadge purity={product.purity} />
            </div>
            <hr className="mt-4 border-bio-neutral-200" />
          </>
        )}

        {showActions ? (
          <CardActions productId={product.id} productName={product.name} />
        ) : isCompact ? (
          <div className="mt-3 flex justify-end">
            <PurityBadge purity={product.purity} />
          </div>
        ) : !isFull ? (
          <Link
            href={medicationHref(product.id)}
            className="bio-btn-view mt-4 w-full text-center text-[13px]"
          >
            View
          </Link>
        ) : (
          <CardActions productId={product.id} productName={product.name} />
        )}
      </div>
    </>
  );

  if (isCompact) {
    return (
      <Link
        href={medicationHref(product.id)}
        className={`group bio-product-card flex flex-col ${className}`}
      >
        {body}
      </Link>
    );
  }

  return (
    <article className={`bio-product-card flex flex-col ${isFull ? "bio-product-card-full" : ""} ${className}`}>
      {body}
    </article>
  );
}

export function BiohancedProductCardGrid({
  productIds,
  columns = 3,
  className = "",
  mobileRail = false,
  showPrice = false,
  showActions = false,
  compact = false,
  cardSize,
}: {
  productIds: string[];
  columns?: 2 | 3 | 4;
  className?: string;
  mobileRail?: boolean;
  showPrice?: boolean;
  showActions?: boolean;
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

  const colClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const useRail = mobileRail && resolvedSize === "compact";

  const cardProps = {
    size: resolvedSize,
    showPrice: showPrice || showActions,
    showActions,
  };

  if (useRail) {
    return (
      <div className={`bio-scroll-rail ${className}`}>
        <div
          className={`flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:gap-6 md:overflow-visible ${gridCols}`}
        >
          {productIds.map((id) => (
            <div key={id} className="w-[min(260px,78vw)] shrink-0 snap-center md:w-auto md:shrink">
              <BiohancedProductCard productId={id} {...cardProps} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`grid gap-5 md:gap-6 ${colClass} ${className}`}>
      {productIds.map((id) => (
        <BiohancedProductCard key={id} productId={id} {...cardProps} />
      ))}
    </div>
  );
}
