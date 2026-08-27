"use client";

import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { useCart } from "@/lib/biohanced-cart-context";

export function BiohancedCart() {
  const { items, subtotal, shipping, total, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <section className="bg-bio-white py-12 md:py-16">
        <div className="bio-container max-w-xl">
          <div className="rounded-[18px] border border-bio-neutral-200 bg-bio-neutral-100 p-8 text-center">
            <p className="text-[17px] text-bio-neutral-400">Your cart is empty.</p>
            <p className="mt-3 text-sm text-bio-neutral-400">
              Browse the catalog and add compounds to your research order.
            </p>
            <Link
              href={BIOHENCED_LINKS.catalog}
              className="bio-cta mt-6 inline-flex rounded-[10px] px-6 py-3 text-[15px]"
            >
              Browse catalog
            </Link>
          </div>
          <p className="mt-6 text-center text-[12px] text-bio-neutral-400">
            Shipping: $12 under $150 · Free over $150 · 1–2 business days dispatch
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-bio-white py-12 md:py-16">
      <div className="bio-container max-w-3xl">
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.key}
              className="flex flex-wrap items-center justify-between gap-4 rounded-[16px] border border-bio-neutral-200 p-5"
            >
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-bio-ink">{item.name}</p>
                <p className="text-sm text-bio-neutral-400">{item.variantLabel}</p>
                <p className="mt-1 text-[15px] font-semibold text-bio-ink">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-lg border border-bio-neutral-200">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    className="px-3 py-2 text-bio-neutral-400 hover:text-bio-ink"
                    onClick={() => updateQuantity(item.key, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="min-w-[32px] text-center text-[15px] font-medium">{item.quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    className="px-3 py-2 text-bio-neutral-400 hover:text-bio-ink"
                    onClick={() => updateQuantity(item.key, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="text-sm text-bio-neutral-400 underline hover:text-bio-ink"
                  onClick={() => removeItem(item.key)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-[16px] border border-bio-neutral-200 bg-bio-neutral-100 p-6">
          <div className="space-y-2 text-[15px]">
            <div className="flex justify-between">
              <span className="text-bio-neutral-400">Subtotal</span>
              <span className="font-medium text-bio-ink">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-bio-neutral-400">Shipping</span>
              <span className="font-medium text-bio-ink">
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            {subtotal > 0 && subtotal < 150 ? (
              <p className="text-[13px] text-bio-neutral-400">Free shipping on orders over $150</p>
            ) : null}
            <div className="flex justify-between border-t border-bio-neutral-200 pt-3 text-[17px] font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Link
            href={BIOHENCED_LINKS.checkout}
            className="bio-cta mt-6 flex w-full items-center justify-center rounded-[10px] py-3.5 text-[17px]"
          >
            Checkout
          </Link>
        </div>

        <p className="mt-6 text-center text-[12px] text-bio-neutral-400">
          For research use only. Not for human consumption.
        </p>
      </div>
    </section>
  );
}
