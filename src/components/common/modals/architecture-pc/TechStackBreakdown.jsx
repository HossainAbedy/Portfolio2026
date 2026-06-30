const LAYERS = [
  {
    id: "scanner",
    label: "Scan engine",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    dot: "bg-cyan-400",
    acc: "text-cyan-300",
    tools: [
      {
        name: "PowerShell 5.1",
        role: "Primary scan language",
        detail: "Both the bulk discovery and deep inspection scripts are pure PowerShell 5.1. No external dependencies — runs on any domain-joined Windows host with WinRM access to target endpoints.",
      },
      {
        name: "RunspacePool",
        role: "Parallel execution engine",
        detail: "PowerShell RunspacePool creates a pool of concurrent worker threads (configurable 20–100). Each thread handles one host — probing, querying, and writing results independently. This is what makes 40 hosts/sec possible.",
      },
      {
        name: "BeginConnect / WaitOne",
        role: "Async TCP probing",
        detail: "Before attempting WMI, each thread does a non-blocking TCP probe to port 135 using Socket.BeginConnect() with a short timeout via WaitOne(). Unreachable hosts are skipped instantly with no WMI timeout wait.",
      },
      {
        name: "WinRM / WMI",
        role: "Remote data collection",
        detail: "Windows Remote Management and Windows Management Instrumentation are used to query hardware, OS, services, security config, and event logs on each target host without installing any agent.",
      },
    ],
  },
  {
    id: "launcher",
    label: "Desktop launcher",
    badge: "bg-violet-500/20 text-violet-300 border-violet-500/40",
    dot: "bg-violet-400",
    acc: "text-violet-300",
    tools: [
      {
        name: ".NET 8 C#",
        role: "URI-scheme desktop launcher",
        detail: "A small .NET 8 C# application handles the URI scheme registration that allows the React frontend to trigger the PowerShell scanner directly from the browser via a custom protocol handler. Bridges the web UI to the local scan scripts.",
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    badge: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    dot: "bg-sky-400",
    acc: "text-sky-300",
    tools: [
      {
        name: "React 19.2",
        role: "UI framework",
        detail: "The dashboard, IP block explorer, deep scan viewer, and risk analysis panels are all built in React 19.2 with hooks-based state management. No Redux — state is lifted to shared context where needed.",
      },
      {
        name: "Material UI (MUI)",
        role: "Component library",
        detail: "MUI provides the base component layer: data tables, modals, tooltips, dropdowns. Customised with the bank's internal colour theme (purple/teal/green).",
      },
      {
        name: "Recharts",
        role: "Data visualisation",
        detail: "All charts in the dashboard (OS distribution bar chart, domain status pie, AV distribution pie, severity distribution) are built with Recharts. Responsive containers adapt to the IP block detail panel width.",
      },
    ],
  },
  {
    id: "data",
    label: "Data handling",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    dot: "bg-emerald-400",
    acc: "text-emerald-300",
    tools: [
      {
        name: "SheetJS (xlsx)",
        role: "Excel import and export",
        detail: "SheetJS parses both the bulk discovery Excel and deep scan Excel files on import. It also handles the Excel export from the React UI — generating properly formatted branch-specific worksheets for download.",
      },
      {
        name: "Merge strategy engine",
        role: "Multi-import deduplication",
        detail: "When importing multiple scan files, the UI applies a configurable merge strategy (latest timestamp default) to deduplicate hosts — keeping the most recent data for each IP across overlapping scans.",
      },
    ],
  },
  {
    id: "export",
    label: "Export engine",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    dot: "bg-amber-400",
    acc: "text-amber-300",
    tools: [
      {
        name: "jsPDF",
        role: "PDF audit report generation",
        detail: "Branch-level ICT Security Audit Reports are generated client-side using jsPDF. Each report includes charts (OS distribution, domain status, AV distribution), an executive summary table, host-level findings, and an audit timestamp. Fully printable.",
      },
      {
        name: "LAN diagram generator",
        role: "Network topology export",
        detail: "Auto-generates a network topology diagram for any selected IP block showing the branch building, ISP connections, router, switch, and all scanned host endpoints. Exported as a printable diagram document.",
      },
      {
        name: "CSV recommendations export",
        role: "Risk analysis output",
        detail: "The risk analysis recommendations can be exported as CSV — one row per high-risk host with score, severity, findings, MITRE tags, and immediate actions. Useful for remediation tracking.",
      },
    ],
  },
];

export default function TechStackBreakdown() {
  return (
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500">TECH STACK</p>
        <h4 className="mt-1 text-sm font-semibold text-white">Full-stack breakdown — five layers</h4>
        <p className="mt-1 text-xs text-slate-400">
          An unusual stack that bridges PowerShell automation, a .NET desktop launcher, and a React web frontend. The combination was chosen to match the Windows-heavy enterprise environment while keeping the UI accessible via any browser on the LAN.
        </p>
      </div>

      {/* Stack visual */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4">
        <p className="mb-2 font-mono text-[10px] tracking-[0.18em] text-slate-500">STACK LAYERS</p>
        <div className="flex min-w-[480px] flex-col gap-1.5">
          {[
            { label: "Scan engine",      tech: "PowerShell 5.1  ·  RunspacePool  ·  WinRM/WMI  ·  BeginConnect/WaitOne", fill: "rgba(34,211,238,.1)", stroke: "rgba(34,211,238,.4)", w: "100%" },
            { label: "Desktop launcher", tech: ".NET 8 C#  ·  URI scheme handler", fill: "rgba(167,139,250,.1)", stroke: "rgba(167,139,250,.4)", w: "45%" },
            { label: "Frontend",         tech: "React 19.2  ·  Material UI  ·  Recharts", fill: "rgba(56,189,248,.1)", stroke: "rgba(56,189,248,.4)", w: "100%" },
            { label: "Data handling",    tech: "SheetJS (xlsx)  ·  Merge strategy engine", fill: "rgba(52,211,153,.1)", stroke: "rgba(52,211,153,.4)", w: "65%" },
            { label: "Export engine",    tech: "jsPDF  ·  LAN diagram  ·  CSV export", fill: "rgba(251,191,36,.1)", stroke: "rgba(251,191,36,.4)", w: "80%" },
          ].map(({ label, tech, fill, stroke, w }) => (
            <div
              key={label}
              className="rounded-lg border px-3 py-2"
              style={{ background: fill, borderColor: stroke, borderWidth: "0.5px", width: w }}
            >
              <p className="text-[10px] font-bold text-white/80">{label}</p>
              <p className="text-[9px] text-white/40 font-mono mt-0.5">{tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Layer details */}
      <div className="space-y-2">
        {LAYERS.map((layer) => (
          <details key={layer.id} className="group rounded-xl border border-white/10 bg-white/5">
            <summary className="flex cursor-pointer select-none items-center gap-3 p-3 list-none">
              <span className={`h-2 w-2 shrink-0 rounded-full ${layer.dot}`} />
              <span className={`font-mono text-[10px] tracking-[0.15em] ${layer.acc}`}>{layer.label.toUpperCase()}</span>
              <span className="ml-auto font-mono text-[10px] text-slate-600">{layer.tools.length} component{layer.tools.length > 1 ? "s" : ""}</span>
              <svg className="h-3.5 w-3.5 shrink-0 text-slate-500 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="border-t border-white/10 px-3 pb-3 pt-2 space-y-2">
              {layer.tools.map((tool) => (
                <div key={tool.name} className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <div className="flex items-start gap-2">
                    <span className={`mt-0.5 shrink-0 rounded border px-1.5 py-0.5 font-mono text-[8px] ${layer.badge}`}>
                      {layer.label.split(" ")[0].toUpperCase()}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">{tool.name}</p>
                      <p className={`text-[10px] ${layer.acc}`}>{tool.role}</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-400">{tool.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
