import { BiohancedImg } from "./BiohancedImg";

const SIZE_MAP = {
  sm: {
    aspect: "aspect-[4/5] min-h-[180px]",
    vial: "max-h-[84%] max-w-[64%] sm:max-h-[76%] sm:max-w-[52%]",
  },
  md: {
    aspect: "aspect-[4/5] min-h-[200px]",
    vial: "max-h-[86%] max-w-[66%] sm:max-h-[78%] sm:max-w-[54%]",
  },
  lg: {
    aspect: "aspect-[3/4] min-h-[240px] md:min-h-[280px]",
    vial: "max-h-[88%] max-w-[68%] sm:max-h-[80%] sm:max-w-[56%]",
  },
} as const;

/** Studio pedestal — fixed aspect, larger vials on mobile for readable labels */
export function BiohancedVialStage({
  src,
  alt,
  accent = "#4F7BFF",
  size = "md",
  className = "",
  fill = false,
  label,
  doseLabel,
}: {
  src: string;
  alt: string;
  accent?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  fill?: boolean;
  /** Product name chip on image — helps identify vial on small screens */
  label?: string;
  doseLabel?: string;
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
      <div className="absolute inset-0 flex items-end justify-center pb-[10%] pt-[6%] sm:pb-[6%] sm:pt-[8%]">
        <BiohancedImg
          src={src}
          alt={alt}
          className={`bio-vial-image ${spec.vial} object-contain object-bottom drop-shadow-[0_18px_32px_rgba(10,11,14,0.14)]`}
        />
      </div>
      {label ? (
        <div
          className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-2 rounded-[10px] border border-bio-neutral-200 bg-white/95 px-3 py-2 shadow-[0_4px_12px_rgba(10,11,14,0.08)] backdrop-blur-sm"
        >
          <span className="truncate font-[Archivo,sans-serif] text-[13px] font-black text-bio-ink">
            {label}
          </span>
          {doseLabel ? (
            <span className="shrink-0 text-[11px] font-semibold text-bio-neutral-400">{doseLabel}</span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
