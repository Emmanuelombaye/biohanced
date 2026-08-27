/** 1 / 2 / 3 vial tier prices from client Store DC */
export const VARIANT_LABELS = ["1 vial", "2 vials", "3 vials"] as const;

export const PRICE_TIERS: Record<string, [number, number, number]> = {
  retatrutide: [249, 469, 669],
  cjcdac: [139, 259, 369],
  ipamorelin: [79, 149, 209],
  tesamorelin: [139, 259, 369],
  sermorelin: [49, 89, 129],
  bpc157: [59, 109, 159],
  tb500: [69, 129, 185],
  ghkcu: [129, 239, 339],
  igf1lr3: [79, 149, 215],
  semax: [69, 129, 185],
  epithalon: [59, 109, 159],
  motsc: [99, 189, 269],
  nad: [99, 189, 269],
  pt141: [74, 139, 199],
  mt2: [64, 119, 169],
  aminomq: [79, 149, 215],
  bacwater: [12.99, 23.99, 32.99],
};

export type ProductVariant = {
  label: string;
  price: number;
  vialCount: number;
};

export function getVariantsForProduct(productId: string): ProductVariant[] {
  const tiers = PRICE_TIERS[productId];
  if (!tiers) return [];
  return tiers.map((price, index) => ({
    label: VARIANT_LABELS[index],
    price,
    vialCount: index + 1,
  }));
}

export function variantSavePercent(unitPrice: number, tierPrice: number, vialCount: number): number {
  const compare = unitPrice * vialCount;
  if (compare <= 0) return 0;
  return Math.round((1 - tierPrice / compare) * 100);
}

export function shippingCost(subtotal: number): number {
  if (subtotal <= 0) return 0;
  return subtotal < 150 ? 12 : 0;
}

export function generateOrderNumber(): string {
  const num = Math.floor(100000 + Math.random() * 900000);
  return `BH${num}`;
}
