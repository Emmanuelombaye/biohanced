import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BiohancedCoaDetailPage,
  BiohancedHomePage,
  BiohancedInnerPage,
  BiohancedMedicationDetail,
  BiohancedMedicationIndex,
  BiohancedOrderConfirm,
} from "@/components/biohanced";
import { getCatalogProduct } from "@/lib/biohanced-catalog";
import {
  allStaticSlugs,
  legacyRedirect,
  resolveSitePage,
} from "@/lib/biohanced-site-pages";

export function generateStaticParams() {
  return allStaticSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!slug || slug.length === 0) {
    return {
      title: "Biohanced Labs | Biology, upgraded.",
      description: "US-synthesized research-grade peptides, third-party verified every batch.",
    };
  }

  if (slug[0] === "catalog" && slug.length === 1) {
    return {
      title: "Catalog | Biohanced Labs",
      description: "Research-grade peptides, organized by application. ≥99% purity with batch COAs.",
    };
  }

  if (slug[0] === "catalog" && slug[1]) {
    const product = getCatalogProduct(slug[1]);
    if (product) {
      return {
        title: `${product.name} | Biohanced Labs`,
        description: product.blurb,
      };
    }
  }

  const page = resolveSitePage(slug);
  if (!page) return { title: "Biohanced Labs" };
  return { title: `${page.title} | Biohanced Labs` };
}

export default async function SitePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ cat?: string }>;
}) {
  const { slug } = await params;
  const { cat } = await searchParams;
  if (!slug || slug.length === 0) {
    return <BiohancedHomePage />;
  }

  const redirectTo = legacyRedirect(slug);
  if (redirectTo) {
    redirect(redirectTo);
  }

  if (slug[0] === "catalog") {
    if (slug.length === 1) {
      return <BiohancedMedicationIndex category={cat} />;
    }
    const product = getCatalogProduct(slug[1]);
    if (product) {
      return <BiohancedMedicationDetail productId={slug[1]} />;
    }
  }

  if (slug[0] === "lab-results" && slug[1]) {
    const product = getCatalogProduct(slug[1]);
    if (product) {
      return <BiohancedCoaDetailPage productId={slug[1]} />;
    }
  }

  if (slug[0] === "order" && slug[1] === "confirm") {
    return <BiohancedOrderConfirm />;
  }

  const page = resolveSitePage(slug);
  if (!page) notFound();

  return <BiohancedInnerPage slug={slug} />;
}
