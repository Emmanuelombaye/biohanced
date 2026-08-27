import { BiohancedAboutSpotlight } from "./BiohancedAboutSpotlight";
import { BiohancedCheckout } from "./BiohancedCheckout";
import { BiohancedContactForm } from "./BiohancedContactForm";
import { BiohancedDoctor } from "./BiohancedDoctor";
import { BiohancedFaq } from "./BiohancedFaq";
import { BiohancedCart } from "./BiohancedCart";
import { BiohancedLabResults } from "./BiohancedLabResults";
import { BiohancedManufacturingTimeline } from "./BiohancedManufacturingTimeline";
import { BiohancedMedicare } from "./BiohancedMedicare";
import { BiohancedOrderConfirm } from "./BiohancedOrderConfirm";
import Link from "next/link";
import { resolveSitePage } from "@/lib/biohanced-site-pages";
import { BiohancedCtaBand, BiohancedPageHero, BiohancedPageSection } from "./BiohancedPageChrome";

export function BiohancedInnerPage({ slug }: { slug: string[] }) {
  const page = resolveSitePage(slug);
  if (!page) return null;

  if (page.extras?.includes("orderConfirm")) {
    return <BiohancedOrderConfirm />;
  }

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
                  <Link href={item.href} className="font-medium text-[#2E6BFF] underline">
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
      {page.extras?.includes("aboutSpotlight") ? <BiohancedAboutSpotlight /> : null}
      {page.extras?.includes("mfgTimeline") ? <BiohancedManufacturingTimeline /> : null}
      {page.extras?.includes("medicare") ? <BiohancedMedicare /> : null}
      {page.extras?.includes("doctor") ? <BiohancedDoctor /> : null}
      {page.extras?.includes("faq") ? <BiohancedFaq /> : null}
      {page.extras?.includes("labResults") ? <BiohancedLabResults /> : null}
      {page.extras?.includes("cart") ? <BiohancedCart /> : null}
      {page.extras?.includes("checkout") ? <BiohancedCheckout /> : null}
      {page.hideCta ? null : <BiohancedCtaBand />}
    </>
  );
}
