// src/components/common/ModalTabs.jsx
import React from "react";
export default function ModalTabs({ tabs = [], activeTab, setActiveTab, accent = "cyan" }) {
  const activeClass =
    accent === "violet"
      ? "border-violet-300 text-violet-300 bg-violet-300/10"
      : accent === "green"
      ? "border-emerald-300 text-emerald-300 bg-emerald-300/10"
      : accent === "amber"
      ? "border-amber-300 text-amber-300 bg-amber-300/10"
      : accent === "blue"
      ? "border-sky-300 text-sky-300 bg-sky-300/10"
      : accent === "indigo"
      ? "border-indigo-300 text-indigo-300 bg-indigo-300/10"
      : accent === "orange"
      ? "border-orange-300 text-orange-300 bg-orange-300/10"
      : accent === "red"
      ? "border-red-300 text-red-300 bg-red-300/10"
      : "border-cyan-300 text-cyan-300 bg-cyan-300/10";

  return (
    <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const isHighlighted = tab.highlight && !isActive;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`relative rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              isActive
                ? activeClass
                : isHighlighted
                ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300 animate-pulse-subtle"
                : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              {tab.label}
              {isHighlighted && tab.badge && (
                <span className="rounded-full border border-cyan-400/50 bg-cyan-400/20 px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-wider text-cyan-300">
                  {tab.badge}
                </span>
              )}
            </span>

            {isHighlighted && (
              <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
