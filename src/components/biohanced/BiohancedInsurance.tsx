"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BIOHENCED_INSURANCE_PLANS,
  BIOHENCED_INSURANCE_STATES,
} from "@/lib/biohanced-insurance-plans";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedImg } from "./BiohancedImg";

export function BiohancedInsurance() {
  const [state, setState] = useState("");
  const logos = state ? BIOHENCED_INSURANCE_PLANS[state] ?? [] : [];

  return (
    <section id="insurance" className="bg-bio-white py-16 md:py-20">
      <div className="bio-container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <h2 className="bio-headline max-w-[1000px] text-[29px] leading-[1.1] text-bio-sage-400 md:text-[48px] md:leading-[52.8px]">
            Covered by insurance for 1 in 3 Americans with copays under $30/visit for most
          </h2>
          <p className="mt-3 text-sm text-bio-neutral-400">Medication cost separate</p>

          <div className="mt-10 max-w-[320px]">
            <label className="mb-2 block text-sm font-medium text-bio-sage-500">
              Insurance plans accepted in
            </label>
            <div className="relative">
              <select
                value={state}
                onChange={(event) => setState(event.target.value)}
                className="h-[60px] w-full appearance-none rounded-xl border border-bio-neutral-200 bg-bio-white px-4 pr-10 text-base text-bio-neutral-500 outline-none focus:border-bio-sage-300"
              >
                <option value="">Select state</option>
                {BIOHENCED_INSURANCE_STATES.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <span
                aria-hidden
                className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-bio-neutral-400"
              >
                ▾
              </span>
            </div>

            {state ? (
              <div className="mt-5">
                <p className="text-sm font-medium text-bio-sage-500">Available plans</p>
                {logos.length > 0 ? (
                  <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-4">
                    {logos.map((src) => (
                      <BiohancedImg
                        key={src}
                        src={src}
                        alt="Insurance plan"
                        className="h-8 w-auto max-w-[110px] object-contain object-center"
                      />
                    ))}
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-bio-neutral-400">
                    No plans available for this state
                  </p>
                )}
              </div>
            ) : null}
          </div>

          <div className="mt-8">
            <Link
              href={BIOHENCED_LINKS.getStarted}
              className="inline-flex items-center justify-center rounded-full bg-bio-sage-500 px-[22px] py-3 text-[17px] font-medium text-bio-white transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </div>

        <aside
          id="pricing-aside"
          className="rounded-[28px] bg-bio-neutral-100 p-8 md:p-10"
        >
          <h3 className="bio-headline text-[28px] leading-10 text-bio-sage-500 md:text-[32px]">
            No coverage? No problem
          </h3>
          <p className="mt-3 text-base leading-relaxed text-bio-neutral-400">
            We&apos;ve got affordable options for every journey
          </p>
          <Link
            href={BIOHENCED_LINKS.plansAndPricing}
            className="mt-6 inline-flex text-[15px] font-medium text-bio-sage-500 underline"
          >
            Explore our pricing
          </Link>
        </aside>
      </div>
    </section>
  );
}
