"use client";

import Link from "next/link";
import {
  CATALOG_CATEGORIES,
  CATALOG_NAV_CATEGORIES,
  getProductsByCategory,
  type CatalogCategory,
  type CatalogProduct,
} from "@/lib/biohanced-catalog";
import { getVariantsForProduct } from "@/lib/biohanced-price-tiers";
import { useCart } from "@/lib/biohanced-cart-context";
import { BiohancedProductCard } from "./BiohancedProductCard";

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
              item.category === undefined ? active === "all" : active === item.category;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                  isActive
                    ? "bg-bio-ink text-white shadow-[0_4px_14px_rgba(10,11,14,0.15)]"
                    : "border border-bio-neutral-200 bg-bio-white text-bio-neutral-400 hover:border-bio-neutral-300 hover:text-bio-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="flex flex-col">
              <BiohancedProductCard productId={product.id} showPrice />
              <button
                type="button"
                onClick={() => quickAdd(product)}
                className="mt-3 w-full rounded-[12px] border border-[#e8e6e1] bg-bio-neutral-100 py-2.5 text-[13px] font-semibold text-bio-ink transition-colors hover:border-bio-ink hover:bg-bio-white"
              >
                Add 1 vial to cart
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
