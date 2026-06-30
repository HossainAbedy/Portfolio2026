const BRANCH_COMPONENTS = [
  {
    layer: "SECURITY",
    color: "red",
    badge: "bg-red-500/20 text-red-300 border-red-500/40",
    dot: "bg-red-400",
    items: [
      { name: "FortiGate 600E", role: "Branch NGFW", detail: "Centralised policy from HQ — NGFW, IPS, app control. No manual rule changes at branch level." },
    ],
  },
  {
    layer: "CONNECTIVITY",
    color: "cyan",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    dot: "bg-cyan-400",
    items: [
      { name: "IPSec VPN / MPLS", role: "Encrypted WAN tunnel", detail: "All traffic encrypted to HQ Z2 perimeter. No branch-to-branch routing — all inter-branch traffic transits HQ." },
      { name: "Branch Switch / Router", role: "Local LAN", detail: "Layer 2/3 switching with VLAN segmentation for users, voice, cameras, and access control devices." },
    ],
  },
  {
    layer: "ENDPOINTS",
    color: "emerald",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    dot: "bg-emerald-400",
    items: [
      { name: "PC / Workstations", role: "User endpoints", detail: "Wazuh EDR agent installed. Kaspersky AV enforced via Security Center. Domain-joined with GPO policy from Core AD." },
      { name: "IP Phone (Fanvil)", role: "VoIP handset", detail: "On dedicated voice VLAN. SIP registered to HQ IP-PBX via Z9 VPN tunnel. QoS DSCP marking applied." },
    ],
  },
  {
    layer: "PHYSICAL SECURITY",
    color: "slate",
    badge: "bg-slate-500/20 text-slate-300 border-slate-500/40",
    dot: "bg-slate-400",
    items: [
      { name: "ZKTeco Access Control", role: "Biometric door access", detail: "Fingerprint + card authentication at all controlled entry points. Access events streamed to Z7 SIEM." },
      { name: "IP Camera (Hikvision / Dahua)", role: "CCTV surveillance", detail: "On isolated camera VLAN. Encrypted stream to Z10 NVR/VMS at HQ. Critical alerts → SOC." },
    ],
  },
];

const STATS = [
  { val: "200",     label: "Total branches",       color: "text-cyan-300"    },
  { val: "1,500+",  label: "Branch endpoints",      color: "text-violet-300"  },
  { val: "IPSec",   label: "Tunnel encryption",     color: "text-emerald-300" },
  { val: "0",       label: "B2B routing paths",     color: "text-red-300"     },
  { val: "< 1s",    label: "FortiGate HA failover", color: "text-amber-300"   },
  { val: "Z7",      label: "Centralised monitoring",color: "text-teal-300"    },
];

export default function BranchTopology() {
  return (
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500">BRANCH TOPOLOGY</p>
        <h4 className="mt-1 text-sm font-semibold text-white">Per-branch security blueprint — 200 sites</h4>
        <p className="mt-1 text-xs text-slate-400">
          Every branch follows the same security blueprint. Policy is managed centrally at HQ; branches enforce locally via FortiGate 600E. No branch has a direct path to any other branch.
        </p>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {STATS.map(({ val, label, color }) => (
          <div key={label} className="rounded-lg border border-white/10 bg-black/20 p-2.5 text-center">
            <p className={`text-base font-bold ${color}`}>{val}</p>
            <p className="mt-0.5 text-[9px] leading-tight text-slate-500">{label}</p>
          </div>
        ))}
      </div>

      {/* Visual topology diagram */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4">
        <p className="mb-3 font-mono text-[10px] tracking-[0.18em] text-slate-500">BRANCH ARCHITECTURE — TEMPLATE (×200)</p>
        <svg viewBox="0 0 620 200" width="100%" style={{ minWidth: 480 }}>
          {/* HQ box */}
          <rect x={0} y={70} width={120} height={60} rx={6} fill="rgba(34,211,238,.08)" stroke="rgba(34,211,238,.35)" strokeWidth={0.8} />
          <text x={60} y={93} textAnchor="middle" fontSize={10} fontWeight={600} fill="#22d3ee" fontFamily="system-ui">HQ · Z2</text>
          <text x={60} y={108} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.4)" fontFamily="system-ui">Perimeter FW</text>
          <text x={60} y={121} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.4)" fontFamily="system-ui">+ Z7 SOC</text>

          {/* IPSec tunnel line */}
          <line x1={120} y1={100} x2={210} y2={100} stroke="rgba(34,211,238,.4)" strokeWidth={2} strokeDasharray="6,3" />
          <text x={165} y={91} textAnchor="middle" fontSize={9} fill="rgba(34,211,238,0.6)" fontFamily="monospace">IPSec / MPLS</text>

          {/* FortiGate box */}
          <rect x={210} y={75} width={100} height={50} rx={6} fill="rgba(248,113,113,.1)" stroke="rgba(248,113,113,.4)" strokeWidth={0.8} />
          <text x={260} y={96} textAnchor="middle" fontSize={10} fontWeight={600} fill="#f87171" fontFamily="system-ui">FortiGate 600E</text>
          <text x={260} y={113} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.4)" fontFamily="system-ui">Branch NGFW</text>

          {/* Switch */}
          <line x1={310} y1={100} x2={360} y2={100} stroke="rgba(255,255,255,.15)" strokeWidth={1.2} />
          <rect x={360} y={80} width={80} height={40} rx={5} fill="rgba(113,113,122,.1)" stroke="rgba(113,113,122,.35)" strokeWidth={0.8} />
          <text x={400} y={98} textAnchor="middle" fontSize={9} fontWeight={600} fill="#a1a1aa" fontFamily="system-ui">Switch</text>
          <text x={400} y={111} textAnchor="middle" fontSize={8.5} fill="rgba(255,255,255,0.3)" fontFamily="system-ui">VLAN trunk</text>

          {/* Device branches */}
          {[
            { x: 490, y: 18,  label: "PC / Users",   sub: "Wazuh + Kaspersky",  fill: "rgba(52,211,153,.08)",  stroke: "rgba(52,211,153,.35)"  },
            { x: 490, y: 68,  label: "IP Phone",      sub: "Fanvil · VoIP VLAN", fill: "rgba(129,140,248,.08)", stroke: "rgba(129,140,248,.35)" },
            { x: 490, y: 118, label: "ZKTeco",        sub: "Biometric access",   fill: "rgba(100,116,139,.1)",  stroke: "rgba(100,116,139,.35)" },
            { x: 490, y: 168, label: "IP Camera",     sub: "Hikvision / Dahua",  fill: "rgba(100,116,139,.1)",  stroke: "rgba(100,116,139,.35)" },
          ].map(({ x, y, label, sub, fill, stroke }) => (
            <g key={label}>
              <line x1={440} y1={100} x2={490} y2={y + 18} stroke="rgba(255,255,255,.1)" strokeWidth={1} />
              <rect x={x} y={y} width={125} height={36} rx={5} fill={fill} stroke={stroke} strokeWidth={0.8} />
              <text x={x + 62} y={y + 15} textAnchor="middle" fontSize={10} fontWeight={600} fill="#f0f4ff" fontFamily="system-ui">{label}</text>
              <text x={x + 62} y={y + 27} textAnchor="middle" fontSize={8.5} fill="rgba(255,255,255,0.35)" fontFamily="system-ui">{sub}</text>
            </g>
          ))}
        </svg>
      </div>

      {/* Component breakdown */}
      <div className="space-y-2">
        {BRANCH_COMPONENTS.map((layer) => (
          <div key={layer.layer} className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="mb-2 flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${layer.dot}`} />
              <span className={`font-mono text-[10px] tracking-[0.18em]`} style={{ color: "inherit" }}>
                <span className={`font-mono text-[10px] tracking-[0.18em] ${layer.badge.split(" ")[1]}`}>{layer.layer}</span>
              </span>
            </div>
            <div className="space-y-2">
              {layer.items.map((item) => (
                <div key={item.name} className="rounded-lg border border-white/10 bg-black/20 p-2.5">
                  <div className="flex items-start gap-2">
                    <span className={`mt-0.5 shrink-0 rounded border px-1.5 py-0.5 font-mono text-[8px] ${layer.badge}`}>
                      {layer.layer.split(" ")[0]}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">{item.name}</p>
                      <p className={`text-[10px] ${layer.badge.split(" ")[1]}`}>{item.role}</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-400">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key rule callout */}
      <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3">
        <p className="font-mono text-[10px] tracking-[0.2em] text-red-400">DESIGN RULE</p>
        <p className="mt-1 text-xs text-slate-300">
          No branch-to-branch routing exists anywhere in this design. All inter-branch traffic — including internal calls and file transfers — must transit the HQ core network via the Z2 perimeter firewall. This enforces centralised inspection on 100% of east-west traffic.
        </p>
      </div>
    </div>
  );
}
