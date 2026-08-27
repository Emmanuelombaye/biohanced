import * as React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = Voltage-green CTA · dark = solid ink · outline = on dark hero · ghost = nav */
  variant?: "primary" | "dark" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  /** stretch to container width */
  full?: boolean;
  /** render as a different element (e.g. "a") */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * Primary action button.
 * @startingPoint section="Core" subtitle="Voltage-green CTA + dark/outline variants" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
