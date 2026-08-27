import Link from "next/link";

type BiohancedButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?:
    | "hero-white"
    | "hero-ghost"
    | "nav-login"
    | "nav-cta"
    | "dark"
    | "solid"
    | "outline"
    | "solid-dark"
    | "ghost-light";
  className?: string;
};

const variants: Record<NonNullable<BiohancedButtonProps["variant"]>, string> = {
  "hero-white":
    "w-[341px] max-w-full rounded-full bg-bio-white px-[42px] py-4 text-[17px] font-medium text-bio-sage-500",
  "hero-ghost":
    "w-[341px] max-w-full rounded-full border-2 border-bio-white bg-transparent px-[42px] py-4 text-[17px] font-medium text-bio-white",
  "nav-login": "rounded-full px-5 py-2 text-base font-medium text-bio-neutral-500",
  "nav-cta":
    "rounded-full bg-bio-neutral-500 px-5 py-2 text-base font-semibold text-bio-white",
  dark: "rounded-full bg-bio-sage-500 px-7 py-3.5 text-[15px] font-medium text-bio-white",
  solid:
    "rounded-full bg-bio-white px-7 py-3.5 text-[15px] font-medium text-bio-neutral-500",
  outline:
    "rounded-full border border-bio-white/80 bg-transparent px-7 py-3.5 text-[15px] font-medium text-bio-white",
  "solid-dark":
    "rounded-full bg-bio-sage-500 px-7 py-3.5 text-[15px] font-medium text-bio-white",
  "ghost-light":
    "rounded-full bg-bio-white px-7 py-3.5 text-[15px] font-medium text-bio-sage-500",
};

export function BiohancedButton({
  href = "/",
  children,
  variant = "dark",
  className = "",
}: BiohancedButtonProps) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`inline-flex items-center justify-center transition-opacity hover:opacity-90 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
