import { BiohancedBenefits } from "./BiohancedBenefits";
import { BiohancedDoctor } from "./BiohancedDoctor";
import { BiohancedFaq } from "./BiohancedFaq";
import { BiohancedHero, BiohancedHeroDisclaimer } from "./BiohancedHero";
import { BiohancedInsurance } from "./BiohancedInsurance";
import { BiohancedMedicare } from "./BiohancedMedicare";
import { BiohancedMedications } from "./BiohancedMedications";
import { BiohancedMicrodose } from "./BiohancedMicrodose";
import { BiohancedReveal } from "./BiohancedReveal";
import { BiohancedStats } from "./BiohancedStats";
import { BiohancedTestimonials } from "./BiohancedTestimonials";
import { BiohancedTimeline } from "./BiohancedTimeline";

export function BiohancedHomePage() {
  return (
    <>
      <BiohancedHero />
      <BiohancedHeroDisclaimer />
      <BiohancedReveal>
        <BiohancedBenefits />
      </BiohancedReveal>
      <BiohancedReveal>
        <BiohancedTestimonials />
      </BiohancedReveal>
      <BiohancedReveal>
        <BiohancedStats />
      </BiohancedReveal>
      <BiohancedReveal>
        <BiohancedMedicare />
      </BiohancedReveal>
      <BiohancedReveal>
        <BiohancedDoctor />
      </BiohancedReveal>
      <BiohancedReveal>
        <BiohancedTimeline />
      </BiohancedReveal>
      <BiohancedReveal>
        <BiohancedMedications />
      </BiohancedReveal>
      <BiohancedReveal>
        <BiohancedMicrodose />
      </BiohancedReveal>
      <BiohancedReveal>
        <BiohancedInsurance />
      </BiohancedReveal>
      <BiohancedReveal>
        <BiohancedFaq />
      </BiohancedReveal>
    </>
  );
}
