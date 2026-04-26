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

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              isActive
                ? activeClass
                : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}