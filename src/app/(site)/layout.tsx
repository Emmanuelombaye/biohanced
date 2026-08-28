import {
  BiohancedCookieBanner,
  BiohancedCartProvider,
  BiohancedFooter,
  BiohancedSiteHeader,
} from "@/components/biohanced";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <BiohancedCartProvider>
      <BiohancedSiteHeader />
      <main className="min-w-0 overflow-x-clip">{children}</main>
      <BiohancedFooter />
      <BiohancedCookieBanner />
    </BiohancedCartProvider>
  );
}
