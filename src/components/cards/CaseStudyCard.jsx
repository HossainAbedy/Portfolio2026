import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TagChip from "../common/TagChip";

export default function CaseStudyCard({ study, index = 0, onClick }) {
  const accent = study.accent || "cyan";

  const styleMap = {
    cyan: {
      text: "text-cyan-300",
      glow: "shadow-cyan-500/10",
      gradient: "from-cyan-950",
      chip: "cyan",
    },
    violet: {
      text: "text-violet-300",
      glow: "shadow-violet-500/10",
      gradient: "from-violet-950",
      chip: "violet",
    },
    green: {
      text: "text-emerald-300",
      glow: "shadow-emerald-500/10",
      gradient: "from-emerald-950",
      chip: "green",
    },
    amber: {
      text: "text-amber-300",
      glow: "shadow-amber-500/10",
      gradient: "from-amber-950",
      chip: "amber",
    },
    blue: {
      text: "text-sky-300",
      glow: "shadow-sky-500/10",
      gradient: "from-sky-950",
      chip: "blue",
    },
    indigo: {
      text: "text-indigo-300",
      glow: "shadow-indigo-500/10",
      gradient: "from-indigo-950",
      chip: "indigo",
    },
    orange: {
      text: "text-orange-300",
      glow: "shadow-orange-500/10",
      gradient: "from-orange-950",
      chip: "orange",
    },
    red: {
      text: "text-red-300",
      glow: "shadow-red-500/10",
      gradient: "from-red-950",
      chip: "red",
    },
  };

  const style = styleMap[accent] || styleMap.cyan;
  const bullets = (study.bullets || []).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className={`group relative flex h-[420px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#06080f] shadow-lg transition-all duration-300 hover:border-white/20 ${style.glow}`}
    >
      <div
        className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r ${style.gradient} via-transparent to-transparent`}
      />

      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.gradient} via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3 p-6 pb-3">
          <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-white">
            {study.title}
          </h3>

          <TagChip tone={style.chip}>{study.tag || "CASE"}</TagChip>
        </div>

        <div className="px-6">
          <p className="line-clamp-3 min-h-[60px] text-sm text-slate-400">
            {study.desc}
          </p>
        </div>

        <div className="px-6 pt-4">
          <div className={`rounded-lg bg-gradient-to-r ${style.gradient} to-transparent p-4`}>
            <div className="font-mono text-xs text-slate-500">
              {study.metricLabel}
            </div>
            <div className={`text-2xl font-bold ${style.text}`}>
              {study.metric}
            </div>
          </div>
        </div>

        <div className="flex-1 px-6 pt-4">
          <div className="space-y-2 text-xs text-slate-500">
            {bullets.map((b, i) => (
              <p key={i} className="line-clamp-1">
                • {b}
              </p>
            ))}
          </div>
        </div>

        <div className="px-6 pb-5 pt-4">
          <button
            onClick={() => onClick?.(study)}
            className={`flex items-center gap-2 text-xs font-semibold transition ${style.text} hover:opacity-80`}
          >
            Read Full Study
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}