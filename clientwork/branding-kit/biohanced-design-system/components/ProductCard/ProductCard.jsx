import React from "react";
import { Badge } from "../Badge/Badge.jsx";

/**
 * Catalog product card. Dark image panel on top (real product PNG or the
 * gradient vial fallback), then category, name, sizes, from-price + purity.
 */
export function ProductCard({
  name, category, categoryColor = "var(--cat-recovery)",
  sizes, fromPrice, purity, image, onOpen, ...rest
}) {
  return (
    <div
      onClick={onOpen}
      style={{
        cursor: "pointer", background: "var(--bg-surface)",
        border: "1px solid var(--border-card)", borderRadius: "var(--r-lg)",
        overflow: "hidden", fontFamily: "var(--font-text)",
        transition: "transform .22s var(--ease-lift), box-shadow .22s ease",
      }}
      {...rest}
    >
      <div style={{ height: 160, background: "linear-gradient(150deg,#0b0d12,#16203a)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {image
          ? <img src={image} alt={name} style={{ maxHeight: "86%", maxWidth: "70%", objectFit: "contain" }} />
          : <div style={{ width: 50, height: 108, borderRadius: 8, background: "var(--ink)", border: "1px solid var(--line-dark-2)" }} />}
      </div>
      <div style={{ padding: 18 }}>
        <Badge tone="cat" dotColor={categoryColor}>{category}</Badge>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 20, letterSpacing: "-.01em", color: "var(--text-body)", marginTop: 8 }}>{name}</div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>{sizes}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, color: "var(--text-body)" }}>{fromPrice}</div>
          <Badge tone="purity">{purity}</Badge>
        </div>
      </div>
    </div>
  );
}
