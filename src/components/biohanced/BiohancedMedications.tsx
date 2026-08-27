"use client";

import Link from "next/link";
import { useState } from "react";
import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedImg } from "./BiohancedImg";

const MEDICATIONS = [
  {
    molecule: "tirzepatide",
    name: "Compounded Tirzepatide",
    image: BIOHENCED_ASSETS.remote.meds.compoundedTirzepatide,
    learnMore: BIOHENCED_LINKS.meds.compoundedTirzepatide,
  },
  {
    molecule: "semaglutide",
    name: "Compounded Semaglutide",
    image: BIOHENCED_ASSETS.remote.meds.compoundedSemaglutide,
    learnMore: BIOHENCED_LINKS.meds.compoundedSemaglutide,
  },
  {
    molecule: "semaglutide",
    name: "Ozempic®",
    image: BIOHENCED_ASSETS.remote.meds.ozempic,
    learnMore: BIOHENCED_LINKS.meds.ozempic,
  },
  {
    molecule: "semaglutide",
    name: "Wegovy®",
    image: BIOHENCED_ASSETS.remote.meds.wegovy,
    learnMore: BIOHENCED_LINKS.meds.wegovy,
  },
  {
    molecule: "tirzepatide",
    name: "Zepbound®",
    image: BIOHENCED_ASSETS.remote.meds.zepbound,
    learnMore: BIOHENCED_LINKS.meds.zepbound,
  },
  {
    molecule: "tirzepatide",
    name: "Mounjaro®",
    image: BIOHENCED_ASSETS.remote.meds.mounjaro,
    learnMore: BIOHENCED_LINKS.meds.mounjaro,
  },
  {
    molecule: "liraglutide",
    name: "Saxenda®",
    image: BIOHENCED_ASSETS.remote.meds.saxenda,
    learnMore: BIOHENCED_LINKS.meds.saxenda,
  },
  {
    molecule: "orforglipron",
    name: "Foundayo™",
    image: BIOHENCED_ASSETS.remote.meds.foundayo,
    learnMore: BIOHENCED_LINKS.meds.foundayo,
  },
  {
    molecule: "liraglutide",
    name: "Victoza®",
    image: BIOHENCED_ASSETS.remote.meds.victoza,
    learnMore: BIOHENCED_LINKS.meds.victoza,
  },
];

export function BiohancedMedications() {
  const [index, setIndex] = useState(0);

  return (
    <section id="medications" className="bg-bio-white py-16 md:py-32 md:pb-16">
      <div className="bio-container">
        <h2 className="bio-headline mb-12 text-center text-[29px] leading-[1.1] text-bio-sage-400 md:mb-16 md:text-[48px] md:leading-[52.8px]">
          Wide, <em className="italic text-bio-sage-500">affordable</em> medication toolkit
        </h2>
      </div>

      <div className="relative overflow-hidden px-4 md:px-10">
        <div
          className="flex gap-3 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${index} * (min(420px, calc(100vw - 24px)) + 12px)))`,
          }}
        >
          {MEDICATIONS.map((med) => (
            <article
              key={med.name}
              className="flex h-[500px] w-[calc(100vw-24px)] max-w-[420px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-bio-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]"
            >
              <div>
                <p className="text-[14.4px] font-medium uppercase tracking-wide text-bio-neutral-400">
                  {med.molecule}
                </p>
                <div className="relative mx-auto mt-2 flex h-[280px] items-center justify-center">
                  <BiohancedImg
                    src={med.image}
                    alt={med.name}
                    className="max-h-full max-w-full object-contain object-center"
                  />
                </div>
                <h3 className="mt-2 text-2xl font-medium text-bio-neutral-500">{med.name}</h3>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={BIOHENCED_LINKS.getStarted}
                    className="inline-flex items-center justify-center rounded-full bg-bio-sage-500 px-[22px] py-3 text-[17px] font-medium text-bio-white transition-opacity hover:opacity-90"
                  >
                    Get started
                  </Link>
                  <Link
                    href={med.learnMore}
                    className="inline-flex items-center justify-center rounded-full border border-bio-neutral-200 px-[22px] py-3 text-[17px] font-medium text-bio-neutral-500 transition-opacity hover:opacity-90"
                  >
                    Learn more
                  </Link>
                </div>
                <Link
                  href={BIOHENCED_LINKS.disclaimers}
                  className="text-sm text-bio-neutral-300 underline"
                >
                  Important safety information
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-bio-neutral-200 text-bio-neutral-400 disabled:opacity-40"
          disabled={index === 0}
        >
          ←
        </button>
        <div className="flex gap-2">
          {MEDICATIONS.map((med, dotIndex) => (
            <button
              key={med.name}
              type="button"
              aria-label={`Go to slide ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-2 w-2 rounded-full ${
                index === dotIndex ? "bg-bio-sage-500" : "bg-bio-neutral-200"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setIndex((value) => Math.min(MEDICATIONS.length - 1, value + 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-bio-neutral-200 text-bio-neutral-400 disabled:opacity-40"
          disabled={index >= MEDICATIONS.length - 1}
        >
          →
        </button>
      </div>

      <p className="mx-auto mt-10 max-w-4xl px-10 text-center text-[11px] leading-relaxed text-bio-neutral-300">
        Found is not affiliated or endorsed by Novo Nordisk A/S., the owner of the registered
        trademarks Wegovy®, Ozempic®, Saxenda®, Rybelsus®, and Victoza®, nor is it affiliated or
        endorsed by Eli Lilly & Co., the owner of the registered trademarks Trulicity®, Zepbound®,
        and Mounjaro®. Rx are up to a medical provider&apos;s discretion and not available in all
        states. See risk and side effect info{" "}
        <Link href={BIOHENCED_LINKS.riskInfo} className="underline">
          here
        </Link>
        .
      </p>
    </section>
  );
}
