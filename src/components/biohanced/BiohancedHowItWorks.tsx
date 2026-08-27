import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedSection, BiohancedSectionHeader } from "./BiohancedSection";
import { BiohancedMobileRail, BiohancedMobileRailItem } from "./BiohancedMobileRail";

const STEPS = [
  {
    n: "01",
    title: "Select your compound",
    body: "Browse 17 in-stock SKUs organized by research pathway — recovery, metabolic, longevity, and more.",
  },
  {
    n: "02",
    title: "Verify the COA",
    body: "Every lot ships with a published Certificate of Analysis — HPLC purity and mass-spec identity.",
  },
  {
    n: "03",
    title: "Cold-chain delivery",
    body: "Lyophilized vials packed discreetly with expedited carriers and tracking on every order.",
  },
  {
    n: "04",
    title: "Bench-ready vials",
    body: "Reconstitute with bacteriostatic water and store at −20°C — documented from synthesis to seal.",
  },
];

export function BiohancedHowItWorks() {
  return (
    <BiohancedSection tone="cream">
      <div className="bio-container">
        <BiohancedSectionHeader
          eyebrow="How it works"
          title="End-to-end transparency for serious labs"
          description="From catalog selection to documented delivery — the same twelve-step QC process on every compound."
          action={{ label: "Manufacturing process", href: BIOHENCED_LINKS.manufacturing }}
        />
        <BiohancedMobileRail
          className="mt-12"
          desktopClass="md:grid md:grid-cols-2 md:items-stretch md:gap-6 md:overflow-visible lg:grid-cols-4"
        >
          {STEPS.map((step) => (
            <BiohancedMobileRailItem key={step.n} widthClass="w-[min(260px,78vw)]">
              <article
                className="rounded-[16px] border border-bio-neutral-200 bg-bio-white p-6 transition-shadow hover:shadow-[0_12px_32px_rgba(10,11,14,0.06)]"
              >
                <p className="font-[Archivo,sans-serif] text-[13px] font-black tracking-[0.2em] text-[#2E6BFF]">
                  {step.n}
                </p>
                <h3 className="mt-3 font-[Archivo,sans-serif] text-[18px] font-black leading-tight text-bio-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-bio-neutral-400">{step.body}</p>
              </article>
            </BiohancedMobileRailItem>
          ))}
        </BiohancedMobileRail>
        <p className="mt-8 text-center text-[14px] text-bio-neutral-400">
          Need batch documentation before ordering?{" "}
          <Link href={BIOHENCED_LINKS.viewCoas} className="font-semibold text-[#2E6BFF] hover:underline">
            Search lab results →
          </Link>
        </p>
      </div>
    </BiohancedSection>
  );
}
