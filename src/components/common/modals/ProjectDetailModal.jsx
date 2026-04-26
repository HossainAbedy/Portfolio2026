import React, { useMemo, useState } from "react";
import ModalTabs from "../ModalTabs";
import TagChip from "../TagChip";
import ImageCarousel from "../ImageCarousel";

function SectionBlock({ title, children, tone = "cyan" }) {
  if (!children) return null;

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <h4 className={`mb-3 text-sm font-semibold text-${tone}-300`}>
        {title}
      </h4>
      {children}
    </div>
  );
}

function renderList(items, bulletTone = "cyan") {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <ul className="space-y-2 text-sm text-slate-400">
      {items.map((item) => (
        <li key={typeof item === "string" ? item : item.title} className="flex gap-2">
          <span className={`text-${bulletTone}-400`}>•</span>
          <span>
            {typeof item === "string" ? (
              item
            ) : (
              <>
                <span className="font-medium text-slate-200">{item.title}</span>
                {item.desc ? <span className="text-slate-400"> — {item.desc}</span> : null}
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

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
      { id: "process", label: "Process" },
      { id: "tech", label: "Tech" },
      { id: "impact", label: "Impact" },
      { id: "details", label: "Details" },
    ];

    if (images.length > 0) {
      base.splice(2, 0, { id: "screens", label: "Screens" });
    }

    return base;
  }, [images.length]);

  const accent = project.accent || "cyan";

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-300/80">
           PROJECT
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
          <p className="text-sm leading-6 text-slate-300">
            {project.summary || project.desc}
          </p>

          {project.objective && (
            <SectionBlock title="Objective" tone={accent}>
              <p className="text-sm leading-6 text-slate-400">{project.objective}</p>
            </SectionBlock>
          )}

          {project.highlights?.length > 0 && (
            <SectionBlock title="Key highlights" tone={accent}>
              {renderList(project.highlights, accent)}
            </SectionBlock>
          )}

          {project.relatedProjects?.length > 0 && (
            <SectionBlock title="Connected work" tone={accent}>
              {renderList(project.relatedProjects, accent)}
            </SectionBlock>
          )}
        </div>
      )}

      {activeTab === "process" && (
        <div className="space-y-4">
          {project.pipeline?.length > 0 && (
            <SectionBlock title="Workflow pipeline" tone={accent}>
              <div className="space-y-3">
                {project.pipeline.map((step, idx) => (
                  <div key={`${step.title}-${idx}`} className="rounded-lg border border-white/10 bg-black/20 p-3">
                    <p className="text-xs font-mono tracking-[0.25em] text-slate-500">
                      STEP {String(idx + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </SectionBlock>
          )}

          {project.discovery && (
            <SectionBlock title="Bulk discovery" tone={accent}>
              <div className="space-y-3 text-sm text-slate-400">
                {project.discovery.script && (
                  <p>
                    <span className="text-slate-200">Script:</span> {project.discovery.script}
                  </p>
                )}
                {project.discovery.method && (
                  <p>
                    <span className="text-slate-200">Method:</span> {project.discovery.method}
                  </p>
                )}
                {project.discovery.outputs?.length > 0 && renderList(project.discovery.outputs, accent)}
              </div>
            </SectionBlock>
          )}

          {project.deepScan && (
            <SectionBlock title="Branch deep scan" tone={accent}>
              <div className="space-y-3 text-sm text-slate-400">
                {project.deepScan.script && (
                  <p>
                    <span className="text-slate-200">Script:</span> {project.deepScan.script}
                  </p>
                )}
                {project.deepScan.columns?.length > 0 && (
                  <div>
                    <p className="mb-2 text-slate-200">Captured fields</p>
                    <div className="flex flex-wrap gap-2">
                      {project.deepScan.columns.map((col) => (
                        <TagChip key={col} tone={accent}>
                          {col}
                        </TagChip>
                      ))}
                    </div>
                  </div>
                )}
                {project.deepScan.outputs?.length > 0 && renderList(project.deepScan.outputs, accent)}
              </div>
            </SectionBlock>
          )}

          {project.riskEngine && (
            <SectionBlock title="Risk analysis and remediation" tone={accent}>
              <div className="space-y-3 text-sm text-slate-400">
                {project.riskEngine.inputs?.length > 0 && (
                  <div>
                    <p className="mb-2 text-slate-200">Risk inputs</p>
                    <div className="flex flex-wrap gap-2">
                      {project.riskEngine.inputs.map((item) => (
                        <TagChip key={item} tone={accent}>
                          {item}
                        </TagChip>
                      ))}
                    </div>
                  </div>
                )}

                {project.riskEngine.mapping?.length > 0 && (
                  <div>
                    <p className="mb-2 text-slate-200">MITRE mapping</p>
                    {renderList(project.riskEngine.mapping, accent)}
                  </div>
                )}

                {project.riskEngine.remediation?.length > 0 && (
                  <div>
                    <p className="mb-2 text-slate-200">Remediation guidance</p>
                    {renderList(project.riskEngine.remediation, accent)}
                  </div>
                )}
              </div>
            </SectionBlock>
          )}

          {project.visualization?.length > 0 && (
            <SectionBlock title="Visualization layers" tone={accent}>
              {renderList(project.visualization, accent)}
            </SectionBlock>
          )}

          {project.auditUse?.length > 0 && (
            <SectionBlock title="Audit and print use" tone={accent}>
              {renderList(project.auditUse, accent)}
            </SectionBlock>
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
        <div className="space-y-4">
          {project.impact?.length > 0 && (
            <SectionBlock title="Operational impact" tone="emerald">
              <ul className="space-y-2 text-sm text-slate-400">
                {project.impact.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SectionBlock>
          )}

          {project.metrics?.length > 0 && (
            <SectionBlock title="Performance signals" tone="emerald">
              {renderList(project.metrics, "emerald")}
            </SectionBlock>
          )}
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