import React from "react";

/**
 * Biohanced Labs button.
 * Variants map to the store's real CTAs: the Voltage-green primary,
 * the dark "add to cart" solid, and the outline-on-dark secondary.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  as = "button",
  ...rest
}) {
  const sizes = {
    sm: { padding: "9px 16px", fontSize: 13 },
    md: { padding: "14px 26px", fontSize: 15 },
    lg: { padding: "16px 30px", fontSize: 16 },
  };
  const variants = {
    primary: { background: "var(--volt-green)", color: "var(--ink)", border: "1px solid transparent" },
    dark:    { background: "var(--ink)", color: "#fff", border: "1px solid transparent" },
    outline: { background: "transparent", color: "#fff", border: "1px solid var(--line-dark-2)" },
    ghost:   { background: "transparent", color: "var(--ink-3)", border: "1px solid transparent" },
  };
  const style = {
    fontFamily: "var(--font-text)",
    fontWeight: 600,
    borderRadius: "var(--r-sm)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: full ? "100%" : "auto",
    transition: "transform .22s var(--ease-lift), filter .2s ease, background-color .2s ease, border-color .2s ease",
    ...sizes[size],
    ...variants[variant],
  };
  const Tag = as;
  return (
    <Tag style={style} {...rest}>
      {children}
    </Tag>
  );
}
