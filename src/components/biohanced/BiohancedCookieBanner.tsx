"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

const STORAGE_KEY = "biohanced-cookie-consent";

export function BiohancedCookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed right-4 bottom-4 z-[80] w-[min(420px,calc(100vw-32px))] rounded-2xl bg-bio-white p-5 shadow-[0_16px_48px_rgba(25,50,49,0.18)]">
      <p className="text-lg font-semibold text-bio-neutral-500">Your Privacy</p>
      <p className="mt-2 text-sm leading-relaxed text-bio-neutral-400">
        We use cookies to run the site and understand how it is used. See our{" "}
        <Link href={BIOHENCED_LINKS.privacy} className="underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={accept}
          className="bio-cta rounded-[10px] px-5 py-2 text-sm"
        >
          Accept Cookies
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-full px-5 py-2 text-sm font-medium text-bio-neutral-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}
