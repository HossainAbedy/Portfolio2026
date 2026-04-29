import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../common/GlassCard";
import TagChip from "../common/TagChip";
import MiniTagChip from "../common/MiniTagChip";
import Terminal from "../common/Terminal";

function ProgressBar({ label, value, tone = "bg-emerald-400" }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500">
          {label}
        </span>
        <span className="font-mono text-[10px] text-slate-400">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full ${tone}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function Hero({ site }) {
  const scrollToCaseStudies = () => {
    const section = document.getElementById("cases");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const section = document.getElementById("flagship");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const headline = site?.name || "Hossain Abedy";
  const role =
    site?.role || "Cybersecurity & Infrastructure Engineer";
  const subtitle =
    site?.subtitle ||
    "I secure banking infrastructure through SIEM, Active Directory, Fortinet operations, endpoint hardening, and automation at scale.";

  return (
    <section className="px-6 pt-10 pb-6 md:px-8 md:pt-12 md:pb-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-2"
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-slate-500">
            <span className="inline-block h-px w-4 bg-cyan-300" />
            BANKING SECURITY · ACTIVE DIRECTORY · SIEM · FORTINET · AUTOMATION
          </div>

          <h1 className="mb-3 max-w-4xl bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
            {headline}
          </h1>

          <p className="mb-3 max-w-3xl text-xl font-semibold text-slate-200 md:text-2xl">
            {role}
          </p>

          <p className="mb-5 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
            {subtitle}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            <TagChip tone="cyan">Wazuh SIEM</TagChip>
            <TagChip tone="violet">FortiGate</TagChip>
            <TagChip tone="green">FortiAnalyzer</TagChip>
            <TagChip tone="amber">Active Directory</TagChip>
            <TagChip tone="red">GPO Hardening</TagChip>
            <TagChip tone="blue">PowerShell Automation</TagChip>
            <TagChip tone="slate">Fullstack Development</TagChip>
          </div>

          <div className="mb-5 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="font-mono text-[11px] tracking-[0.2em] text-slate-500">
                SCALE
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                125+ Branches
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="font-mono text-[11px] tracking-[0.2em] text-slate-500">
                FOCUS
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Security Operations
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="font-mono text-[11px] tracking-[0.2em] text-slate-500">
                STRENGTH
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Infrastructure Automation
              </p>
            </div>
          </div>

          <div className="mb-5 max-w-3xl rounded-xl border border-cyan-300/15 bg-cyan-300/5 p-4">
            <p className="text-sm leading-6 text-slate-300">
              Supporting enterprise banking operations through endpoint hardening,
              SIEM tuning, firewall review, domain migration, and audit-ready
              automation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToCaseStudies}
              className="rounded-lg bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,240,255,0.28)]"
            >
              View Case Studies
            </button>

                <button
              onClick={scrollToProjects}
              className="rounded-lg border border-violet-300/40 px-5 py-3 text-sm font-semibold text-violet-300 transition hover:bg-violet-300/10"
            >
              View Projects
            </button>

            <a
              href={site?.linkedin || "#contact"}
              target={site?.linkedin ? "_blank" : undefined}
              rel={site?.linkedin ? "noreferrer" : undefined}
              className="rounded-lg border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-300/10"
            >
              LinkedIn
            </a>

            <button
              onClick={scrollToContact}
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/5"
            >
              Contact
            </button>
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
                  ENTERPRISE SECURITY PANEL
                </span>
              </div>
              <span className="font-mono text-[11px] text-cyan-300">
                OPERATIONAL
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 border-b border-white/10 p-2">
              <div className="rounded-lg border border-white/10 bg-black/20 px-2 py-1.5">
                <p className="font-mono text-[9px] leading-none tracking-[0.18em] text-slate-500">
                  AD
                </p>
                <p className="mt-0.5 text-[11px] font-semibold leading-none text-emerald-300">
                  Domain Managed
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/20 px-2 py-1.5">
                <p className="font-mono text-[9px] leading-none tracking-[0.18em] text-slate-500">
                  SIEM
                </p>
                <p className="mt-0.5 text-[11px] font-semibold leading-none text-cyan-300">
                  Wazuh Active
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/20 px-2 py-1.5">
                <p className="font-mono text-[9px] leading-none tracking-[0.18em] text-slate-500">
                  FIREWALL
                </p>
                <p className="mt-0.5 text-[11px] font-semibold leading-none text-violet-300">
                  FortiGate Reviewed
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/20 px-2 py-1.5">
                <p className="font-mono text-[9px] leading-none tracking-[0.18em] text-slate-500">
                  COMPLIANCE
                </p>
                <p className="mt-0.5 text-[11px] font-semibold leading-none text-amber-300">
                  GPO Baseline
                </p>
              </div>
            </div>

            <div className="grid gap-3 border-b border-white/10 p-3 md:grid-cols-3">
              <ProgressBar label="SIEM Coverage" value={92} tone="bg-cyan-400" />
              <ProgressBar label="Policy Baseline" value={88} tone="bg-emerald-400" />
              <ProgressBar label="Audit Readiness" value={84} tone="bg-violet-400" />
            </div>

            <div className="flex flex-wrap gap-1 border-b border-white/10 px-2 py-1.5">
              <MiniTagChip tone="cyan" pulse>SIEM</MiniTagChip>
              <MiniTagChip tone="blue">AD</MiniTagChip>
              <MiniTagChip tone="violet" pulse>EDR</MiniTagChip>
              <MiniTagChip tone="amber">IPS/IDS</MiniTagChip>
              <MiniTagChip tone="green">GPO</MiniTagChip>
              <MiniTagChip tone="red" pulse>WAF</MiniTagChip>
              <MiniTagChip tone="blue">Firewall</MiniTagChip>
              <MiniTagChip tone="teal">MITRE</MiniTagChip>
              <MiniTagChip tone="orange" pulse>Compliance</MiniTagChip>
            </div>

            {/* <div className="border-b border-white/10 px-4 py-3">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="font-mono text-[11px] text-slate-500">Branches</p>
                  <p className="mt-1 text-base font-bold text-white">125+</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="font-mono text-[11px] text-slate-500">Endpoints</p>
                  <p className="mt-1 text-base font-bold text-white">1,500+</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="font-mono text-[11px] text-slate-500">Detection</p>
                  <p className="mt-1 text-base font-bold text-white">45m → 8m</p>
                </div>
              </div>
            </div> */}

            <div className="px-3 py-3">
              <Terminal />
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}