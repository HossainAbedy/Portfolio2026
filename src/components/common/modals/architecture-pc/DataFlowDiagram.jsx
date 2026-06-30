const STEPS = [
  {
    id: "scan",
    num: "01",
    title: "PowerShell Scan",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    acc: "text-cyan-300",
    fill: "rgba(34,211,238,.1)", stroke: "rgba(34,211,238,.4)",
    desc: "Operator runs the bulk or deep scan script against an IP range. Credentials are entered once via a Windows credential prompt.",
    artifact: "Timestamped .xlsx file",
  },
  {
    id: "import",
    num: "02",
    title: "React Import",
    badge: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    acc: "text-sky-300",
    fill: "rgba(56,189,248,.1)", stroke: "rgba(56,189,248,.4)",
    desc: "Excel file is dragged into the dashboard or Deep Scan Viewer. SheetJS parses rows client-side — no backend upload required.",
    artifact: "Parsed host records in browser memory",
  },
  {
    id: "merge",
    num: "03",
    title: "Merge & Dedup",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    acc: "text-emerald-300",
    fill: "rgba(52,211,153,.1)", stroke: "rgba(52,211,153,.4)",
    desc: "New records merge with existing data using the selected strategy (latest timestamp by default). Hosts are grouped by IP block (/24 default).",
    artifact: "Deduplicated branch-mapped dataset",
  },
  {
    id: "visualize",
    num: "04",
    title: "Dashboard Render",
    badge: "bg-violet-500/20 text-violet-300 border-violet-500/40",
    acc: "text-violet-300",
    fill: "rgba(167,139,250,.1)", stroke: "rgba(167,139,250,.4)",
    desc: "Recharts renders OS distribution, domain status, and AV coverage. IP blocks become clickable cards showing per-branch risk scores.",
    artifact: "Interactive dashboard + IP block list",
  },
  {
    id: "risk",
    num: "05",
    title: "Risk Analysis",
    badge: "bg-red-500/20 text-red-300 border-red-500/40",
    acc: "text-red-300",
    fill: "rgba(248,113,113,.1)", stroke: "rgba(248,113,113,.4)",
    desc: "Deep-scanned hosts are scored by the 13-module risk engine. Findings are mapped to MITRE ATT&CK techniques and ranked by severity.",
    artifact: "Scored, ranked host list with playbooks",
  },
  {
    id: "export",
    num: "06",
    title: "Export & Audit",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    acc: "text-amber-300",
    fill: "rgba(251,191,36,.1)", stroke: "rgba(251,191,36,.4)",
    desc: "Results export as a branded PDF audit report, raw Excel, CSV recommendations, or an auto-generated LAN diagram — ready to print or attach to audit evidence.",
    artifact: "PDF / Excel / CSV / LAN diagram",
  },
];

export default function DataFlowDiagram() {
  return (
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500">DATA FLOW</p>
        <h4 className="mt-1 text-sm font-semibold text-white">End-to-end journey — scan to audit evidence</h4>
        <p className="mt-1 text-xs text-slate-400">
          Every host's data passes through six stages, from raw PowerShell collection to a printable audit artifact. No stage requires a backend server — everything after the PowerShell scan happens client-side in the browser.
        </p>
      </div>

      {/* Horizontal flow SVG */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4">
        <p className="mb-3 font-mono text-[10px] tracking-[0.18em] text-slate-500">PIPELINE OVERVIEW</p>
        <svg viewBox="0 0 700 100" width="100%" style={{ minWidth: 560 }}>
          {STEPS.map((s, i) => {
            const x = 10 + i * 116;
            return (
              <g key={s.id}>
                <rect x={x} y={15} width={100} height={56} rx={7} fill={s.fill} stroke={s.stroke} strokeWidth={0.8} />
                <text x={x + 50} y={32} textAnchor="middle" fontSize={9} fontFamily="monospace" fill="rgba(255,255,255,0.3)">{s.num}</text>
                <text x={x + 50} y={48} textAnchor="middle" fontSize={9.5} fontWeight={600} fill="#f0f4ff" fontFamily="system-ui">{s.title}</text>
                <text x={x + 50} y={62} textAnchor="middle" fontSize={7.5} fill="rgba(255,255,255,0.35)" fontFamily="system-ui">{s.artifact.length > 22 ? s.artifact.slice(0, 20) + "…" : s.artifact}</text>
                {i < STEPS.length - 1 && (
                  <line x1={x + 100} y1={43} x2={x + 116} y2={43} stroke="rgba(255,255,255,0.2)" strokeWidth={1.2} markerEnd="url(#flow-arr)" />
                )}
              </g>
            );
          })}
          <defs>
            <marker id="flow-arr" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={5} markerHeight={5} orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Step details */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.id} className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="mb-1.5 flex items-center gap-2">
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border font-mono text-[9px] font-bold ${s.badge}`}>
                {s.num}
              </span>
              <p className="text-xs font-semibold text-white">{s.title}</p>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">{s.desc}</p>
            <p className={`mt-2 font-mono text-[9px] ${s.acc}`}>→ {s.artifact}</p>
          </div>
        ))}
      </div>

      {/* No backend callout */}
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
        <p className="font-mono text-[10px] tracking-[0.2em] text-emerald-400">ARCHITECTURE NOTE</p>
        <p className="mt-1 text-xs text-slate-300">
          Stages 2 through 6 run entirely client-side in the browser — Excel parsing, merging, charting, risk scoring, and PDF generation all happen with no backend server or database. This keeps the tool deployable as a simple internal web page with zero server maintenance, which matters for a small IT team supporting 120+ branches.
        </p>
      </div>
    </div>
  );
}
