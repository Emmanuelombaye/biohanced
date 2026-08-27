import {
  BiohancedCookieBanner,
  BiohancedCartProvider,
  BiohancedFooter,
  BiohancedNavbar,
  BiohancedPromoBar,
} from "@/components/biohanced";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <BiohancedCartProvider>
      <BiohancedPromoBar />
      <BiohancedNavbar />
      {children}
      <BiohancedFooter />
      <BiohancedCookieBanner />
    </BiohancedCartProvider>
  );
}
