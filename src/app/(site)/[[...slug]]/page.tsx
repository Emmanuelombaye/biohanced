import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BiohancedHomePage, BiohancedInnerPage } from "@/components/biohanced";
import { allStaticSlugs, resolveSitePage } from "@/lib/biohanced-site-pages";

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
    return { title: "Found | Weight Loss Medication Personalized for You" };
  }
  const page = resolveSitePage(slug);
  if (!page) return { title: "Found" };
  return { title: `${page.title} | Found` };
}

export default async function SitePage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  if (!slug || slug.length === 0) {
    return <BiohancedHomePage />;
  }

  const page = resolveSitePage(slug);
  if (!page) notFound();

  return <BiohancedInnerPage slug={slug} />;
}
