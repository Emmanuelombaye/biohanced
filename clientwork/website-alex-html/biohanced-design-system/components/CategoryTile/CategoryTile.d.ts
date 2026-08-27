import * as React from "react";

export interface CategoryTileProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** e.g. "8 products" */
  count: string;
  /** gradient/color for the mark tile (a --cat gradient or --grad-mark-soft) */
  tile?: string;
  onOpen?: () => void;
}

export function CategoryTile(props: CategoryTileProps): JSX.Element;
