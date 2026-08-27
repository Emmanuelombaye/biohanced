"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BIOHENCED_CATALOG,
  catalogImage,
  getCatalogProduct,
  type CatalogProduct,
} from "@/lib/biohanced-catalog";
import { BIOHENCED_LINKS, labResultPath } from "@/lib/biohanced-links";
import { BiohancedImg } from "./BiohancedImg";

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
            className="w-full max-w-md rounded-[10px] border border-bio-neutral-200 px-4 py-3 text-[15px]"
          />
        </div>
        <div className="overflow-hidden rounded-xl border border-bio-neutral-200">
          <table className="w-full text-left text-[15px]">
            <thead className="bg-bio-neutral-100 text-[13px] font-semibold uppercase tracking-wide text-bio-neutral-400">
              <tr>
                <th className="px-4 py-3">Compound</th>
                <th className="px-4 py-3">Batch</th>
                <th className="px-4 py-3">Purity (HPLC)</th>
                <th className="px-4 py-3">COA</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr key={product.id} className="border-t border-bio-neutral-200">
                  <td className="px-4 py-3 font-medium text-bio-ink">
                    <Link href={labResultPath(product.id)} className="hover:text-[#2E6BFF]">
                      {product.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-bio-neutral-400">{product.batch}</td>
                  <td className="px-4 py-3 font-semibold text-[#1F9E6B]">{product.purity}</td>
                  <td className="px-4 py-3">
                    <Link href={labResultPath(product.id)} className="text-[#2E6BFF] underline">
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
  return (
    <section className="bg-bio-white py-12 md:py-16">
      <div className="bio-container max-w-3xl">
        <Link href={BIOHENCED_LINKS.labResults} className="text-[14px] font-medium text-[#2E6BFF]">
          ← All lab results
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex h-[280px] items-center justify-center rounded-[20px] border border-bio-neutral-200 bg-gradient-to-b from-[#16203A] to-[#0B0D12]">
            <BiohancedImg
              src={catalogImage(product.id)}
              alt={product.name}
              className="max-h-[86%] max-w-[70%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            />
          </div>
          <div>
            <h1 className="bio-headline text-[32px] text-bio-ink md:text-[40px]">
              {product.name} COA
            </h1>
            <p className="mt-2 text-bio-neutral-400">Batch {product.batch}</p>
            <p className="mt-6 font-[Archivo,sans-serif] text-[56px] font-black text-[#1F9E6B]">
              {product.purity}
            </p>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-bio-neutral-400">
              Purity by HPLC
            </p>
            <p className="mt-4 text-[15px] text-bio-neutral-400">
              Identity confirmed by mass spectrometry. Test method: HPLC / Mass Spec.
            </p>
            <a
              href={BIOHENCED_LINKS.email}
              className="bio-cta mt-6 inline-flex rounded-[10px] px-6 py-3 text-[15px]"
            >
              Request full PDF
            </a>
          </div>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border border-bio-neutral-200">
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
