import * as React from "react";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "horizontal" | "stacked" | "mark";
  /** mark edge length in px; wordmark scales from it */
  size?: number;
  /** true = white wordmark + green LABS (for ink surfaces) */
  onDark?: boolean;
}

/**
 * Brand logo / mark.
 * @startingPoint section="Brand" subtitle="Bolt mark + BIOHANCED LABS lockup" viewport="700x150"
 */
export function Logo(props: LogoProps): JSX.Element;
