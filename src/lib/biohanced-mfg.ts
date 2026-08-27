export type MfgStep = {
  n: string;
  tag: string;
  title: string;
  body: string;
  why: string;
};

export type MfgPhase = {
  phase: string;
  range: string;
  steps: MfgStep[];
};

export const MFG_STATS = [
  { v: ">99%", k: "HPLC-MS Purity" },
  { v: "ISO 17025", k: "Accredited Testing" },
  { v: "12 Steps", k: "Verified Process" },
  { v: "100%", k: "Third-Party Tested" },
] as const;

export const MFG_GUARANTEES = [
  "ISO-certified cleanroom synthesis",
  "HPLC purification to ≥99% purity",
  "Endotoxin and heavy-metal screening",
  "Lyophilization with nitrogen sealing",
  "−80°C storage until release",
  "Made in USA — no relabeling",
] as const;

export const MFG_COMPARISON = [
  { label: "Third-party HPLC + MS on every batch", us: true, gray: false },
  { label: "Published COA for every lot", us: true, gray: false },
  { label: "Endotoxin screening", us: true, gray: false },
  { label: "Cold-chain / −80°C storage", us: true, gray: false },
  { label: "US synthesis & packaging", us: true, gray: false },
  { label: "Traceable batch IDs", us: true, gray: "Unknown" },
] as const;

export const MFG_PHASES: MfgPhase[] = [
  {
    phase: "Synthesis",
    range: "Steps 1 – 4",
    steps: [
      {
        n: "01",
        tag: "Starting with the best",
        title: "Pharma-Grade Raw Materials",
        body: "Every peptide begins with pharma-grade amino acids and reagents, tested and certified for purity.",
        why: "Contaminated starting materials mean contaminated peptides — quality begins at the source.",
      },
      {
        n: "02",
        tag: "Made in clean conditions",
        title: "Sterile, Cleanroom Manufacturing",
        body: "All synthesis takes place in ISO-certified cleanrooms with sterile equipment and filtered air.",
        why: "Prevents microbial contamination and ensures consistent quality on every batch.",
      },
      {
        n: "03",
        tag: "Building the chain",
        title: "Solid-Phase Peptide Synthesis",
        body: "Amino acids are added one by one to a resin scaffold, snapping together in precise order.",
        why: "The resin holds the chain steady, ensuring each peptide is built exactly as designed.",
      },
      {
        n: "04",
        tag: "Freeing the peptide",
        title: "Cleavage & Deprotection",
        body: "Once the chain is complete, it is cut free from the resin and protective groups are removed.",
        why: "This releases the finished peptide so it can move on to purification.",
      },
    ],
  },
  {
    phase: "Purification & Testing",
    range: "Steps 5 – 8",
    steps: [
      {
        n: "05",
        tag: "First cleanup pass",
        title: "Crude Purification",
        body: "The newly freed peptide is washed and filtered to remove solvents and large by-products.",
        why: "Creates a safer, cleaner starting point before precision purification.",
      },
      {
        n: "06",
        tag: "Precision purification",
        title: "High-Performance Liquid Chromatography",
        body: "HPLC separates the target peptide from closely related impurities at a molecular level.",
        why: "Even small impurities can change results — our purity reaches >99%.",
      },
      {
        n: "07",
        tag: "Hidden toxins removed",
        title: "Heavy Metal & Endotoxin Screening",
        body: "Every batch is tested for heavy metals (lead, mercury, arsenic) and bacterial endotoxins.",
        why: "Guarantees our peptides are free of these contaminants — a step gray-market imports skip.",
      },
      {
        n: "08",
        tag: ">99% confirmed",
        title: "Purity Verification (HPLC-MS)",
        body: "Identity and purity are confirmed by HPLC and mass spectrometry, documented on a Certificate of Analysis.",
        why: "You get independently verified proof of exactly what is in every vial.",
      },
    ],
  },
  {
    phase: "Stability & Delivery",
    range: "Steps 9 – 12",
    steps: [
      {
        n: "09",
        tag: "Final sterile safeguard",
        title: "Sterile Filtration & Aseptic Fill",
        body: "The purified solution is passed through a 0.22µm sterile filter and filled into vials under aseptic conditions.",
        why: "This gold-standard step ensures every vial is free of microorganisms and particulates.",
      },
      {
        n: "10",
        tag: "Locked for stability",
        title: "Lyophilization & Nitrogen Sealing",
        body: "Vials are freeze-dried under vacuum, then capped and sealed with nitrogen gas.",
        why: "Prevents oxygen and moisture damage, ensuring long-term stability.",
      },
      {
        n: "11",
        tag: "Ultra-cold preservation",
        title: "Medical-Grade Freezer Storage",
        body: "Finished vials are stored in ultra-low temperature freezers at −80°C until shipment.",
        why: "Prevents molecular degradation and maintains peptide purity and strength.",
      },
      {
        n: "12",
        tag: "Straight to your door",
        title: "Expedited Direct Shipping",
        body: "Orders ship direct to you via expedited carriers, typically arriving within 2–3 business days.",
        why: "No risk of degradation from long transit or heat — fast delivery straight to your research bench.",
      },
    ],
  },
];
