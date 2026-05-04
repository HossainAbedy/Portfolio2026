import React, { useMemo, useState } from "react";
import ModalTabs from "../ModalTabs";
import TagChip from "../TagChip";
import ImageCarousel from "../ImageCarousel";

const accentClasses = {
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/10",
    bullet: "text-cyan-400",
  },
  violet: {
    text: "text-violet-300",
    border: "border-violet-400/20",
    bg: "bg-violet-400/10",
    bullet: "text-violet-400",
  },
  green: {
    text: "text-emerald-300",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/10",
    bullet: "text-emerald-400",
  },
  amber: {
    text: "text-amber-300",
    border: "border-amber-400/20",
    bg: "bg-amber-400/10",
    bullet: "text-amber-400",
  },
  blue: {
    text: "text-sky-300",
    border: "border-sky-400/20",
    bg: "bg-sky-400/10",
    bullet: "text-sky-400",
  },
  indigo: {
    text: "text-indigo-300",
    border: "border-indigo-400/20",
    bg: "bg-indigo-400/10",
    bullet: "text-indigo-400",
  },
  orange: {
    text: "text-orange-300",
    border: "border-orange-400/20",
    bg: "bg-orange-400/10",
    bullet: "text-orange-400",
  },
  red: {
    text: "text-red-300",
    border: "border-red-400/20",
    bg: "bg-red-400/10",
    bullet: "text-red-400",
  },
  slate: {
    text: "text-slate-300",
    border: "border-slate-400/20",
    bg: "bg-slate-400/10",
    bullet: "text-slate-400",
  },
};

function SectionCard({ title, children, tone = "cyan" }) {
  const theme = accentClasses[tone] || accentClasses.cyan;

  return (
    <div className={`rounded-xl border ${theme.border} ${theme.bg} p-4`}>
      <h4 className={`mb-3 text-sm font-semibold ${theme.text}`}>{title}</h4>
      {children}
    </div>
  );
}

function BulletList({ items, tone = "cyan" }) {
  const theme = accentClasses[tone] || accentClasses.cyan;

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <ul className="space-y-2 text-sm text-slate-400">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className={theme.bullet}>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyDetailModal({ study }) {
  const [activeTab, setActiveTab] = useState("overview");

  const accent = study.accent || "cyan";
  const theme = accentClasses[accent] || accentClasses.cyan;

  const images =
    Array.isArray(study.images) && study.images.length > 0
      ? study.images
      : study.image
      ? [study.image]
      : [];

  const tabs = useMemo(() => {
    const base = [
      { id: "overview", label: "Overview" },
      { id: "method", label: "Method" },
      { id: "evidence", label: "Evidence" },
      { id: "outcomes", label: "Outcomes" },
      { id: "metrics", label: "Metrics" },
      { id: "details", label: "Details" },
    ];

    if (images.length > 0) {
      base.splice(2, 0, { id: "gallery", label: "Gallery" });
    }

    return base;
  }, [images.length]);

  const contextText =
    study.context ||
    study.problem ||
    study.challenge ||
    study.desc ||
    "Case study summary unavailable.";

  const methodItems =
    study.methodology ||
    study.approach ||
    study.pipeline ||
    study.bullets ||
    [];

  const outcomeItems =
    study.outcomes ||
    study.impact ||
    study.findings ||
    study.highlights ||
    [];

  const evidenceItems =
    study.evidence ||
    study.artifacts ||
    study.artifact ||
    study.outputs ||
    [];

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-300/80">
          CASE STUDY
        </p>
        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-400">
          {study.desc}
        </p>
      </div>

      {images.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
          {/* <ImageCarousel images={images} /> */}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <TagChip tone={accent}>{study.tag || "CASE"}</TagChip>
        {(study.tags || []).map((tag) => (
          <TagChip key={tag} tone="slate">
            {tag}
          </TagChip>
        ))}
      </div>

      <ModalTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        accent={accent}
      />

      {activeTab === "overview" && (
        <div className="space-y-4">
          <SectionCard title="Context" tone={accent}>
            <p className="text-sm leading-6 text-slate-300">{contextText}</p>
          </SectionCard>

          {study.specificChallenge && (
            <SectionCard title="Specific challenge" tone={accent}>
              <p className="text-sm leading-6 text-slate-300">
                {study.specificChallenge}
              </p>
            </SectionCard>
          )}

          {study.summary && (
            <SectionCard title="Executive summary" tone={accent}>
              <p className="text-sm leading-6 text-slate-300">
                {study.summary}
              </p>
            </SectionCard>
          )}
        </div>
      )}

      {activeTab === "method" && (
        <div className="space-y-4">
          <SectionCard title="Approach" tone={accent}>
            <p className="mb-3 text-sm text-slate-400">
              The work was structured to improve visibility, reduce noise, and support operational decision-making.
            </p>
            <BulletList items={methodItems} tone={accent} />
          </SectionCard>

          {study.pipeline?.length > 0 && (
            <SectionCard title="Workflow" tone={accent}>
              <div className="space-y-3">
                {study.pipeline.map((step, index) => (
                  <div
                    key={`${step.title}-${index}`}
                    className="rounded-lg border border-white/10 bg-black/20 p-3"
                  >
                    <p className="text-xs font-mono tracking-[0.25em] text-slate-500">
                      STEP {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}
        </div>
      )}

      {activeTab === "gallery" && images.length > 0 && (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
          <ImageCarousel images={images} />
        </div>
      )}

      {activeTab === "evidence" && (
        <div className="space-y-4">
          <SectionCard title="Evidence and artifacts" tone={accent}>
            {evidenceItems.length > 0 ? (
              <BulletList items={evidenceItems} tone={accent} />
            ) : (
              <p className="text-sm text-slate-400">
                Evidence artifacts can be added here, such as dashboards, logs, screenshots, exports, screenshots of policy review, or audit outputs.
              </p>
            )}
          </SectionCard>

          {study.visualization?.length > 0 && (
            <SectionCard title="Visualization" tone={accent}>
              <BulletList items={study.visualization} tone={accent} />
            </SectionCard>
          )}
        </div>
      )}

      {activeTab === "outcomes" && (
        <div className="space-y-4">
          <SectionCard title="Outcomes" tone="emerald">
            <BulletList items={outcomeItems} tone="emerald" />
          </SectionCard>

          {study.relatedProjects?.length > 0 && (
            <SectionCard title="Related work" tone="emerald">
              <BulletList items={study.relatedProjects} tone="emerald" />
            </SectionCard>
          )}
        </div>
      )}

      {activeTab === "metrics" && (
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Metric</p>
            <p className={`mt-1 text-2xl font-bold ${theme.text}`}>
              {study.metric || "N/A"}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Context</p>
            <p className="mt-1 text-sm text-slate-300">
              {study.metricLabel || "Operational impact"}
            </p>
          </div>

          {study.metrics?.length > 0 && (
            <div className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="mb-2 text-xs font-mono text-slate-500">
                Additional signals
              </p>
              <BulletList items={study.metrics} tone={accent} />
            </div>
          )}
        </div>
      )}

      {activeTab === "details" && (
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Case type</p>
            <p className="mt-1 text-sm text-white">{study.tag || "Case Study"}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Scope</p>
            <p className="mt-1 text-sm text-white">{study.scope || study.coverage || "-"}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Focus</p>
            <p className="mt-1 text-sm text-white">{study.focus || study.type || "-"}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-mono text-slate-500">Status</p>
            <p className="mt-1 text-sm text-emerald-300">{study.status || "Completed"}</p>
          </div>
        </div>
      )}
    </div>
  );
}