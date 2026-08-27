import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

export function BiohancedPromoBar() {
  return (
    <Link
      href={BIOHENCED_LINKS.promoSurvey}
      className="flex min-h-[48px] items-center justify-center bg-[#14161A] px-4 py-2.5 text-center text-[14px] font-medium text-[#C9CCD2] transition-colors hover:bg-[#16181D] hover:text-white"
    >
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#B6FF3A]" aria-hidden />
      Research-grade peptides · third-party verified ·{" "}
      <span className="text-[#B6FF3A]">Get started today</span>
    </Link>
  );
}
