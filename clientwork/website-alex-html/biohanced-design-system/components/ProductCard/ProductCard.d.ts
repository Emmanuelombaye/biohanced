import * as React from "react";

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  category: string;
  /** a --cat-* token for the category dot */
  categoryColor?: string;
  /** e.g. "5mg · 10mg" */
  sizes: string;
  /** e.g. "From $59" */
  fromPrice: string;
  /** e.g. "99.7%" */
  purity: string;
  /** product image URL; omit for the gradient vial fallback */
  image?: string;
  onOpen?: () => void;
}

/**
 * Catalog product card.
 * @startingPoint section="Commerce" subtitle="Dark image panel + name, price, purity" viewport="320x340"
 */
export function ProductCard(props: ProductCardProps): JSX.Element;
