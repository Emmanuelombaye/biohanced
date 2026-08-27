import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

export function BiohancedPromoBar() {
  return (
    <Link
      href={BIOHENCED_LINKS.promoSurvey}
      className="flex min-h-[56px] items-center justify-center bg-bio-sage-300 px-4 py-3 text-center text-base text-bio-white"
    >
      Get up to $100 off your membership plan today!‡
    </Link>
  );
}
