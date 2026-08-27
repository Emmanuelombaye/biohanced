"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

const ORDER_KEY = "biohanced-last-order";

export function BiohancedOrderConfirm() {
  const [order, setOrder] = useState<{ orderNo: string; orderTotal: number } | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(ORDER_KEY);
      if (raw) setOrder(JSON.parse(raw));
    } catch {
      setOrder(null);
    }
  }, []);

  return (
    <section className="bg-bio-neutral-100 py-16 md:py-24">
      <div className="bio-container max-w-xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1F9E6B]">
          Order confirmed
        </p>
        <h1 className="bio-headline mt-4 text-[36px] text-bio-ink md:text-[48px]">Order placed</h1>
        {order ? (
          <>
            <p className="mt-5 text-[17px] leading-relaxed text-bio-neutral-400">
              Thanks — your order <strong className="text-bio-ink">{order.orderNo}</strong> is
              confirmed. A receipt and COAs for every batch are on their way to your inbox.
            </p>
            <p className="mt-4 text-[15px] text-bio-neutral-400">
              Order total:{" "}
              <span className="font-semibold text-bio-ink">${order.orderTotal.toFixed(2)}</span>
            </p>
          </>
        ) : (
          <p className="mt-5 text-[17px] text-bio-neutral-400">
            No recent order found. Browse the catalog to place a research order.
          </p>
        )}
        <Link
          href={BIOHENCED_LINKS.catalog}
          className="bio-cta mt-8 inline-flex rounded-[10px] px-8 py-3.5 text-[17px]"
        >
          Continue shopping
        </Link>
      </div>
    </section>
  );
}
