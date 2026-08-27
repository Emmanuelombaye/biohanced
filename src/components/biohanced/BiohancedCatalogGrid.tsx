"use client";

import Link from "next/link";
import {
  CATALOG_CATEGORIES,
  CATALOG_NAV_CATEGORIES,
  catalogImage,
  getProductsByCategory,
  medicationHref,
  type CatalogCategory,
  type CatalogProduct,
} from "@/lib/biohanced-catalog";
import { getVariantsForProduct } from "@/lib/biohanced-price-tiers";
import { useCart } from "@/lib/biohanced-cart-context";
import { BiohancedImg } from "./BiohancedImg";

function parseCategory(value?: string): CatalogCategory | "all" {
  if (!value) return "all";
  if (value in CATALOG_CATEGORIES) return value as CatalogCategory;
  return "all";
}

export function BiohancedCatalogGrid({ categoryParam }: { categoryParam?: string }) {
  const active = parseCategory(categoryParam);
  const products = getProductsByCategory(active);
  const { addProduct } = useCart();

  const quickAdd = (product: CatalogProduct) => {
    const variants = getVariantsForProduct(product.id);
    const first = variants[0];
    if (!first) return;
    addProduct(product.id, product.name, first.label, first.price);
  };

  return (
    <section className="bg-bio-white py-10 md:py-14">
      <div className="bio-container">
        <div className="flex flex-wrap gap-2">
          {CATALOG_NAV_CATEGORIES.map((item) => {
            const isActive =
              item.category === undefined
                ? active === "all"
                : active === item.category;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                  isActive
                    ? "bg-[#0A0B0E] text-white"
                    : "border border-bio-neutral-200 bg-bio-white text-bio-neutral-400 hover:border-bio-neutral-300 hover:text-bio-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            const cat = CATALOG_CATEGORIES[product.category];
            return (
              <article
                key={product.id}
                className="overflow-hidden rounded-[16px] border border-bio-neutral-200 bg-bio-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(10,11,14,0.08)]"
              >
                <Link href={medicationHref(product.id)} className="block">
                  <div className="flex h-[160px] items-center justify-center bg-gradient-to-b from-[#16203A] to-[#0B0D12]">
                    <BiohancedImg
                      src={catalogImage(product.id)}
                      alt={product.name}
                      className="max-h-[86%] max-w-[70%] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
                    />
                  </div>
                  <div className="p-4 pb-3">
                    <span className="flex items-center gap-2 text-[12px] text-bio-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: cat.dot }} />
                      {cat.name}
                    </span>
                    <p className="mt-2 font-[Archivo,sans-serif] text-[20px] font-black text-bio-ink">
                      {product.name}
                    </p>
                    <p className="mt-1 text-sm text-bio-neutral-400">
                      {product.doseLabel} · {product.purity}
                    </p>
                    <p className="mt-3 text-[15px] font-semibold text-[#1F9E6B]">
                      From ${product.priceFrom}
                    </p>
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <button
                    type="button"
                    onClick={() => quickAdd(product)}
                    className="w-full rounded-[10px] border border-bio-neutral-200 py-2 text-[13px] font-semibold text-bio-ink transition-colors hover:border-[#0A0B0E] hover:bg-bio-neutral-100"
                  >
                    Add 1 vial to cart
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
