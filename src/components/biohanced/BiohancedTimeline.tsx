const STEPS = [
  {
    week: "Week 1",
    title: "Getting started",
    body: "After completing your assessment, your clinician will review your profile, and–if eligible–your medication will be shipped to your door. Most members can start treatment within a week.",
  },
  {
    week: "Week 2",
    title: "Finding your rhythm",
    body: "You'll start your medication with guidance from your care team, and begin tracking how your body responds. Support is available between check-ins, and more than 80% of Found members report zero side effects upon starting.",
  },
  {
    week: "Weeks 3-4",
    title: "Continued support",
    body: "You connect with your provider to check in on progress and adjust your plan if needed. You'll discuss what's working, and where you might need extra support.",
  },
  {
    week: "Month 2 and beyond",
    title: "Building momentum",
    body: "Your personalized care plan evolves as you do. Refills are easy. Check-ins continue monthly. And you may start to see patterns–not just on the scale, but in how your body feels, how your energy shifts, and how your relationship with your health is changing.",
  },
];

export function BiohancedTimeline() {
  return (
    <section id="program" className="bg-bio-neutral-100 py-12">
      <div className="bio-container">
        <h2 className="max-w-[711px] font-bio-sans text-[36px] font-light leading-[1.1] text-bio-sage-500 md:text-[48px] md:leading-[52.8px]">
          What to expect in your first month
        </h2>
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-[1520px] px-4 md:px-10">
        <div className="absolute top-10 bottom-10 left-1/2 hidden w-px -translate-x-1/2 bg-[#147d57]/40 md:block" />

        <div className="flex flex-col gap-10">
          {STEPS.map((step, index) => {
            const even = index % 2 === 1;

            return (
              <div
                key={step.week}
                className={`relative flex ${even ? "md:justify-end" : "md:justify-start"}`}
              >
                <div className="absolute top-12 left-1/2 z-10 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#147d57] md:block" />

                <article className="w-full rounded-3xl bg-bio-white p-8 md:w-[720px] md:rounded-[40px] md:p-10">
                  <p className="text-base text-[#147d57] md:text-2xl">{step.week}</p>
                  <h3 className="mt-1 text-[28px] font-medium leading-tight text-bio-sage-500 md:text-[40px] md:leading-[48px]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[17px] leading-7 text-bio-neutral-400 md:text-[20px] md:leading-[28px]">
                    {step.body}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bio-container">
        <p className="mx-auto mt-12 max-w-3xl text-center text-[13px] leading-relaxed text-bio-neutral-300 md:text-[15px]">
          A note on results: Real, sustainable change takes time. Most members start seeing
          meaningful progress within 2-3 months–but your body&apos;s timeline is your own, and
          progress goes beyond a number on the scale.
        </p>
      </div>

      <div className="mt-16 text-center md:mt-20">
        <p className="font-bio-sans text-[96px] font-light leading-none text-bio-sage-400 md:text-[180px] lg:text-[240px] lg:leading-none">
          300K+
        </p>
        <p className="mt-2 text-[18px] text-bio-sage-400 md:text-[44px] md:leading-tight">
          members served
        </p>
      </div>
    </section>
  );
}
