"use client";

import Link from "next/link";
import { useState } from "react";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BIOHENCED_REVIEWS } from "@/lib/biohanced-reviews";
import { BiohancedImg } from "./BiohancedImg";

export function BiohancedTestimonials() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const items = BIOHENCED_REVIEWS;

  const go = (direction: -1 | 1) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return items.length - 1;
      if (next > items.length - 1) return 0;
      return next;
    });
  };

  return (
    <section id="reviews" className="bg-[#0A0B0E] pt-10 pb-10 text-white md:pt-16 md:pb-12">
      <div className="bio-container">
        <div className="mb-10 text-center">
          <p className="text-[14px] font-semibold text-[#B6FF3A]">★★★★★ 4.9</p>
          <p className="mt-2 text-[13px] uppercase tracking-[0.2em] text-[#9AA0A8]">
            480+ verified reviews
          </p>
          <h2 className="bio-headline mt-4 px-4 text-[29px] leading-[1.1] text-white md:text-[48px] md:leading-[1.05]">
            Trusted by the labs that{" "}
            <em className="font-bio-quincy-italic text-[#B6FF3A] not-italic">verify everything.</em>
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden px-3 md:px-10">
        <div
          className="flex gap-3 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${index} * (min(420px, calc(100vw - 24px)) + 12px)))`,
          }}
        >
          {items.map((person, personIndex) => {
            const isFlipped = flipped[personIndex];

            return (
              <article
                key={person.name}
                className="w-[calc(100vw-24px)] max-w-[420px] shrink-0"
              >
                <div className="overflow-hidden transition-opacity duration-500">
                  {!isFlipped ? (
                    <div className="relative overflow-hidden rounded-2xl border border-[#262932] bg-[#14161A]">
                      <div className="relative flex min-h-[320px] items-center justify-center bg-gradient-to-b from-[#16203A] to-[#0B0D12] px-6 py-10">
                        <BiohancedImg
                          src={person.image}
                          alt={`${person.product} research vial`}
                          className="max-h-[240px] w-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-0 border-t border-[#262932]">
                        <div className="border-r border-[#262932] px-4 py-3">
                          <p className="text-[11px] uppercase tracking-[0.14em] text-[#9AA0A8]">
                            Purity (HPLC)
                          </p>
                          <p className="mt-1 font-[Archivo,sans-serif] text-[28px] font-black text-[#1F9E6B]">
                            {person.purity}
                          </p>
                        </div>
                        <div className="px-4 py-3">
                          <p className="text-[11px] uppercase tracking-[0.14em] text-[#9AA0A8]">
                            Batch
                          </p>
                          <p className="mt-1 font-[Space_Grotesk,sans-serif] text-[15px] font-semibold text-white">
                            {person.batch}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex min-h-[320px] flex-col justify-between rounded-2xl border border-[#262932] bg-[#14161A] p-6">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B6FF3A]">
                          {person.product}
                        </p>
                        <p className="mt-3 text-[18px] leading-relaxed text-[#C9CCD2]">
                          {person.quote}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="mt-6 inline-flex items-center gap-2 self-start text-sm text-[#9AA0A8] transition-colors hover:text-white"
                        onClick={() =>
                          setFlipped((state) => ({ ...state, [personIndex]: false }))
                        }
                      >
                        ← Back to vial
                      </button>
                    </div>
                  )}
                </div>

                {!isFlipped ? (
                  <div className="mt-4 space-y-2">
                    <h3 className="text-[28px] leading-none font-semibold text-white md:text-[32px]">
                      {person.name}
                    </h3>
                    <p className="text-[14px] text-[#9AA0A8]">
                      {person.role} · {person.date}
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full border border-[#262932] bg-[#14161A] px-3 py-1.5 text-sm text-[#C9CCD2] transition-colors hover:border-[#B6FF3A]/40 hover:text-white"
                      onClick={() =>
                        setFlipped((state) => ({ ...state, [personIndex]: true }))
                      }
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B6FF3A]" aria-hidden />
                      Read verified review
                    </button>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#262932] text-white transition-colors hover:border-[#B6FF3A]/50"
        >
          ←
        </button>
        <div className="flex gap-2">
          {items.map((person, dotIndex) => (
            <button
              key={person.name}
              type="button"
              aria-label={`Go to slide ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === dotIndex ? "bg-[#B6FF3A]" : "bg-white/30"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#262932] text-white transition-colors hover:border-[#B6FF3A]/50"
        >
          →
        </button>
      </div>

      <p className="mx-auto mt-8 max-w-3xl px-6 text-center text-[11px] leading-relaxed text-[#9AA0A8] md:px-10">
        Verified purchaser feedback from research customers. Individual batch results vary; exact
        purity is printed on each Certificate of Analysis. Products are for research use only — not
        for human consumption.{" "}
        <Link href={BIOHENCED_LINKS.disclaimers} className="text-[#B6FF3A] underline">
          Important safety information
        </Link>
        .
      </p>
    </section>
  );
}
