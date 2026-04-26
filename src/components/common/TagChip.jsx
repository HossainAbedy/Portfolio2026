import React from "react";

const toneMap = {
  cyan: "border-cyan-400/60 text-cyan-200 bg-cyan-400/10",
  green: "border-emerald-500/60 text-emerald-400 bg-emerald-500/10",
  violet: "border-violet-400/60 text-violet-300 bg-violet-400/10",
  amber: "border-amber-400/60 text-amber-300 bg-amber-400/10",
  blue: "border-blue-600/60 text-blue-400 bg-blue-600/10",
  indigo: "border-indigo-400/60 text-indigo-300 bg-indigo-400/10",
  purple: "border-purple-400/60 text-purple-300 bg-purple-400/10",
  pink: "border-pink-400/60 text-pink-300 bg-pink-400/10",
  rose: "border-rose-400/60 text-rose-300 bg-rose-400/10",
  red: "border-red-400/60 text-red-300 bg-red-400/10",
  orange: "border-orange-400/60 text-orange-300 bg-orange-400/10",
  lime: "border-lime-400/60 text-lime-300 bg-lime-400/10",
  teal: "border-teal-500/60 text-teal-200 bg-teal-500/10",
  sky: "border-sky-400/60 text-sky-300 bg-sky-400/10",
  slate: "border-slate-400/60 text-slate-300 bg-slate-400/10",
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