import React from "react";
import GlassCard from "../common/GlassCard";

export default function TimelineItem({ item, index, last }) {
  const [role, org, time, desc] = item;

  const dotClass =
    index === 0
      ? "bg-cyan-300"
      : index === 1
      ? "border-2 border-emerald-300"
      : index === 2
      ? "border-2 border-violet-300"
      : "border-2 border-amber-300";

  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className={`h-4 w-4 rounded-full ${dotClass}`} />
        {!last ? (
          <div
            className="w-0.5 flex-1 bg-gradient-to-b from-white/20 to-white/5"
            style={{ minHeight: 120 }}
          />
        ) : null}
      </div>

      <GlassCard className="mb-2 flex-1 p-6">
        <div className="mb-2 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{role}</h3>
            <p className="text-sm text-slate-400">{org}</p>
          </div>
          <span className="whitespace-nowrap font-mono text-xs text-slate-600">
            {time}
          </span>
        </div>
        <p className="text-sm text-slate-500">{desc}</p>
      </GlassCard>
    </div>
  );
}