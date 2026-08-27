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
    "w-[341px] max-w-full rounded-[10px] bg-bio-volt px-[42px] py-4 text-[17px] font-semibold text-bio-ink",
  "hero-ghost":
    "w-[341px] max-w-full rounded-[10px] border border-white/80 bg-transparent px-[42px] py-4 text-[17px] font-medium text-bio-white",
  "nav-login": "rounded-lg px-5 py-2 text-base font-medium text-[#C9CCD2]",
  "nav-cta":
    "rounded-[10px] bg-bio-volt px-5 py-2 text-base font-semibold text-bio-ink",
  dark: "rounded-[10px] bg-bio-volt px-7 py-3.5 text-[15px] font-semibold text-bio-ink",
  solid:
    "rounded-[10px] bg-bio-white px-7 py-3.5 text-[15px] font-medium text-bio-ink",
  outline:
    "rounded-[10px] border border-white/80 bg-transparent px-7 py-3.5 text-[15px] font-medium text-bio-white",
  "solid-dark":
    "rounded-[10px] bg-bio-volt px-7 py-3.5 text-[15px] font-semibold text-bio-ink",
  "ghost-light":
    "rounded-[10px] border border-bio-neutral-200 bg-bio-white px-7 py-3.5 text-[15px] font-medium text-bio-ink",
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
      className={`inline-flex items-center justify-center transition-[filter,transform] duration-200 hover:brightness-[1.03] active:scale-[0.98] ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
