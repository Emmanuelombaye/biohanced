"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BIOHENCED_CATALOG,
  CATALOG_CATEGORIES,
  catalogImage,
  getCatalogProduct,
  type CatalogProduct,
} from "@/lib/biohanced-catalog";
import { BIOHENCED_LINKS, labResultPath } from "@/lib/biohanced-links";
import { BiohancedVialStage } from "./BiohancedVialStage";
import { BiohancedMobileRail, BiohancedMobileRailItem } from "./BiohancedMobileRail";

function LabVialMock({ product }: { product: CatalogProduct }) {
  const accent = CATALOG_CATEGORIES[product.category].dot;

  return (
    <BiohancedVialStage
      src={catalogImage(product.id)}
      alt={product.name}
      accent={accent}
      size="sm"
      className="h-[200px] !aspect-auto rounded-none"
    />
  );
}

export function BiohancedLabResults() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return BIOHENCED_CATALOG;
    return BIOHENCED_CATALOG.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.batch.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section className="bg-bio-white py-12 md:py-16">
      <div className="bio-container">
        <div className="mb-6">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by compound, batch ID, or SKU…"
            className="w-full max-w-md rounded-[10px] border-2 border-bio-neutral-200 px-4 py-3 text-[15px] focus:border-bio-ink focus:outline-none"
          />
        </div>

        {/* Mobile — horizontal rail with client vial mock renders */}
        <BiohancedMobileRail
          className="md:hidden"
          desktopClass="max-md:flex"
        >
          {filtered.map((product) => (
            <BiohancedMobileRailItem key={product.id} widthClass="w-[min(280px,82vw)]">
              <article
                className="overflow-hidden rounded-[16px] border border-bio-neutral-200 bg-bio-white shadow-[0_2px_8px_rgba(10,11,14,0.04)]"
              >
                <LabVialMock product={product} />
                <div className="space-y-3 p-4">
                  <h3 className="font-[Archivo,sans-serif] text-[16px] font-black leading-tight text-bio-ink">
                    {product.name}
                  </h3>
                  <p className="text-[12px] text-bio-neutral-400">{product.doseLabel} · {product.purity}</p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[13px] text-bio-neutral-400">Batch</span>
                    <span className="font-semibold text-bio-ink">{product.batch}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[13px] text-bio-neutral-400">Purity (HPLC)</span>
                    <span className="font-semibold text-[#1F9E6B]">{product.purity}</span>
                  </div>
                  <Link href={labResultPath(product.id)} className="bio-btn-primary w-full text-center">
                    View COA
                  </Link>
                </div>
              </article>
            </BiohancedMobileRailItem>
          ))}
        </BiohancedMobileRail>

        {/* Desktop — table with mock vial thumbnails */}
        <div className="hidden overflow-hidden rounded-xl border border-bio-neutral-200 md:block">
          <table className="w-full text-left text-[15px]">
            <thead className="bg-bio-neutral-100 text-[13px] font-semibold uppercase tracking-wide text-bio-neutral-400">
              <tr>
                <th className="px-4 py-3 w-[88px]">Vial</th>
                <th className="px-4 py-3">Compound</th>
                <th className="px-4 py-3">Batch</th>
                <th className="px-4 py-3">Purity (HPLC)</th>
                <th className="px-4 py-3">COA</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr key={product.id} className="border-t border-bio-neutral-200">
                  <td className="px-3 py-2">
                    <div className="h-16 w-16 overflow-hidden rounded-lg border border-bio-neutral-200">
                      <BiohancedVialStage
                        src={catalogImage(product.id)}
                        alt={product.name}
                        accent={CATALOG_CATEGORIES[product.category].dot}
                        size="sm"
                        className="h-16 !aspect-auto rounded-none"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-bio-ink">
                    <Link href={labResultPath(product.id)} className="hover:text-[#2E6BFF]">
                      {product.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-bio-neutral-400">{product.batch}</td>
                  <td className="px-4 py-3 font-semibold text-[#1F9E6B]">{product.purity}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={labResultPath(product.id)}
                      className="bio-btn-outline px-4 py-2 text-[13px]"
                    >
                      View COA
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-bio-neutral-400">
          Full Certificates of Analysis include identity (mass spec), purity (HPLC), and batch
          metadata. Email{" "}
          <a href={BIOHENCED_LINKS.email} className="underline">research@biohancedlabs.com</a> for
          institutional PDFs.
        </p>
      </div>
    </section>
  );
}

export function BiohancedCoaDetail({ product }: { product: CatalogProduct }) {
  const accent = CATALOG_CATEGORIES[product.category].dot;

  return (
    <section className="bg-bio-white py-12 md:py-16">
      <div className="bio-container max-w-3xl">
        <Link
          href={BIOHENCED_LINKS.labResults}
          className="bio-btn-outline px-4 py-2 text-[14px]"
        >
          ← All lab results
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-[20px] border border-bio-neutral-200 bg-bio-white shadow-[0_4px_16px_rgba(10,11,14,0.06)]">
            <BiohancedVialStage
              src={catalogImage(product.id)}
              alt={product.name}
              accent={accent}
              size="lg"
              className="h-[320px] !aspect-auto rounded-none sm:h-[360px]"
            />
          </div>
          <div>
            <h1 className="bio-headline text-[28px] text-bio-ink sm:text-[40px]">
              {product.name} COA
            </h1>
            <p className="mt-2 text-bio-neutral-400">Batch {product.batch}</p>
            <p className="mt-6 font-[Archivo,sans-serif] text-[48px] font-black text-[#1F9E6B] sm:text-[56px]">
              {product.purity}
            </p>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-bio-neutral-400">
              Purity by HPLC
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-bio-neutral-400">
              Identity confirmed by mass spectrometry. Test method: HPLC / Mass Spec.
            </p>
            <a href={BIOHENCED_LINKS.email} className="bio-btn-primary mt-6">
              Request full PDF
            </a>
          </div>
        </div>

        {/* Mobile-friendly spec list */}
        <div className="mt-10 space-y-0 overflow-hidden rounded-xl border border-bio-neutral-200 md:hidden">
          {product.specs.map((row) => (
            <div
              key={row.k}
              className="flex justify-between gap-4 border-b border-bio-neutral-200 px-4 py-3 last:border-0"
            >
              <span className="text-[14px] font-medium text-bio-ink">{row.k}</span>
              <span className="text-[14px] text-bio-neutral-400 text-right">{row.v}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 hidden overflow-hidden rounded-xl border border-bio-neutral-200 md:block">
          <table className="w-full text-left text-[15px]">
            <tbody>
              {product.specs.map((row) => (
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

        <p className="mt-6 text-[12px] text-bio-neutral-400">
          For research use only. Not for human consumption.
        </p>
      </div>
    </section>
  );
}

export function BiohancedCoaDetailPage({ productId }: { productId: string }) {
  const product = getCatalogProduct(productId);
  if (!product) return null;
  return <BiohancedCoaDetail product={product} />;
}
