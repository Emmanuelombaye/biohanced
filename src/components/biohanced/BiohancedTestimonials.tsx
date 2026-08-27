"use client";

import Link from "next/link";
import { useState } from "react";
import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedImg } from "./BiohancedImg";

export function BiohancedTestimonials() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const items = BIOHENCED_ASSETS.remote.testimonials;

  const go = (direction: -1 | 1) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return items.length - 1;
      if (next > items.length - 1) return 0;
      return next;
    });
  };

  return (
    <section id="reviews" className="bg-bio-sage-500 pt-10 pb-8 text-bio-white md:pt-16">
      <div className="bio-container">
        <h2 className="bio-headline mb-10 px-4 text-center text-[29px] leading-[1.1] text-bio-sage-200 md:mb-14 md:text-[48px] md:leading-[52.8px]">
          Real people. Real stories. <em className="italic text-bio-white">Real results.</em>*
        </h2>
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
            const lostValue = person.lost.replace(/\s*lbs/i, "");

            return (
              <article
                key={person.name}
                className="w-[calc(100vw-24px)] max-w-[420px] shrink-0"
              >
                <div className="overflow-hidden transition-opacity duration-500">
                  {!isFlipped ? (
                    <div className="grid grid-cols-2 gap-0">
                      <div className="relative h-[330px] overflow-hidden">
                        <span className="absolute top-3 left-3 z-10 rounded-full bg-bio-neutral-100/65 px-3 py-1 text-base font-medium text-[#101f23]">
                          Before
                        </span>
                        <BiohancedImg
                          src={person.before}
                          alt={`${person.name} before`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="relative h-[330px] overflow-hidden">
                        <span className="absolute top-3 left-3 z-10 rounded-full bg-bio-grass px-3 py-1 text-base font-medium text-[#101f23]">
                          After
                        </span>
                        <BiohancedImg
                          src={person.after}
                          alt={`${person.name} after`}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-[330px] flex-col justify-between rounded-2xl bg-bio-sage-400/25 p-6">
                      <BiohancedImg
                        src={BIOHENCED_ASSETS.remote.quote}
                        alt=""
                        width={61}
                        height={46}
                      />
                      <p className="text-[18px] leading-relaxed text-bio-white">{person.quote}</p>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 self-start text-sm text-bio-white/80"
                        onClick={() =>
                          setFlipped((state) => ({ ...state, [personIndex]: false }))
                        }
                      >
                        ← Back
                      </button>
                    </div>
                  )}
                </div>

                {!isFlipped ? (
                  <div className="mt-4 space-y-2">
                    <h3 className="text-[32px] leading-none font-medium text-bio-white">
                      {person.name}
                    </h3>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full border border-bio-white/25 px-2.5 py-1 text-sm text-bio-white"
                      onClick={() =>
                        setFlipped((state) => ({ ...state, [personIndex]: true }))
                      }
                    >
                      <BiohancedImg
                        src={BIOHENCED_ASSETS.remote.chat}
                        alt=""
                        width={16}
                        height={16}
                      />
                      What {person.name} says
                    </button>
                    <p className="pt-1 text-bio-grass">
                      <span className="text-[22px] leading-[22px]">lost</span>
                      <br />
                      <span className="text-[56px] leading-[56px]">
                        {lostValue} <span className="text-[28px]">lbs</span>
                      </span>
                    </p>
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-bio-white/30 text-bio-white"
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
              className={`h-2 w-2 rounded-full ${
                index === dotIndex ? "bg-bio-white" : "bg-bio-white/35"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-bio-white/30 text-bio-white"
        >
          →
        </button>
      </div>

      <p className="mx-auto mt-8 max-w-3xl px-6 text-center text-[11px] leading-relaxed text-bio-sage-300 md:px-10">
        *Real member(s), paid for appearance. individual results may vary. In 1 year, Found users
        lost an avg. of 12% body weight. Results based on data from 1,773 users who reported their
        weight at least 1 time/week on avg. for 1 year. RX are up to a medical provider&apos;s
        discretion. See below for risk info{" "}
        <Link href={BIOHENCED_LINKS.riskInfo} className="underline">
          here
        </Link>
        .
      </p>
    </section>
  );
}
