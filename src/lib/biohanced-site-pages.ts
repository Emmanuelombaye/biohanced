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
    | "timeline"
    | "testimonials"
    | "doctor"
    | "medications"
    | "insurance"
    | "faq"
    | "microdose"
    | "contact"
  >;
  calculator?: "bmi" | "bmr" | "calorie" | "protein" | "waistHip";
  hideCta?: boolean;
};

export const SITE_PAGES: Record<string, SitePage> = {
  program: {
    title: "Your body is unique. Your weight care should be, too.",
    lede: "Found is a personalized metabolic care program that listens to what your body needs–and adapts with you over time.",
    extras: ["timeline", "testimonials", "faq"],
    sections: [
      {
        heading: "The 4-step journey",
        paragraphs: [
          "Licensed providers. Online visits. HSA/FSA eligible.",
        ],
      },
      {
        heading: "Step 1 — Your assessment (10–15 minutes)",
        paragraphs: [
          "We’ll ask you questions that help us get to the heart of your health history, what you’ve tried before, and what’s actually realistic for your daily routine.",
        ],
        bullets: [
          "Share your health history and goals",
          "Tell us what’s worked (and what hasn’t)",
          "Choose a plan that works for you",
        ],
      },
      {
        heading: "Step 2 — Provider review (1–2 days)",
        paragraphs: [
          "A board-certified clinician evaluates your assessment–not just for medication eligibility, but to understand what approach is likely to actually work for your metabolism.",
        ],
        bullets: [
          "Medical safety review",
          "Personalized treatment recommendation",
          "A care plan designed for you",
        ],
      },
      {
        heading: "Step 3 — Your personalized medication",
        paragraphs: [
          "Your plan is informed by MetabolicPrint™–our proprietary tool that helps clinicians understand how your body processes food, responds to medication, and regulates weight.",
        ],
        bullets: [
          "Medication, if eligible, shipped directly to you",
          "Nutrition and lifestyle guidance",
          "Support navigating insurance coverage",
        ],
      },
      {
        heading: "Step 4 — Ongoing care & adjustments (monthly)",
        paragraphs: [
          "Your care team monitors your progress, adjusts treatment when needed, and helps you navigate plateaus, side effects, or life getting in the way.",
        ],
        bullets: [
          "Monthly provider check-ins",
          "Prescription adjustments and easy refills",
          "On-demand support available 24/7",
        ],
      },
      {
        heading: "What’s included in your membership",
        paragraphs: ["Medical support, personalization, ongoing care, and fully online access."],
        bullets: [
          "Licensed providers, prescription management, clinical oversight",
          "MetabolicPrint™-based plans and medication + nutrition alignment",
          "Monthly check-ins, easy refills, dose optimization",
          "Secure messaging and no in-office visits",
        ],
      },
    ],
  },
  "plans-and-pricing": {
    title: "Affordable weight loss plans with or without insurance",
    lede: "In-network clinicians for 1 in 3 Americans. 100% online & private.",
    extras: ["medications", "insurance", "testimonials", "doctor", "faq"],
    sections: [
      {
        heading: "Found's GLP-1 Program",
        paragraphs: [
          "Starting at $99/mo with insurance* and $169/mo with cash pay* on 12-month plans paid up-front. Monthly plans start at $199/mo for insurance and $289/mo for cash-pay. Visits for insurance plans may require copays.",
          "Access to board-certified Found clinicians, a personalized care plan with GLP-1s, healthy habits guidance, and Aimee, your AI weight loss concierge.",
        ],
      },
    ],
  },
  reviews: {
    title: "Results you can see, success you can feel",
    lede: "See what members, past and present, are saying about their success.",
    extras: ["testimonials"],
    sections: [
      {
        heading: "With Found I have been able to...",
        paragraphs: [],
        bullets: [
          "support my entire body",
          "foster a positive relationship with food",
          "curb my emotional eating tendencies",
          "prioritize my mood and mental health",
          "shed 40 pounds successfully",
          "stay energized",
          "feel more confident",
          "get my life back",
        ],
      },
    ],
  },
  medication: {
    title: "Wide, affordable medication toolkit",
    lede: "Found-affiliated providers can prescribe a wide range of medications to work with your biology.",
    extras: ["medications"],
    sections: [
      {
        paragraphs: [
          "Some medicines are FDA-approved anti-obesity medications, and others are FDA-approved for other conditions and may be prescribed off-label. Prescriptions are up to a medical provider’s discretion.",
        ],
      },
    ],
  },
  microdosing: {
    title: "GLP-1 Microdose program",
    lede: "A simpler way to start GLP-1s.",
    extras: ["microdose"],
    sections: [
      {
        paragraphs: [
          "Microdosing can be a gentler on-ramp for members who want GLP-1 support with a simpler start. Your clinician decides if it’s right for you.",
        ],
      },
    ],
  },
  insurance: {
    title: "Covered by insurance for 1 in 3 Americans",
    lede: "Copays under $30/visit for most members. Medication cost is separate.",
    extras: ["insurance"],
    sections: [
      {
        paragraphs: [
          "Found partners with many medical insurance carriers across the U.S. Coverage varies by state and plan.",
        ],
      },
    ],
  },
  "medicare-weight-loss": {
    title: "Medicare GLP-1 Bridge Program",
    lede: "Eligible Part D members can access brand-name GLP-1 medications for as little as $50/month.",
    extras: ["doctor"],
    sections: [
      {
        paragraphs: [
          "We handle insurance paperwork and provide ongoing clinician support. This is not a guarantee of coverage. Actual eligibility is determined by the Medicare GLP-1 Bridge program’s criteria.",
        ],
      },
    ],
  },
  about: {
    title: "About Found",
    lede: "Found is a telehealth metabolic care company helping people lose weight with personalized, clinician-led programs.",
    sections: [
      {
        paragraphs: [
          "We combine board-certified clinicians, a broad medication toolkit, and insurance-friendly visits so care can fit real life.",
        ],
      },
    ],
  },
  careers: {
    title: "Careers",
    lede: "Help more people get metabolic care that actually fits their lives.",
    sections: [
      {
        paragraphs: [
          "We’re hiring across clinical, product, and operations teams. Reach out through Contact us to learn about open roles.",
        ],
      },
    ],
  },
  "press-releases": {
    title: "Press",
    lede: "News and announcements from Found Health, Inc.",
    sections: [
      {
        paragraphs: [
          "For media inquiries, use the contact page. Found members have been served nationwide with clinician-guided weight care.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact us",
    lede: "Need help? Our team is here.",
    extras: ["contact"],
    sections: [
      {
        paragraphs: [
          "For member support, visit the Help center. For partnerships, see For business and For health plans.",
        ],
      },
    ],
  },
  business: {
    title: "Found for business",
    lede: "Bring metabolic care to your employees with a program designed for real outcomes.",
    sections: [
      {
        paragraphs: [
          "Found works with employers to offer clinician-led weight care, medication access, and ongoing support.",
        ],
      },
    ],
  },
  "health-plans": {
    title: "Found for health plans",
    lede: "Partner with Found to expand affordable obesity care for your members.",
    sections: [
      {
        paragraphs: [
          "We collaborate with health plans on access, clinical quality, and a wide medication toolkit.",
        ],
      },
    ],
  },
  "resource-center": {
    title: "Resource center",
    lede: "Guides and resources for organizations exploring metabolic care.",
    sections: [
      {
        paragraphs: [
          "Learn how Found supports employers and health plans with online visits, clinician protocols, and insurance-friendly care.",
        ],
      },
    ],
  },
  blog: {
    title: "Blog",
    lede: "Weight care tips from experts and stories from the Found community.",
    sections: [
      {
        paragraphs: [
          "Explore medications, insurance, habits, and what to expect in your first month—then take the assessment when you’re ready.",
        ],
      },
    ],
  },
  tools: {
    title: "Tools",
    lede: "Free calculators to understand BMI, calories, protein, and more.",
    sections: [
      {
        paragraphs: ["These tools are educational and not a substitute for medical advice."],
        links: [
          { label: "BMI Calculator", href: "/tools/bmi-calculator" },
          { label: "BMR Calculator", href: "/tools/bmr-calculator" },
          { label: "Calorie Calculator", href: "/tools/calorie-calculator" },
          { label: "Protein Calculator", href: "/tools/protein-calculator" },
          { label: "Waist-to-hip Calculator", href: "/tools/waist-to-hip-calculator" },
        ],
      },
    ],
  },
  "tools/bmi-calculator": {
    title: "BMI Calculator",
    lede: "Estimate body mass index from height and weight.",
    calculator: "bmi",
    sections: [{ paragraphs: ["BMI is a screening tool. It does not diagnose health on its own."] }],
  },
  "tools/bmr-calculator": {
    title: "BMR Calculator",
    lede: "Estimate basal metabolic rate.",
    calculator: "bmr",
    sections: [{ paragraphs: ["BMR is an estimate of calories burned at rest."] }],
  },
  "tools/calorie-calculator": {
    title: "Calorie Calculator",
    lede: "Estimate daily calorie needs from activity level.",
    calculator: "calorie",
    sections: [{ paragraphs: ["Use this as a starting point, not a prescription."] }],
  },
  "tools/protein-calculator": {
    title: "Protein Calculator",
    lede: "Estimate a daily protein range from body weight.",
    calculator: "protein",
    sections: [{ paragraphs: ["Needs vary with goals, kidney health, and clinician guidance."] }],
  },
  "tools/waist-to-hip-calculator": {
    title: "Waist-to-hip Calculator",
    lede: "Compare waist and hip measurements.",
    calculator: "waistHip",
    sections: [{ paragraphs: ["This ratio is one of several ways to look at body composition."] }],
  },
  "glp1-checker": {
    title: "GLP-1 Checker",
    lede: "See how Found approaches coverage checks for GLP-1 care.",
    extras: ["insurance"],
    sections: [
      {
        paragraphs: [
          "Coverage varies by state and plan. Start with a free insurance check during your assessment.",
        ],
      },
    ],
  },
  disclaimers: {
    title: "Disclaimers",
    lede: "Important safety and marketing information.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "GLP-1s have black box warnings. Prescriptions are up to a medical provider’s discretion. Individual results vary. Found is not affiliated with Novo Nordisk, Eli Lilly, or Currax.",
        ],
      },
    ],
  },
  "terms/terms-and-conditions": {
    title: "Terms of Service",
    lede: "The terms that govern use of the Found website and membership.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "By using this site you agree to these terms, our Privacy Policy, and applicable telehealth consents. Offers are subject to change. Med Kit plans may be excluded from discounts.",
        ],
      },
    ],
  },
  "terms/privacy-policy": {
    title: "Privacy Policy",
    lede: "How Found collects, uses, and shares information.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "We collect information you submit (such as assessment answers and contact details) and technical data such as cookies to operate and improve the service.",
        ],
      },
    ],
  },
  "terms/telehealth-consent": {
    title: "Telehealth Consent",
    lede: "Consent for receiving care via telehealth.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "Telehealth has benefits and limits. Emergency care should go through 911 or the nearest emergency department, not this website.",
        ],
      },
    ],
  },
  "terms/sms-terms": {
    title: "SMS Terms of Service",
    lede: "Rules for Found marketing text messages.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "Consent is not a condition of purchase. Message and data rates may apply. Reply HELP for help or STOP to cancel.",
        ],
      },
    ],
  },
  "terms/payment-and-billing-consent": {
    title: "Payment & Billing Consent",
    lede: "How membership and medication charges work.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "You authorize charges for the plan you select. Insurance copays, if any, are billed according to your plan. Refunds follow the refund policy.",
        ],
      },
    ],
  },
  "terms/offer-terms-v3": {
    title: "Offer terms & refund policy",
    lede: "Promo and refund details for Found memberships.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "Discounts apply to today’s checkout as described in offer details. Med Kit plans are excluded from all discounts. Refunds are handled per the refund policy in these terms.",
        ],
      },
    ],
  },
  "terms/state-privacy-law-addendum": {
    title: "State-Privacy Law Addendum",
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
    lede: "How protected health information may be used and disclosed.",
    hideCta: true,
    sections: [
      {
        paragraphs: [
          "This notice describes how medical information may be used and disclosed and how you can get access to this information.",
        ],
      },
    ],
  },
};

export const MEDICATION_PAGES: Record<string, SitePage> = {
  "compounded-semaglutide": {
    title: "Compounded Semaglutide",
    lede: "A semaglutide option available through Found-affiliated clinicians when appropriate.",
    extras: ["medications"],
    sections: [
      {
        paragraphs: [
          "Compounded medications are not FDA-approved. Your clinician decides if this option fits your health history, goals, and availability.",
        ],
      },
    ],
  },
  "compounded-tirzepatide": {
    title: "Compounded Tirzepatide",
    lede: "A tirzepatide option when clinically appropriate.",
    extras: ["medications"],
    sections: [
      {
        paragraphs: [
          "Compounded medications are not FDA-approved. Eligibility and dosing are up to your medical provider.",
        ],
      },
    ],
  },
  ozempic: {
    title: "Ozempic®",
    lede: "Semaglutide. Brand-name GLP-1 care with clinician support.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Ozempic® is a registered trademark of Novo Nordisk. Rx up to provider discretion."] }],
  },
  wegovy: {
    title: "Wegovy®",
    lede: "Semaglutide indicated for chronic weight management in eligible patients.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Wegovy® is a registered trademark of Novo Nordisk. See full risk information."] }],
  },
  zepbound: {
    title: "Zepbound®",
    lede: "Tirzepatide for chronic weight management in eligible patients.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Zepbound® is a registered trademark of Eli Lilly. Coverage and cash-pay pricing vary."] }],
  },
  mounjaro: {
    title: "Mounjaro®",
    lede: "Tirzepatide. Prescribed when clinically appropriate.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Mounjaro® is a registered trademark of Eli Lilly."] }],
  },
  saxenda: {
    title: "Saxenda®",
    lede: "Liraglutide. Pricing varies.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Saxenda® is a registered trademark of Novo Nordisk."] }],
  },
  foundayo: {
    title: "Foundayo™",
    lede: "Orforglipron option in Found’s toolkit.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Foundayo™ availability depends on clinician judgment and supply."] }],
  },
  victoza: {
    title: "Victoza®",
    lede: "Liraglutide. Pricing varies.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Victoza® is a registered trademark of Novo Nordisk."] }],
  },
  metformin: {
    title: "Metformin",
    lede: "A non-GLP-1 option some clinicians use as part of metabolic care.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Not every member is a candidate. Your provider decides."] }],
  },
  contrave: {
    title: "Contrave®",
    lede: "An FDA-approved anti-obesity medication option.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Contrave® is a registered trademark of Currax Pharmaceuticals, LLC."] }],
  },
  rybelsus: {
    title: "Rybelsus®",
    lede: "Oral semaglutide.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Rybelsus® is a registered trademark of Novo Nordisk."] }],
  },
  trulicity: {
    title: "Trulicity®",
    lede: "Dulaglutide.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Trulicity® is a registered trademark of Eli Lilly."] }],
  },
  topiramate: {
    title: "Topiramate",
    lede: "Sometimes used off-label in weight care plans.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Off-label use is up to the treating clinician."] }],
  },
  zonisamide: {
    title: "Zonisamide",
    lede: "Sometimes used off-label in weight care plans.",
    extras: ["medications"],
    sections: [{ paragraphs: ["Off-label use is up to the treating clinician."] }],
  },
};

export function resolveSitePage(slug: string[]): SitePage | null {
  if (slug[0] === "medication" && slug[1] && MEDICATION_PAGES[slug[1]]) {
    return MEDICATION_PAGES[slug[1]];
  }
  const key = slug.join("/");
  return SITE_PAGES[key] ?? null;
}

export function allStaticSlugs(): { slug: string[] }[] {
  const paths = [
    ...Object.keys(SITE_PAGES).map((key) => key.split("/")),
    ...Object.keys(MEDICATION_PAGES).map((key) => ["medication", key]),
  ];
  return [{ slug: [] }, ...paths.map((slug) => ({ slug }))];
}
