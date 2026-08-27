import React from "react";

/**
 * Home "shop by category" tile — a small gradient mark, then the category
 * name and a count, on a white card that lifts on hover.
 */
export function CategoryTile({ name, count, tile = "var(--grad-mark-soft)", onOpen, ...rest }) {
  return (
    <div
      onClick={onOpen}
      style={{
        cursor: "pointer", background: "var(--bg-surface)",
        border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
        padding: "22px 18px", minHeight: 140, display: "flex", flexDirection: "column",
        justifyContent: "space-between", fontFamily: "var(--font-text)",
        transition: "transform .22s var(--ease-lift), box-shadow .22s ease",
      }}
      {...rest}
    >
      <div style={{ width: 38, height: 38, borderRadius: 11, background: tile, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="20" height="20" viewBox="0 0 100 100"><path d="M57 9 L29 55 L46 55 L43 91 L73 41 L55 41 Z" fill="#fff" /></svg>
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 15, color: "var(--text-body)", lineHeight: 1.2 }}>{name}</div>
        <div style={{ fontSize: 12, color: "var(--steel)", marginTop: 4 }}>{count}</div>
      </div>
    </div>
  );
}
