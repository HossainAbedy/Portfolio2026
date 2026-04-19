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
      : "text-cyan-300";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <GlassCard className="p-8">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
        <ul className="mb-6 space-y-2 text-sm text-slate-400">
          {item.bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <TagChip key={t} tone={item.color}>
              {t}
            </TagChip>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}