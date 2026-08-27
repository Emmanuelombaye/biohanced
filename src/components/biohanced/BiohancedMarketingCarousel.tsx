"use client";

import { useState } from "react";
import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
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
  const slides = BIOHENCED_ASSETS.sections.carousel;
  const [index, setIndex] = useState(0);
  const copy = SLIDE_COPY[index] ?? SLIDE_COPY[0];

  const go = (dir: -1 | 1) => {
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  return (
    <section className="bg-bio-white py-14 md:py-20">
      <div className="bio-container">
        <div className="overflow-hidden rounded-[24px] border border-bio-neutral-200 bg-[#0A0B0E]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] md:min-h-[360px]">
              {slides.map((src, i) => (
                <BiohancedImg
                  key={src}
                  src={src}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0E]/80 via-[#0A0B0E]/40 to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
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
                  {slides.map((_, dot) => (
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
