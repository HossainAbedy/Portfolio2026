import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const metrics = [
  {
    value: "1500+",
    label: "Managed Endpoints",
    detail:
      "Centralized visibility across endpoints using Wazuh SIEM, FortiAnalyzer, and custom-built inventory and risk analysis platforms.",
    extra: [
      "Collected OS, patch level, AV status, BitLocker, firewall, and domain posture",
      "Deep scan engine enabled granular endpoint intelligence collection",
      "Enabled enterprise-wide asset visibility and audit readiness",
      "Mapped endpoint risk posture aligned with MITRE-based evaluation",
    ],
  },
  {
    value: "125+",
    label: "Branches / Sites Supported",
    detail:
      "Operational and security support across distributed banking infrastructure including endpoints, firewalls, and branch systems.",
    extra: [
      "Worked with FortiGate 600E / 1100E for branch-level security",
      "Handled connectivity, access control, and network issue triage",
      "Supported audit preparation and compliance checks",
      "Provided remediation guidance aligned with Bangladesh Bank standards",
    ],
  },
  {
    value: "30+",
    label: "Automation & Internal Tools",
    detail:
      "Developed automation pipelines and internal platforms to reduce manual workload and improve operational efficiency.",
    extra: [
      "Built PC Inventory system with deep scan, risk scoring, and PDF audit reporting",
      "Attendance system with scheduler, thread pool, and data consistency controls",
      "DVR management tool with NTP sync and bulk configuration via API",
      "PowerShell automation for AD migration, system setup, and branch rollout",
    ],
  },
  {
    value: "60%↓",
    label: "Alert Noise Reduction",
    detail:
      "Improved detection quality by tuning SIEM rules, correlation logic, and filtering noisy alerts across multiple security platforms.",
    extra: [
      "Worked across Wazuh, Elastic Stack, and FortiAnalyzer",
      "Reduced false positives through rule tuning and behavioral analysis",
      "Improved signal-to-noise ratio for SOC operations",
      "Enabled faster triage and better incident prioritization",
    ],
  }
];

export default function Metrics() {
  const [active, setActive] = useState(null);

  return (
    <section className="px-6 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-2 text-2xl font-semibold text-slate-200">
          Impact Snapshot
        </h2>
        <p className="mb-6 max-w-2xl text-sm text-slate-400">
          A quick summary of the environments, tools, and operational work
          behind the portfolio.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={() => setActive(item)}
              className="group cursor-pointer rounded-xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#020617] p-5 transition hover:border-cyan-300/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              <p className="text-2xl font-bold text-cyan-300">{item.value}</p>

              <p className="mt-1 text-sm font-semibold text-white">
                {item.label}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                {item.detail}
              </p>

              <p className="mt-3 text-[11px] text-cyan-400 opacity-0 transition group-hover:opacity-100">
                Click to explore →
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <Modal isOpen={true} onClose={() => setActive(null)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="mb-3 text-xl font-bold text-cyan-300">
                  {active.label}
                </h3>

                <p className="mb-4 text-sm text-slate-300">
                  {active.detail}
                </p>

                <ul className="space-y-2 text-sm text-slate-400">
                  {active.extra.map((e, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}