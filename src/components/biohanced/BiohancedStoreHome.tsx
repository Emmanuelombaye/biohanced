"use client";

import Link from "next/link";
import {
  BIOHENCED_BUNDLES,
  CATALOG_CATEGORIES,
  CATEGORY_TILE_GRADIENTS,
  countByCategory,
  getCatalogProduct,
  getFeaturedProducts,
  type CatalogCategory,
} from "@/lib/biohanced-catalog";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedContactForm } from "./BiohancedContactForm";
import { BiohancedProductCardGrid } from "./BiohancedProductCard";
import { BiohancedSection, BiohancedSectionHeader } from "./BiohancedSection";
import { BiohancedTestimonials } from "./BiohancedTestimonials";
import { BiohancedApplicationsSection } from "./BiohancedApplicationsSection";
import { BiohancedMarketingCarousel } from "./BiohancedMarketingCarousel";
import { BiohancedProductMarquee } from "./BiohancedProductMarquee";
import { BiohancedMedicare } from "./BiohancedMedicare";
import { BiohancedCatalogShowcase } from "./BiohancedCatalogShowcase";
import { BiohancedHowItWorks } from "./BiohancedHowItWorks";
import { BiohancedAddBundleButton } from "./BiohancedAddBundleButton";
import { BiohancedMobileRail, BiohancedMobileRailItem } from "./BiohancedMobileRail";

const CATEGORY_ORDER: CatalogCategory[] = [
  "recovery",
  "gh",
  "metabolic",
  "longevity",
  "specialty",
  "essentials",
];

function CategoryGrid() {
  return (
    <BiohancedSection tone="white">
      <div className="bio-container">
        <BiohancedSectionHeader
          eyebrow="Catalog"
          title="Shop by research pathway"
          description="Six application categories — recovery, GH secretagogues, metabolic, longevity, specialty, and essentials."
          action={{ label: "Full catalog", href: BIOHENCED_LINKS.catalog }}
        />
        <BiohancedMobileRail
          className="mt-10"
          desktopClass="sm:grid sm:grid-cols-2 sm:items-stretch sm:gap-4 lg:grid-cols-3 xl:grid-cols-6 sm:overflow-visible lg:gap-4"
        >
          {CATEGORY_ORDER.map((id) => {
            const cat = CATALOG_CATEGORIES[id];
            return (
              <BiohancedMobileRailItem
                key={id}
                widthClass="w-[min(168px,44vw)]"
                resetClass="sm:w-auto sm:shrink"
              >
                <Link
                  href={`${BIOHENCED_LINKS.catalog}?cat=${id}`}
                  className="group flex h-full min-h-[148px] flex-col justify-between rounded-[14px] border border-bio-neutral-200 bg-bio-neutral-100 p-5 transition-all duration-300 hover:border-[#d8d6d0] hover:bg-bio-white hover:shadow-[0_12px_32px_rgba(10,11,14,0.06)]"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-[11px] transition-transform duration-300 group-hover:scale-105"
                    style={{ background: CATEGORY_TILE_GRADIENTS[id] }}
                  >
                    <svg width="20" height="20" viewBox="0 0 100 100" aria-hidden>
                      <path d="M57 9 L29 55 L46 55 L43 91 L73 41 L55 41 Z" fill="#fff" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold leading-snug text-bio-ink line-clamp-2 break-words">{cat.name}</p>
                    <p className="mt-1 text-[12px] text-bio-neutral-400">
                      {countByCategory(id)} compounds
                    </p>
                  </div>
                </Link>
              </BiohancedMobileRailItem>
            );
          })}
        </BiohancedMobileRail>
      </div>
    </BiohancedSection>
  );
}

function FeaturedProducts() {
  const products = getFeaturedProducts();
  return (
    <BiohancedSection tone="ink" className="!bg-[#2E3344]">
      <div className="bio-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <BiohancedSectionHeader
            eyebrow="Featured"
            title="Most requested compounds"
            description="In-stock SKUs with published COAs — ready for your bench protocol."
            light
            className="max-w-xl"
          />
          <Link
            href={BIOHENCED_LINKS.catalog}
            className="shrink-0 text-[15px] font-semibold text-[#B6FF3A] hover:underline"
          >
            View all →
          </Link>
        </div>
        <BiohancedProductCardGrid
          productIds={products.map((p) => p.id)}
          columns={4}
          className="mt-10"
          showActions
          mobileRail
        />
      </div>
    </BiohancedSection>
  );
}

function BundleSection() {
  return (
    <BiohancedSection tone="white">
      <div className="bio-container">
        <BiohancedSectionHeader
          eyebrow="Bundles"
          title="Pair compounds, save on research"
          description="Complementary pathways — up to 12% off when you order curated bundles."
        />
        <BiohancedMobileRail
          className="mt-10"
          desktopClass="md:grid md:grid-cols-2 md:items-stretch md:gap-5 lg:grid-cols-3 md:overflow-visible"
        >
          {BIOHENCED_BUNDLES.map((bundle) => {
            const names = bundle.productIds
              .map((id) => getCatalogProduct(id)?.name)
              .filter(Boolean)
              .join(" + ");
            const save = bundle.regular - bundle.price;
            return (
              <BiohancedMobileRailItem key={bundle.id} widthClass="w-[min(300px,86vw)]">
                <article
                  className="flex h-full flex-col rounded-[16px] border border-bio-neutral-200 bg-bio-neutral-100 p-6 transition-shadow hover:shadow-[0_12px_32px_rgba(10,11,14,0.06)]"
                >
                  <p className="font-[Archivo,sans-serif] text-[18px] font-black leading-snug text-bio-ink line-clamp-2 break-words">
                    {names}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-bio-neutral-400 line-clamp-3 break-words">
                    {bundle.note}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="font-[Archivo,sans-serif] text-[24px] font-black text-bio-ink">
                      ${bundle.price}
                    </span>
                    <span className="text-sm text-bio-neutral-400 line-through">${bundle.regular}</span>
                    <span className="rounded-full bg-[#EEF7EE] px-2.5 py-0.5 text-[12px] font-semibold text-[#1F9E6B]">
                      Save ${save}
                    </span>
                  </div>
                  <BiohancedAddBundleButton
                    bundleId={bundle.id}
                    name={names}
                    price={bundle.price}
                    className="bio-btn-dark mt-5 w-full"
                  />
                </article>
              </BiohancedMobileRailItem>
            );
          })}
        </BiohancedMobileRail>
      </div>
    </BiohancedSection>
  );
}

function ManufacturingBrief() {
  const stats = [
    { label: "≥99%", sub: "HPLC-MS verified" },
    { label: "12", sub: "Step process" },
    { label: "100%", sub: "Third-party tested" },
    { label: "COA", sub: "Every batch" },
  ];
  return (
    <BiohancedSection tone="white">
      <div className="bio-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <BiohancedSectionHeader
          eyebrow="Manufacturing · USA"
          title="From lab to your research in 12 steps"
          description="US-synthesized, HPLC-purified, and third-party tested. Manufacturing and packaging from start to finish in the USA — no relabeling."
          action={{ label: "View quality standards", href: BIOHENCED_LINKS.manufacturing }}
          className="max-w-none"
        />
        <BiohancedMobileRail
          className="mt-8"
          desktopClass="sm:grid sm:grid-cols-2 sm:items-stretch sm:gap-4 sm:overflow-visible"
        >
          {stats.map((s) => (
            <BiohancedMobileRailItem
              key={s.label}
              widthClass="w-[min(160px,42vw)]"
              resetClass="sm:w-auto sm:shrink"
            >
              <div
                className="rounded-[14px] border border-bio-neutral-200 bg-bio-neutral-100 p-6 text-center"
              >
                <p className="font-[Archivo,sans-serif] text-[32px] font-black text-bio-ink">{s.label}</p>
                <p className="mt-1 text-sm text-bio-neutral-400">{s.sub}</p>
              </div>
            </BiohancedMobileRailItem>
          ))}
        </BiohancedMobileRail>
      </div>
    </BiohancedSection>
  );
}

function ContactBlock() {
  return (
    <BiohancedSection tone="cream">
      <div className="bio-container">
        <div className="overflow-hidden rounded-[20px] border border-bio-neutral-200 bg-bio-white lg:grid lg:grid-cols-2">
          <div className="bg-bio-ink p-8 md:p-12">
            <BiohancedSectionHeader
              title="Questions about a compound or your order?"
              description="Our team replies within one business day. Bulk and institutional inquiries welcome."
              light
              className="max-w-none"
            />
            <div className="mt-8 space-y-2 text-[15px]">
              <a href={BIOHENCED_LINKS.email} className="text-[#B6FF3A] underline">
                research@biohancedlabs.com
              </a>
              <p className="text-[#9AA0A8]">Mon–Fri · 9am–6pm ET</p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <p className="text-sm text-bio-neutral-400">Inquiry relates to laboratory research use only.</p>
            <BiohancedContactForm />
          </div>
        </div>
      </div>
    </BiohancedSection>
  );
}

function FinalCta() {
  return (
    <BiohancedSection tone="ink">
      <div className="bio-container max-w-3xl text-center">
        <BiohancedSectionHeader
          title="Purity you can verify. Delivery you can count on."
          description="Every batch third-party tested, every vial documented, shipped cold-chain from our lab to yours."
          align="center"
          light
          className="max-w-none"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href={BIOHENCED_LINKS.browseCatalog}
            className="bio-cta inline-flex rounded-[10px] px-8 py-3.5 text-[17px]"
          >
            Browse catalog
          </Link>
          <Link
            href={BIOHENCED_LINKS.viewCoas}
            className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] border-2 border-[#262932] px-8 py-3.5 text-[17px] font-semibold text-white hover:border-[#3f434d]"
          >
            View COAs
          </Link>
        </div>
      </div>
    </BiohancedSection>
  );
}

/** Homepage — mature editorial flow with full product cards and quality narrative */
export function BiohancedStoreHome() {
  return (
    <>
      <CategoryGrid />
      <FeaturedProducts />
      <BiohancedCatalogShowcase />
      <BundleSection />
      <ManufacturingBrief />
      <BiohancedMarketingCarousel />
      <BiohancedHowItWorks />
      <BiohancedApplicationsSection />
      <BiohancedMedicare />
      <BiohancedTestimonials />
      <BiohancedProductMarquee />
      <ContactBlock />
      <FinalCta />
    </>
  );
}
