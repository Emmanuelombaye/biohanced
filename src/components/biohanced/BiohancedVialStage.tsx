import { BiohancedImg } from "./BiohancedImg";

const STAGE_HEIGHT = {
  sm: "min-h-[132px] md:min-h-[148px]",
  md: "min-h-[168px] md:min-h-[188px]",
  lg: "min-h-[220px] md:min-h-[260px]",
} as const;

/** Photorealistic studio pedestal — matches client vial mockup lighting */
export function BiohancedVialStage({
  src,
  alt,
  accent = "#4F7BFF",
  size = "md",
  className = "",
}: {
  src: string;
  alt: string;
  accent?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const vialScale =
    size === "sm"
      ? "max-h-[78%] max-w-[52%]"
      : size === "lg"
        ? "max-h-[82%] max-w-[56%]"
        : "max-h-[80%] max-w-[54%]";

  return (
    <div className={`bio-studio-well relative overflow-hidden ${STAGE_HEIGHT[size]} ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(65% 55% at 50% 28%, ${accent}22 0%, transparent 68%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[rgba(210,210,204,0.45)] to-transparent"
        aria-hidden
      />
      <div className="relative flex h-full items-center justify-center px-4 pb-2 pt-4">
        <BiohancedImg
          src={src}
          alt={alt}
          className={`${vialScale} object-contain object-bottom drop-shadow-[0_20px_36px_rgba(10,11,14,0.14)] transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
        />
      </div>
    </div>
  );
}
