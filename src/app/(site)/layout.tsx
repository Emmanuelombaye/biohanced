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
      <header className="sticky top-0 z-50">
        <BiohancedPromoBar />
        <BiohancedNavbar />
      </header>
      {children}
      <BiohancedFooter />
      <BiohancedCookieBanner />
    </BiohancedCartProvider>
  );
}
