"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedLogo } from "./BiohancedLogo";

const FOOTER_COLUMNS = [
  {
    title: "Found Program",
    links: [
      { label: "Program", href: BIOHENCED_LINKS.programPage },
      { label: "Medications", href: BIOHENCED_LINKS.allMedications },
      { label: "Microdosing", href: BIOHENCED_LINKS.microdosingPage },
      { label: "GLP-1 Checker", href: BIOHENCED_LINKS.glp1Checker },
      { label: "Pricing", href: BIOHENCED_LINKS.plansAndPricing },
      { label: "Insurance", href: BIOHENCED_LINKS.insurancePage },
      { label: "Reviews", href: BIOHENCED_LINKS.reviewsPage },
      { label: "Blog", href: BIOHENCED_LINKS.blog },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: BIOHENCED_LINKS.about },
      { label: "Careers", href: BIOHENCED_LINKS.careers },
      { label: "Press", href: BIOHENCED_LINKS.press },
      { label: "Contact us", href: BIOHENCED_LINKS.contactPage },
      { label: "Help center", href: BIOHENCED_LINKS.help },
    ],
  },
  {
    title: "Partner with us",
    links: [
      { label: "For business", href: BIOHENCED_LINKS.business },
      { label: "For health plans", href: BIOHENCED_LINKS.healthPlans },
      { label: "Resource center", href: BIOHENCED_LINKS.resources },
    ],
  },
  {
    title: "Medications",
    links: [
      { label: "Compounded Semaglutide", href: BIOHENCED_LINKS.meds.compoundedSemaglutide },
      { label: "Compounded Tirzepatide", href: BIOHENCED_LINKS.meds.compoundedTirzepatide },
      { label: "Contrave®", href: BIOHENCED_LINKS.meds.contrave },
      { label: "Foundayo™", href: BIOHENCED_LINKS.meds.foundayo },
      { label: "Metformin", href: BIOHENCED_LINKS.meds.metformin },
      { label: "Mounjaro®", href: BIOHENCED_LINKS.meds.mounjaro },
      { label: "Ozempic®", href: BIOHENCED_LINKS.meds.ozempic },
      { label: "Rybelsus®", href: BIOHENCED_LINKS.meds.rybelsus },
      { label: "Saxenda®", href: BIOHENCED_LINKS.meds.saxenda },
      { label: "Topiramate", href: BIOHENCED_LINKS.meds.topiramate },
      { label: "Trulicity®", href: BIOHENCED_LINKS.meds.trulicity },
      { label: "Victoza®", href: BIOHENCED_LINKS.meds.victoza },
      { label: "Wegovy®", href: BIOHENCED_LINKS.meds.wegovy },
      { label: "Zepbound®", href: BIOHENCED_LINKS.meds.zepbound },
      { label: "Zonisamide", href: BIOHENCED_LINKS.meds.zonisamide },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: BIOHENCED_LINKS.terms },
      { label: "Refund Policy", href: BIOHENCED_LINKS.refund },
      { label: "Payment & Billing Consent", href: BIOHENCED_LINKS.billing },
      { label: "Telehealth Consent", href: BIOHENCED_LINKS.telehealth },
      { label: "Privacy Policy", href: BIOHENCED_LINKS.privacy },
      { label: "State-Privacy Law Addendum", href: BIOHENCED_LINKS.statePrivacy },
      { label: "Notice of Privacy Practices", href: BIOHENCED_LINKS.npp },
      { label: "SMS Terms of Service", href: BIOHENCED_LINKS.sms },
    ],
  },
];

const TOOL_LINKS = [
  { label: "BMI Calculator", href: BIOHENCED_LINKS.calculators.bmi },
  { label: "BMR Calculator", href: BIOHENCED_LINKS.calculators.bmr },
  { label: "Calorie Calculator", href: BIOHENCED_LINKS.calculators.calorie },
  { label: "Protein Calculator", href: BIOHENCED_LINKS.calculators.protein },
  { label: "Waist-to-hip Calculator", href: BIOHENCED_LINKS.calculators.waistHip },
];

export function BiohancedFooter() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer id="contact" className="bg-bio-sage-500 pt-16 pb-12 text-bio-white md:pt-24 md:pb-10">
      <div className="bio-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <Link href={BIOHENCED_LINKS.home} className="inline-block text-bio-white">
              <BiohancedLogo />
            </Link>
            <h2 className="mt-8 text-lg font-semibold">Social</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-bio-sage-100">
              <Link href={BIOHENCED_LINKS.social.instagram} className="hover:text-bio-white">
                Instagram
              </Link>
              <Link href={BIOHENCED_LINKS.social.tiktok} className="hover:text-bio-white">
                TikTok
              </Link>
              <Link href={BIOHENCED_LINKS.social.facebook} className="hover:text-bio-white">
                Facebook
              </Link>
              <Link href={BIOHENCED_LINKS.social.linkedin} className="hover:text-bio-white">
                LinkedIn
              </Link>
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="text-lg font-semibold text-bio-white">{column.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-bio-sage-100 transition-colors hover:text-bio-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 border-t border-bio-sage-400/40 pt-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Link
              href={BIOHENCED_LINKS.tools}
              className="text-lg font-semibold text-bio-white hover:opacity-90"
            >
              Tools
            </Link>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {TOOL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-bio-sage-100 hover:text-bio-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-bio-sage-200">
              ©2025 Found Health, Inc. - All rights reserved.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bio-white">Sign up for our mailing list</h2>
            {submitted ? (
              <p className="mt-4 text-sm text-bio-sage-100">Thanks for submitting this form!</p>
            ) : (
              <form onSubmit={onSubmit} className="mt-4 space-y-3">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="h-12 w-full rounded-lg border-0 bg-bio-white px-4 text-sm text-bio-neutral-500 outline-none"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address*"
                  className="h-12 w-full rounded-lg border-0 bg-bio-white px-4 text-sm text-bio-neutral-500 outline-none"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number*"
                  className="h-12 w-full rounded-lg border-0 bg-bio-white px-4 text-sm text-bio-neutral-500 outline-none"
                />
                <label className="flex items-start gap-2 text-xs leading-relaxed text-bio-sage-100">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    By signing up, I agree to receive Found newsletters and offers and agree to the{" "}
                    <Link href={BIOHENCED_LINKS.terms} className="underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href={BIOHENCED_LINKS.privacy} className="underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                <label className="flex items-start gap-2 text-xs leading-relaxed text-bio-sage-100">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    By entering the phone number and checking the box, I agree to receive marketing
                    SMS messages from Found. Consent is not a condition of purchase.{" "}
                    <Link href={BIOHENCED_LINKS.sms} className="underline">
                      SMS Terms of Service
                    </Link>
                    .
                  </span>
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-bio-white px-6 py-2.5 text-sm font-semibold text-bio-sage-500 transition-opacity hover:opacity-90"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
