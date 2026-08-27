type BiohancedVoltageLogoProps = {
  className?: string;
  variant?: "horizontal" | "mark";
  size?: number;
};

function Bolt({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden>
      <path d="M57 9 L29 55 L46 55 L43 91 L73 41 L55 41 Z" fill="currentColor" />
    </svg>
  );
}

/** Biohanced Labs Voltage lockup from clientwork branding kit */
export function BiohancedVoltageLogo({
  className = "",
  variant = "horizontal",
  size = 40,
}: BiohancedVoltageLogoProps) {
  const markSize = size;
  const markRadius = Math.round(markSize * 0.29);

  const mark = (
    <div
      className="flex shrink-0 items-center justify-center text-white shadow-[0_8px_24px_rgba(79,123,255,0.35)]"
      style={{
        width: markSize,
        height: markSize,
        borderRadius: markRadius,
        background: "linear-gradient(145deg, #4F7BFF 0%, #8F74F5 48%, #B6EE6C 100%)",
      }}
    >
      <Bolt size={Math.round(markSize * 0.52)} />
    </div>
  );

  if (variant === "mark") {
    return <div className={className}>{mark}</div>;
  }

  const bhSize = Math.round(size * 0.47);

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {mark}
      <div className="flex flex-col leading-[0.92]">
        <span
          className="font-[Archivo,sans-serif] font-black tracking-[-0.02em] text-white"
          style={{ fontSize: bhSize }}
        >
          BIOHANCED
        </span>
        <span
          className="mt-1.5 pl-0.5 font-[Space_Grotesk,sans-serif] font-semibold tracking-[0.5em] text-[#B6FF3A]"
          style={{ fontSize: Math.round(bhSize * 0.4) }}
        >
          LABS
        </span>
      </div>
    </div>
  );
}
