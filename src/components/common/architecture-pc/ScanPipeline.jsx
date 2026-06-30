import { useState } from "react";

const STAGES = [
  {
    id: "bulk",
    num: "01",
    title: "Bulk network discovery",
    badge: "Stage 1",
    color: "cyan",
    badgeCls: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    acc: "text-cyan-300",
    dot: "bg-cyan-400",
    runtime: "~3 min for 254 hosts",
    trigger: "User provides START IP, END IP, and thread count (recommended 20–100)",
    how: "RunspacePool spins up concurrent threads. Each thread uses BeginConnect/WaitOne TCP probing to test host reachability before attempting WinRM/WMI collection. Only responsive hosts are queried — unresponsive IPs are skipped immediately, which is what makes the scan fast.",
    collects: [
      "Hostname and IP address",
      "OS version and build",
      "Domain membership status",
      "Antivirus installation and name",
      "Domain migration candidates (workgroup detection)",
      "Windows 7 / unsupported OS flags",
    ],
    output: "Timestamped Excel file (e.g. Scan_192.168.100_20251119_101800.xlsx) saved next to the script",
    script: "PowerShell 5.1 bulk scanner with RunspacePool + BeginConnect/WaitOne",
    realRate: "39.79 hosts/sec observed in production (608 done in ~15 sec)",
  },
  {
    id: "deep",
    num: "02",
    title: "Deep branch inspection",
    badge: "Stage 2",
    color: "violet",
    badgeCls: "bg-violet-500/20 text-violet-300 border-violet-500/40",
    acc: "text-violet-300",
    dot: "bg-violet-400",
    runtime: "~3 min for a full branch",
    trigger: "Launched from the React UI via the 'Launch Deep Scan' button on any IP block, or run directly",
    how: "A second PowerShell script targets a specific IP range (a branch). It performs WinRM-based remote inspection on each reachable host, collecting a comprehensive 40+ column dataset covering hardware, security posture, services, open ports, security events, and firmware state.",
    collects: [
      "Hardware: CPU, RAM modules, disk type and model, SSD/HDD detection",
      "Identity: domain membership, logged-on user, password age, local admins",
      "Patching: hotfix count, latest hotfix KB, patch age in days",
      "Security: TPM presence, SecureBoot state, BitLocker, Secure Boot policy",
      "Network: firewall profile states, RDP enabled/NLA, SMB1 enabled, open ports",
      "Services: running services list, autoruns, suspicious service flags",
      "Events: Windows security event log samples (4624, 4634, 4688, 4719)",
      "AV: antivirus name, version, detection method",
    ],
    output: "Branch Excel file (e.g. DeepScan_192.168.101_20251119_102300.xlsx) importable into the Deep Scan Viewer",
    script: "PowerShell 5.1 deep inspection script — 40+ column output via WinRM/WMI",
    realRate: "Full branch (~70 hosts) completes in approximately 3 minutes",
  },
];

function StageCard({ stage, open, onToggle }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5">
      <button
        onClick={onToggle}
        className="flex w-full items-start gap-4 p-4 text-left"
        aria-expanded={open}
      >
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border font-mono text-sm font-bold ${stage.badgeCls}`}>
          {stage.num}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-2 py-0.5 font-mono text-[9px] ${stage.badgeCls}`}>{stage.badge}</span>
            <h5 className="text-sm font-bold text-white">{stage.title}</h5>
            <span className="ml-auto font-mono text-[10px] text-slate-500">{stage.runtime}</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">{stage.script}</p>
        </div>
        <svg className={`mt-1 h-4 w-4 shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-white/10 space-y-3 px-4 pb-4 pt-3">
          {/* Trigger */}
          <div className="rounded-lg border border-white/10 bg-black/20 p-3">
            <p className={`mb-1 font-mono text-[9px] tracking-[0.15em] ${stage.acc}`}>HOW IT STARTS</p>
            <p className="text-xs leading-relaxed text-slate-300">{stage.trigger}</p>
          </div>

          {/* How it works */}
          <div className="rounded-lg border border-white/10 bg-black/20 p-3">
            <p className={`mb-1 font-mono text-[9px] tracking-[0.15em] ${stage.acc}`}>HOW IT WORKS</p>
            <p className="text-xs leading-relaxed text-slate-300">{stage.how}</p>
            {stage.realRate && (
              <p className={`mt-2 text-[10px] ${stage.acc}`}>📈 {stage.realRate}</p>
            )}
          </div>

          {/* Collected data */}
          <div className="rounded-lg border border-white/10 bg-black/20 p-3">
            <p className={`mb-2 font-mono text-[9px] tracking-[0.15em] ${stage.acc}`}>DATA COLLECTED</p>
            <ul className="space-y-1">
              {stage.collects.map((c) => (
                <li key={c} className="flex gap-1.5 text-[11px] text-slate-400">
                  <span className={`mt-0.5 shrink-0 ${stage.acc}`}>›</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Output */}
          <div className={`rounded-lg border px-3 py-2 ${stage.badgeCls}`}>
            <p className="font-mono text-[9px] tracking-wider">OUTPUT</p>
            <p className="mt-0.5 text-[11px]">{stage.output}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ScanPipeline() {
  const [open, setOpen] = useState("bulk");

  return (
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500">SCAN ARCHITECTURE</p>
        <h4 className="mt-1 text-sm font-semibold text-white">Two-stage scanning pipeline</h4>
        <p className="mt-1 text-xs text-slate-400">
          Stage 1 gives broad network-wide visibility fast. Stage 2 gives surgical per-branch depth. Neither stage requires an agent on target hosts — everything runs over WinRM/WMI using a centralized admin credential.
        </p>
      </div>

      {/* Pipeline SVG */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4">
        <p className="mb-3 font-mono text-[10px] tracking-[0.18em] text-slate-500">SCAN FLOW</p>
        <svg viewBox="0 0 620 120" width="100%" style={{ minWidth: 480 }}>
          {/* Boxes */}
          {[
            { x: 10,  label: "IP Range Input", sub: "START / END IP\nThread count", fill: "rgba(34,211,238,.08)", stroke: "rgba(34,211,238,.4)" },
            { x: 135, label: "TCP Probe", sub: "BeginConnect\nWaitOne", fill: "rgba(34,211,238,.08)", stroke: "rgba(34,211,238,.3)" },
            { x: 260, label: "RunspacePool", sub: "WinRM / WMI\nParallel threads", fill: "rgba(34,211,238,.1)", stroke: "rgba(34,211,238,.5)" },
            { x: 385, label: "Excel Output", sub: "Timestamped\n.xlsx file", fill: "rgba(167,139,250,.08)", stroke: "rgba(167,139,250,.4)" },
            { x: 510, label: "React Import", sub: "SheetJS parse\n+ branch map", fill: "rgba(167,139,250,.1)", stroke: "rgba(167,139,250,.5)" },
          ].map(({ x, label, sub, fill, stroke }) => (
            <g key={label}>
              <rect x={x} y={10} width={110} height={56} rx={7} fill={fill} stroke={stroke} strokeWidth={0.8} />
              <text x={x + 55} y={31} textAnchor="middle" fontSize={10.5} fontWeight={600} fill="#f0f4ff" fontFamily="system-ui">{label}</text>
              {sub.split("\n").map((line, i) => (
                <text key={i} x={x + 55} y={46 + i * 13} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.4)" fontFamily="system-ui">{line}</text>
              ))}
              {x < 510 && (
                <line x1={x + 110} y1={38} x2={x + 125} y2={38} stroke="rgba(255,255,255,.2)" strokeWidth={1.2} markerEnd="url(#scan-arr)" />
              )}
            </g>
          ))}

          {/* Stage labels */}
          <text x={220} y={90} textAnchor="middle" fontSize={9} fill="rgba(34,211,238,0.5)" fontFamily="monospace">← Stage 1: Bulk Discovery →</text>
          <text x={510} y={90} textAnchor="middle" fontSize={9} fill="rgba(167,139,250,0.5)" fontFamily="monospace">Stage 2 ↕</text>

          {/* Deep scan split arrow */}
          <path d="M565,66 L565,90 L385,90 L385,66" fill="none" stroke="rgba(167,139,250,.25)" strokeWidth={0.8} strokeDasharray="4,3" />
          <text x={475} y={103} textAnchor="middle" fontSize={8.5} fill="rgba(167,139,250,.4)" fontFamily="monospace">Deep scan targets selected block</text>

          <defs>
            <marker id="scan-arr" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={5} markerHeight={5} orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Stage cards */}
      <div className="space-y-2">
        {STAGES.map((stage) => (
          <StageCard
            key={stage.id}
            stage={stage}
            open={open === stage.id}
            onToggle={() => setOpen(open === stage.id ? null : stage.id)}
          />
        ))}
      </div>

      {/* Key design decision */}
      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3">
        <p className="font-mono text-[10px] tracking-[0.2em] text-cyan-400">DESIGN DECISION</p>
        <p className="mt-1 text-xs text-slate-300">
          BeginConnect/WaitOne TCP probing runs before WMI — hosts that don't respond to port 135 are skipped immediately with no WMI timeout. This is why the scanner achieves ~40 hosts/sec instead of waiting 30 seconds per unreachable host. The thread pool throttle (default 50) prevents overwhelming domain controllers or switches with simultaneous WMI sessions.
        </p>
      </div>
    </div>
  );
}
