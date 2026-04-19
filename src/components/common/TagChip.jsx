import React from "react";

const toneMap = {
  cyan: "border-cyan-400/60 text-cyan-300 bg-cyan-400/10",
  green: "border-emerald-400/60 text-emerald-300 bg-emerald-400/10",
  violet: "border-violet-400/60 text-violet-300 bg-violet-400/10",
  amber: "border-amber-400/60 text-amber-300 bg-amber-400/10",
};

export default function TagChip({ children, tone = "cyan", className = "" }) {
  return (
    <span
      className={`tag-chip ${toneMap[tone] || toneMap.cyan} ${className}`}
    >
      {children}
    </span>
  );
}