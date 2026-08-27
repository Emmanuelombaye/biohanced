import Link from "next/link";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";

function GradientStat({
  value,
  suffix = "",
}: {
  value: string;
  suffix?: string;
}) {
  return (
    <p
      className="bg-clip-text font-bio-sans leading-none font-light text-transparent"
      style={{
        backgroundImage: "linear-gradient(115deg, rgb(203, 218, 149), rgb(121, 143, 139))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      <span className="text-[128px] md:text-[200px] lg:text-[288px]">{value}</span>
      {suffix ? <span className="text-[64px] md:text-[120px] lg:text-[180px]">{suffix}</span> : null}
    </p>
  );
}

export function BiohancedStats() {
  return (
    <section className="bg-bio-sage-500 pt-16 pb-[72px] text-bio-white md:pt-32">
      <div className="bio-container">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-24">
          <div>
            <GradientStat value="83" suffix="%" />
            <p className="mt-3 max-w-[360px] text-[20px] text-bio-sage-200">
              of members sustain results for one year*
            </p>
          </div>

          <div>
            <GradientStat value="1.4M" />
            <p className="mt-3 max-w-[280px] text-[20px] text-bio-sage-200">
              pounds lost by Found members
            </p>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-[800px] text-center md:mt-28">
          <h2 className="bio-headline text-[29px] leading-[1.1] text-bio-sage-200 md:text-[48px] md:leading-[52.8px]">
            It&apos;s not just about the weight you&apos;ve lost, it&apos;s about the life
            you&apos;ve found.
          </h2>

          <div className="mt-10 flex justify-center">
            <Link
              href={BIOHENCED_LINKS.getStarted}
              className="inline-flex items-center justify-center rounded-full bg-bio-white px-10 py-4 text-base font-semibold text-bio-neutral-500 transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-[11px] leading-relaxed text-bio-sage-300">
          *Based on comparisons to similar programs offering GLP-1 weight loss treatments compared
          to standard market pricing. Prices may vary based on plan selection, promotional
          discounts, trial pricing or special offers. Additional charges may apply for optional
          services or add-ons and the program features and quality may differ. Prescriptions are up
          to a medical provider&apos;s discretion.
        </p>
      </div>
    </section>
  );
}
