import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";
import { BiohancedImg } from "./BiohancedImg";

type Pill =
  | { type: "text"; label: string }
  | { type: "image"; src: string };

const ROW_ONE: Pill[] = [
  { type: "text", label: "Sleep apnea" },
  { type: "text", label: "Diabetes" },
  { type: "text", label: "Mental health" },
  { type: "text", label: "Back pain" },
  { type: "image", src: BIOHENCED_ASSETS.remote.benefitFaces[0] },
  { type: "text", label: "Sleep apnea" },
  { type: "text", label: "Diabetes" },
  { type: "text", label: "Mental health" },
  { type: "text", label: "Back pain" },
];

const ROW_TWO: Pill[] = [
  { type: "text", label: "Hydration" },
  { type: "text", label: "Confidence" },
  { type: "text", label: "Joint pain" },
  { type: "text", label: "Blood pressure" },
  { type: "image", src: BIOHENCED_ASSETS.remote.benefitFaces[1] },
  { type: "text", label: "Hydration" },
  { type: "text", label: "Confidence" },
  { type: "text", label: "Joint pain" },
  { type: "text", label: "Blood pressure" },
];

const ROW_THREE: Pill[] = [
  { type: "text", label: "Blood Pressure" },
  { type: "text", label: "Confidence" },
  { type: "text", label: "Joint pain" },
  { type: "text", label: "Diabetes" },
  { type: "image", src: BIOHENCED_ASSETS.remote.benefitFaces[2] },
  { type: "text", label: "Cholesterol" },
  { type: "text", label: "Blood Pressure" },
  { type: "text", label: "Confidence" },
  { type: "text", label: "Joint pain" },
];

function PillItem({ item }: { item: Pill }) {
  if (item.type === "image") {
    return (
      <div className="h-[41px] w-[200px] shrink-0 overflow-hidden rounded-full md:h-16 md:w-[320px]">
        <BiohancedImg src={item.src} alt="" className="h-full w-full object-cover object-center" />
      </div>
    );
  }

  return (
    <div className="flex h-[41px] shrink-0 items-center rounded-full border border-bio-sage-200 px-6 py-2 font-bio-sans text-[24px] font-light leading-none text-bio-sage-200 md:h-[61px] md:px-10 md:py-3 md:text-[36px]">
      {item.label}
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Pill[]; reverse?: boolean }) {
  const sequence = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${reverse ? "bio-marquee-reverse" : "bio-marquee"}`}>
        {sequence.map((item, index) => (
          <PillItem key={`${item.type}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function BiohancedBenefits() {
  return (
    <section className="bg-bio-sage-500 pt-16 pb-[72px] text-bio-white md:pt-32">
      <div className="bio-container mb-10 text-center md:mb-16">
        <h2 className="bio-headline mx-auto max-w-[640px] text-[29px] leading-[1.1] text-bio-sage-200 md:text-[48px] md:leading-[52.8px]">
          Weight loss, and so <em className="italic text-bio-white">much more</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[18px] leading-relaxed text-bio-sage-200">
          Found helps you feel your best, look your best, and improve other important aspects of
          your life
        </p>
      </div>

      <div className="space-y-5">
        <MarqueeRow items={ROW_ONE} />
        <MarqueeRow items={ROW_TWO} reverse />
        <MarqueeRow items={ROW_THREE} />
      </div>
    </section>
  );
}
