import { allMedicationSlugs } from "./biohanced-catalog";

export type SitePage = {
  title: string;
  lede: string;
  sections: {
    heading?: string;
    paragraphs: string[];
    bullets?: string[];
    links?: { label: string; href: string }[];
  }[];
  extras?: Array<
    | "doctor"
    | "medicare"
    | "faq"
    | "labResults"
    | "cart"
    | "contact"
    | "checkout"
    | "mfgTimeline"
    | "orderConfirm"
    | "aboutSpotlight"
  >;
  hideCta?: boolean;
};

/** Client store + legal pages only — no Found clone routes */
export const SITE_PAGES: Record<string, SitePage> = {
  about: {
    title: "About Biohanced Labs",
    lede: "US-synthesized research-grade peptides with third-party verification on every batch.",
    sections: [
      {
        paragraphs: [
          "Biohanced Labs supplies laboratory researchers with lyophilized peptides synthesized in the United States. Every release is documented with HPLC and mass spectrometry — purity you can verify, delivery you can count on.",
        ],
        bullets: [
          "17 catalog compounds across recovery, metabolic, longevity, and specialty research",
          "Certificate of Analysis on every batch",
          "Cold-chain shipping · Mon–Fri 9am–6pm ET support",
        ],
        links: [
          { label: "Download pricing guide (PDF)", href: "/biohanced/uploads/Biohanced_Labs_Pricing_Guide_Public.pdf" },
          { label: "View full catalog", href: "/catalog" },
        ],
      },
    ],
    extras: ["aboutSpotlight"],
  },
  contact: {
    title: "Contact us",
    lede: "Questions about a compound or your order? We reply within one business day.",
    extras: ["contact"],
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "Bulk and institutional inquiries welcome. All orders relate to laboratory research use only.",
          "Email: research@biohancedlabs.com · Mon–Fri · 9am–6pm ET",
        ],
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    lede: "Research use, COAs, shipping, storage, and purity — documented for every batch.",
    extras: ["faq"],
    hideCta: true,
    sections: [],
  },
  manufacturing: {
    title: "From lab to your research in 12 steps",
    lede: "US-synthesized, HPLC-purified, and third-party tested — manufacturing and packaging in the USA.",
    extras: ["mfgTimeline", "medicare", "doctor"],
    sections: [
      {
        paragraphs: [
          "≥99% purity by HPLC, identity confirmed by mass spec. ISO 17025 third-party testing. Every batch ships with a Certificate of Analysis and cold-chain handling.",
        ],
        bullets: [
          "Synthesis → HPLC purification → mass-spec identity",
          "Endotoxin screening · lyophilization · nitrogen-sealed vials",
          "-80°C storage until release · Made in USA",
        ],
      },
    ],
  },
  "lab-results": {
    title: "Lab Results",
    lede: "Searchable batch documentation — HPLC and mass spectrometry on every release.",
    extras: ["labResults"],
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "Each compound includes purity (HPLC), identity (mass spec), and batch ID. Request full COA PDFs via research@biohancedlabs.com.",
        ],
      },
    ],
  },
  cart: {
    title: "Cart",
    lede: "Review your research order before checkout.",
    extras: ["cart"],
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "To place an order, contact our team with compound names, quantities, and institutional details.",
        ],
      },
    ],
  },
  checkout: {
    title: "Checkout",
    lede: "Complete your research order.",
    extras: ["checkout"],
    hideCta: true,
    sections: [],
  },
  "order/confirm": {
    title: "Order confirmed",
    lede: "Your research order has been placed.",
    extras: ["orderConfirm"],
    hideCta: true,
    sections: [],
  },
  disclaimers: {
    title: "Disclaimers & research use",
    lede: "For research use only. Not for human consumption.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "Products are sold strictly for laboratory and research use only (RUO). They are not drugs, supplements, or intended for human or animal consumption. Not intended to diagnose, treat, cure, or prevent any disease.",
          "Purchasers must be 21+ licensed professionals or qualified researchers and comply with applicable laws. Biohanced Labs is not a compounding pharmacy under 503A/503B. California Prop 65 warning applies where required.",
          "Jurisdiction limits may apply (including NY, MA, CT). Importers are responsible for customs compliance. CSA and anti-doping regulations apply to purchasers.",
        ],
      },
    ],
  },
  "terms/terms-and-conditions": {
    title: "Terms of Service",
    lede: "Terms governing use of the Biohanced Labs website and orders.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "By using this site you agree to these terms and our Privacy Policy. Products are for research use only. Prices, availability, and shipping terms may change.",
        ],
      },
    ],
  },
  "terms/privacy-policy": {
    title: "Privacy Policy",
    lede: "How Biohanced Labs collects, uses, and shares information.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "We collect information you submit (contact forms, order inquiries) and technical data such as cookies to operate the site. We do not sell personal information.",
        ],
      },
    ],
  },
  "terms/telehealth-consent": {
    title: "Telehealth Consent",
    lede: "Not applicable to research peptide orders.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "Biohanced Labs supplies research materials only. This site does not provide medical care or telehealth services.",
        ],
      },
    ],
  },
  "terms/sms-terms": {
    title: "SMS Terms",
    lede: "Marketing SMS terms, if opted in.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "Message and data rates may apply. Reply HELP for help or STOP to cancel. Consent is not a condition of purchase.",
        ],
      },
    ],
  },
  "terms/payment-and-billing-consent": {
    title: "Payment & Billing",
    lede: "How orders and payments are processed.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "Payment terms are confirmed per order. Unopened vials may be returned within 14 days per our refund policy.",
        ],
      },
    ],
  },
  "terms/offer-terms-v3": {
    title: "Refund policy",
    lede: "Returns and refunds for research orders.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "Unopened vials may be returned within 14 days. Shipping is $12 on orders under $150; free on orders $150+. Dispatch within 1–2 business days.",
        ],
      },
    ],
  },
  "terms/state-privacy-law-addendum": {
    title: "State Privacy Law Addendum",
    lede: "Additional rights under state privacy laws.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "Depending on where you live, you may have rights to access, delete, or opt out of certain sharing of personal information.",
        ],
      },
    ],
  },
  "terms/privacy-practices-notice": {
    title: "Notice of Privacy Practices",
    lede: "How information may be used and disclosed.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "This notice describes how information submitted through this website may be used in connection with research orders and support.",
        ],
      },
    ],
  },
};

/** Legacy Found routes → client routes */
export const LEGACY_REDIRECTS: Record<string, string> = {
  program: "/",
  "plans-and-pricing": "/catalog",
  insurance: "/faq",
  reviews: "/",
  microdosing: "/catalog",
  "medicare-weight-loss": "/manufacturing",
  business: "/contact",
  "health-plans": "/contact",
  "resource-center": "/contact",
  blog: "/",
  careers: "/contact",
  "press-releases": "/contact",
  "glp1-checker": "/faq",
  tools: "/",
  medication: "/catalog",
};

export function resolveSitePage(slug: string[]): SitePage | null {
  const key = slug.join("/");
  return SITE_PAGES[key] ?? null;
}

export function legacyRedirect(slug: string[]): string | null {
  const key = slug.join("/");
  if (LEGACY_REDIRECTS[key]) return LEGACY_REDIRECTS[key];
  if (slug[0] === "tools") return "/";
  if (slug[0] === "medication") {
    return slug.length === 1 ? "/catalog" : `/catalog/${slug[1]}`;
  }
  return null;
}

export function allStaticSlugs(): { slug: string[] }[] {
  const paths = Object.keys(SITE_PAGES).map((key) => key.split("/"));
  const catalog = allMedicationSlugs().map((id) => ["catalog", id]);
  const coa = allMedicationSlugs().map((id) => ["lab-results", id]);
  return [
    { slug: [] },
    ...paths.map((slug) => ({ slug })),
    ...catalog.map((slug) => ({ slug })),
    ...coa.map((slug) => ({ slug })),
  ];
}
