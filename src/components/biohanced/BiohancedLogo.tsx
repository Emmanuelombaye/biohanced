import { BiohancedVoltageLogo } from "./BiohancedVoltageLogo";

type BiohancedLogoProps = {
  className?: string;
  size?: number;
};

/** Legacy export — renders the Biohanced Labs Voltage lockup */
export function BiohancedLogo({ className = "", size = 34 }: BiohancedLogoProps) {
  return <BiohancedVoltageLogo className={className} size={size} />;
}
