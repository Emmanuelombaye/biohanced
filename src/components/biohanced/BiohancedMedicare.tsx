import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

export function BiohancedMedicare() {
  return (
    <section id="medicare" className="bg-bio-mint py-16 md:py-[104px] text-[#162a29]">
      <div className="bio-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold tracking-[0.08em] text-[#162a29] uppercase">
            Now serving ages 65–75
          </p>
          <h2 className="bio-headline mt-4 max-w-[560px] text-[32px] leading-[1.2] text-[#162a29] md:text-[40px] md:leading-[48px]">
            Get Wegovy<sup className="text-[0.45em]">®</sup>, Foundayo
            <sup className="text-[0.45em]">®</sup>, or Zepbound
            <sup className="text-[0.45em]">®</sup> for as little as $50/mo through Medicare
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-bio-sage-400">
            The Medicare GLP-1 Bridge Program helps eligible Part D members access brand-name GLP-1
            medications for as little as $50/month.
          </p>

          <ul className="mt-6 space-y-3 text-base text-[#162a29]">
            <li className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#162a29]" />
              We handle insurance paperwork
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#162a29]" />
              Ongoing clinician support
            </li>
          </ul>

          <div className="mt-8">
            <a
              href={BIOHENCED_LINKS.medicarePage}
              className="inline-flex items-center justify-center rounded-full bg-bio-grass px-[42px] py-4 text-[15px] font-medium text-bio-sage-500 transition-opacity hover:opacity-90"
            >
              Learn More
            </a>
          </div>

          <p className="mt-6 max-w-xl text-[11px] leading-relaxed text-bio-neutral-300">
            For eligible Medicare Part D members with a qualifying GLP-1 prescription for weight
            management. This is not a guarantee of coverage. Actual eligibility is determined by the
            Medicare GLP-1 Bridge program&apos;s criteria. The $50 copay does not count toward your
            Part D deductible or out-of-pocket maximum, and low-income subsidies (LIS/Extra Help) do
            not apply. Found is not affiliated with or endorsed by CMS.
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[28px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BIOHENCED_ASSETS.remote.medicareFrame})` }}
            role="img"
            aria-label="Medicare members"
          />
          <div className="absolute bottom-6 left-6 rounded-[10px] bg-bio-volt px-5 py-3 text-bio-ink shadow-lg">
            <p className="text-base text-bio-ink/60 line-through">$1,000+</p>
            <p className="font-bio-sans text-[20px] leading-none font-semibold text-bio-ink">
              $50/mo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
