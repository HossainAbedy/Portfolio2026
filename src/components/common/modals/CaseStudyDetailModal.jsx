// src/components/modals/CaseStudyDetailModal.jsx
import React, { useState } from "react";
import ModalTabs from "../ModalTabs";
import TagChip from "../TagChip";
import ImageCarousel from "../ImageCarousel";

export default function CaseStudyDetailModal({ study }) {
  const [activeTab, setActiveTab] = useState("summary");
  const accent = study.accent || "cyan";

  const accentMap = {
    cyan: "text-cyan-300",
    violet: "text-violet-300",
    green: "text-emerald-300",
    amber: "text-amber-300",
    blue: "text-sky-300",
    indigo: "text-indigo-300",
    orange: "text-orange-300",
    red: "text-red-300",
  };

  const style = accentMap[accent] || accentMap.cyan;

  const images =
    Array.isArray(study.images) && study.images.length > 0
      ? study.images
      : study.image
      ? [study.image]
      : [];

  const tabs = [
    { id: "summary", label: "Summary" },
    { id: "approach", label: "Approach" },
    { id: "metrics", label: "Metrics" },
    { id: "findings", label: "Findings" },
  ];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-300/80">
          CASE STUDY
        </p>
        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{study.desc}</p>
      </div>

      {/* ✅ RESTORED IMAGE CAROUSEL */}
      {images.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
          <ImageCarousel images={images} />
        </div>
      )}

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        <TagChip tone={accent}>{study.tag || "CASE"}</TagChip>
        {(study.tags || []).map((tag) => (
          <TagChip key={tag} tone="slate">
            {tag}
          </TagChip>
        ))}
      </div>

      {/* TABS */}
      <ModalTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        accent={accent}
      />

      {/* TAB CONTENT */}
      {activeTab === "summary" && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm leading-6 text-slate-300">
            {study.summary || study.desc}
          </p>
        </div>
      )}

      {activeTab === "approach" && (
        <div className="space-y-3">
          <p className="text-sm text-slate-400">
            Methodology and execution breakdown.
          </p>

          <ul className="space-y-2 text-sm text-slate-400">
            {(study.bullets || []).map((item) => (
              <li key={item} className="flex gap-2">
                <span className={style}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "metrics" && (
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Metric</p>
            <p className={`mt-1 text-2xl font-bold ${style}`}>
              {study.metric}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Context</p>
            <p className="mt-1 text-sm text-slate-300">
              {study.metricLabel}
            </p>
          </div>
        </div>
      )}

      {activeTab === "findings" && (
        <div>
          <h4 className={`mb-2 text-sm font-semibold ${style}`}>
            Key findings
          </h4>

          <ul className="space-y-2 text-sm text-slate-400">
            {(study.highlights || []).map((item) => (
              <li key={item} className="flex gap-2">
                <span className={style}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}