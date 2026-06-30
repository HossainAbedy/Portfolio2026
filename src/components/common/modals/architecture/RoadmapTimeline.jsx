const PHASES = [
  {
    num: "01",
    title: "Lock & Segment",
    window: "Months 1 – 3",
    status: "Foundation",
    color: "red",
    badge: "bg-red-500/20 text-red-300 border-red-500/40",
    acc: "text-red-300",
    dot: "bg-red-400",
    goal: "Eliminate flat networks, establish centralised logging, and isolate SWIFT. Highest-risk exposure addressed first.",
    items: [
      { title: "Zone segmentation", desc: "Deploy 11-zone architecture with default-deny routing between all zones. No flat network paths." },
      { title: "SWIFT isolation", desc: "Dedicated firewall for Z6, two-person operator rule, zero internet/email access, immutable audit logging." },
      { title: "Centralised log collection", desc: "FortiAnalyzer and Wazuh collection from all zones. Elasticsearch indexing and retention policy set." },
      { title: "Endpoint baseline", desc: "Kaspersky AV + Wazuh EDR agent deployed to all 1,500+ endpoints. Initial vulnerability scan." },
      { title: "Identity foundation", desc: "Active Directory GPO baseline applied — screen lock, password policy, software restriction, USB control." },
      { title: "Backup & DR", desc: "VMware replication to DR site configured. RPO and RTO targets verified with first DR drill." },
    ],
    outcomes: ["No flat network between any zone", "SWIFT fully air-gapped", "Centralised log visibility across all sites", "Endpoint AV + EDR baseline live"],
  },
  {
    num: "02",
    title: "Harden & Expand",
    window: "Months 4 – 8",
    status: "Hardening",
    color: "amber",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    acc: "text-amber-300",
    dot: "bg-amber-400",
    goal: "Strengthen identity controls, expand detection coverage, and close remaining hardening gaps on endpoints and network.",
    items: [
      { title: "PAM solution", desc: "CyberArk or Delinea deployed for privileged access. All admin sessions recorded. Just-in-time access enforced." },
      { title: "MFA everywhere", desc: "Multi-factor authentication enforced for all domain accounts, remote access, and privileged systems." },
      { title: "NAC deployment", desc: "Network Access Control enforces 802.1X on all LAN ports. Rogue device detection active." },
      { title: "Sysmon + enhanced EDR", desc: "Sysmon deployed to all Windows endpoints, log forwarded to Wazuh. Detection rule quality expanded." },
      { title: "Email security hardening", desc: "FortiMail sandbox tuning, DMARC enforcement, phishing simulation runs for all staff." },
      { title: "CIS benchmark hardening", desc: "CIS Level 1 applied to all workstations and servers. GPO-enforced compliance monitoring via Wazuh." },
    ],
    outcomes: ["PAM controls all privileged sessions", "MFA on 100% of accounts", "NAC blocks rogue devices", "CIS benchmark compliance tracked"],
  },
  {
    num: "03",
    title: "Automate & Mature",
    window: "Months 9 – 18",
    status: "Maturity",
    color: "emerald",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    acc: "text-emerald-300",
    dot: "bg-emerald-400",
    goal: "Achieve SOC automation, threat intelligence integration, and Zero Trust network access. Move from reactive to proactive security posture.",
    items: [
      { title: "SOAR implementation", desc: "Security Orchestration, Automation & Response integrated with HIVE. Playbooks automate tier-1 triage and enrichment." },
      { title: "Threat intelligence platform", desc: "Commercial TIP integrated with Wazuh and FortiAnalyzer. IOC feeds update detection rules automatically." },
      { title: "DLP deployment", desc: "Data Loss Prevention controls on email, web, and USB across HQ and branch endpoints." },
      { title: "Deception / honeypots", desc: "Canary tokens and honeypot systems deployed in Z4 and Z8. Any interaction triggers high-fidelity SOC alert." },
      { title: "Zero Trust Network Access", desc: "ZTNA replaces legacy VPN for remote access. Identity + device posture checked before every session." },
      { title: "AI / ML UEBA", desc: "User and Entity Behaviour Analytics deployed. Baseline-deviation alerting for insider threat and compromised credentials." },
    ],
    outcomes: ["Automated tier-1 alert triage", "IOC-driven detection updates", "DLP prevents data exfiltration", "ZTNA enforces least-privilege remote access"],
  },
];

export default function RoadmapTimeline() {
  return (
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500">IMPLEMENTATION ROADMAP</p>
        <h4 className="mt-1 text-sm font-semibold text-white">3-phase maturity roadmap</h4>
        <p className="mt-1 text-xs text-slate-400">
          A prioritised implementation path from baseline controls to full SOC automation and Zero Trust maturity — risk-ranked so the highest-exposure gaps are addressed first.
        </p>
      </div>

      {/* Phase cards */}
      <div className="space-y-4">
        {PHASES.map((phase, idx) => (
          <div key={phase.num} className="rounded-xl border border-white/10 bg-white/5">
            {/* Phase header */}
            <div className="flex items-start gap-4 p-4">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border font-mono text-sm font-bold ${phase.badge}`}>
                {phase.num}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h5 className="text-sm font-bold text-white">Phase {phase.num} — {phase.title}</h5>
                  <span className={`rounded-full border px-2 py-0.5 font-mono text-[9px] ${phase.badge}`}>{phase.status}</span>
                  <span className="ml-auto font-mono text-[10px] text-slate-500">{phase.window}</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">{phase.goal}</p>
              </div>
            </div>

            {/* Timeline items */}
            <div className="border-t border-white/10 px-4 pb-4 pt-3">
              <div className="relative space-y-3 pl-4">
                {/* Vertical line */}
                <div className={`absolute left-0 top-1 h-[calc(100%-8px)] w-px ${phase.dot} opacity-30`} />

                {phase.items.map((item, i) => (
                  <div key={item.title} className="relative">
                    <div className={`absolute -left-4 top-1.5 h-2 w-2 rounded-full ${phase.dot}`} />
                    <p className="text-xs font-semibold text-slate-200">{item.title}</p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="border-t border-white/10 px-4 pb-3 pt-2.5">
              <p className={`mb-1.5 font-mono text-[9px] tracking-[0.15em] ${phase.acc}`}>PHASE OUTCOMES</p>
              <div className="flex flex-wrap gap-1.5">
                {phase.outcomes.map((o) => (
                  <span key={o} className={`rounded-full border px-2.5 py-0.5 text-[10px] ${phase.badge}`}>{o}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Future enhancements */}
      <div className="rounded-xl border border-white/10 bg-black/20 p-4">
        <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-slate-500">FUTURE ENHANCEMENTS (POST PHASE 3)</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { icon: "★", label: "Cloud Security Gateway (SWG)", desc: "Secure web gateway for cloud app inspection and CASB integration" },
            { icon: "★", label: "HSM for Key Management", desc: "Hardware security module for cryptographic key storage and SWIFT signing" },
            { icon: "★", label: "Extended Honeypot Network", desc: "Production-grade deception fabric across all zones including Z6 SWIFT" },
            { icon: "★", label: "Continuous Compliance Monitoring", desc: "Automated evidence collection mapped to ISO 27001 and SWIFT CSP controls" },
          ].map(({ icon, label, desc }) => (
            <div key={label} className="flex gap-2 rounded-lg border border-white/10 bg-white/5 p-2.5">
              <span className="mt-0.5 shrink-0 text-xs text-amber-400">{icon}</span>
              <div>
                <p className="text-xs font-medium text-slate-200">{label}</p>
                <p className="text-[10px] text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
