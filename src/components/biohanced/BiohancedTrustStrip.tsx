import { BIOHENCED_ASSETS } from "@/lib/biohanced-assets";

const ITEMS = [
  {
    icon: BIOHENCED_ASSETS.icons.scale,
    title: "≥99% purity",
    body: "HPLC-verified on every batch before release.",
  },
  {
    icon: BIOHENCED_ASSETS.icons.insurance,
    title: "Third-party tested",
    body: "Independent HPLC and mass spectrometry.",
  },
  {
    icon: BIOHENCED_ASSETS.icons.phone,
    title: "COA on every lot",
    body: "Published certificates for your lab records.",
  },
  {
    icon: BIOHENCED_ASSETS.icons.scale,
    title: "Cold-chain shipping",
    body: "Discreet packaging with expedited carriers.",
  },
];

export function BiohancedTrustStrip() {
  return (
    <section className="border-y border-bio-neutral-200 bg-bio-ink">
      <div className="bio-container py-8 md:py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-[#262932] bg-[#14161A]">
                <img src={item.icon} alt="" className="h-5 w-5 opacity-90" aria-hidden />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-[13px] leading-snug text-[#9AA0A8]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
