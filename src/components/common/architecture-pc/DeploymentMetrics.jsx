const STATS = [
  { val: "1,500+",  label: "Managed endpoints",      sub: "across all branches",    color: "text-cyan-300",    border: "border-cyan-500/30",    bg: "bg-cyan-500/10"    },
  { val: "120+",    label: "Branches covered",        sub: "mapped by /24 subnet",   color: "text-violet-300",  border: "border-violet-500/30",  bg: "bg-violet-500/10"  },
  { val: "~3 min",  label: "Full scan time",          sub: "254 hosts, RunspacePool", color: "text-emerald-300", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
  { val: "39.8/s",  label: "Scan throughput",         sub: "hosts per second",        color: "text-amber-300",   border: "border-amber-500/30",   bg: "bg-amber-500/10"   },
  { val: "40+",     label: "Data columns",            sub: "per endpoint deep scan",  color: "text-sky-300",     border: "border-sky-500/30",     bg: "bg-sky-500/10"     },
  { val: "13",      label: "Risk modules",            sub: "MITRE ATT&CK aligned",    color: "text-red-300",     border: "border-red-500/30",     bg: "bg-red-500/10"     },
];

const HIGHLIGHTS = [
  { icon: "🏦", label: "Live in a banking production environment", sub: "120+ branches — internal security tooling" },
  { icon: "⚡", label: "Parallel RunspacePool engine", sub: "BeginConnect/WaitOne TCP probing — non-blocking async" },
  { icon: "🎯", label: "MITRE ATT&CK mapped findings", sub: "T1562.001 · T1078 · T1547 · T1021 · T1059 · T1486 and more" },
  { icon: "📊", label: "Audit-ready PDF + Excel export", sub: "Branch-level reports with LAN diagram generation" },
];

export default function DeploymentMetrics() {
  return (
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500">DEPLOYMENT METRICS</p>
        <h4 className="mt-1 text-sm font-semibold text-white">Production deployment — enterprise banking environment</h4>
        <p className="mt-1 text-xs text-slate-400">
          Live enterprise deployment across a distributed banking environment. Not a demo — actual production tooling used in day-to-day security operations.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {STATS.map(({ val, label, sub, color, border, bg }) => (
          <div key={label} className={`rounded-xl border ${border} ${bg} p-3`}>
            <p className={`text-xl font-bold ${color}`}>{val}</p>
            <p className="mt-0.5 text-xs font-medium text-slate-200">{label}</p>
            <p className="text-[10px] text-slate-500">{sub}</p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="grid gap-2 sm:grid-cols-2">
        {HIGHLIGHTS.map(({ icon, label, sub }) => (
          <div key={label} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <span className="mt-0.5 text-base leading-none">{icon}</span>
            <div>
              <p className="text-xs font-semibold text-white">{label}</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-slate-400">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
