import React from "react";

/**
 * Small status/credential badge.
 * tone "purity" = plain green text (e.g. "99.7%"),
 * "save" = rounded pill with dot (e.g. "Save 12%"),
 * "cat" = category dot + uppercase label,
 * "count" = the green cart-count chip.
 */
export function Badge({ children, tone = "save", dotColor, ...rest }) {
  if (tone === "purity") {
    return (
      <span style={{ fontFamily: "var(--font-text)", fontSize: 12, color: "var(--success)" }} {...rest}>
        {children}
      </span>
    );
  }
  if (tone === "count") {
    return (
      <span style={{ minWidth: 20, height: 20, padding: "0 6px", borderRadius: 10, background: "var(--volt-green)", color: "var(--ink)", fontSize: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-text)" }} {...rest}>
        {children}
      </span>
    );
  }
  if (tone === "cat") {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-text)" }} {...rest}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: dotColor || "var(--volt-blue)" }} />
        <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--steel)" }}>{children}</span>
      </span>
    );
  }
  // save
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--success-bg)", border: "1px solid var(--success-line)", padding: "5px 12px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-text)", fontSize: 12, fontWeight: 700, color: "var(--success-ink)" }} {...rest}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success)" }} />
      {children}
    </span>
  );
}
