import React from "react";

/** The bolt SVG used inside every mark. */
function Bolt({ size, fill }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M57 9 L29 55 L46 55 L43 91 L73 41 L55 41 Z" fill={fill} />
    </svg>
  );
}

/**
 * Biohanced Labs logo.
 * variant "horizontal" (default) = mark + BIOHANCED/LABS lockup,
 * "stacked" = centered, "mark" = app-icon only.
 * onDark switches the wordmark to white with a green LABS.
 */
export function Logo({ variant = "horizontal", size = 34, onDark = true, ...rest }) {
  const markStyle = {
    width: size, height: size,
    borderRadius: Math.round(size * 0.29),
    background: "var(--grad-mark)",
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  };
  const mark = <div style={markStyle}><Bolt size={Math.round(size * 0.52)} fill="#fff" /></div>;
  if (variant === "mark") return <div {...rest}>{mark}</div>;

  const wordColor = onDark ? "#fff" : "var(--ink-3)";
  const labsColor = onDark ? "var(--volt-green)" : "var(--slate)";
  const bhSize = Math.round(size * 0.47);
  const word = (
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.92 }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: bhSize, letterSpacing: "-.02em", color: wordColor }}>BIOHANCED</div>
      <div style={{ fontFamily: "var(--font-text)", fontWeight: 600, fontSize: Math.round(bhSize * 0.4), letterSpacing: ".5em", color: labsColor, marginTop: 6, paddingLeft: 3 }}>LABS</div>
    </div>
  );
  const dir = variant === "stacked" ? "column" : "row";
  return (
    <div style={{ display: "flex", flexDirection: dir, alignItems: "center", gap: variant === "stacked" ? 18 : 14 }} {...rest}>
      {mark}
      {word}
    </div>
  );
}
