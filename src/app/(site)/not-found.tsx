import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

export default function NotFound() {
  return (
    <section className="bg-bio-neutral-100 py-24">
      <div className="bio-container max-w-2xl text-center">
        <h1 className="bio-headline text-[40px] text-bio-sage-500 md:text-[56px]">Page not found</h1>
        <p className="mt-4 text-lg text-bio-neutral-400">
          That page isn&apos;t on this site. Browse the catalog or contact our team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={BIOHENCED_LINKS.home}
            className="bio-cta rounded-[10px] px-7 py-3.5 text-[15px]"
          >
            Back home
          </Link>
          <Link
            href={BIOHENCED_LINKS.catalog}
            className="rounded-[10px] border border-bio-neutral-200 bg-bio-white px-7 py-3.5 text-[15px] font-medium text-bio-ink"
          >
            Browse catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
