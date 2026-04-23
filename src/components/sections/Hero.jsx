import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../common/GlassCard";
import TagChip from "../common/TagChip";
import Terminal from "../common/Terminal";

export default function Hero({ site }) {
  const scrollToCaseStudies = () => {
    const section = document.getElementById("cases");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 pt-10 pb-4 md:px-8 md:pt-12 md:pb-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-2"
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <span className="inline-block h-px w-4 bg-cyan-300" />
            SECURITY · AUTOMATION · SYSTEMS · APPLICATIONS · INFRA
          </div>

          <h1 className="mb-3 max-w-4xl bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
            {site?.name || "Hossain Abedy"}
          </h1>

          <p className="mb-2 text-xl font-semibold text-slate-300 md:text-2xl">
            {site?.role || "Cybersecurity Engineer | AI-Assisted Security | SIEM & Automation"}
          </p>

          <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            {site?.subtitle ||
              "I detect, analyze, and fix real-world security issues across systems, networks, and applications."}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            <TagChip tone="red">SOC</TagChip>
            <TagChip tone="cyan">AppSec</TagChip>
            <TagChip tone="green">Automation</TagChip>
            <TagChip tone="amber">Network Security</TagChip>
            <TagChip tone="violet">Software Engineering</TagChip>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToCaseStudies}
              className="rounded-lg bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,240,255,0.28)]"
            >
              View Case Studies
            </button>

            <a
              href="#contact"
              className="rounded-lg border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-300/10"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="w-full"
        >
          <GlassCard className="glow-pulse w-full overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-cyan-950 to-transparent px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="font-mono text-[11px] text-slate-500">
                  SOC_MONITOR_v4.2
                </span>
              </div>
              <span className="font-mono text-[11px] text-cyan-300">LIVE</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 font-mono text-[11px]">
              <span className="text-slate-500">
                Status: <span className="text-emerald-400">OPERATIONAL</span>
              </span>
              <span className="text-slate-600">
                Threats: <span className="text-amber-400">7</span> | Critical:{" "}
                <span className="text-red-400">2</span>
              </span>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-white/10 px-4 py-2.5">
              <TagChip tone="cyan">SIEM</TagChip>
              <TagChip tone="violet">EDR</TagChip>
              <TagChip tone="amber">SOAR</TagChip>
              <TagChip tone="green">IDS/IPS</TagChip>
            </div>

            <div className="px-3 py-3">
              <Terminal />
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}