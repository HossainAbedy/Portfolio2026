const LAYERS = [
  {
    id: "perimeter",
    label: "Perimeter Defence",
    color: "red",
    badge: "bg-red-500/20 text-red-300 border-red-500/40",
    acc: "text-red-300",
    dot: "bg-red-400",
    tools: [
      { name: "FortiGate 1100E", role: "Next-generation firewall (NGFW)", detail: "Active-passive HA cluster — IPS, SSL inspection, application control, Geo-IP, VPN termination" },
      { name: "F5 BIG-IP", role: "WAF / Application Delivery Controller", detail: "OWASP Top 10 enforcement, ADC load balancing, SSL offload, L7 inspection" },
      { name: "FortiMail 400F", role: "Email Security Gateway", detail: "AV, antispam, sandboxing, email authentication (SPF / DKIM / DMARC)" },
    ],
  },
  {
    id: "dmz",
    label: "DMZ Services",
    color: "amber",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    acc: "text-amber-300",
    dot: "bg-amber-400",
    tools: [
      { name: "Reverse Proxy", role: "Web Server / Nginx", detail: "Hides internal server topology; terminates public HTTPS; forwards to Z4 only" },
      { name: "API Gateway", role: "Public API Management", detail: "Rate limiting, API authentication, request validation before reaching application tier" },
    ],
  },
  {
    id: "detection",
    label: "Detection & Monitoring",
    color: "cyan",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    acc: "text-cyan-300",
    dot: "bg-cyan-400",
    tools: [
      { name: "FortiAnalyzer 400E", role: "Centralised Log Analytics", detail: "Aggregates FortiGate logs, builds structured datasets, powers SOC dashboards and daily reports" },
      { name: "Wazuh", role: "SIEM / XDR / EDR", detail: "Agent-based threat detection across 1,500+ endpoints; MITRE ATT&CK-mapped rule engine" },
      { name: "Elasticsearch", role: "Log Storage & Search", detail: "Scalable log indexing and search backend for all zone telemetry; supports long-term retention" },
    ],
  },
  {
    id: "response",
    label: "Incident Response",
    color: "violet",
    badge: "bg-violet-500/20 text-violet-300 border-violet-500/40",
    acc: "text-violet-300",
    dot: "bg-violet-400",
    tools: [
      { name: "HIVE", role: "Incident Response Platform", detail: "Case management, playbook automation, alert enrichment, and responder task coordination" },
    ],
  },
  {
    id: "endpoint",
    label: "Endpoint Security",
    color: "emerald",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    acc: "text-emerald-300",
    dot: "bg-emerald-400",
    tools: [
      { name: "Kaspersky Security Center", role: "Centralised Endpoint Protection", detail: "AV, EDR, patch management, and policy enforcement across all HQ and branch workstations" },
      { name: "Wazuh Agent", role: "EDR + File Integrity Monitoring", detail: "Installed on all 1,500+ endpoints; real-time telemetry, FIM, vulnerability detection" },
    ],
  },
  {
    id: "identity",
    label: "Identity & Access",
    color: "sky",
    badge: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    acc: "text-sky-300",
    dot: "bg-sky-400",
    tools: [
      { name: "Active Directory", role: "Identity Provider", detail: "Centralised identity, group policy enforcement (GPO), and role-based access control for all users" },
      { name: "ZKTeco", role: "Physical Access Control", detail: "Biometric fingerprint authentication at all controlled entry points across HQ and 200 branches" },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure & Resilience",
    color: "purple",
    badge: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    acc: "text-purple-300",
    dot: "bg-purple-400",
    tools: [
      { name: "VMware vSphere", role: "Virtualisation Platform", detail: "N+1 ESXi cluster running CBS and supporting VMs; HA + vMotion for zero-downtime maintenance" },
      { name: "vSphere Replication", role: "DR Replication Engine", detail: "Sync/async replication to warm-standby DR site; RPO < 15 min, RTO < 1 hour" },
      { name: "NTP / Syslog Server", role: "Time & Log Infrastructure", detail: "Authoritative NTP for all zones ensures consistent log timestamps; centralised syslog relay to Z7" },
    ],
  },
];

export default function SecurityStack() {
  return (
    <div className="space-y-3">
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500">SECURITY STACK</p>
        <h4 className="mt-1 text-sm font-semibold text-white">Tools by security layer</h4>
        <p className="mt-1 text-xs text-slate-400">
          Fifteen tools across seven defence layers — each selected to address a specific control objective within the zone architecture.
        </p>
      </div>

      <div className="space-y-2">
        {LAYERS.map((layer) => (
          <details key={layer.id} className="group rounded-xl border border-white/10 bg-white/5" open={layer.id === "detection"}>
            <summary className="flex cursor-pointer items-center gap-3 p-3 select-none">
              <span className={`h-2 w-2 shrink-0 rounded-full ${layer.dot}`} />
              <span className={`font-mono text-[10px] tracking-[0.18em] ${layer.acc}`}>{layer.label.toUpperCase()}</span>
              <span className="ml-auto font-mono text-[10px] text-slate-600">{layer.tools.length} tool{layer.tools.length > 1 ? "s" : ""}</span>
              <svg className="h-3.5 w-3.5 shrink-0 text-slate-500 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="border-t border-white/10 px-3 pb-3 pt-2 space-y-2">
              {layer.tools.map((tool) => (
                <div key={tool.name} className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <div className="flex items-start gap-2">
                    <span className={`mt-0.5 shrink-0 rounded border px-1.5 py-0.5 font-mono text-[9px] ${layer.badge}`}>
                      {layer.label.split(" ")[0].toUpperCase()}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{tool.name}</p>
                      <p className={`text-xs ${layer.acc}`}>{tool.role}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">{tool.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>

      {/* Summary strip */}
      <div className="rounded-xl border border-white/10 bg-black/20 p-3">
        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { val: "15+", label: "Security tools" },
            { val: "7",   label: "Defence layers" },
            { val: "11",  label: "Isolated zones" },
            { val: "1,500+", label: "Endpoints covered" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-lg font-bold text-cyan-300">{val}</p>
              <p className="text-[10px] text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
