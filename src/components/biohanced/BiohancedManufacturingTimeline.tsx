import { MFG_COMPARISON, MFG_GUARANTEES, MFG_PHASES, MFG_STATS } from "@/lib/biohanced-mfg";
import { BiohancedProductCardGrid } from "./BiohancedProductCard";

export function BiohancedManufacturingTimeline() {
  return (
    <section className="bg-bio-white py-14 md:py-24">
      <div className="bio-container">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E6BFF]">
            Manufacturing · 12 steps
          </p>
          <h2 className="bio-headline mt-4 text-[32px] text-bio-ink md:text-[44px]">
            From lab to your research in 12 steps
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-bio-neutral-400">
            Every compound moves through the same twelve checkpoints — synthesis, purification and
            testing, then stability and delivery. Nothing ships until it passes each one.
          </p>
          <ul className="mt-6 space-y-2 text-[15px] text-bio-neutral-400">
            {MFG_GUARANTEES.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6FF3A]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MFG_STATS.map((stat) => (
            <div
              key={stat.k}
              className="rounded-[14px] border border-bio-neutral-200 bg-bio-neutral-100 p-5 text-center"
            >
              <p className="font-[Archivo,sans-serif] text-[28px] font-black text-bio-ink">{stat.v}</p>
              <p className="mt-1 text-sm text-bio-neutral-400">{stat.k}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1F9E6B]">
            Finished product examples
          </p>
          <BiohancedProductCardGrid
            productIds={["bpc157", "ghkcu"]}
            columns={2}
            className="mt-5 max-w-2xl"
            mobileRail={false}
            compact
          />
        </div>

        <div className="mt-16 space-y-16">
          {MFG_PHASES.map((phase) => (
            <div key={phase.phase}>
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-bio-neutral-200 pb-4">
                <h3 className="bio-headline text-[24px] text-bio-ink md:text-[28px]">{phase.phase}</h3>
                <p className="text-[14px] font-medium text-bio-neutral-400">{phase.range}</p>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {phase.steps.map((step) => (
                  <article
                    key={step.n}
                    className="rounded-[16px] border border-bio-neutral-200 bg-bio-neutral-100 p-5 transition-shadow hover:shadow-[0_8px_24px_rgba(10,11,14,0.06)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-[Archivo,sans-serif] text-[20px] font-black text-[#2E6BFF]">
                        {step.n}
                      </span>
                      <span className="text-[12px] font-semibold uppercase tracking-wide text-[#1F9E6B]">
                        {step.tag}
                      </span>
                    </div>
                    <h4 className="mt-3 text-[17px] font-semibold text-bio-ink">{step.title}</h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-bio-neutral-400">{step.body}</p>
                    <p className="mt-3 text-[14px] leading-relaxed text-bio-neutral-400">
                      <span className="font-medium text-bio-ink">Why it matters: </span>
                      {step.why}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[20px] border border-bio-neutral-200">
          <div className="bg-[#0A0B0E] px-6 py-4 text-center text-[13px] font-semibold uppercase tracking-wide text-[#9AA0A8]">
            Biohanced vs gray-market imports
          </div>
          <table className="w-full text-left text-[15px]">
            <thead className="bg-bio-neutral-100 text-[13px] font-semibold text-bio-neutral-400">
              <tr>
                <th className="px-5 py-3">Standard</th>
                <th className="px-5 py-3 text-center">Biohanced</th>
                <th className="px-5 py-3 text-center">Gray market</th>
              </tr>
            </thead>
            <tbody>
              {MFG_COMPARISON.map((row) => (
                <tr key={row.label} className="border-t border-bio-neutral-200">
                  <td className="px-5 py-3 text-bio-neutral-400">{row.label}</td>
                  <td className="px-5 py-3 text-center font-semibold text-[#1F9E6B]">
                    {row.us === true ? "✓" : row.us}
                  </td>
                  <td className="px-5 py-3 text-center text-bio-neutral-400">
                    {row.gray === false ? "—" : row.gray}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
