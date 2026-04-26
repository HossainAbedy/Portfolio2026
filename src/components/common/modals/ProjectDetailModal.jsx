// src/components/modals/ProjectDetailModal.jsx
import React, { useMemo, useState } from "react";
import ModalTabs from "../ModalTabs";
import TagChip from "../TagChip";
import ImageCarousel from "../ImageCarousel";

export default function ProjectDetailModal({ project }) {
  const [activeTab, setActiveTab] = useState("overview");

  const images =
    Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];

  const tabs = useMemo(() => {
    const base = [
      { id: "overview", label: "Overview" },
      { id: "tech", label: "Tech" },
      { id: "impact", label: "Impact" },
      { id: "details", label: "Details" },
    ];

    if (images.length > 0) {
      base.splice(1, 0, { id: "screens", label: "Screens" });
    }

    return base;
  }, [images.length]);

  const accent = project.accent || "cyan";

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-300/80">
          FLAGSHIP PROJECT
        </p>
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>
      </div>

      <ModalTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        accent={accent}
      />

      {activeTab === "overview" && (
        <div className="space-y-4">
          <p className="text-sm leading-6 text-slate-300">{project.summary || project.desc}</p>

          {project.highlights?.length > 0 && (
            <div>
              <h4 className="mb-2 text-sm font-semibold text-cyan-300">
                Key highlights
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {activeTab === "screens" && images.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
          <ImageCarousel images={images} />
        </div>
      )}

      {activeTab === "tech" && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {(project.stack || []).map((item) => (
              <TagChip key={item} tone={accent}>
                {item}
              </TagChip>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h4 className="mb-2 text-sm font-semibold text-white">
              Technology used
            </h4>
            <p className="text-sm leading-6 text-slate-400">
              {(project.tags || []).join(" · ")}
            </p>
          </div>
        </div>
      )}

      {activeTab === "impact" && (
        <div>
          <h4 className="mb-2 text-sm font-semibold text-emerald-300">
            Operational impact
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {(project.impact || []).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "details" && (
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Type</p>
            <p className="mt-1 text-sm text-white">{project.type || "Project"}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Risk</p>
            <p className="mt-1 text-sm text-white">{project.risk || "Medium"}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Coverage</p>
            <p className="mt-1 text-sm text-white">{project.coverage || "-"}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Status</p>
            <p className="mt-1 text-sm text-emerald-300">{project.status || "Operational"}</p>
          </div>
        </div>
      )}
    </div>
  );
}