import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BiohancedImg } from "./BiohancedImg";

export function BiohancedDoctor() {
  return (
    <section className="bg-bio-neutral-100 py-16 md:py-32 md:pb-16">
      <div className="bio-container grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <h2 className="bio-headline max-w-[592px] text-[29px] leading-[1.1] text-bio-ink md:text-[48px] md:leading-[52.8px]">
          Found&apos;s program is designed by leading doctors in obesity medicine
        </h2>

        <article
          className="rounded-xl px-10 pt-12 pb-14"
          style={{
            backgroundImage: "linear-gradient(201deg, #a8beb7, #d8ece4)",
          }}
        >
          <BiohancedImg
            src={BIOHENCED_ASSETS.remote.quoteLight}
            alt=""
            width={96}
            height={72}
            className="mb-6 h-9 w-auto object-contain"
          />
          <p className="text-[22px] leading-snug text-bio-sage-500 md:text-[32px] md:leading-10 lg:text-[40px] lg:leading-[48px]">
            As Found&apos;s Senior Medical Advisor, I help design the clinical protocols that guide
            the medical care Found&apos;s members receive—care that is guided by the latest
            advancements in obesity medicine.
          </p>
          <div className="mt-10 flex items-center justify-end gap-4">
            <div className="text-right">
              <p className="text-[22px] font-semibold text-bio-sage-500">Dr. Kumar</p>
              <p className="text-sm text-bio-sage-500/80">Senior Medical Advisor</p>
            </div>
            <BiohancedImg
              src={BIOHENCED_ASSETS.remote.doctor}
              alt="Dr. Kumar"
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover object-center"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
