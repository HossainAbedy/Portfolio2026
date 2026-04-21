import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TagChip from "../common/TagChip";

export default function ProjectCard({ project, index = 0, onClick }) {
  const Icon = project.icon;

  const gradientMap = {
    cyan: "from-cyan-950",
    violet: "from-violet-950",
    green: "from-emerald-950",
    amber: "from-amber-950",
  };

  const iconColor = {
    cyan: "text-cyan-300",
    violet: "text-violet-300",
    green: "text-emerald-300",
    amber: "text-amber-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flagship-card flex h-full flex-col overflow-hidden rounded-2xl"
    >
      {/* HEADER */}
      <div
        className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${
          gradientMap[project.accent] || "from-slate-900"
        } via-transparent to-transparent p-8`}
      >
        <div className="text-center">
          {Icon && (
            <Icon
              className={`mx-auto mb-4 h-12 w-12 ${
                iconColor[project.accent] || "text-slate-300"
              }`}
            />
          )}
          <p className="font-semibold text-white">{project.subtitle}</p>
        </div>

        <div className="absolute right-4 top-4">
          <TagChip tone={project.accent || "slate"}>
            {(project.accent || "unknown").toUpperCase()}
          </TagChip>
        </div>
      </div>

      {/* BODY */}
      <div className="p-8">
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-6 text-sm text-slate-400">{project.desc}</p>

        {/* TAGS (SAFE) */}
        <div className="mb-6 flex flex-wrap gap-2">
          {(project.tags || []).map((t, i) => (
            <TagChip
              key={`${t}-${i}`}
              tone={["cyan", "green", "violet", "amber", "red"][i % 5]}
            >
              {t}
            </TagChip>
          ))}
        </div>

        {/* BULLETS (SAFE FIX - THIS WAS CRASHING YOUR APP) */}
        <div className="mb-6 space-y-2 text-xs text-slate-500">
          {(project.bullets || []).map((b, i) => (
            <p key={`${b}-${i}`}>• {b}</p>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onClick?.(project)}
          className={`flex items-center gap-2 text-xs font-semibold transition ${
            project.accent === "violet"
              ? "text-violet-300 hover:text-violet-200"
              : project.accent === "green"
              ? "text-emerald-300 hover:text-emerald-200"
              : project.accent === "amber"
              ? "text-amber-300 hover:text-amber-200"
              : "text-cyan-300 hover:text-cyan-200"
          }`}
        >
          View Details <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  );
}