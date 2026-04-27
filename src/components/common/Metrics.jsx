import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const metrics = [
  {
    value: "1,500+",
    label: "Managed Endpoints",
    detail:
      "Centralized visibility across branch endpoints using Wazuh SIEM, FortiAnalyzer, and the PC Inventory & Risk Analysis Platform.",
    extra: [
      "Collected OS, patch age, AV posture, firewall state, BitLocker, TPM, and domain membership",
      "Deep scan workflow captured hardware, services, autoruns, and remote access exposure",
      "Enabled asset visibility, risk scoring, and audit-ready reporting",
      "Supported migration and remediation planning across branch infrastructure",
    ],
    chart: [92, 88, 95, 89, 94, 91, 96],
    accent: "cyan",
  },
  {
    value: "125+",
    label: "Branches Supported",
    detail:
      "Operational support across distributed banking branches covering endpoints, domain migration, firewall review, and audit evidence.",
    extra: [
      "Supported branch-level domain migration and workstation standardization",
      "Worked with FortiGate and FortiAnalyzer for perimeter and event review",
      "Helped align branch systems with banking ICT controls and audit needs",
      "Provided operational support for branch devices and network services",
    ],
    chart: [74, 78, 81, 85, 87, 90, 93],
    accent: "violet",
  },
  {
    value: "30+",
    label: "Automation Workflows",
    detail:
      "PowerShell and Python automation used to reduce manual tasks across migration, inventory, attendance, DVR control, and support operations.",
    extra: [
      "Built PC Inventory scanning and PDF reporting workflow",
      "Automated attendance sync, DVR management, and branch health checks",
      "Created post-domain setup scripts for AD migration",
      "Reduced repetitive setup, reporting, and validation effort",
    ],
    chart: [60, 66, 71, 79, 84, 88, 92],
    accent: "green",
  },
  {
    value: "45m → 8m",
    label: "Detection Improvement",
    detail:
      "Wazuh tuning, CIS hardening, and improved alert logic reduced noise and increased triage speed.",
    extra: [
      "Reduced false positives through rule tuning and suppression logic",
      "Improved detection quality by mapping events to MITRE ATT&CK",
      "Strengthened endpoint baseline with CIS-aligned hardening",
      "Improved SOC triage speed and confidence in real alerts",
    ],
    chart: [34, 41, 58, 66, 72, 81, 92],
    accent: "amber",
  },
];

const tabs = ["Overview", "Charts", "Evidence", "Signals"];

function toneClass(accent) {
  switch (accent) {
    case "violet":
      return "text-violet-300";
    case "green":
      return "text-emerald-300";
    case "amber":
      return "text-amber-300";
    case "red":
      return "text-red-300";
    case "blue":
      return "text-sky-300";
    case "indigo":
      return "text-indigo-300";
    default:
      return "text-cyan-300";
  }
}

function bgToneClass(accent) {
  switch (accent) {
    case "violet":
      return "bg-violet-400";
    case "green":
      return "bg-emerald-400";
    case "amber":
      return "bg-amber-400";
    case "red":
      return "bg-red-400";
    case "blue":
      return "bg-sky-400";
    case "indigo":
      return "bg-indigo-400";
    default:
      return "bg-cyan-400";
  }
}

function panelBorderClass(accent) {
  switch (accent) {
    case "violet":
      return "border-violet-400/20";
    case "green":
      return "border-emerald-400/20";
    case "amber":
      return "border-amber-400/20";
    case "red":
      return "border-red-400/20";
    case "blue":
      return "border-sky-400/20";
    case "indigo":
      return "border-indigo-400/20";
    default:
      return "border-cyan-400/20";
  }
}

function BarChart({ values = [], accent = "cyan" }) {
  const fill = bgToneClass(accent);

  return (
    <div className="flex h-28 items-end gap-2 rounded-xl border border-white/10 bg-black/20 p-3">
      {values.map((v, idx) => (
        <div key={idx} className="flex h-full flex-1 items-end">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${Math.max(16, Math.min(100, v))}%` }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            className={`w-full rounded-t-md ${fill} opacity-90`}
            title={`${v}%`}
          />
        </div>
      ))}
    </div>
  );
}

function SparkLine({ values = [], accent = "cyan" }) {
  const fill = bgToneClass(accent);

  return (
    <div className="flex items-end gap-1">
      {values.map((v, idx) => (
        <motion.div
          key={idx}
          initial={{ scaleY: 0.7, opacity: 0.5 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.35, delay: idx * 0.03 }}
          className={`w-1.5 rounded-t-sm ${fill}`}
          style={{ height: `${Math.max(12, Math.min(42, v / 2))}px` }}
        />
      ))}
    </div>
  );
}

export default function Metrics() {
  const [active, setActive] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");

  const modalTabs = useMemo(() => tabs, []);

  const openMetric = (item) => {
    setActive(item);
    setActiveTab("Overview");
  };

  return (
    <section className="px-6 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-200">
              Operations Snapshot
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              A compact view of the enterprise environments, automation workflows, and security outcomes behind the portfolio.
            </p>
          </div>

          <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-400 md:block">
            ENTERPRISE SECURITY PANEL<span className="ml-1 animate-pulse text-cyan-300">|</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <motion.button
              key={item.label}
              type="button"
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={() => openMetric(item)}
              className={`group cursor-pointer rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#020617] p-5 text-left transition hover:border-white/20 hover:shadow-[0_0_24px_rgba(34,211,238,0.14)]`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={`text-2xl font-bold ${toneClass(item.accent)}`}>
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {item.label}
                  </p>
                </div>

                <div className={`rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-slate-500`}>
                  Live
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-400">
                {item.detail}
              </p>

              <div className="mt-4">
                <SparkLine values={item.chart} accent={item.accent} />
              </div>

              <p className="mt-3 text-[11px] text-cyan-400 opacity-0 transition group-hover:opacity-100">
                Open dashboard →
              </p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <Modal isOpen={true} onClose={() => setActive(null)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 8 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div className="rounded-2xl border border-white/10 bg-[#020617] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.3em] text-slate-500">
                        SOC / DASHBOARD VIEW
                      </p>
                      <h3 className={`mt-2 text-xl font-bold ${toneClass(active.accent)}`}>
                        {active.label}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      {active.value}
                      <span className="ml-2 rounded-full border border-white/10 bg-white/5 px-2 py-1">
                        current
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <div className={`rounded-xl border ${panelBorderClass(active.accent)} bg-white/5 p-3`}>
                      <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
                        STATUS
                      </p>
                      <p className={`mt-1 text-sm font-semibold ${toneClass(active.accent)}`}>
                        Operational
                      </p>
                    </div>
                    <div className={`rounded-xl border ${panelBorderClass(active.accent)} bg-white/5 p-3`}>
                      <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
                        FOCUS
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {active.label}
                      </p>
                    </div>
                    <div className={`rounded-xl border ${panelBorderClass(active.accent)} bg-white/5 p-3`}>
                      <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
                        SIGNAL
                      </p>
                      <p className={`mt-1 text-sm font-semibold ${toneClass(active.accent)}`}>
                        Live
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {modalTabs.map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${
                          activeTab === tab
                            ? `${bgToneClass(active.accent)} text-slate-950`
                            : "border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4">
                    {activeTab === "Overview" && (
                      <div className="space-y-4">
                        <p className="text-sm leading-6 text-slate-300">
                          {active.detail}
                        </p>

                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <p className="mb-2 text-xs font-mono tracking-[0.2em] text-slate-500">
                              KEY SIGNALS
                            </p>
                            <ul className="space-y-2 text-sm text-slate-400">
                              {active.extra.slice(0, 3).map((e, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className={toneClass(active.accent)}>•</span>
                                  <span>{e}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <p className="mb-3 text-xs font-mono tracking-[0.2em] text-slate-500">
                              DISTRIBUTION
                            </p>
                            <BarChart values={active.chart} accent={active.accent} />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "Charts" && (
                      <div className="space-y-4">
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <p className="mb-3 text-xs font-mono tracking-[0.2em] text-slate-500">
                              TREND
                            </p>
                            <BarChart values={active.chart} accent={active.accent} />
                          </div>
                          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                            <p className="mb-3 text-xs font-mono tracking-[0.2em] text-slate-500">
                              LIVE FEED
                            </p>
                            <div className="space-y-2 text-sm text-slate-400">
                              <p className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                Connected to simulated SOC feed
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                                Cursor active
                              </p>
                              <p className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
                                Dashboard refreshed automatically
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "Evidence" && (
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="mb-3 text-xs font-mono tracking-[0.2em] text-slate-500">
                          EVIDENCE / CONTROLS
                        </p>
                        <ul className="space-y-2 text-sm text-slate-400">
                          {active.extra.map((e, i) => (
                            <li key={i} className="flex gap-2">
                              <span className={toneClass(active.accent)}>•</span>
                              <span>{e}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === "Signals" && (
                      <div className="space-y-3">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                          <p className="mb-2 text-xs font-mono tracking-[0.2em] text-slate-500">
                            SIGNAL SUMMARY
                          </p>
                          <div className="grid gap-3 md:grid-cols-3">
                            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                              <p className="text-[10px] text-slate-500">Branches</p>
                              <p className="mt-1 text-sm font-semibold text-white">125+</p>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                              <p className="text-[10px] text-slate-500">Endpoints</p>
                              <p className="mt-1 text-sm font-semibold text-white">1,500+</p>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                              <p className="text-[10px] text-slate-500">Signal</p>
                              <p className={`mt-1 text-sm font-semibold ${toneClass(active.accent)}`}>
                                {active.value}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-[11px] leading-6 text-slate-300">
                          <div>
                            &gt; dashboard load
                            <span className="ml-1 inline-block align-middle text-cyan-300 animate-pulse">
                              |
                            </span>
                          </div>
                          <div className="text-slate-500">Loading branch telemetry...</div>
                          <div className="text-slate-400">Rendering endpoint posture charts...</div>
                          <div className="text-emerald-300">Policy baseline verified.</div>
                          <div className="text-cyan-300">Live monitoring active.</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}