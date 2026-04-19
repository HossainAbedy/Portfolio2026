import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const metrics = [
  {
    value: "500+",
    label: "Endpoints Monitored",
    detail: "Real-time visibility using SIEM, Wazuh, and automation.",
    extra: [
      "Collected OS, patch status, AV, BitLocker, firewall",
      "Parallel WMI scanning with runspace pools",
      "Enterprise-wide risk visibility",
    ],
  },
  {
    value: "20+",
    label: "Branches Supported",
    detail: "Security operations across distributed banking environments.",
    extra: [
      "Network + firewall + endpoint security",
      "Bangladesh Bank compliance alignment",
      "Audit + remediation workflows",
    ],
  },
  {
    value: "15+",
    label: "Automations Built",
    detail: "Scripts and tools to reduce manual security workload.",
    extra: [
      "PowerShell (AD + system automation)",
      "Python parsing + reporting pipelines",
      "Significant time reduction in ops",
    ],
  },
  {
    value: "100+",
    label: "Events Investigated",
    detail: "Analyzed alerts to detect threats and anomalies.",
    extra: [
      "Wazuh, Elastic, FortiAnalyzer",
      "False-positive tuning",
      "Improved detection accuracy",
    ],
  },
];

export default function Metrics() {
  const [active, setActive] = useState(null);

  return (
    <section className="px-6 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        
        <h2 className="mb-6 text-2xl font-semibold text-slate-200">
          Impact Snapshot
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={() => setActive(item)}
              className="group cursor-pointer rounded-xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#020617] p-5 transition hover:border-cyan-300/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              <p className="text-2xl font-bold text-cyan-300">
                {item.value}
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                {item.label}
              </p>

              <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                {item.detail}
              </p>

              <p className="mt-3 text-[11px] text-cyan-400 opacity-0 transition group-hover:opacity-100">
                Click to explore →
              </p>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
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
                      <span className="text-cyan-400">•</span> {e}
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