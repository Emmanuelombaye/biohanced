import Link from "next/link";
import { resolveSitePage } from "@/lib/biohanced-site-pages";
import { BiohancedCalculator } from "./BiohancedCalculator";
import { BiohancedContactForm } from "./BiohancedContactForm";
import { BiohancedDoctor } from "./BiohancedDoctor";
import { BiohancedFaq } from "./BiohancedFaq";
import { BiohancedInsurance } from "./BiohancedInsurance";
import { BiohancedMedications } from "./BiohancedMedications";
import { BiohancedMicrodose } from "./BiohancedMicrodose";
import { BiohancedCtaBand, BiohancedPageHero, BiohancedPageSection } from "./BiohancedPageChrome";
import { BiohancedTestimonials } from "./BiohancedTestimonials";
import { BiohancedTimeline } from "./BiohancedTimeline";

export function BiohancedInnerPage({ slug }: { slug: string[] }) {
  const page = resolveSitePage(slug);
  if (!page) return null;

  return (
    <>
      <BiohancedPageHero title={page.title} lede={page.lede} showCta={!page.hideCta} />
      {page.sections.map((section, index) => (
        <BiohancedPageSection key={`${section.heading ?? "s"}-${index}`} title={section.heading}>
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul className="list-disc space-y-2 pl-5">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.links ? (
            <ul className="space-y-2">
              {section.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-medium text-bio-sage-500 underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          {page.extras?.includes("contact") && index === page.sections.length - 1 ? (
            <BiohancedContactForm />
          ) : null}
        </BiohancedPageSection>
      ))}
      {page.calculator ? (
        <section className="bg-bio-white pb-16">
          <div className="bio-container">
            <BiohancedCalculator kind={page.calculator} />
          </div>
        </section>
      ) : null}
      {page.extras?.includes("timeline") ? <BiohancedTimeline /> : null}
      {page.extras?.includes("medications") ? <BiohancedMedications /> : null}
      {page.extras?.includes("microdose") ? <BiohancedMicrodose /> : null}
      {page.extras?.includes("insurance") ? <BiohancedInsurance /> : null}
      {page.extras?.includes("testimonials") ? <BiohancedTestimonials /> : null}
      {page.extras?.includes("doctor") ? <BiohancedDoctor /> : null}
      {page.extras?.includes("faq") ? <BiohancedFaq /> : null}
      {page.hideCta ? null : <BiohancedCtaBand />}
    </>
  );
}
