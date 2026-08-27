import { BiohancedHero, BiohancedHeroDisclaimer } from "./BiohancedHero";
import { BiohancedStoreHome } from "./BiohancedStoreHome";
import { BiohancedTrustStrip } from "./BiohancedTrustStrip";

export function BiohancedHomePage() {
  return (
    <>
      <BiohancedHero />
      <BiohancedHeroDisclaimer />
      <BiohancedTrustStrip />
      <BiohancedStoreHome />
    </>
  );
}
