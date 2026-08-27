import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** purity = green %, save = green pill, cat = category dot+label, count = cart chip */
  tone?: "purity" | "save" | "cat" | "count";
  /** dot color for tone="cat" (use a --cat-* token) */
  dotColor?: string;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
