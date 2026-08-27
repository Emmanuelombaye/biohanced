import { BiohancedImg } from "./BiohancedImg";

const SIZE_MAP = {
  sm: { aspect: "aspect-[4/5]", vial: "max-h-[76%] max-w-[50%]" },
  md: { aspect: "aspect-[4/5]", vial: "max-h-[78%] max-w-[52%]" },
  lg: { aspect: "aspect-[3/4]", vial: "max-h-[80%] max-w-[54%]" },
} as const;

/** Studio pedestal — fixed aspect, consistent vial scale */
export function BiohancedVialStage({
  src,
  alt,
  accent = "#4F7BFF",
  size = "md",
  className = "",
  fill = false,
}: {
  src: string;
  alt: string;
  accent?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  fill?: boolean;
}) {
  const spec = SIZE_MAP[size];

  return (
    <div
      className={`bio-studio-well relative overflow-hidden w-full ${fill ? "h-full min-h-[280px]" : spec.aspect} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(70% 60% at 50% 24%, ${accent}18 0%, transparent 70%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-[12%] bottom-[8%] h-[22%] rounded-full bg-[rgba(10,11,14,0.06)] blur-2xl"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-end justify-center pb-[6%] pt-[8%]">
        <BiohancedImg
          src={src}
          alt={alt}
          className={`${spec.vial} object-contain object-bottom drop-shadow-[0_18px_32px_rgba(10,11,14,0.12)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]`}
        />
      </div>
    </div>
  );
}
