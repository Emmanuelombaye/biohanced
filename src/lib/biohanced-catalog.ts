import { BIOHENCED_LINKS } from "./biohanced-links";

export type CatalogCategory =
  | "recovery"
  | "gh"
  | "metabolic"
  | "longevity"
  | "specialty"
  | "essentials";

export type CatalogProduct = {
  id: string;
  name: string;
  subtitle: string;
  category: CatalogCategory;
  purity: string;
  batch: string;
  doseLabel: string;
  priceFrom: number;
  blurb: string;
  description: string;
  mechanism: string;
  highlights: string[];
  specs: { k: string; v: string }[];
  formLabel: string;
};

export const CATALOG_CATEGORIES: Record<
  CatalogCategory,
  { name: string; dot: string }
> = {
  recovery: { name: "Healing & Recovery", dot: "#4F7BFF" },
  gh: { name: "Growth Hormone", dot: "#8F74F5" },
  metabolic: { name: "Metabolic & Weight", dot: "#5A9E1F" },
  longevity: { name: "Longevity & Cellular", dot: "#14B89A" },
  specialty: { name: "Specialty", dot: "#E0772E" },
  essentials: { name: "Essentials", dot: "#9AA0A8" },
};

const defaultSpecs = (purity: string) => [
  { k: "Appearance", v: "White lyophilized powder" },
  { k: "Purity (HPLC)", v: purity },
  { k: "Identity", v: "Conforms (MS)" },
  { k: "Test method", v: "HPLC / Mass Spec" },
  { k: "Reconstitution", v: "Bacteriostatic water" },
  { k: "Storage", v: "-20°C, desiccated" },
  { k: "Shelf life", v: "24 months" },
];

export const BIOHENCED_CATALOG: CatalogProduct[] = [
  {
    id: "retatrutide",
    name: "Retatrutide",
    subtitle: "Triple GIP / GLP-1 / glucagon agonist",
    category: "metabolic",
    purity: "99.5%",
    batch: "BH-0801",
    doseLabel: "15mg",
    priceFrom: 249,
    formLabel: "Lyophilized vial",
    blurb: "A next-generation triple-receptor agonist at the leading edge of incretin research.",
    description:
      "Retatrutide is a single-molecule triple agonist activating GIP, GLP-1 and glucagon receptors simultaneously. It represents the leading edge of incretin research, studied for substantial effects on body weight and metabolic markers in trial settings, with a once-weekly profile.",
    mechanism: "Simultaneous GIP + GLP-1 + glucagon receptor agonism.",
    highlights: [
      "Triple-receptor mechanism",
      "Leading-edge incretin research",
      "Studied for significant metabolic effects",
      "Once-weekly profile",
    ],
    specs: defaultSpecs("99.5%"),
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    subtitle: "Selective growth hormone secretagogue",
    category: "gh",
    purity: "99.6%",
    batch: "BH-0803",
    doseLabel: "5mg",
    priceFrom: 79,
    formLabel: "Lyophilized vial",
    blurb: "A selective ghrelin-receptor agonist with a notably clean GH-release profile.",
    description:
      "Ipamorelin is a pentapeptide ghrelin / GH-secretagogue-receptor agonist prized in research for its selectivity: it stimulates growth hormone with minimal impact on cortisol or prolactin. It is one of the most common partners for a GHRH analog such as CJC-1295.",
    mechanism: "Agonizes the ghrelin/GHS receptor to release GH selectively.",
    highlights: [
      "Selective — minimal cortisol/prolactin",
      "Synergistic with CJC-1295",
      "Well-tolerated in models",
      "Pulsatile GH release",
    ],
    specs: defaultSpecs("99.6%"),
  },
  {
    id: "bpc157",
    name: "BPC-157",
    subtitle: "Body Protection Compound · pentadecapeptide",
    category: "recovery",
    purity: "99.7%",
    batch: "BH-0806",
    doseLabel: "5mg",
    priceFrom: 59,
    formLabel: "Lyophilized vial",
    blurb: "A synthetic gastric pentadecapeptide widely studied for soft-tissue repair and angiogenesis.",
    description:
      "BPC-157 is a stable 15–amino-acid sequence derived from a protective protein found in gastric juice. Research models explore its role in accelerating tendon, ligament and muscle repair, modulating the nitric oxide pathway, and promoting angiogenesis.",
    mechanism: "Upregulates VEGFR2 and the nitric oxide system to support angiogenesis.",
    highlights: [
      "Studied for tendon, ligament & muscle repair",
      "Promotes angiogenesis",
      "Cytoprotective in GI models",
      "Stable in gastric environment",
    ],
    specs: defaultSpecs("99.7%"),
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    subtitle: "GHRH (1-29) analog",
    category: "gh",
    purity: "99.2%",
    batch: "BH-0805",
    doseLabel: "5mg",
    priceFrom: 49,
    formLabel: "Lyophilized vial",
    blurb: "The classic GHRH fragment studied for natural growth-hormone stimulation.",
    description:
      "Sermorelin is a 29–amino-acid analog representing the active core of growth-hormone-releasing hormone. It is widely used to investigate pituitary GH output and age-related decline in GH secretion.",
    mechanism: "Stimulates pituitary GHRH receptors to release endogenous GH.",
    highlights: [
      "Well-characterized GHRH fragment",
      "Supports endogenous GH output",
      "Studied in age-related GH decline",
      "Short half-life",
    ],
    specs: defaultSpecs("99.2%"),
  },
  {
    id: "cjcdac",
    name: "CJC-1295 (with DAC)",
    subtitle: "GHRH analog + Drug Affinity Complex",
    category: "gh",
    purity: "99.3%",
    batch: "BH-0802",
    doseLabel: "5mg",
    priceFrom: 139,
    formLabel: "Lyophilized vial",
    blurb: "A long-acting GHRH analog with an albumin-bound extended half-life.",
    description:
      "The DAC version binds to albumin, extending the half-life of CJC-1295 to several days. Research explores its ability to raise baseline growth hormone and IGF-1 levels with far less frequent administration than short-acting GHRH analogs.",
    mechanism: "Albumin-binding DAC extends GHRH receptor activity for days.",
    highlights: [
      "Extended half-life (~6-8 days)",
      "Raises baseline GH & IGF-1",
      "Less frequent dosing",
      "Albumin-bound stability",
    ],
    specs: defaultSpecs("99.3%"),
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    subtitle: "Stabilized GHRH analog",
    category: "gh",
    purity: "99.5%",
    batch: "BH-0804",
    doseLabel: "5mg",
    priceFrom: 139,
    formLabel: "Lyophilized vial",
    blurb: "A stabilized GHRH analog most studied for visceral fat reduction.",
    description:
      "Tesamorelin is a stabilized GHRH analog carrying a trans-3-hexenoic acid modification that improves its stability and duration. Research interest centers on its pronounced effect on visceral adipose tissue alongside elevation of IGF-1.",
    mechanism: "Potent, stabilized GHRH receptor agonism elevating IGF-1.",
    highlights: [
      "Targets visceral adipose tissue",
      "Stabilized for longer activity",
      "Elevates IGF-1",
      "Most-studied GHRH for fat loss",
    ],
    specs: defaultSpecs("99.5%"),
  },
  {
    id: "ghkcu",
    name: "GHK-Cu",
    subtitle: "Copper tripeptide-1",
    category: "longevity",
    purity: "99.8%",
    batch: "BH-0808",
    doseLabel: "50mg",
    priceFrom: 129,
    formLabel: "Lyophilized vial",
    blurb: "A copper-binding tripeptide studied for skin, collagen and tissue repair.",
    description:
      "GHK-Cu is a naturally occurring copper-binding tripeptide whose levels decline with age. It is widely studied for collagen and elastin synthesis, wound remodeling and antioxidant signaling.",
    mechanism: "Delivers copper and signals collagen / elastin remodeling.",
    highlights: [
      "Stimulates collagen & elastin",
      "Skin & wound remodeling",
      "Antioxidant signaling",
      "Cosmetic & repair research",
    ],
    specs: defaultSpecs("99.8%"),
  },
  {
    id: "tb500",
    name: "TB-500",
    subtitle: "Thymosin β4 fragment",
    category: "recovery",
    purity: "99.4%",
    batch: "BH-0807",
    doseLabel: "5mg",
    priceFrom: 69,
    formLabel: "Lyophilized vial",
    blurb: "An actin-binding peptide fragment explored for cell migration and recovery.",
    description:
      "TB-500 is a synthetic fragment of Thymosin Beta-4 studied for its ability to regulate actin, supporting cell migration, flexibility and tissue regeneration.",
    mechanism: "Sequesters G-actin and promotes cell migration & differentiation.",
    highlights: [
      "Regulates actin & cytoskeleton",
      "Supports cell migration",
      "Studied for flexibility & recovery",
      "Systemic distribution",
    ],
    specs: defaultSpecs("99.4%"),
  },
  {
    id: "nad",
    name: "NAD+",
    subtitle: "Nicotinamide adenine dinucleotide",
    category: "longevity",
    purity: "99.0%",
    batch: "BH-0813",
    doseLabel: "500mg",
    priceFrom: 99,
    formLabel: "Lyophilized vial",
    blurb: "An essential coenzyme central to cellular energy, repair and sirtuin activity.",
    description:
      "NAD+ is a coenzyme present in every cell, central to mitochondrial energy production, DNA repair and sirtuin signaling. Its levels decline with age, making it a focal point of cellular-longevity research.",
    mechanism: "Fuels redox reactions, sirtuins and PARP-mediated DNA repair.",
    highlights: [
      "Core to mitochondrial energy",
      "Substrate for sirtuins",
      "Declines with age",
      "High-dose 500mg vial",
    ],
    specs: defaultSpecs("99.0%"),
  },
  {
    id: "motsc",
    name: "MOTS-c",
    subtitle: "Mitochondrial-derived peptide",
    category: "longevity",
    purity: "99.2%",
    batch: "BH-0812",
    doseLabel: "10mg",
    priceFrom: 99,
    formLabel: "Lyophilized vial",
    blurb: "A mitochondrial-genome-encoded peptide studied for metabolic research.",
    description:
      "MOTS-c is a 16–amino-acid peptide encoded within mitochondrial DNA. Research explores its role in cellular metabolic homeostasis and AMPK pathway activation.",
    mechanism: "Activates the AMPK pathway in metabolic research models.",
    highlights: [
      "Mitochondrial-derived sequence",
      "Studied for AMPK activation",
      "Metabolic homeostasis research",
      "Exercise-mimetic interest",
    ],
    specs: defaultSpecs("99.2%"),
  },
  {
    id: "epithalon",
    name: "Epithalon",
    subtitle: "AEDG tetrapeptide",
    category: "longevity",
    purity: "99.4%",
    batch: "BH-0811",
    doseLabel: "10mg",
    priceFrom: 59,
    formLabel: "Lyophilized vial",
    blurb: "A pineal tetrapeptide studied for telomerase activity and circadian function.",
    description:
      "Epithalon is a synthetic tetrapeptide based on a pineal gland extract. Longevity research investigates its influence on telomerase activity and circadian rhythms.",
    mechanism: "May upregulate telomerase and modulate pineal / melatonin signaling.",
    highlights: [
      "Studied for telomerase activation",
      "Circadian regulation",
      "Short cyclical protocols",
      "Pineal-derived sequence",
    ],
    specs: defaultSpecs("99.4%"),
  },
  {
    id: "igf1lr3",
    name: "IGF-1 LR3",
    subtitle: "Long R3 IGF-1 analog",
    category: "recovery",
    purity: "99.1%",
    batch: "BH-0809",
    doseLabel: "0.1mg",
    priceFrom: 79,
    formLabel: "Lyophilized vial",
    blurb: "A long-acting IGF-1 analog engineered to resist binding-protein clearance.",
    description:
      "IGF-1 LR3 carries an extended Long R3 N-terminal sequence that reduces affinity for IGF binding proteins, extending activity in tissue and muscle growth signaling models.",
    mechanism: "Binds the IGF-1 receptor with reduced IGFBP affinity.",
    highlights: [
      "Extended half-life vs native IGF-1",
      "Muscle & tissue growth signaling",
      "Reduced binding-protein affinity",
      "Compact 0.1mg vial",
    ],
    specs: defaultSpecs("99.1%"),
  },
  {
    id: "semax",
    name: "Semax",
    subtitle: "ACTH(4-10) analog",
    category: "specialty",
    purity: "99.3%",
    batch: "BH-0810",
    doseLabel: "10mg",
    priceFrom: 69,
    formLabel: "Lyophilized vial",
    blurb: "A heptapeptide derived from ACTH, studied for neurotrophic research.",
    description:
      "Semax is a synthetic heptapeptide derived from ACTH (4-10). Research interest centers on BDNF and NGF expression and neuroprotection in cognitive models.",
    mechanism: "Modulates BDNF/NGF expression and monoamine signaling.",
    highlights: [
      "Studied for BDNF expression",
      "Neuroprotective interest",
      "Derived from ACTH(4-10)",
      "10mg research vial",
    ],
    specs: defaultSpecs("99.3%"),
  },
  {
    id: "pt141",
    name: "PT-141",
    subtitle: "Melanocortin receptor agonist",
    category: "specialty",
    purity: "99.3%",
    batch: "BH-0814",
    doseLabel: "10mg",
    priceFrom: 74,
    formLabel: "Lyophilized vial",
    blurb: "A cyclic melanocortin-receptor agonist for central signaling research.",
    description:
      "PT-141 (bremelanotide) is a cyclic heptapeptide analog of α-MSH that activates central melanocortin receptors in signaling pathway research.",
    mechanism: "Agonizes MC3R/MC4R melanocortin receptors.",
    highlights: [
      "Melanocortin receptor agonist",
      "Central signaling research",
      "Cyclic heptapeptide structure",
      "10mg vial",
    ],
    specs: defaultSpecs("99.3%"),
  },
  {
    id: "mt2",
    name: "MT-2 (Melanotan 2)",
    subtitle: "Melanocortin receptor agonist",
    category: "specialty",
    purity: "99.3%",
    batch: "BH-0815",
    doseLabel: "10mg",
    priceFrom: 64,
    formLabel: "Lyophilized vial",
    blurb: "A melanocortin agonist studied for melanogenesis pathways.",
    description:
      "Melanotan-2 is a synthetic analog of α-MSH that activates melanocortin receptors, studied for melanogenesis and pigmentation pathways.",
    mechanism: "Non-selective melanocortin (MC1R / MC4R) receptor agonism.",
    highlights: [
      "Stimulates melanogenesis",
      "Melanocortin receptor agonist",
      "Pigmentation pathway research",
      "10mg vial",
    ],
    specs: defaultSpecs("99.3%"),
  },
  {
    id: "aminomq",
    name: "5-Amino-1MQ",
    subtitle: "Small-molecule NNMT inhibitor",
    category: "metabolic",
    purity: "99.0%",
    batch: "BH-0816",
    doseLabel: "50mg",
    priceFrom: 79,
    formLabel: "Lyophilized vial",
    blurb: "An NNMT inhibitor studied for cellular metabolism and NAD+ salvage.",
    description:
      "5-Amino-1MQ inhibits nicotinamide N-methyltransferase (NNMT), explored for effects on the NAD+ salvage pathway and adipocyte metabolic signaling.",
    mechanism: "Inhibits NNMT, studied for metabolic effects.",
    highlights: [
      "NNMT enzyme inhibitor",
      "Cellular metabolism research",
      "NAD+ salvage pathway",
      "Adipocyte research",
    ],
    specs: [
      { k: "Appearance", v: "White to off-white powder" },
      { k: "Purity (HPLC)", v: "99.0%" },
      { k: "Identity", v: "Conforms (MS)" },
      { k: "Test method", v: "HPLC / Mass Spec" },
      { k: "Solubility", v: "DMSO or research solvent" },
      { k: "Storage", v: "-20°C, desiccated" },
      { k: "Shelf life", v: "24 months" },
    ],
  },
  {
    id: "bacwater",
    name: "Bacteriostatic Water",
    subtitle: "Sterile diluent for reconstitution",
    category: "essentials",
    purity: "USP grade",
    batch: "BH-0817",
    doseLabel: "10mL",
    priceFrom: 12.99,
    formLabel: "Sterile solution",
    blurb: "USP-grade sterile water with 0.9% benzyl alcohol for reconstitution.",
    description:
      "Bacteriostatic water is sterile water for injection containing 0.9% benzyl alcohol as a preservative, allowing safe multi-use reconstitution of lyophilized peptide vials.",
    mechanism: "Sterile reconstitution diluent — not a peptide.",
    highlights: [
      "USP-grade sterile water",
      "0.9% benzyl alcohol preservative",
      "Multi-use vial with septum",
      "Essential for reconstitution",
    ],
    specs: [
      { k: "Appearance", v: "Clear, colorless sterile solution" },
      { k: "Preservative", v: "0.9% Benzyl alcohol" },
      { k: "Grade", v: "USP sterile water for injection" },
      { k: "Container", v: "10mL multi-dose vial" },
      { k: "Storage", v: "Room temperature, protect from light" },
      { k: "Shelf life", v: "24 months" },
    ],
  },
];

/** Catalog nav dropdown — Biohanced products by category */
export const MEDICATION_NAV_ITEMS = [
  { label: "All compounds", href: BIOHENCED_LINKS.allMedications },
  { label: "Retatrutide", href: "/catalog/retatrutide" },
  { label: "Ipamorelin", href: "/catalog/ipamorelin" },
  { label: "BPC-157", href: "/catalog/bpc157" },
  { label: "Sermorelin", href: "/catalog/sermorelin" },
  { label: "CJC-1295 (with DAC)", href: "/catalog/cjcdac" },
  { label: "Tesamorelin", href: "/catalog/tesamorelin" },
  { label: "GHK-Cu", href: "/catalog/ghkcu" },
  { label: "View all", href: BIOHENCED_LINKS.catalog },
] as const;

export const CAROUSEL_PRODUCT_IDS = [
  "retatrutide",
  "ipamorelin",
  "bpc157",
  "sermorelin",
  "cjcdac",
  "tesamorelin",
  "ghkcu",
  "nad",
] as const;

export function catalogImage(id: string) {
  return `/biohanced/products/${id}.png`;
}

export function getCatalogProduct(id: string): CatalogProduct | undefined {
  return BIOHENCED_CATALOG.find((p) => p.id === id);
}

export function getCarouselProducts(): CatalogProduct[] {
  return CAROUSEL_PRODUCT_IDS.map((id) => getCatalogProduct(id)).filter(
    (p): p is CatalogProduct => p !== undefined,
  );
}

export function medicationHref(id: string) {
  return `/catalog/${id}`;
}

export function allMedicationSlugs(): string[] {
  return BIOHENCED_CATALOG.map((p) => p.id);
}

export const FEATURED_PRODUCT_IDS = ["bpc157", "retatrutide", "ghkcu", "ipamorelin"] as const;

export const CATEGORY_TILE_GRADIENTS: Record<CatalogCategory, string> = {
  recovery: "linear-gradient(145deg,#4f7bff,#6f7bf5)",
  gh: "linear-gradient(145deg,#8f74f5,#a06bff)",
  metabolic: "linear-gradient(145deg,#5a9e1f,#6fbf2a)",
  longevity: "linear-gradient(145deg,#14b89a,#2ed4b8)",
  specialty: "linear-gradient(145deg,#e0772e,#f59a4a)",
  essentials: "linear-gradient(145deg,#c9ccd2,#9aa0a8)",
};

export type CatalogBundle = {
  id: string;
  productIds: string[];
  price: number;
  regular: number;
  note: string;
};

export const BIOHENCED_BUNDLES: CatalogBundle[] = [
  {
    id: "bpc-tb",
    productIds: ["bpc157", "tb500"],
    price: 119,
    regular: 128,
    note: "The signature recovery stack — localized and systemic repair pathways in one order.",
  },
  {
    id: "cjc-ipa",
    productIds: ["cjcdac", "ipamorelin"],
    price: 199,
    regular: 218,
    note: "The classic GH-axis pairing — GHRH analog plus a selective secretagogue.",
  },
  {
    id: "tesa-igf",
    productIds: ["tesamorelin", "igf1lr3"],
    price: 199,
    regular: 218,
    note: "Pairs a stabilized GHRH analog with a Long R3 IGF-1 analog.",
  },
  {
    id: "ghk-mots",
    productIds: ["ghkcu", "motsc"],
    price: 209,
    regular: 228,
    note: "Cellular repair and mitochondrial research, side by side.",
  },
  {
    id: "ghk-nad",
    productIds: ["ghkcu", "nad"],
    price: 209,
    regular: 228,
    note: "Copper-tripeptide and coenzyme research for cellular longevity.",
  },
  {
    id: "semax-nad",
    productIds: ["semax", "nad"],
    price: 155,
    regular: 168,
    note: "Cognitive-pathway peptide paired with the core cellular-energy coenzyme.",
  },
  {
    id: "pt-mt2",
    productIds: ["pt141", "mt2"],
    price: 125,
    regular: 138,
    note: "Two of our most-requested melanocortin-pathway compounds, together.",
  },
];

export const BIOHENCED_STORE_FAQ = [
  {
    question: "Are these products for human use?",
    answer:
      "No. Every Biohanced Labs compound is sold strictly for laboratory and research use only. They are not drugs, supplements, or intended for human or animal consumption.",
  },
  {
    question: "Do you provide a Certificate of Analysis?",
    answer:
      "Yes — every batch is independently tested by HPLC and mass spectrometry. A COA is available on each product page and in the Lab Results section.",
  },
  {
    question: "How are peptides shipped and stored?",
    answer:
      "Lyophilized powder ships at ambient temperature with cold packs available on request. For long-term stability, store vials at -20°C, desiccated and away from light.",
  },
  {
    question: "How do I reconstitute a vial?",
    answer:
      "Use bacteriostatic water. The exact volume depends on your research protocol and target concentration; a reconstitution guide is included with every research kit.",
  },
  {
    question: "What purity can I expect?",
    answer:
      "All compounds test at ≥99% purity by HPLC. The exact figure for your specific batch is printed on its Certificate of Analysis.",
  },
  {
    question: "What are your shipping and return policies?",
    answer:
      "Orders ship within 1–2 business days with tracking. Unopened vials may be returned within 14 days. Shipping is free on orders over $150.",
  },
] as const;

export const CATALOG_NAV_CATEGORIES: { label: string; href: string; category?: CatalogCategory }[] = [
  { label: "All compounds", href: "/catalog" },
  { label: "Healing & Recovery", href: "/catalog?cat=recovery", category: "recovery" },
  { label: "Growth Hormone", href: "/catalog?cat=gh", category: "gh" },
  { label: "Metabolic & Weight", href: "/catalog?cat=metabolic", category: "metabolic" },
  { label: "Longevity & Cellular", href: "/catalog?cat=longevity", category: "longevity" },
  { label: "Specialty", href: "/catalog?cat=specialty", category: "specialty" },
  { label: "Essentials", href: "/catalog?cat=essentials", category: "essentials" },
];

export function countByCategory(category: CatalogCategory): number {
  return BIOHENCED_CATALOG.filter((p) => p.category === category).length;
}

export function getFeaturedProducts(): CatalogProduct[] {
  return FEATURED_PRODUCT_IDS.map((id) => getCatalogProduct(id)).filter(
    (p): p is CatalogProduct => p !== undefined,
  );
}

export function getProductsByCategory(category: CatalogCategory | "all"): CatalogProduct[] {
  if (category === "all") return BIOHENCED_CATALOG;
  return BIOHENCED_CATALOG.filter((p) => p.category === category);
}

export function getBundlesForProduct(productId: string): CatalogBundle[] {
  return BIOHENCED_BUNDLES.filter((b) => b.productIds.includes(productId));
}

export function productReviewMeta(batch: string) {
  const batchNum = parseInt(batch.replace(/\D/g, ""), 10) || 0;
  const rating = (4.6 + (batchNum % 4) * 0.1).toFixed(1);
  const reviews = 60 + (batchNum % 240);
  return { rating, reviews };
}

