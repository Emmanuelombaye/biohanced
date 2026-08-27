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
  "hero-white": "bio-btn-primary w-full max-w-[341px] px-8 text-[17px]",
  "hero-ghost":
    "inline-flex min-h-[48px] w-full max-w-[341px] items-center justify-center rounded-[10px] border-2 border-white/80 bg-transparent px-8 text-[17px] font-semibold text-white",
  "nav-login": "rounded-lg px-5 py-2 text-base font-medium text-[#C9CCD2]",
  "nav-cta": "bio-btn-primary px-5 py-2 text-base",
  dark: "bio-btn-primary text-[15px]",
  solid: "bio-btn-outline bg-bio-white text-[15px]",
  outline:
    "inline-flex min-h-[48px] items-center justify-center rounded-[10px] border-2 border-white/80 bg-transparent px-7 text-[15px] font-semibold text-white",
  "solid-dark": "bio-btn-primary text-[15px]",
  "ghost-light": "bio-btn-outline text-[15px]",
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
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
