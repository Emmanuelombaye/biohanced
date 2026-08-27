"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CATALOG_CATEGORIES,
  catalogImage,
  getCarouselProducts,
  medicationHref,
} from "@/lib/biohanced-catalog";
import { BiohancedImg } from "./BiohancedImg";

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
    <section className="bg-bio-white py-14 md:py-20">
      <div className="bio-container">
        <div className="overflow-hidden rounded-[24px] border border-bio-neutral-200 bg-bio-white shadow-[0_8px_32px_rgba(10,11,14,0.06)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] bg-gradient-to-b from-[#16203A] to-[#0B0B0E] md:min-h-[360px]">
              {products.map((item, i) => (
                <Link
                  key={item.id}
                  href={medicationHref(item.id)}
                  className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-700 md:p-12 ${
                    i === index ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_42%,rgba(79,123,255,0.22),transparent_72%)]"
                    aria-hidden
                  />
                  <BiohancedImg
                    src={catalogImage(item.id)}
                    alt={item.name}
                    className="relative z-10 max-h-[min(240px,68%)] max-w-[58%] object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
                  />
                </Link>
              ))}
              {product ? (
                <div className="absolute bottom-6 left-6 z-10 rounded-[10px] border border-[#262932] bg-[#14161A]/90 px-4 py-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9AA0A8]">
                    {CATALOG_CATEGORIES[product.category].name}
                  </p>
                  <p className="text-[15px] font-semibold text-white">{product.name}</p>
                </div>
              ) : null}
            </div>
            <div className="flex flex-col justify-center bg-[#0A0B0E] p-8 md:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B6FF3A]">
                {copy.eyebrow}
              </p>
              <h2 className="bio-headline mt-4 text-[28px] text-white md:text-[36px]">{copy.title}</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[#9AA0A8]">{copy.body}</p>
              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => go(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#262932] text-white hover:border-[#B6FF3A]/50"
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
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === dot ? "bg-[#B6FF3A]" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => go(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#262932] text-white hover:border-[#B6FF3A]/50"
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
