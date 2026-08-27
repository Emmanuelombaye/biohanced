"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CATALOG_CATEGORIES,
  catalogImage,
  getCarouselProducts,
  medicationHref,
} from "@/lib/biohanced-catalog";
import { BiohancedVialStage } from "./BiohancedVialStage";

const SLIDE_COPY = [
  {
    eyebrow: "Purity · verified",
    title: "Every batch documented",
    body: "HPLC and mass spectrometry on every release — COAs published for your lab records.",
  },
  {
    eyebrow: "Science · verified",
    title: "Traceable from synthesis to seal",
    body: "Twelve verified steps from raw materials to nitrogen-sealed vials stored at −80°C.",
  },
  {
    eyebrow: "Delivery · cold-chain",
    title: "Shipped with care",
    body: "Expedited carriers, discreet packaging, and cold-chain options for sensitive compounds.",
  },
  {
    eyebrow: "Research · grade",
    title: "Seventeen catalog compounds",
    body: "Recovery, metabolic, longevity, and specialty peptides — all ≥99% purity by HPLC.",
  },
  {
    eyebrow: "Made in USA",
    title: "US synthesis & packaging",
    body: "Manufacturing and packaging from start to finish in the USA — no relabeling.",
  },
];

export function BiohancedMarketingCarousel() {
  const products = getCarouselProducts().slice(0, SLIDE_COPY.length);
  const [index, setIndex] = useState(0);
  const copy = SLIDE_COPY[index] ?? SLIDE_COPY[0];
  const product = products[index];

  const go = (dir: -1 | 1) => {
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) return products.length - 1;
      if (next >= products.length) return 0;
      return next;
    });
  };

  return (
    <section className="bg-bio-neutral-100 py-14 md:py-20">
      <div className="bio-container">
        <div className="overflow-hidden rounded-[28px] border border-[#e8e6e1] bg-bio-white shadow-[0_16px_56px_rgba(10,11,14,0.07)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[300px] border-b border-[#ececea] bg-bio-neutral-100 md:min-h-[380px] lg:border-b-0 lg:border-r">
              {products.map((item, i) => {
                const accent = CATALOG_CATEGORIES[item.category].dot;
                return (
                  <Link
                    key={item.id}
                    href={medicationHref(item.id)}
                    className={`absolute inset-0 flex flex-col transition-opacity duration-700 ease-out ${
                      i === index ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    <BiohancedVialStage
                      src={catalogImage(item.id)}
                      alt={item.name}
                      accent={accent}
                      size="lg"
                      fill
                      className="rounded-none"
                    />
                  </Link>
                );
              })}
              {product ? (
                <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-wrap items-end justify-between gap-3">
                  <div className="rounded-[12px] border border-[#e8e6e1] bg-white/95 px-4 py-3 shadow-[0_8px_24px_rgba(10,11,14,0.08)] backdrop-blur-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bio-neutral-400">
                      {CATALOG_CATEGORIES[product.category].name}
                    </p>
                    <p className="font-[Archivo,sans-serif] text-[18px] font-black text-bio-ink">
                      {product.name}
                    </p>
                    <p className="mt-0.5 text-[13px] text-bio-neutral-400">
                      {product.doseLabel} · {product.purity}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col justify-center bg-[#0A0B0E] p-8 md:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B6FF3A]">
                {copy.eyebrow}
              </p>
              <h2 className="bio-headline mt-4 text-[28px] leading-tight text-white md:text-[36px]">
                {copy.title}
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[#9AA0A8]">{copy.body}</p>
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => go(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#262932] text-white transition-colors hover:border-[#B6FF3A]/50"
                >
                  ←
                </button>
                <div className="flex gap-2">
                  {products.map((_, dot) => (
                    <button
                      key={dot}
                      type="button"
                      aria-label={`Slide ${dot + 1}`}
                      onClick={() => setIndex(dot)}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        index === dot ? "w-6 bg-[#B6FF3A]" : "bg-white/25"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => go(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#262932] text-white transition-colors hover:border-[#B6FF3A]/50"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
