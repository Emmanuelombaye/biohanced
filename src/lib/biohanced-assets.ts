/** Every raster/SVG asset under /public/biohanced — single registry for the app */
export const BIOHENCED_ASSETS = {
  favicon: "/biohanced/favicon.png",
  appleTouchIcon: "/biohanced/apple-touch-icon.png",
  hero: {
    poster: "/biohanced/hero/poster.jpg",
    threeVials: "/biohanced/hero/three-vials.png",
    vialsWide: "/biohanced/hero/hero-vials-wide.png",
  },
  products: {
    retatrutide: "/biohanced/products/retatrutide.png",
    cjcdac: "/biohanced/products/cjcdac.png",
    ipamorelin: "/biohanced/products/ipamorelin.png",
    tesamorelin: "/biohanced/products/tesamorelin.png",
    sermorelin: "/biohanced/products/sermorelin.png",
    bpc157: "/biohanced/products/bpc157.png",
    tb500: "/biohanced/products/tb500.png",
    ghkcu: "/biohanced/products/ghkcu.png",
    igf1lr3: "/biohanced/products/igf1lr3.png",
    semax: "/biohanced/products/semax.png",
    epithalon: "/biohanced/products/epithalon.png",
    motsc: "/biohanced/products/motsc.png",
    nad: "/biohanced/products/nad.png",
    pt141: "/biohanced/products/pt141.png",
    mt2: "/biohanced/products/mt2.png",
    aminomq: "/biohanced/products/aminomq.png",
    bacwater: "/biohanced/products/bacwater.png",
  },
  badges: {
    gmpPng: "/biohanced/voltage/logos/badge-gmp.png",
    usaPng: "/biohanced/voltage/logos/badge-usa-real.png",
    gmpIcon: "/biohanced/badges/gmp-icon.jpg",
    usaIcon: "/biohanced/badges/usa-icon.png",
    stamp: "/biohanced/voltage/logos/stamp-on-green.png",
    markReversed: "/biohanced/voltage/logos/logo-reversed-on-dark.png",
  },
  icons: {
    scale: "/biohanced/icons/scale-check.svg",
    phone: "/biohanced/icons/mobile-phone.svg",
    insurance: "/biohanced/icons/insurance.svg",
  },
  fonts: {
    greycliffRegular: "/biohanced/fonts/greycliff-regular.woff",
    greycliffMedium: "/biohanced/fonts/greycliff-medium.woff",
    greycliffSemibold: "/biohanced/fonts/greycliff-semibold.woff",
    quincyRegular: "/biohanced/fonts/quincy-regular.woff",
    quincyItalic: "/biohanced/fonts/quincy-italic.woff",
  },
  uploads: {
    pricingGuide: "/biohanced/uploads/Biohanced_Labs_Pricing_Guide_Public.pdf",
  },
  sections: {
    featured: "/biohanced/sections/featured.png",
    heroStill: "/biohanced/sections/hero-still.png",
    mockups: "/biohanced/sections/mockups.png",
    vialSingle: "/biohanced/sections/vial-single.png",
    detailMedia: "/biohanced/sections/detail-media.png",
    carousel: [
      "/biohanced/sections/carousel/slide_01.png",
      "/biohanced/sections/carousel/slide_02.png",
      "/biohanced/sections/carousel/slide_03.png",
      "/biohanced/sections/carousel/slide_04.png",
      "/biohanced/sections/carousel/slide_05.png",
    ],
  },
} as const;

/** Footer + credential badge row — every badge asset in public/biohanced */
export const FOOTER_BADGE_ASSETS = [
  { src: BIOHENCED_ASSETS.badges.usaPng, alt: "Made in the USA" },
  { src: BIOHENCED_ASSETS.badges.gmpPng, alt: "GMP certified" },
  { src: BIOHENCED_ASSETS.badges.gmpIcon, alt: "GMP certified icon" },
  { src: BIOHENCED_ASSETS.badges.markReversed, alt: "Biohanced Labs mark" },
  { src: BIOHENCED_ASSETS.badges.usaIcon, alt: "Made in the USA icon" },
  { src: BIOHENCED_ASSETS.badges.stamp, alt: "Research-grade quality stamp" },
] as const;

export const ALL_PRODUCT_IMAGE_PATHS = Object.values(BIOHENCED_ASSETS.products);

/** Spotlight vials for about / quality sections */
export const SPOTLIGHT_VIALS = [
  BIOHENCED_ASSETS.products.bpc157,
  BIOHENCED_ASSETS.products.ghkcu,
  BIOHENCED_ASSETS.products.retatrutide,
] as const;
