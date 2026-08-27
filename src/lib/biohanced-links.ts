/** Biohanced Labs — on-site routes from client store spec */
export const BIOHENCED_LINKS = {
  home: "/",
  catalog: "/catalog",
  allMedications: "/catalog",
  browseCatalog: "/catalog",
  viewCoas: "/lab-results",
  labResults: "/lab-results",
  manufacturing: "/manufacturing",
  faqPage: "/faq",
  cart: "/cart",
  checkout: "/checkout",
  contact: "/contact",
  contactPage: "/contact",
  getStarted: "/contact",
  about: "/about",
  disclaimers: "/disclaimers",
  email: "mailto:research@biohancedlabs.com",
  terms: "/terms/terms-and-conditions",
  refund: "/terms/offer-terms-v3",
  privacy: "/terms/privacy-policy",
  telehealth: "/terms/telehealth-consent",
  sms: "/terms/sms-terms",
  billing: "/terms/payment-and-billing-consent",
  statePrivacy: "/terms/state-privacy-law-addendum",
  npp: "/terms/privacy-practices-notice",
  riskInfo: "/disclaimers",
  offerTerms: "/terms/terms-and-conditions",
  pricingGuide: "/biohanced/uploads/Biohanced_Labs_Pricing_Guide_Public.pdf",
  orderConfirm: "/order/confirm",
} as const;

export function labResultPath(id: string) {
  return `/lab-results/${id}`;
}

export function medicationPath(id: string) {
  return `/catalog/${id}`;
}
