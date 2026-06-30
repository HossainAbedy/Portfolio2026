import { useState } from "react";

const MODULES = [
  {
    id: "identity",   label: "Identity",   color: "amber",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/40", acc: "text-amber-300", dot: "bg-amber-400",
    signals: ["Domain vs workgroup membership", "Logged-on user presence", "Password age (days)", "Local administrator count"],
    mitre: [],
    weight: "Domain = lower risk. Workgroup = higher exposure (no GPO enforcement, no centralised auth).",
  },
  {
    id: "os",         label: "OS",         color: "violet",
    badge: "bg-violet-500/20 text-violet-300 border-violet-500/40", acc: "text-violet-300", dot: "bg-violet-400",
    signals: ["OS version and build number", "Windows 7 / unsupported OS flag", "OS release age estimation"],
    mitre: [],
    weight: "Unsupported OS (Windows 7) scores maximum. Every unsupported build adds significant points.",
  },
  {
    id: "cpu",        label: "CPU",        color: "slate",
    badge: "bg-slate-500/20 text-slate-300 border-slate-500/40", acc: "text-slate-300", dot: "bg-slate-400",
    signals: ["CPU model and generation"],
    mitre: [],
    weight: "Context-only. Used for hardware profiling and upgrade planning, not risk scoring directly.",
  },
  {
    id: "ram",        label: "RAM",        color: "sky",
    badge: "bg-sky-500/20 text-sky-300 border-sky-500/40", acc: "text-sky-300", dot: "bg-sky-400",
    signals: ["Total RAM (GB)", "Module count and configuration"],
    mitre: [],
    weight: "Low RAM flags resource-constrained hosts that may struggle with AV or EDR agents.",
  },
  {
    id: "disk",       label: "Disk",       color: "teal",
    badge: "bg-teal-500/20 text-teal-300 border-teal-500/40", acc: "text-teal-300", dot: "bg-teal-400",
    signals: ["Disk type (SSD vs HDD)", "C: total and free GB", "Low disk space detection (<5% free)"],
    mitre: ["T1486 — Data Encrypted for Impact (low disk + encryption = ransomware indicator)"],
    weight: "Low disk space (0%) scores high — indicator of ransomware staging or log overflow.",
  },
  {
    id: "patching",   label: "Patching",   color: "red",
    badge: "bg-red-500/20 text-red-300 border-red-500/40", acc: "text-red-300", dot: "bg-red-400",
    signals: ["Hotfix count", "Latest hotfix KB and date", "Patch age in days (calculated at scan time)"],
    mitre: ["T1068 — Exploitation for Privilege Escalation (unpatched systems)"],
    weight: "Highest-weight module. Patch age 500d+ = critical. 365d+ = high. Observed: 512d, 651d, 778d, 1645d in production.",
  },
  {
    id: "antivirus",  label: "Antivirus",  color: "emerald",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40", acc: "text-emerald-300", dot: "bg-emerald-400",
    signals: ["AV software detected (Kaspersky / Defender / None)", "AV version", "Enterprise AV vs Windows Defender only"],
    mitre: ["T1562.001 — Impair Defenses: Disable or Modify Tools"],
    weight: "No AV = high risk. Windows Defender only (no enterprise AV) = medium. Both Kaspersky + Defender = low.",
  },
  {
    id: "users",      label: "Users",      color: "pink",
    badge: "bg-pink-500/20 text-pink-300 border-pink-500/40", acc: "text-pink-300", dot: "bg-pink-400",
    signals: ["Logged-on user name", "User password age", "Local admin group membership"],
    mitre: ["T1078 — Valid Accounts"],
    weight: "Multiple local admins or stale passwords add risk. Shared admin accounts = higher score.",
  },
  {
    id: "security",   label: "Security",   color: "orange",
    badge: "bg-orange-500/20 text-orange-300 border-orange-500/40", acc: "text-orange-300", dot: "bg-orange-400",
    signals: ["TPM present / version", "Secure Boot enabled/disabled", "BitLocker status", "Firewall (Domain / Private / Public profiles)", "RDP enabled + NLA enforcement", "SMB1 enabled"],
    mitre: ["T1562.001 — Impair Defenses (SecureBoot off)", "T1486 — Data Encrypted for Impact (no BitLocker)"],
    weight: "SecureBoot disabled, BitLocker off, SMB1 enabled, and no NLA on RDP each contribute significant risk points.",
  },
  {
    id: "network",    label: "Network",    color: "indigo",
    badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40", acc: "text-indigo-300", dot: "bg-indigo-400",
    signals: ["Open port list (21, 22, 139, 445, 3389, etc.)", "Suspicious port detection (22, 139, 445, 3389)", "RDP exposure without NLA"],
    mitre: ["T1021 — Remote Services (RDP/SMB exposure)", "T1090 — Proxy (unexpected open ports)"],
    weight: "Ports 22, 139, 445, 3389 open flag as suspicious. Each suspicious port adds points; combinations score higher.",
  },
  {
    id: "services",   label: "Services",   color: "yellow",
    badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40", acc: "text-yellow-300", dot: "bg-yellow-400",
    signals: ["Running services list", "Autoruns entries", "Suspicious service detection (e.g. AdobeARMservice)", "Service count anomaly"],
    mitre: ["T1547 — Boot/Logon Autostart Execution", "T1105 — Ingress Tool Transfer"],
    weight: "Suspicious services score low-medium confidence (10 pts each). High count of unusual autoruns escalates risk.",
  },
  {
    id: "events",     label: "Events",     color: "rose",
    badge: "bg-rose-500/20 text-rose-300 border-rose-500/40", acc: "text-rose-300", dot: "bg-rose-400",
    signals: [
      "Event 4624 — Successful logon (high count = brute-force or credential reuse)",
      "Event 4634 — Account logged off",
      "Event 4688 — Process created (high count = suspicious exec activity)",
      "Event 4719 — Audit policy changed (tamper indicator)",
    ],
    mitre: ["T1078 — Valid Accounts (logon anomalies)", "T1059 — Command and Scripting Interpreter (process creation)", "T1562.001 — Audit policy modification"],
    weight: "Event 4688 ×100 = high. Audit policy change (4719) = immediate flag. Combined event pattern scoring.",
  },
  {
    id: "scan",       label: "Scan",       color: "slate",
    badge: "bg-slate-500/20 text-slate-300 border-slate-500/40", acc: "text-slate-300", dot: "bg-slate-400",
    signals: ["Scan type (bulk vs deep)", "Timestamp", "WinRM / WMI availability", "Scan completeness flag"],
    mitre: [],
    weight: "Metadata module. Scan completeness affects confidence weighting — partial scans get uncertainty penalty.",
  },
];

const SEVERITY_BANDS = [
  { label: "Critical", range: "76–100", color: "text-red-300",    bg: "bg-red-500/20",    border: "border-red-500/40",    desc: "Immediate isolation and forensic triage" },
  { label: "High",     range: "51–75",  color: "text-orange-300",  bg: "bg-orange-500/20",  border: "border-orange-500/40",  desc: "Apply critical patches, isolate from sensitive segments" },
  { label: "Medium",   range: "21–50",  color: "text-yellow-300",  bg: "bg-yellow-500/20",  border: "border-yellow-500/40",  desc: "Schedule patching wave, enable security features" },
  { label: "Low",      range: "1–20",   color: "text-emerald-300", bg: "bg-emerald-500/20", border: "border-emerald-500/40", desc: "Monitor, address in regular maintenance cycle" },
];

const MITRE_TAGS = [
  { id: "T1562.001", name: "Impair Defenses",            signal: "SecureBoot off, AV issues" },
  { id: "T1078",     name: "Valid Accounts",             signal: "Logon anomalies, local admins" },
  { id: "T1547",     name: "Boot/Logon Autostart",       signal: "Suspicious autoruns" },
  { id: "T1021",     name: "Remote Services",            signal: "RDP/SMB exposure" },
  { id: "T1059",     name: "Command/Script Interpreter", signal: "Process creation anomalies" },
  { id: "T1486",     name: "Data Encrypted for Impact",  signal: "No BitLocker + low disk" },
  { id: "T1499",     name: "Endpoint DoS",               signal: "Resource exhaustion signals" },
  { id: "T1090",     name: "Proxy",                      signal: "Unexpected open ports" },
  { id: "T1068",     name: "Exploit for Priv Esc",       signal: "Unpatched systems" },
  { id: "T1105",     name: "Ingress Tool Transfer",      signal: "Suspicious services" },
];

export default function RiskEngine() {
  const [activeModule, setActiveModule] = useState("patching");
  const module = MODULES.find((m) => m.id === activeModule);

  return (
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500">RISK ENGINE</p>
        <h4 className="mt-1 text-sm font-semibold text-white">13-module MITRE ATT&CK aligned risk scoring</h4>
        <p className="mt-1 text-xs text-slate-400">
          Every deep-scanned host is scored by 13 analysis modules. Each module contributes weighted points to a composite risk score, which maps to a severity band and triggers specific MITRE ATT&CK technique assignments and remediation playbooks.
        </p>
      </div>

      {/* Module selector + detail */}
      <div className="flex gap-3">
        {/* Module grid */}
        <div className="flex w-36 shrink-0 flex-col gap-1">
          <p className="mb-1 font-mono text-[9px] tracking-[0.15em] text-slate-600">MODULES</p>
          {MODULES.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id)}
              aria-label={`View ${m.label} module details`}
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-left text-xs transition ${
                activeModule === m.id
                  ? `${m.badge} font-semibold`
                  : "border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${m.dot}`} />
              {m.label}
            </button>
          ))}
        </div>

        {/* Module detail */}
        {module && (
          <div className="min-w-0 flex-1 space-y-3">
            <div className={`rounded-xl border p-3 ${module.badge}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-mono text-[10px] font-bold`}>{module.label.toUpperCase()} MODULE</span>
                {module.mitre.length > 0 && (
                  <span className="ml-auto rounded border border-white/20 bg-black/30 px-1.5 py-0.5 font-mono text-[9px] text-white/60">
                    MITRE mapped
                  </span>
                )}
              </div>
              <p className={`text-xs leading-relaxed`}>{module.weight}</p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
              <p className={`mb-2 font-mono text-[9px] tracking-[0.15em] ${module.acc}`}>SIGNALS ANALYSED</p>
              <ul className="space-y-1">
                {module.signals.map((s) => (
                  <li key={s} className="flex gap-1.5 text-[11px] text-slate-400">
                    <span className={`mt-0.5 shrink-0 ${module.acc}`}>›</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {module.mitre.length > 0 && (
              <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                <p className={`mb-2 font-mono text-[9px] tracking-[0.15em] ${module.acc}`}>MITRE ATT&CK MAPPING</p>
                <ul className="space-y-1">
                  {module.mitre.map((m) => (
                    <li key={m} className="flex gap-1.5 text-[11px] text-slate-300">
                      <span className="mt-0.5 shrink-0 text-orange-400">⚑</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Severity bands */}
      <div>
        <p className="mb-2 font-mono text-[10px] tracking-[0.15em] text-slate-500">SEVERITY BANDS</p>
        <div className="grid gap-2 sm:grid-cols-4">
          {SEVERITY_BANDS.map(({ label, range, color, bg, border, desc }) => (
            <div key={label} className={`rounded-lg border ${border} ${bg} p-2.5`}>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold ${color}`}>{label}</span>
                <span className={`font-mono text-[10px] ${color}`}>{range}</span>
              </div>
              <p className="text-[10px] leading-relaxed text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MITRE tags */}
      <div className="rounded-xl border border-white/10 bg-black/20 p-3">
        <p className="mb-2 font-mono text-[9px] tracking-[0.15em] text-slate-500">CONSOLIDATED MITRE ATT&CK TECHNIQUES</p>
        <div className="flex flex-wrap gap-2">
          {MITRE_TAGS.map(({ id, name, signal }) => (
            <div key={id} title={`${name} — ${signal}`}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5">
              <p className="font-mono text-[10px] font-bold text-orange-300">{id}</p>
              <p className="text-[10px] text-slate-400">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
