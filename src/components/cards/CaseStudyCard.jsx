import React from "react";
import { motion } from "framer-motion";
import TagChip from "../common/TagChip";

export default function CaseStudyCard({ study, index = 0, onClick }) {
  const metricClass =
    study.accent === "violet"
      ? "text-violet-300"
      : study.accent === "green"
      ? "text-emerald-300"
      : study.accent === "amber"
      ? "text-amber-300"
      : study.accent === "blue"
      ? "text-sky-300"
      : study.accent === "indigo"
      ? "text-indigo-300"
      : study.accent === "orange"
      ? "text-orange-300"
      : study.accent === "red"
      ? "text-red-300"
      : "text-cyan-300";

  const bgClass =
    study.accent === "violet"
      ? "from-violet-950"
      : study.accent === "green"
      ? "from-emerald-950"
      : study.accent === "amber"
      ? "from-amber-950"
      : study.accent === "blue"
      ? "from-sky-950"
      : study.accent === "indigo"
      ? "from-indigo-950"
      : study.accent === "orange"
      ? "from-orange-950"
      : study.accent === "red"
      ? "from-red-950"
      : "from-cyan-950";

  const bullets = study.bullets || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="premium-card rounded-xl p-6"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="flex-1 text-lg font-semibold text-white">{study.title}</h3>
        <TagChip tone={study.accent}>{study.tag}</TagChip>
      </div>

      <p className="mb-4 text-sm text-slate-400">{study.desc}</p>

      <div className={`mb-4 rounded-lg bg-gradient-to-r ${bgClass} to-transparent p-4`}>
        <div className="font-mono text-xs text-slate-500">{study.metricLabel}</div>
        <div className={`text-2xl font-bold ${metricClass}`}>{study.metric}</div>
      </div>

      {bullets.length > 0 && (
        <div className="mb-4 space-y-2 text-xs text-slate-500">
          {bullets.slice(0, 3).map((b) => (
            <p key={b}>• {b}</p>
          ))}
        </div>
      )}

      <button
        onClick={() => onClick?.(study)}
        className={`font-mono text-xs font-semibold ${metricClass}`}
      >
        Read Full Study →
      </button>
    </motion.div>
  );
}