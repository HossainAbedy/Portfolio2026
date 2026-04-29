import React from "react";

const toneMap = {
  cyan: "border-cyan-400/40 text-cyan-300 bg-cyan-400/10",
  green: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
  violet: "border-violet-400/40 text-violet-300 bg-violet-400/10",
  amber: "border-amber-400/40 text-amber-300 bg-amber-400/10",
  blue: "border-blue-500/40 text-blue-300 bg-blue-500/10",
  indigo: "border-indigo-400/40 text-indigo-300 bg-indigo-400/10",
  purple: "border-purple-400/40 text-purple-300 bg-purple-400/10",
  pink: "border-pink-400/40 text-pink-300 bg-pink-400/10",
  rose: "border-rose-400/40 text-rose-300 bg-rose-400/10",
  red: "border-red-400/40 text-red-300 bg-red-400/10",
  orange: "border-orange-400/40 text-orange-300 bg-orange-400/10",
  lime: "border-lime-400/40 text-lime-300 bg-lime-400/10",
  teal: "border-teal-500/40 text-teal-300 bg-teal-500/10",
  sky: "border-sky-400/40 text-sky-300 bg-sky-400/10",
  slate: "border-slate-400/40 text-slate-300 bg-slate-400/10",
};

const iconMap = {
  siem: "◉",
  ad: "⌘",
  edr: "◈",
  gpo: "⚙",
  firewall: "🛡",
  compliance: "▲",
  "ips/ids": "☍",      
  waf: "☠",       
  mitre: "⧉",        
};

export default function MiniTagChip({
  children,
  tone = "cyan",
  icon,
  pulse = false,
  className = "",
}) {
  const badge = icon || iconMap[String(children).toLowerCase()];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md border px-1.5 py-1 font-mono text-[9px] leading-none tracking-[0.14em] ${toneMap[tone] || toneMap.cyan} ${className}`}
    >
      {badge && (
        <span className={pulse ? "animate-pulse" : ""}>
          {badge}
        </span>
      )}

      <span>{children}</span>
    </span>
  );
}