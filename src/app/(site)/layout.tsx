import {
  BiohancedCookieBanner,
  BiohancedFooter,
  BiohancedNavbar,
  BiohancedPromoBar,
} from "@/components/biohanced";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BiohancedPromoBar />
      <BiohancedNavbar />
      {children}
      <BiohancedFooter />
      <BiohancedCookieBanner />
    </>
  );
}
