import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

export function BiohancedPromoBar() {
  return (
    <Link
      href={BIOHENCED_LINKS.browseCatalog}
      className="flex min-h-[44px] items-center justify-center bg-[#14161A] px-3 py-2 text-center text-[#C9CCD2] transition-colors hover:bg-[#16181D] hover:text-white sm:px-4 sm:py-2.5"
    >
      <span className="mr-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6FF3A]" aria-hidden />
      <span className="min-w-0 text-[12px] leading-snug sm:text-[14px]">
        <span className="hidden min-[380px]:inline">Research-grade peptides · </span>
        COA every batch · <span className="font-semibold text-[#B6FF3A]">Browse catalog</span>
      </span>
    </Link>
  );
}
