import { BiohancedHero, BiohancedHeroDisclaimer } from "./BiohancedHero";
import { BiohancedReveal } from "./BiohancedReveal";
import { BiohancedStoreHome } from "./BiohancedStoreHome";

export function BiohancedHomePage() {
  return (
    <>
      <BiohancedHero />
      <BiohancedHeroDisclaimer />
      <BiohancedReveal>
        <BiohancedStoreHome />
      </BiohancedReveal>
    </>
  );
}
