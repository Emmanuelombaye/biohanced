"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

export function BiohancedContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-6 text-[17px] text-bio-sage-500">Thanks — we’ll get back to you shortly.</p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 max-w-md space-y-3">
      <input
        name="name"
        type="text"
        required
        placeholder="Full name"
        className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="h-12 w-full rounded-lg border border-bio-neutral-200 px-4"
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="How can we help?"
        className="w-full rounded-lg border border-bio-neutral-200 px-4 py-3"
      />
      <p className="text-xs text-bio-neutral-300">
        For current members, the{" "}
        <Link href={BIOHENCED_LINKS.help} className="underline">
          Help center
        </Link>{" "}
        is usually fastest.
      </p>
      <button
        type="submit"
        className="bio-cta rounded-[10px] px-6 py-3 text-sm"
      >
        Send message
      </button>
    </form>
  );
}
