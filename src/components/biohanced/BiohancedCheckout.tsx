"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { generateOrderNumber } from "@/lib/biohanced-price-tiers";
import { useCart } from "@/lib/biohanced-cart-context";

const ORDER_KEY = "biohanced-last-order";

export function BiohancedCheckout() {
  const router = useRouter();
  const { items, subtotal, shipping, total, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <section className="bg-bio-white py-12">
        <div className="bio-container max-w-xl text-center text-bio-neutral-400">
          <p>Your cart is empty.</p>
        </div>
      </section>
    );
  }

  const placeOrder = () => {
    setSubmitting(true);
    const orderNo = generateOrderNumber();
    sessionStorage.setItem(ORDER_KEY, JSON.stringify({ orderNo, orderTotal: total }));
    clearCart();
    router.push(BIOHENCED_LINKS.orderConfirm);
  };

  return (
    <section className="bg-bio-white py-12 md:py-16">
      <div className="bio-container grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-wide text-bio-neutral-400">
              Contact
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input
                type="email"
                placeholder="Email address"
                className="rounded-[10px] border border-bio-neutral-200 px-4 py-3 text-[15px]"
              />
              <input
                type="text"
                placeholder="Institution / lab name"
                className="rounded-[10px] border border-bio-neutral-200 px-4 py-3 text-[15px]"
              />
            </div>
          </div>
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-wide text-bio-neutral-400">
              Shipping
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full name"
                className="rounded-[10px] border border-bio-neutral-200 px-4 py-3 text-[15px] sm:col-span-2"
              />
              <input
                type="text"
                placeholder="Street address"
                className="rounded-[10px] border border-bio-neutral-200 px-4 py-3 text-[15px] sm:col-span-2"
              />
              <input
                type="text"
                placeholder="City"
                className="rounded-[10px] border border-bio-neutral-200 px-4 py-3 text-[15px]"
              />
              <input
                type="text"
                placeholder="State"
                className="rounded-[10px] border border-bio-neutral-200 px-4 py-3 text-[15px]"
              />
              <input
                type="text"
                placeholder="ZIP"
                className="rounded-[10px] border border-bio-neutral-200 px-4 py-3 text-[15px]"
              />
            </div>
          </div>
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-wide text-bio-neutral-400">
              Payment
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <input
                type="text"
                placeholder="Card number"
                className="rounded-[10px] border border-bio-neutral-200 px-4 py-3 text-[15px] sm:col-span-3"
              />
              <input
                type="text"
                placeholder="MM / YY"
                className="rounded-[10px] border border-bio-neutral-200 px-4 py-3 text-[15px]"
              />
              <input
                type="text"
                placeholder="CVC"
                className="rounded-[10px] border border-bio-neutral-200 px-4 py-3 text-[15px]"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[18px] border border-bio-neutral-200 bg-bio-neutral-100 p-6">
          <h2 className="text-[17px] font-semibold text-bio-ink">Order summary</h2>
          <ul className="mt-4 space-y-3 text-[14px]">
            {items.map((item) => (
              <li key={item.key} className="flex justify-between gap-4 text-bio-neutral-400">
                <span className="min-w-0 truncate">
                  {item.name} · {item.variantLabel} × {item.quantity}
                </span>
                <span className="shrink-0 font-medium text-bio-ink">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 border-t border-bio-neutral-200 pt-4 text-[15px]">
            <div className="flex justify-between">
              <span className="text-bio-neutral-400">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-bio-neutral-400">Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between font-semibold text-bio-ink">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            type="button"
            disabled={submitting}
            onClick={placeOrder}
            className="bio-cta mt-6 w-full rounded-[10px] py-3.5 text-[17px] font-semibold disabled:opacity-60"
          >
            Place order
          </button>
          <p className="mt-4 text-[12px] leading-relaxed text-bio-neutral-400">
            By ordering you confirm these compounds are for laboratory research use only.
          </p>
        </div>
      </div>
    </section>
  );
}
