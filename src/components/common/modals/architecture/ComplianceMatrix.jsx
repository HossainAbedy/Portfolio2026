const FRAMEWORKS = [
  { id: "iso",   label: "ISO 27001",           color: "text-emerald-300", short: "ISO" },
  { id: "nist",  label: "NIST CSF 2.0",        color: "text-sky-300",     short: "NIST" },
  { id: "bb",    label: "Bangladesh Bank ICT",  color: "text-amber-300",   short: "BB ICT" },
  { id: "swift", label: "SWIFT CSP",            color: "text-yellow-300",  short: "SWIFT" },
  { id: "pci",   label: "PCI DSS",              color: "text-violet-300",  short: "PCI" },
];

// ✔ = covered, ~ = partial, – = not applicable
const MATRIX = [
  {
    domain: "Network segmentation",
    zone: "Z2 – Z9",
    iso: "✔", nist: "✔", bb: "✔", swift: "✔", pci: "✔",
    note: "11-zone default-deny segmentation with no flat network paths",
  },
  {
    domain: "Perimeter firewall & IPS",
    zone: "Z2",
    iso: "✔", nist: "✔", bb: "✔", swift: "✔", pci: "✔",
    note: "FortiGate 1100E HA — NGFW, IPS, SSL inspection, Geo-IP",
  },
  {
    domain: "WAF & application security",
    zone: "Z3",
    iso: "✔", nist: "✔", bb: "✔", swift: "~", pci: "✔",
    note: "F5 BIG-IP with OWASP Top 10 ruleset on all public-facing endpoints",
  },
  {
    domain: "Email security",
    zone: "Z3",
    iso: "✔", nist: "✔", bb: "✔", swift: "–", pci: "~",
    note: "FortiMail 400F — AV, antispam, sandboxing; SWIFT zone has no email",
  },
  {
    domain: "SWIFT environment isolation",
    zone: "Z6",
    iso: "✔", nist: "✔", bb: "✔", swift: "✔", pci: "~",
    note: "Dedicated FW, two-person rule, zero internet/email, full audit logging",
  },
  {
    domain: "SIEM & log management",
    zone: "Z7",
    iso: "✔", nist: "✔", bb: "✔", swift: "✔", pci: "✔",
    note: "FortiAnalyzer + Wazuh + Elasticsearch — centralised, tamper-protected",
  },
  {
    domain: "Incident response",
    zone: "Z7",
    iso: "✔", nist: "✔", bb: "✔", swift: "✔", pci: "✔",
    note: "HIVE IR platform with documented playbooks and case management",
  },
  {
    domain: "Endpoint protection & EDR",
    zone: "Z8, Z9",
    iso: "✔", nist: "✔", bb: "✔", swift: "–", pci: "✔",
    note: "Kaspersky Security Center + Wazuh agent across 1,500+ endpoints",
  },
  {
    domain: "Identity & access management",
    zone: "CORE",
    iso: "✔", nist: "✔", bb: "✔", swift: "✔", pci: "✔",
    note: "Active Directory + GPO-enforced least-privilege access control",
  },
  {
    domain: "Physical access control",
    zone: "Z10",
    iso: "✔", nist: "✔", bb: "✔", swift: "✔", pci: "~",
    note: "ZKTeco biometric + door controllers + Hikvision CCTV, events → SIEM",
  },
  {
    domain: "Encryption in transit",
    zone: "Z2, Z5, Z6",
    iso: "✔", nist: "✔", bb: "✔", swift: "✔", pci: "✔",
    note: "TLS on all internal API/DB paths; IPSec on all branch tunnels",
  },
  {
    domain: "Business continuity & DR",
    zone: "DC / DR",
    iso: "✔", nist: "✔", bb: "✔", swift: "~", pci: "~",
    note: "VMware vSphere HA + async replication — RPO < 15 min, RTO < 1 hr",
  },
  {
    domain: "Vulnerability management",
    zone: "Z7, Z8, Z9",
    iso: "✔", nist: "✔", bb: "✔", swift: "~", pci: "✔",
    note: "Wazuh CVE scanning + Kaspersky patch management across all zones",
  },
  {
    domain: "Audit logging & retention",
    zone: "All zones",
    iso: "✔", nist: "✔", bb: "✔", swift: "✔", pci: "✔",
    note: "All zones ship logs to Z7; immutable storage; long-term retention",
  },
];

function Cell({ val, fw }) {
  const colors = {
    "✔": "text-emerald-400",
    "~": "text-amber-400",
    "–": "text-slate-600",
  };
  return (
    <td className="px-2 py-2.5 text-center text-sm" title={fw.label}>
      <span className={colors[val] ?? "text-slate-400"}>{val}</span>
    </td>
  );
}

export default function ComplianceMatrix() {
  return (
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500">COMPLIANCE MATRIX</p>
        <h4 className="mt-1 text-sm font-semibold text-white">Framework coverage mapping</h4>
        <p className="mt-1 text-xs text-slate-400">
          How each security domain maps to ISO 27001, NIST CSF 2.0, Bangladesh Bank ICT guidelines, SWIFT CSP, and PCI DSS.
        </p>
      </div>

      {/* Framework legend */}
      <div className="flex flex-wrap gap-2">
        {FRAMEWORKS.map((fw) => (
          <span key={fw.id} className={`rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium ${fw.color}`}>
            {fw.label}
          </span>
        ))}
      </div>

      {/* Matrix table */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20">
        <table className="w-full min-w-[560px] text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-2.5 pl-3 pr-2 font-mono text-[10px] tracking-[0.15em] text-slate-500">DOMAIN</th>
              <th className="px-2 py-2.5 font-mono text-[10px] tracking-[0.15em] text-slate-500">ZONE(S)</th>
              {FRAMEWORKS.map((fw) => (
                <th key={fw.id} className={`px-2 py-2.5 text-center font-mono text-[10px] tracking-[0.1em] ${fw.color}`}>
                  {fw.short}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {MATRIX.map((row) => (
              <tr key={row.domain} className="group transition hover:bg-white/3">
                <td className="py-2.5 pl-3 pr-2">
                  <p className="text-xs font-medium text-slate-200">{row.domain}</p>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-slate-500">{row.note}</p>
                </td>
                <td className="px-2 py-2.5">
                  <span className="whitespace-nowrap rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-slate-400">
                    {row.zone}
                  </span>
                </td>
                {FRAMEWORKS.map((fw) => (
                  <Cell key={fw.id} val={row[fw.id]} fw={fw} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-xs text-slate-500">
        <span><span className="text-emerald-400">✔</span> Fully covered</span>
        <span><span className="text-amber-400">~</span> Partially applicable</span>
        <span><span className="text-slate-600">–</span> Not applicable</span>
      </div>
    </div>
  );
}
