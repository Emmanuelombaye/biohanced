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

type CardSize = "standard" | "compact";

type ProductCardProps = {
  productId: string;
  className?: string;
  size?: CardSize;
  showActions?: boolean;
};

const IMAGE_HEIGHT = {
  standard: "h-[200px] sm:h-[220px]",
  compact: "h-[160px]",
} as const;

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
    <div className="mt-4 flex flex-col gap-2 sm:grid sm:grid-cols-2">
      <button
        type="button"
        onClick={handleAdd}
        className={`bio-btn-cart w-full text-[12px] sm:text-[13px] ${added ? "brightness-95" : ""}`}
        aria-label={`Add ${productName} to cart`}
      >
        {added ? "Added ✓" : "Add to cart"}
      </button>
      <Link
        href={medicationHref(productId)}
        className="bio-btn-view w-full text-center text-[12px] sm:text-[13px]"
      >
        View
      </Link>
    </div>
  );
}

/** Uniform retail card — Thorne-style: image, brand, title, price, divider, actions */
export function BiohancedProductCard({
  productId,
  className = "",
  size = "standard",
  showActions = false,
}: ProductCardProps) {
  const product = getCatalogProduct(productId);
  if (!product) return null;

  const cat = CATALOG_CATEGORIES[product.category];
  const isCompact = size === "compact";
  const titleLine = product.doseLabel
    ? `${product.name} – ${product.doseLabel}`
    : product.name;

  const imageBlock = (
    <BiohancedVialStage
      src={catalogImage(product.id)}
      alt={product.name}
      accent={cat.dot}
      size={isCompact ? "sm" : "md"}
      className={`${IMAGE_HEIGHT[isCompact ? "compact" : "standard"]} !aspect-auto shrink-0 rounded-t-[16px]`}
    />
  );

  const content = (
    <div className={`flex flex-1 flex-col ${isCompact ? "p-3" : "p-5"}`}>
      <p className="text-[12px] font-medium text-bio-neutral-400">Biohanced Labs</p>

      <h3
        className={`mt-2 font-[Archivo,sans-serif] font-black leading-snug tracking-[-0.02em] text-[#2E3A59] line-clamp-2 ${
          isCompact ? "text-[15px]" : "text-[17px] sm:text-[18px]"
        }`}
      >
        {titleLine}
      </h3>

      <p className="mt-2 text-[13px] text-bio-neutral-400">{product.purity} HPLC · {cat.name}</p>

      <p className="mt-3 font-[Archivo,sans-serif] text-[17px] font-extrabold text-bio-ink sm:text-[18px]">
        ${product.priceFrom.toFixed(2)}
        <span className="ml-1.5 text-[12px] font-medium text-bio-neutral-400">from</span>
      </p>

      <hr className="mt-4 border-bio-neutral-200" />

      {showActions ? (
        <CardActions productId={product.id} productName={product.name} />
      ) : (
        <Link
          href={medicationHref(product.id)}
          className="bio-btn-cart mt-4 w-full text-[12px] sm:text-[13px]"
        >
          View product
        </Link>
      )}
    </div>
  );

  if (isCompact) {
    return (
      <Link
        href={medicationHref(product.id)}
        className={`bio-product-card flex h-full min-h-[320px] flex-col ${className}`}
      >
        {imageBlock}
        {content}
      </Link>
    );
  }

  return (
    <article className={`bio-product-card flex h-full min-h-[380px] flex-col ${className}`}>
      {imageBlock}
      {content}
    </article>
  );
}

export function BiohancedProductCardGrid({
  productIds,
  columns = 3,
  className = "",
  mobileRail = false,
  showActions = true,
  compact = false,
}: {
  productIds: string[];
  columns?: 2 | 3 | 4;
  className?: string;
  mobileRail?: boolean;
  showActions?: boolean;
  compact?: boolean;
  showPrice?: boolean;
  cardSize?: string;
}) {
  const size: CardSize = compact ? "compact" : "standard";

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

  const useRail = mobileRail && compact;

  const cardProps = { size, showActions };

  if (useRail) {
    return (
      <div className={`bio-scroll-rail ${className}`}>
        <div
          className={`flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:items-stretch md:gap-5 md:overflow-visible ${gridCols}`}
        >
          {productIds.map((id) => (
            <div
              key={id}
              className="w-[min(240px,72vw)] shrink-0 snap-center md:w-auto md:shrink md:h-auto"
            >
              <BiohancedProductCard productId={id} {...cardProps} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`grid items-stretch gap-4 sm:gap-5 md:gap-6 ${colClass} ${className}`}>
      {productIds.map((id) => (
        <BiohancedProductCard key={id} productId={id} {...cardProps} className="h-full" />
      ))}
    </div>
  );
}
