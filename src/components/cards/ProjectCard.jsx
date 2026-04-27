import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TagChip from "../common/TagChip";

export default function ProjectCard({ project, index = 0, onClick }) {
  const Icon = project.icon;
  const accent = project.accent || "cyan";

  const gradientMap = {
    cyan: "from-cyan-950",
    green: "from-emerald-950",
    violet: "from-violet-950",
    amber: "from-amber-950",
    red: "from-red-950",
    blue: "from-blue-950",
    indigo: "from-indigo-950",
    orange: "from-orange-950",
    pink: "from-pink-950",
    rose: "from-rose-950",
    lime: "from-lime-950",
    teal: "from-teal-950",
    sky: "from-sky-950",
    slate: "from-slate-950",
  };

  const textMap = {
    cyan: "text-cyan-300",
    green: "text-emerald-300",
    violet: "text-violet-300",
    amber: "text-amber-300",
    red: "text-red-300",
    blue: "text-blue-300",
    indigo: "text-indigo-300",
    orange: "text-orange-300",
    pink: "text-pink-300",
    rose: "text-rose-300",
    lime: "text-lime-300",
    teal: "text-teal-300",
    sky: "text-sky-300",
    slate: "text-slate-300",
  };

  const glowMap = {
    cyan: "shadow-cyan-500/10",
    green: "shadow-emerald-500/10",
    violet: "shadow-violet-500/10",
    amber: "shadow-amber-500/10",
    red: "shadow-red-500/10",
    blue: "shadow-blue-500/10",
    indigo: "shadow-indigo-500/10",
    orange: "shadow-orange-500/10",
    pink: "shadow-pink-500/10",
    rose: "shadow-rose-500/10",
    lime: "shadow-lime-500/10",
    teal: "shadow-teal-500/10",
    sky: "shadow-sky-500/10",
    slate: "shadow-slate-500/10",
  };

  const chipAccent = textMap[accent] || "text-cyan-300";
  const tags = (project.tags || []).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`group flex h-[450px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-white/20 ${glowMap[accent] || glowMap.cyan}`}
    >
      <div
        className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r ${gradientMap[accent] || gradientMap.cyan} via-transparent to-transparent`}
      />

      <div
        className={`relative flex h-28 items-center justify-between bg-gradient-to-br ${
          gradientMap[accent] || gradientMap.cyan
        } via-transparent to-transparent p-4`}
      >
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${chipAccent}`} />
          <span className="font-mono text-[10px] text-slate-500">ACTIVE</span>
        </div>

        <TagChip tone={accent}>
          {(project.accent || "module").toUpperCase()}
        </TagChip>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          {Icon && <Icon className={`h-7 w-7 ${chipAccent}`} />}

          <div className="min-w-0">
            <h3 className="line-clamp-1 text-sm font-semibold text-white">
              {project.title}
            </h3>
            <p className="line-clamp-1 text-xs text-slate-500">
              {project.subtitle}
            </p>
          </div>
        </div>

        <div className="my-4 h-px bg-white/10" />

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-lg border border-white/10 p-3">
            <p className="text-slate-500">Type</p>
            <p className="font-mono text-slate-300">
              {project.type || "Security Tool"}
            </p>
          </div>

          <div className="rounded-lg border border-white/10 p-3">
            <p className="text-slate-500">Risk</p>
            <p className={`font-mono ${chipAccent}`}>
              {project.risk || "Medium"}
            </p>
          </div>

          <div className="rounded-lg border border-white/10 p-3">
            <p className="text-slate-500">Coverage</p>
            <p className="font-mono text-slate-300">
              {project.coverage || "Enterprise"}
            </p>
          </div>

          <div className="rounded-lg border border-white/10 p-3">
            <p className="text-slate-500">Status</p>
            <p className="font-mono text-emerald-300">
              {project.status || "Operational"}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <TagChip
              key={`${t}-${i}`}
              tone={["cyan", "green", "violet", "amber", "red", "blue", "indigo", "orange"][i % 8]}
            >
              {t}
            </TagChip>
          ))}
        </div>

        <p className="mt-4 line-clamp-2 text-xs text-slate-500">
          {project.desc}
        </p>

        <div className="mt-auto pt-4">
          <button
            onClick={() => onClick?.(project)}
            className={`flex items-center gap-2 text-xs font-semibold transition ${chipAccent} hover:opacity-80`}
          >
            Inspect Module
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}