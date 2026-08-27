import Link from "next/link";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  /** cream | white | ink | mint */
  tone?: "cream" | "white" | "ink" | "mint";
  id?: string;
  bordered?: boolean;
};

const TONE_CLASS = {
  cream: "bg-bio-neutral-100",
  white: "bg-bio-white",
  ink: "bg-bio-ink text-white",
  mint: "bg-[#EEF7EE]",
} as const;

/** Consistent vertical rhythm — mature editorial sections */
export function BiohancedSection({
  children,
  className = "",
  tone = "cream",
  id,
  bordered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${TONE_CLASS[tone]} ${bordered ? "border-y border-bio-neutral-200" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export function BiohancedSectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const textMuted = light ? "text-[#9AA0A8]" : "text-bio-neutral-400";
  const textTitle = light ? "text-white" : "text-bio-ink";
  const eyebrowColor = light ? "text-[#B6FF3A]" : "text-[#2E6BFF]";

  return (
    <div
      className={`max-w-2xl ${alignClass} ${className} ${align === "center" ? "flex flex-col items-center" : ""}`}
    >
      {eyebrow ? (
        <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`bio-headline mt-3 text-[30px] leading-[1.12] md:text-[38px] ${textTitle}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-[17px] leading-relaxed ${textMuted}`}>{description}</p>
      ) : null}
      {action ? (
        <Link
          href={action.href}
          className={`mt-5 inline-flex text-[15px] font-semibold ${light ? "text-[#B6FF3A]" : "text-[#2E6BFF]"} hover:underline`}
        >
          {action.label} →
        </Link>
      ) : null}
    </div>
  );
}
