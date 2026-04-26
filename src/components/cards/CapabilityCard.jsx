import React from "react";
import { motion } from "framer-motion";
import TagChip from "../common/TagChip";
import GlassCard from "../common/GlassCard";

export default function CapabilityCard({ item, index = 0 }) {
  const Icon = item.icon;

  const iconColor =
    item.color === "green"
      ? "text-emerald-300"
      : item.color === "violet"
      ? "text-violet-300"
      : item.color === "amber"
      ? "text-amber-300"
      : item.color === "blue"
      ? "text-sky-300"
      : item.color === "red"
      ? "text-red-300"
      : item.color === "teal"
      ? "text-teal-300"
      : "text-cyan-300";

  const tags = (item.tags || []).slice(0, 4);
  const bullets = (item.bullets || []).slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="h-full"
    >
      <GlassCard className="group relative flex h-[390px] flex-col overflow-hidden p-8 transition-all duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">
        {item.metric && (
          <div className="absolute right-4 top-4 opacity-0 transition group-hover:opacity-100">
            <div className="rounded-md border border-white/10 bg-black/60 px-2 py-1 text-xs font-mono text-cyan-300">
              {item.metric}
            </div>
          </div>
        )}

        <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/5">
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>

        <div className="min-h-[72px]">
          <h3 className="line-clamp-2 text-lg font-semibold text-white">
            {item.title}
          </h3>
        </div>

        <ul className="mt-4 min-h-[124px] space-y-2 overflow-hidden text-sm text-slate-400">
          {bullets.map((b) => (
            <li key={b} className="line-clamp-1">
              • {b}
            </li>
          ))}
        </ul>

        <div className="mt-auto min-h-[58px] pt-4">
          <div className="flex flex-wrap gap-2 pb-1">
            {tags.map((t) => (
              <TagChip key={t} tone={item.color}>
                {t}
              </TagChip>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/5 opacity-0 transition group-hover:opacity-100" />
      </GlassCard>
    </motion.div>
  );
}