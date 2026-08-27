"use client";

import Link from "next/link";
import { useState } from "react";
import { BIOHENCED_STORE_FAQ } from "@/lib/biohanced-catalog";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

export function BiohancedFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bio-white py-16 md:py-24">
      <div className="bio-container max-w-3xl">
        <h2 className="bio-headline text-center text-[32px] text-bio-ink md:text-[44px]">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[17px] text-bio-neutral-400">
          Research use, COAs, shipping, and purity — straight from our store documentation.
        </p>

        <div className="mt-10 divide-y divide-bio-neutral-200 border-y border-bio-neutral-200">
          {BIOHENCED_STORE_FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] font-semibold text-bio-ink">{item.question}</span>
                  <span className="text-bio-neutral-400" aria-hidden>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? (
                  <p className="pb-5 text-[16px] leading-relaxed text-bio-neutral-400">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[15px] text-bio-neutral-400">
          Still have questions?{" "}
          <Link href={BIOHENCED_LINKS.contact} className="font-semibold text-[#2E6BFF] underline">
            Contact our team
          </Link>
          {" "}or email{" "}
          <a href={BIOHENCED_LINKS.email} className="underline">research@biohancedlabs.com</a>.
        </p>
      </div>
    </section>
  );
}
