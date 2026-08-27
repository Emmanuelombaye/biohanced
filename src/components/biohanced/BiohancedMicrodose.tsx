import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BIOHENCED_LINKS } from "@/lib/biohanced-links";
import { BiohancedImg } from "./BiohancedImg";

export function BiohancedMicrodose() {
  return (
    <section id="microdose" className="bg-bio-white py-16 md:py-[104px]">
      <div className="bio-container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="bio-headline text-[29px] leading-[1.1] font-light text-bio-sage-500 md:text-[48px] md:leading-[52.8px]">
            GLP-1 <strong className="font-bio-serif font-medium">Microdose</strong> program
          </h2>
          <p className="mt-4 text-[20px] text-bio-sage-300">A simpler way to start GLP-1s</p>
          <div className="mt-8">
            <a
              href={BIOHENCED_LINKS.microdosingPage}
              className="bio-cta inline-flex items-center justify-center rounded-[10px] px-[42px] py-4 text-[17px]"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <BiohancedImg
            src={BIOHENCED_ASSETS.remote.microdose}
            alt="GLP-1 Microdose program"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
