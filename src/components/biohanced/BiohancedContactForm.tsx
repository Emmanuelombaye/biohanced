"use client";

import { FormEvent, useState } from "react";
import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

const CONTACT_ICONS = [
  { src: BIOHENCED_ASSETS.icons.phone, label: "Email support" },
  { src: BIOHENCED_ASSETS.icons.insurance, label: "Institutional orders" },
  { src: BIOHENCED_ASSETS.icons.scale, label: "Verified purity" },
];

export function BiohancedContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-6 text-[17px] text-[#1F9E6B]">
        Thanks — we&apos;ll reply within one business day.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 max-w-md space-y-3">
      <div className="flex gap-4 pb-2">
        {CONTACT_ICONS.map((icon) => (
          <div key={icon.label} className="flex items-center gap-2 text-[12px] text-bio-neutral-400">
            <img src={icon.src} alt="" className="h-4 w-4 opacity-70" aria-hidden />
            <span>{icon.label}</span>
          </div>
        ))}
      </div>
      <input
        name="name"
        type="text"
        required
        placeholder="Full name"
        className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4 text-bio-ink outline-none focus:border-[#B6FF3A]"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4 text-bio-ink outline-none focus:border-[#B6FF3A]"
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Your research inquiry"
        className="w-full rounded-lg border border-bio-neutral-200 px-4 py-3 text-bio-ink outline-none focus:border-[#B6FF3A]"
      />
      <p className="text-xs text-bio-neutral-400">
        For laboratory research use only. See{" "}
        <a href={BIOHENCED_LINKS.faqPage} className="underline">FAQ</a> for shipping and COA details.
      </p>
      <button type="submit" className="bio-cta rounded-[10px] px-6 py-3 text-sm font-semibold">
        Send message
      </button>
    </form>
  );
}
