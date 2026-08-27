"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CATALOG_CATEGORIES,
  getBundlesForProduct,
  productReviewMeta,
  type CatalogProduct,
  catalogImage,
  getCatalogProduct,
  medicationHref,
} from "@/lib/biohanced-catalog";
import { BIOHENCED_LINKS, labResultPath } from "@/lib/biohanced-links";
import { BIOHENCED_PRODUCT_FAQ } from "@/lib/biohanced-product-faq";
import {
  getVariantsForProduct,
  variantSavePercent,
} from "@/lib/biohanced-price-tiers";
import { useCart } from "@/lib/biohanced-cart-context";
import { BiohancedCtaBand } from "./BiohancedPageChrome";
import { BiohancedImg } from "./BiohancedImg";
import { BiohancedCatalogGrid } from "./BiohancedCatalogGrid";

const TABS = [
  { id: "description", label: "Description" },
  { id: "mechanism", label: "Mechanism" },
  { id: "highlights", label: "Highlights" },
  { id: "specs", label: "Specs" },
  { id: "research", label: "Research profile" },
  { id: "faq", label: "FAQ" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function SpecTable({ specs }: { specs: CatalogProduct["specs"] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-bio-neutral-200">
      <table className="w-full text-left text-[15px]">
        <tbody>
          {specs.map((row) => (
            <tr key={row.k} className="border-b border-bio-neutral-200 last:border-0">
              <th className="w-[42%] bg-bio-neutral-100 px-4 py-3 font-medium text-bio-ink">
                {row.k}
              </th>
              <td className="px-4 py-3 text-bio-neutral-400">{row.v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TabPanel({ product, tab }: { product: CatalogProduct; tab: TabId }) {
  if (tab === "description") {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="bio-headline text-[22px] text-bio-ink md:text-[28px]">
            {product.name}
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-bio-neutral-400">
            {product.description}
          </p>
        </div>
        <p className="text-[15px] text-bio-neutral-400">
          {product.subtitle}. Batch {product.batch} · {product.purity} purity by HPLC. For research
          use only — not for human consumption.
        </p>
      </div>
    );
  }

  if (tab === "highlights") {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="bio-headline text-[22px] text-bio-ink md:text-[28px]">
            Research highlights
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-bio-neutral-400">{product.blurb}</p>
        </div>
        <ul className="space-y-3">
          {product.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[17px] text-bio-neutral-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6FF3A]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (tab === "mechanism") {
    return (
      <div className="space-y-4">
        <h3 className="bio-headline text-[22px] text-bio-ink md:text-[28px]">How it works</h3>
        <p className="text-[17px] leading-relaxed text-bio-neutral-400">{product.mechanism}</p>
        <p className="text-[15px] leading-relaxed text-bio-neutral-400">
          Mechanism summaries are drawn from published research literature. Biohanced Labs supplies
          material for laboratory research only. Investigators are responsible for protocol design
          and compliance with applicable regulations.
        </p>
      </div>
    );
  }

  if (tab === "specs") {
    return (
      <div className="space-y-6">
        <h3 className="bio-headline text-[22px] text-bio-ink md:text-[28px]">Specifications</h3>
        <SpecTable specs={product.specs} />
      </div>
    );
  }

  if (tab === "research") {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="bio-headline text-[22px] text-bio-ink md:text-[28px]">Research profile</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-bio-neutral-400">{product.blurb}</p>
          <p className="mt-4 text-[17px] leading-relaxed text-bio-neutral-400">{product.mechanism}</p>
        </div>
        <p className="text-[15px] leading-relaxed text-bio-neutral-400">
          Lyophilized peptides are supplied sealed and should be reconstituted with bacteriostatic
          water unless your protocol specifies otherwise. Store at -20°C, desiccated, away from
          light.
        </p>
        <div className="rounded-xl border border-[#ECECEA] bg-[#EEF7EE] p-5 text-[14px] leading-relaxed text-bio-neutral-400">
          <p className="font-semibold text-bio-ink">For research use only</p>
          <p className="mt-2">
            Not for human consumption. Not intended to diagnose, treat, cure, or prevent any disease.
            Certificate of Analysis available for batch {product.batch}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {BIOHENCED_PRODUCT_FAQ.map((item) => (
        <div key={item.question} className="border-b border-bio-neutral-200 pb-5 last:border-0">
          <h3 className="text-[17px] font-semibold text-bio-ink">{item.question}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-bio-neutral-400">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

function AlternativeGrid({ currentId }: { currentId: string }) {
  const alternatives = [
    "retatrutide",
    "ipamorelin",
    "bpc157",
    "sermorelin",
    "cjcdac",
    "tesamorelin",
    "ghkcu",
    "nad",
  ]
    .filter((id) => id !== currentId)
    .slice(0, 8)
    .map((id) => getCatalogProduct(id))
    .filter((p): p is CatalogProduct => p !== undefined);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {alternatives.map((alt) => (
        <Link
          key={alt.id}
          href={medicationHref(alt.id)}
          className="group rounded-2xl border border-bio-neutral-200 bg-bio-white p-4 transition-shadow hover:shadow-[0_8px_24px_rgba(10,11,14,0.08)]"
        >
          <div className="flex h-[120px] items-center justify-center rounded-xl bg-gradient-to-b from-[#16203A] to-[#0B0D12]">
            <BiohancedImg
              src={catalogImage(alt.id)}
              alt={alt.name}
              className="max-h-[88%] max-w-[70%] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
            />
          </div>
          <p className="mt-3 text-[15px] font-semibold text-bio-ink group-hover:text-[#2E6BFF]">
            {alt.name}
          </p>
          <p className="text-sm text-bio-neutral-400">From ${alt.priceFrom}</p>
        </Link>
      ))}
    </div>
  );
}

export function BiohancedMedicationDetail({ productId }: { productId: string }) {
  const product = getCatalogProduct(productId);
  const [tab, setTab] = useState<TabId>("description");
  const [variantIndex, setVariantIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const { addProduct, addBundle } = useCart();

  if (!product) return null;

  const category = CATALOG_CATEGORIES[product.category];
  const variants = getVariantsForProduct(product.id);
  const selected = variants[variantIndex] ?? variants[0];
  const unitPrice = variants[0]?.price ?? product.priceFrom;
  const reviewMeta = productReviewMeta(product.batch);
  const bundles = getBundlesForProduct(product.id);

  const handleAddToCart = () => {
    if (!selected) return;
    addProduct(product.id, product.name, selected.label, selected.price);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <section className="bg-bio-neutral-100 pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="bio-container">
          <Link
            href={BIOHENCED_LINKS.catalog}
            className="text-[14px] font-medium text-[#2E6BFF] hover:underline"
          >
            ← Back to catalog
          </Link>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_minmax(280px,420px)] lg:gap-14">
            <div>
              <div className="flex items-center gap-2 text-[13px] font-medium text-bio-neutral-400">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: category.dot }}
                  aria-hidden
                />
                {category.name}
              </div>
              <p className="mt-4 text-[15px] font-medium text-bio-neutral-400">{product.name}</p>
              <h1 className="bio-headline mt-2 text-[36px] leading-[1.08] text-bio-ink md:text-[52px]">
                {product.name} for Research
              </h1>
              <span className="mt-4 inline-flex rounded-full border border-bio-neutral-200 bg-bio-white px-4 py-1.5 text-[13px] font-medium uppercase tracking-wide text-bio-neutral-400">
                {product.formLabel}
              </span>
              <p className="mt-4 flex items-center gap-2 text-[14px] text-bio-neutral-400">
                <span className="text-[#B6FF3A]" aria-hidden>★★★★★</span>
                <span className="font-semibold text-bio-ink">{reviewMeta.rating}</span>
                <span>· {reviewMeta.reviews} verified reviews</span>
              </p>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-bio-neutral-400">
                {product.blurb} It also:
              </p>
              <ul className="mt-4 space-y-2">
                {product.highlights.slice(0, 2).map((h) => (
                  <li key={h} className="flex items-center gap-2 text-[16px] text-bio-ink">
                    <span className="text-[#B6FF3A]" aria-hidden>✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              {variants.length > 0 ? (
                <div className="mt-8">
                  <p className="text-[13px] font-semibold uppercase tracking-wide text-bio-neutral-400">
                    Select quantity
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {variants.map((v, i) => {
                      const save = variantSavePercent(unitPrice, v.price, v.vialCount);
                      return (
                        <button
                          key={v.label}
                          type="button"
                          onClick={() => setVariantIndex(i)}
                          className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                            variantIndex === i
                              ? "bg-[#0A0B0E] text-white"
                              : "border border-bio-neutral-200 bg-bio-white text-bio-ink hover:border-bio-neutral-300"
                          }`}
                        >
                          {v.label}
                          {save > 0 ? ` · save ${save}%` : ""}
                        </button>
                      );
                    })}
                  </div>
                  {selected ? (
                    <p className="mt-4 font-[Archivo,sans-serif] text-[36px] font-black text-bio-ink">
                      ${selected.price.toFixed(2)}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="bio-cta inline-flex items-center justify-center rounded-[10px] px-8 py-3.5 text-[17px]"
                >
                  {added ? "Added to cart" : "Add to cart"}
                </button>
                <Link
                  href={labResultPath(product.id)}
                  className="inline-flex items-center justify-center rounded-[10px] border border-bio-neutral-200 bg-bio-white px-8 py-3.5 text-[17px] font-medium text-bio-ink"
                >
                  View COA
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-bio-neutral-200 bg-[#0A0B0E] p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_62%_at_50%_40%,rgba(79,123,255,0.2),transparent_70%)]" />
              <BiohancedImg
                src={catalogImage(product.id)}
                alt={`${product.name} research vial`}
                className="relative mx-auto max-h-[320px] w-full object-contain drop-shadow-[0_30px_44px_rgba(0,0,0,0.45)]"
              />
              <div className="relative mt-6 flex justify-between gap-4 rounded-xl border border-[#262932] bg-[#14161A] px-4 py-3 text-sm">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#9AA0A8]">Purity</p>
                  <p className="font-semibold text-[#1F9E6B]">{product.purity}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#9AA0A8]">Batch</p>
                  <p className="font-semibold text-white">{product.batch}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#9AA0A8]">From</p>
                  <p className="font-semibold text-white">${product.priceFrom}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bio-white py-14 md:py-20">
        <div className="bio-container max-w-4xl">
          <h2 className="bio-headline text-center text-[28px] text-bio-ink md:text-[40px]">
            Everything you need to know about {product.name}
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-bio-neutral-200 pb-px">
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`rounded-t-lg px-5 py-3 text-[15px] font-medium transition-colors ${
                  tab === item.id
                    ? "border-b-2 border-[#B6FF3A] text-bio-ink"
                    : "text-bio-neutral-400 hover:text-bio-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <TabPanel product={product} tab={tab} />
          </div>
        </div>
      </section>

      <section className="bg-[#0A0B0E] py-14 text-white md:py-20">
        <div className="bio-container max-w-3xl">
          <h2 className="bio-headline text-[26px] md:text-[36px]">About Biohanced Labs</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#9AA0A8]">
            Biohanced Labs supplies US-synthesized research-grade peptides with third-party HPLC and
            mass-spec verification on every batch. Seventeen compounds across recovery, metabolic,
            longevity, and specialty research — each with a published Certificate of Analysis and
            cold-chain shipping.
          </p>
          <p className="mt-4 text-[15px] text-[#6B7280]">
            Biology, upgraded. For research use only. Contact{" "}
            <a href="mailto:research@biohancedlabs.com" className="text-[#B6FF3A] underline">
              research@biohancedlabs.com
            </a>
            .
          </p>
        </div>
      </section>

      {bundles.length > 0 ? (
        <section className="bg-bio-neutral-100 py-14 md:py-20">
          <div className="bio-container">
            <h2 className="bio-headline text-[28px] text-bio-ink md:text-[36px]">
              Related bundles
            </h2>
            <p className="mt-2 max-w-2xl text-[17px] text-bio-neutral-400">
              Pair {product.name} with complementary compounds from the catalog.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {bundles.map((bundle) => {
                const names = bundle.productIds
                  .map((id) => getCatalogProduct(id)?.name)
                  .filter(Boolean)
                  .join(" + ");
                return (
                  <article
                    key={bundle.id}
                    className="rounded-[18px] border border-bio-neutral-200 bg-bio-white p-5"
                  >
                    <p className="font-[Archivo,sans-serif] text-[18px] font-black text-bio-ink">
                      {names}
                    </p>
                    <p className="mt-2 text-[14px] text-bio-neutral-400">{bundle.note}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="font-[Archivo,sans-serif] text-[22px] font-black">
                        ${bundle.price}
                      </span>
                      <span className="text-sm text-bio-neutral-400 line-through">
                        ${bundle.regular}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => addBundle(bundle.id, names, bundle.price)}
                      className="mt-4 w-full rounded-[10px] bg-[#0A0B0E] py-3 text-[14px] font-semibold text-white hover:bg-[#14161A]"
                    >
                      Add bundle to cart
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-bio-neutral-100 py-14 md:py-20">
        <div className="bio-container">
          <h2 className="bio-headline mb-2 text-[28px] text-bio-ink md:text-[36px]">
            Alternative compounds
          </h2>
          <p className="mb-10 max-w-2xl text-[17px] text-bio-neutral-400">
            Explore related peptides from the Biohanced catalog — each batch verified and documented.
          </p>
          <AlternativeGrid currentId={product.id} />
        </div>
      </section>

      <BiohancedCtaBand />
    </>
  );
}

export function BiohancedMedicationIndex({ category }: { category?: string }) {
  return (
    <>
      <section className="bg-bio-neutral-100 py-16 md:py-24">
        <div className="bio-container max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E6BFF]">
            Catalog · peptides
          </p>
          <h1 className="bio-headline mt-4 text-[36px] leading-[1.1] text-bio-ink md:text-[56px]">
            Catalog
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-bio-neutral-400 md:text-[20px]">
            Research-grade peptides, organized by application. All compounds ≥99% purity with batch
            COAs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={BIOHENCED_LINKS.contact}
              className="bio-cta inline-flex rounded-[10px] px-8 py-3.5 text-[17px]"
            >
              Request order
            </Link>
            <Link
              href={BIOHENCED_LINKS.labResults}
              className="inline-flex rounded-[10px] border border-bio-neutral-200 bg-bio-white px-8 py-3.5 text-[17px] font-medium text-bio-ink"
            >
              View COAs
            </Link>
          </div>
        </div>
      </section>
      <BiohancedCatalogGrid categoryParam={category} />
      <section className="bg-bio-white py-8">
        <div className="bio-container max-w-4xl text-center text-[11px] leading-relaxed text-bio-neutral-400">
          For research use only. Not for human consumption. Products are not intended to diagnose,
          treat, cure, or prevent any disease. Certificate of Analysis available for every batch.
        </div>
      </section>
    </>
  );
}
