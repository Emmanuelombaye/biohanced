"use client";

import Link from "next/link";
import {
  BIOHENCED_BUNDLES,
  CATALOG_CATEGORIES,
  CATEGORY_TILE_GRADIENTS,
  catalogImage,
  countByCategory,
  getCatalogProduct,
  getFeaturedProducts,
  medicationHref,
  type CatalogCategory,
} from "@/lib/biohanced-catalog";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { useCart } from "@/lib/biohanced-cart-context";
import { BiohancedContactForm } from "./BiohancedContactForm";
import { BiohancedImg } from "./BiohancedImg";
import { BiohancedTestimonials } from "./BiohancedTestimonials";
import { BiohancedApplicationsSection } from "./BiohancedApplicationsSection";
import { BiohancedMarketingCarousel } from "./BiohancedMarketingCarousel";
import { BiohancedProductMarquee } from "./BiohancedProductMarquee";

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
    <section className="bg-bio-neutral-100 py-14 md:py-16">
      <div className="bio-container">
        <h2 className="bio-headline text-[28px] text-bio-ink md:text-[32px]">Shop by category</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {CATEGORY_ORDER.map((id) => {
            const cat = CATALOG_CATEGORIES[id];
            return (
              <Link
                key={id}
                href={`${BIOHENCED_LINKS.catalog}?cat=${id}`}
                className="flex min-h-[140px] flex-col justify-between rounded-[14px] border border-bio-neutral-200 bg-bio-white p-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(10,11,14,0.08)]"
              >
                <div
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px]"
                  style={{ background: CATEGORY_TILE_GRADIENTS[id] }}
                >
                  <svg width="20" height="20" viewBox="0 0 100 100" aria-hidden>
                    <path d="M57 9 L29 55 L46 55 L43 91 L73 41 L55 41 Z" fill="#fff" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold leading-tight text-bio-ink">{cat.name}</p>
                  <p className="mt-1 text-[12px] text-bio-neutral-400">
                    {countByCategory(id)} products
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const products = getFeaturedProducts();
  return (
    <section className="bg-bio-white py-14 md:py-20">
      <div className="bio-container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="bio-headline text-[28px] text-bio-ink md:text-[32px]">Featured</h2>
          <Link href={BIOHENCED_LINKS.catalog} className="text-[15px] font-semibold text-[#2E6BFF]">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const cat = CATALOG_CATEGORIES[product.category];
            return (
              <Link
                key={product.id}
                href={medicationHref(product.id)}
                className="overflow-hidden rounded-[16px] border border-bio-neutral-200 bg-bio-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(10,11,14,0.08)]"
              >
                <div className="flex h-[160px] items-center justify-center bg-gradient-to-b from-[#16203A] to-[#0B0D12]">
                  <BiohancedImg
                    src={catalogImage(product.id)}
                    alt={product.name}
                    className="max-h-[86%] max-w-[70%] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
                  />
                </div>
                <div className="p-4">
                  <span className="flex items-center gap-2 text-[12px] text-bio-neutral-400">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: cat.dot }} />
                    {cat.name}
                  </span>
                  <p className="mt-2 font-[Archivo,sans-serif] text-[20px] font-black text-bio-ink">
                    {product.name}
                  </p>
                  <p className="mt-1 text-sm text-bio-neutral-400">
                    {product.doseLabel} · {product.purity}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold text-bio-ink">From ${product.priceFrom}</span>
                    <span className="text-sm font-semibold text-[#1F9E6B]">{product.purity}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BundleSection() {
  const { addBundle } = useCart();

  return (
    <section className="bg-bio-neutral-100 py-14 md:py-20">
      <div className="bio-container">
        <h2 className="bio-headline text-[28px] text-bio-ink md:text-[32px]">Bundle &amp; save</h2>
        <p className="mt-2 max-w-2xl text-[17px] text-bio-neutral-400">
          Pair compounds for complementary research pathways — up to 12% off combined orders.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BIOHENCED_BUNDLES.map((bundle) => {
            const names = bundle.productIds
              .map((id) => getCatalogProduct(id)?.name)
              .filter(Boolean)
              .join(" + ");
            const save = bundle.regular - bundle.price;
            return (
              <article
                key={bundle.id}
                className="rounded-[18px] border border-bio-neutral-200 bg-bio-white p-5"
              >
                <p className="font-[Archivo,sans-serif] text-[18px] font-black text-bio-ink">{names}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-bio-neutral-400">{bundle.note}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="font-[Archivo,sans-serif] text-[22px] font-black text-bio-ink">
                    ${bundle.price}
                  </span>
                  <span className="text-sm text-bio-neutral-400 line-through">${bundle.regular}</span>
                  <span className="rounded-full bg-[#EEF7EE] px-2.5 py-0.5 text-[12px] font-semibold text-[#1F9E6B]">
                    Save ${save}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => addBundle(bundle.id, names, bundle.price)}
                  className="mt-4 block w-full rounded-[10px] bg-[#0A0B0E] py-3 text-center text-[14px] font-semibold text-white transition-colors hover:bg-[#14161A]"
                >
                  Add bundle to cart
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
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
    <section className="bg-bio-white py-14 md:py-20">
      <div className="bio-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E6BFF]">
            Manufacturing · USA
          </p>
          <h2 className="bio-headline mt-3 text-[32px] leading-tight text-bio-ink md:text-[40px]">
            From lab to your research in 12 steps
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-bio-neutral-400">
            US-synthesized, HPLC-purified, and third-party tested. Manufacturing and packaging from
            start to finish in the USA — no relabeling.
          </p>
          <Link
            href={BIOHENCED_LINKS.manufacturing}
            className="mt-6 inline-flex text-[15px] font-semibold text-[#2E6BFF] underline"
          >
            View quality standards →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-[14px] border border-bio-neutral-200 bg-bio-neutral-100 p-5 text-center"
            >
              <p className="font-[Archivo,sans-serif] text-[32px] font-black text-bio-ink">{s.label}</p>
              <p className="font-bio-greycliff mt-1 text-sm text-bio-neutral-400">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="bg-bio-neutral-100 py-14 md:py-20">
      <div className="bio-container">
        <div className="overflow-hidden rounded-[18px] border border-bio-neutral-200 bg-bio-white lg:grid lg:grid-cols-2">
          <div className="bg-[#0A0B0E] p-8 md:p-10">
            <h2 className="bio-headline text-[28px] text-white md:text-[32px]">
              Questions about a compound or your order?
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#9AA0A8]">
              Our team replies within one business day. Bulk and institutional inquiries welcome.
            </p>
            <div className="mt-8 space-y-3 text-[15px]">
              <p>
                <a href={BIOHENCED_LINKS.email} className="text-[#B6FF3A] underline">
                  research@biohancedlabs.com
                </a>
              </p>
              <p className="text-[#9AA0A8]">Mon–Fri · 9am–6pm ET</p>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <p className="text-sm text-bio-neutral-400">
              Inquiry relates to laboratory research use only.
            </p>
            <BiohancedContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[#0A0B0E] py-16 text-center md:py-24">
      <div className="bio-container max-w-3xl">
        <h2 className="bio-headline text-[32px] text-white md:text-[44px]">
          Purity you can verify. Delivery you can count on.
        </h2>
        <p className="font-bio-quincy mt-4 text-[17px] leading-relaxed text-[#9AA0A8]">
          Every batch third-party tested, every vial documented, shipped cold-chain from our lab to
          yours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={BIOHENCED_LINKS.browseCatalog}
            className="bio-cta inline-flex rounded-[10px] px-8 py-3.5 text-[17px]"
          >
            Browse catalog
          </Link>
          <Link
            href={BIOHENCED_LINKS.viewCoas}
            className="inline-flex rounded-[10px] border border-[#262932] px-8 py-3.5 text-[17px] font-medium text-white"
          >
            View COAs
          </Link>
        </div>
      </div>
    </section>
  );
}

export function BiohancedStoreHome() {
  return (
    <>
      <CategoryGrid />
      <FeaturedProducts />
      <BiohancedMarketingCarousel />
      <BiohancedApplicationsSection />
      <BundleSection />
      <ManufacturingBrief />
      <BiohancedTestimonials />
      <ContactBlock />
      <BiohancedProductMarquee />
      <FinalCta />
    </>
  );
}
