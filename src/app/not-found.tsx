import {
  BiohancedCookieBanner,
  BiohancedFooter,
  BiohancedNavbar,
  BiohancedPromoBar,
} from "@/components/biohanced";
import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

export default function RootNotFound() {
  return (
    <>
      <BiohancedPromoBar />
      <BiohancedNavbar />
      <section className="bg-bio-neutral-100 py-24">
        <div className="bio-container max-w-2xl text-center">
          <h1 className="bio-headline text-[40px] text-bio-sage-500 md:text-[56px]">Page not found</h1>
          <p className="mt-4 text-lg text-bio-neutral-400">
            That page isn’t on this site. Head home or start your assessment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={BIOHENCED_LINKS.home}
              className="rounded-full bg-bio-sage-500 px-7 py-3.5 text-[15px] font-medium text-bio-white"
            >
              Back home
            </Link>
            <Link
              href={BIOHENCED_LINKS.getStarted}
              className="rounded-full border border-bio-sage-500 px-7 py-3.5 text-[15px] font-medium text-bio-sage-500"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
      <BiohancedFooter />
      <BiohancedCookieBanner />
    </>
  );
}
