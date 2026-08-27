"use client";

import Link from "next/link";
import {
  CATALOG_CATEGORIES,
  CATALOG_NAV_CATEGORIES,
  getProductsByCategory,
  type CatalogCategory,
} from "@/lib/biohanced-catalog";
import { BiohancedProductCard } from "./BiohancedProductCard";

function parseCategory(value?: string): CatalogCategory | "all" {
  if (!value) return "all";
  if (value in CATALOG_CATEGORIES) return value as CatalogCategory;
  return "all";
}

export function BiohancedCatalogGrid({ categoryParam }: { categoryParam?: string }) {
  const active = parseCategory(categoryParam);
  const products = getProductsByCategory(active);

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

        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <BiohancedProductCard
              key={product.id}
              productId={product.id}
              showActions
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
