"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

type FaqItem = {
  question: string;
  content: ReactNode;
};

const FAQS: FaqItem[] = [
  {
    question: "What is the cost of the program?",
    content: (
      <>
        <p>
          Unlike most weight care programs, Found works with your insurance for clinical visits —
          so you&apos;re not paying out of pocket for care your plan may already cover. Most members
          pay less than $30/visit.
        </p>
        <p>
          On medication, Found offers more options than any other program: compounded GLP-1s
          starting at $99/month (with flat pricing as your dose increases), branded GLP-1s like
          Wegovy and Zepbound with insurance navigation support or direct-pay options, and non-GLP-1
          plan options starting at $49/month. Longer plans at 3, 6, and 12 months keep your monthly
          cost down.
        </p>
        <p>
          Your clinician works with you to find the right fit for your budget, health needs, and
          long-term goals. Every Found clinician is board-certified and trained in metabolic
          medicine — because lasting weight care requires real expertise, not just a prescription.
        </p>
      </>
    ),
  },
  {
    question: "Do Found’s medications have side effects?",
    content: (
      <>
        <p>
          Everyone’s body responds differently to medications. Side effects can occur with any
          medication. More common side effects from many medicines often go away in a few weeks, and
          Found’s clinicians are committed to supporting members.
        </p>
        <p>
          It’s important to tell your health care provider if you experience any issues when taking
          a new medication and ask for their medical advice.
        </p>
        <p>
          Find detailed side effects and risk information for specific medications on our{" "}
          <Link href={BIOHENCED_LINKS.allMedications} className="underline hover:text-bio-sage-500">
            medications page
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: "What medication do clinicians at Found prescribe, and are they FDA-approved?",
    content: (
      <>
        <p>
          Found-affiliated providers can prescribe a wide range of medications to work with your
          biology to help you lose weight. Some are FDA-approved anti-obesity medications, and
          others are FDA-approved for other conditions and prescribed off-label to help people lose
          weight.
        </p>
        <p>
          You can learn more about the medicines you may be prescribed on our{" "}
          <Link href={BIOHENCED_LINKS.allMedications} className="underline hover:text-bio-sage-500">
            medications page
          </Link>
          . Found’s clinicians work with patients to determine the best option for each member, but
          the ultimate decision as to whether a patient is medically eligible for a medication rests
          with the provider.
        </p>
      </>
    ),
  },
  {
    question: "Does Found accept insurance?",
    content: (
      <p>
        Yes! Found is one of the only telehealth weight care providers partnering with many medical
        insurance carriers across the U.S. to make care more affordable. Coverage varies by state
        and plan.
      </p>
    ),
  },
  {
    question: "How is Found different from an in-person weight loss clinic?",
    content: (
      <>
        <p>
          The top obesity specialists in the country designed Found&apos;s weight management
          program. Rather than waiting months for an in-person appointment, Found unlocks access to
          board-certified medical professionals trained in obesity medicine right away. Found
          offers:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Found-affiliated clinicians who personalize your weight care treatment plan to work with
            your biology. Found clinicians can select from a range of more than 10 different
            medications (including GLP-1s) to help you reach your goals.
          </li>
          <li>
            An exclusive in-app community where you can get support for your journey, and an
            expert-designed behavior change program to help you make lasting changes.
          </li>
        </ul>
        <p>
          Found clinicians have booked more than one million consultations and helped more than
          250,000 people lose weight. With a comprehensive care team at your fingertips, Found gives
          you the health benefits of in-person care from the comfort of your home.
        </p>
      </>
    ),
  },
  {
    question: "How is Found's approach to weight care different from other providers?",
    content: (
      <>
        <p>
          Found offers personalized care. We consider not only your weight goals but your entire
          health profile, medication sensitivities, lifestyle, and financial circumstances.
        </p>
        <p>
          Our platform provides one of the broadest ranges of medication options in telehealth. That
          gives our clinicians more ways to create personalized weight care to meet your needs.
        </p>
        <p>
          We also offer comprehensive support through in-app tracking tools and a supportive
          community to address both the biological and behavioral aspects of weight care.
        </p>
      </>
    ),
  },
];

function FaqPlus({ open }: { open: boolean }) {
  return (
    <span className="relative inline-flex h-[27px] w-[27px] shrink-0" aria-hidden>
      <span className="absolute top-1/2 left-1/2 h-0.5 w-[27px] -translate-x-1/2 -translate-y-1/2 bg-bio-neutral-500" />
      <span
        className={`absolute top-1/2 left-1/2 h-[27px] w-0.5 -translate-x-1/2 -translate-y-1/2 bg-bio-neutral-500 transition-opacity ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
    </span>
  );
}

export function BiohancedFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="pricing" className="bg-bio-white py-16 md:py-24">
      <div className="bio-container grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20">
        <div>
          <h2 className="bio-headline text-[29px] leading-[1.1] text-bio-sage-400 md:text-[48px] md:leading-[52.8px]">
            Your questions, <em className="italic text-bio-sage-500">answered.</em>
          </h2>
          <p className="mt-6 text-[15px] text-bio-neutral-500">
            Need help? <strong className="font-semibold">Get in touch with us </strong>
            <Link
              href={BIOHENCED_LINKS.contactPage}
              className="font-semibold text-[#2e4230] underline"
            >
              here →
            </Link>
          </p>
        </div>

        <div className="border-t-2 border-black/10">
          {FAQS.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div key={faq.question} className="border-b-2 border-black/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-9 text-left"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                >
                  <span className="text-[18px] font-medium text-bio-neutral-500">
                    {faq.question}
                  </span>
                  <FaqPlus open={open} />
                </button>
                {open ? (
                  <div className="space-y-4 pb-9 text-[16px] leading-[1.6] text-bio-neutral-500">
                    {faq.content}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
