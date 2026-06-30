import { useState } from "react";

// ── colour lookup (full Tailwind class strings so JIT keeps them) ─────────────
const ZC = {
  Z1:   { badge: "bg-slate-500/20 text-slate-300 border-slate-500/40",   acc: "text-slate-300",   dot: "bg-slate-400"   },
  Z2:   { badge: "bg-red-500/20 text-red-300 border-red-500/40",         acc: "text-red-300",     dot: "bg-red-400"     },
  Z3:   { badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",   acc: "text-amber-300",   dot: "bg-amber-400"   },
  Z4:   { badge: "bg-sky-500/20 text-sky-300 border-sky-500/40",         acc: "text-sky-300",     dot: "bg-sky-400"     },
  Z5:   { badge: "bg-violet-500/20 text-violet-300 border-violet-500/40",acc: "text-violet-300",  dot: "bg-violet-400"  },
  Z6:   { badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",acc: "text-yellow-300",  dot: "bg-yellow-400"  },
  Z7:   { badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",      acc: "text-cyan-300",    dot: "bg-cyan-400"    },
  Z8:   { badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40", acc: "text-emerald-300", dot: "bg-emerald-400" },
  Z9:   { badge: "bg-teal-500/20 text-teal-300 border-teal-500/40",      acc: "text-teal-300",    dot: "bg-teal-400"    },
  Z10:  { badge: "bg-slate-500/20 text-slate-300 border-slate-500/40",   acc: "text-slate-300",   dot: "bg-slate-400"   },
  Z11:  { badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",acc: "text-indigo-300",  dot: "bg-indigo-400"  },
  CORE: { badge: "bg-zinc-500/20 text-zinc-300 border-zinc-500/40",      acc: "text-zinc-300",    dot: "bg-zinc-400"    },
  DC:   { badge: "bg-purple-500/20 text-purple-300 border-purple-500/40",acc: "text-purple-300",  dot: "bg-purple-400"  },
};

// ── zone data ──────────────────────────────────────────────────────────────────
const ZONES = [
  {
    id: "Z1", short: "Internet", name: "Internet Zone", status: "EXTERNAL",
    desc: "External-facing entry with triple-ISP redundancy and cloud-based DDoS scrubbing. No internal system is directly reachable — all traffic is normalised before the perimeter.",
    comps: [
      { type: "PROVIDER", name: "ISP 1", sub: "Primary uplink" },
      { type: "PROVIDER", name: "ISP 2", sub: "Secondary uplink" },
      { type: "PROVIDER", name: "ISP 3", sub: "Tertiary uplink" },
      { type: "SECURITY", name: "DDoS Protection", sub: "Cloud scrubbing layer" },
    ],
    caps: ["Multi-ISP BGP redundancy", "Cloud DDoS scrubbing", "Traffic normalisation", "Volumetric attack mitigation"],
    inbound: ["External HTTP/HTTPS requests", "SMTP from internet", "API consumer traffic", "SWIFT partner connections"],
    controls: ["Cloud volumetric DDoS scrubbing", "Multi-WAN BGP with automatic failover", "Traffic normalisation before perimeter", "ISP-level upstream filtering"],
    outbound: ["Scrubbed traffic → Z2 Perimeter FW", "Branch VPN initiation → Z2"],
    stack: ["ISP connectivity", "BGP routing", "Cloud DDoS", "Multi-WAN failover"],
  },
  {
    id: "Z2", short: "Perimeter FW", name: "Perimeter Firewall Layer", status: "ACTIVE HA",
    desc: "First internal line of defence. FortiGate 1100E in active-passive HA cluster enforces NGFW, IPS, application control, SSL deep inspection, Geo-IP, and terminates all 200 branch VPN tunnels.",
    comps: [
      { type: "FIREWALL", name: "FortiGate 1100E", sub: "Active — NGFW + IPS + WAF + VPN" },
      { type: "FIREWALL (HA)", name: "FortiGate 1100E", sub: "Passive standby — sub-second failover" },
    ],
    caps: ["NGFW policy", "IPS signatures", "Application control", "SSL deep inspection", "Geo-IP blocking", "VPN termination", "SD-WAN"],
    inbound: ["Scrubbed internet traffic from Z1", "IPSec/MPLS VPN from 200 branches (Z9)", "Management feed from Z7"],
    controls: ["NGFW policy enforcement on all traffic", "IPS signature + anomaly detection", "Full SSL/TLS deep packet inspection", "Geo-IP country-level blocking", "HA cluster — sub-second failover", "Application-layer visibility"],
    outbound: ["Permitted HTTP/HTTPS → Z3 DMZ", "SMTP → Z3 FortiMail 400F", "All events → Z7 FortiAnalyzer"],
    stack: ["FortiGate 1100E", "FortiOS", "HA cluster", "IPSec VPN", "MPLS", "SD-WAN"],
  },
  {
    id: "Z3", short: "DMZ", name: "DMZ — De-Militarized Zone", status: "CONTROLLED",
    desc: "Controlled exposure layer for all public-facing services. WAF, load balancer, API gateway, and mail filter sit here — never with a direct path to the application or database zones.",
    comps: [
      { type: "WAF / ADC / LTM", name: "F5 BIG-IP", sub: "WAF + load balancer + SSL offload" },
      { type: "WEB", name: "Web Server", sub: "Reverse proxy" },
      { type: "GATEWAY", name: "Public API Gateway", sub: "Rate limiting + auth" },
      { type: "MAIL GATEWAY", name: "FortiMail 400F", sub: "Email security gateway" },
    ],
    caps: ["OWASP WAF rules", "ADC load balancing", "SSL offload", "Email AV + antispam", "API rate limiting", "Reverse proxy isolation"],
    inbound: ["HTTP/HTTPS from Z2 perimeter", "SMTP from Z2 (internet mail)", "API calls from internet consumers"],
    controls: ["WAF OWASP Top 10 rule enforcement", "F5 ADC health-check load balancing", "Email AV, antispam, and sandboxing via FortiMail", "API authentication and rate limiting", "Reverse proxy — no direct app server exposure", "All DMZ traffic logged → Z7"],
    outbound: ["App requests → Z4 Application Zone", "Filtered mail → internal mail server", "API calls → Z4 internal APIs"],
    stack: ["F5 BIG-IP WAF", "FortiMail 400F", "Reverse proxy", "API gateway", "DMZ VLANs"],
  },
  {
    id: "Z4", short: "Application", name: "Application Zone", status: "INTERNAL",
    desc: "Core banking application layer. CBS servers run on a VMware ESXi HA cluster. Middleware and internal APIs connect CBS to supporting services. No direct internet path — all access flows through the DMZ.",
    comps: [
      { type: "CBS APP", name: "CBS App Servers", sub: "VMware cluster — HA + vMotion" },
      { type: "MIDDLEWARE", name: "Middleware / Integration", sub: "ESB + message broker" },
      { type: "API", name: "Internal APIs", sub: "Service layer" },
      { type: "HYPERVISOR", name: "VMware ESXi Cluster", sub: "HA — automatic failover" },
    ],
    caps: ["CBS core banking", "VMware HA + vMotion", "Service integration", "Internal API layer", "App-tier VLAN isolation"],
    inbound: ["Permitted requests from Z3 DMZ only", "Management from Z7 Security Ops"],
    controls: ["No direct internet path — all access via DMZ", "App-tier VLAN isolation from all zones", "VMware vSphere security controls", "Application-level access control", "Audit logging → Z7 SIEM"],
    outbound: ["DB queries → Z5 Database Zone", "Auth requests → Core AD/DNS", "Application logs → Z7 FortiAnalyzer + Wazuh"],
    stack: ["VMware vSphere", "VMware ESXi", "CBS application", "Middleware ESB", "Internal REST APIs"],
  },
  {
    id: "Z5", short: "Database", name: "Database Zone — Restricted", status: "RESTRICTED",
    desc: "Highly restricted data zone on an isolated VLAN. CBS primary, reporting, and archive databases have no internet path and no direct user or admin access — only Z4 application servers can connect.",
    comps: [
      { type: "PRIMARY DB", name: "CBS Database", sub: "Production — primary" },
      { type: "ANALYTICS", name: "Reporting DB", sub: "Analytics + reporting" },
      { type: "ARCHIVE", name: "Archive DB", sub: "Long-term data retention" },
    ],
    caps: ["Isolated DB VLAN", "Default-deny all", "Encryption at rest", "Z4-only access", "DB activity monitoring"],
    inbound: ["SQL queries from Z4 Application Zone only — no other source permitted"],
    controls: ["Isolated DB VLAN — default deny from all zones except Z4", "Access only from Z4 via authorised ports", "Encryption at rest and in transit (TLS)", "DB activity monitoring → Z7 SIEM", "No direct admin or user access"],
    outbound: ["Replication → DR site", "Audit logs → Z7 Security Ops"],
    stack: ["CBS database engine", "Reporting database", "Archive storage", "DB VLAN isolation", "TLS encryption at rest"],
  },
  {
    id: "Z6", short: "SWIFT Zone", name: "SWIFT Zone — Highly Restricted", status: "ISOLATED",
    desc: "Fully air-gapped zone for SWIFT interbank messaging. Zero email, zero internet, zero shared infrastructure. Dedicated firewall and two-person operator rule enforce SWIFT CSP mandatory requirements.",
    comps: [
      { type: "MESSAGING", name: "SWIFT Alliance Access", sub: "Interbank message interface" },
      { type: "GATEWAY", name: "SWIFT Gateway", sub: "Message processing + routing" },
      { type: "FIREWALL", name: "Dedicated Firewall", sub: "Zone-specific — no shared policies" },
    ],
    caps: ["SWIFT CSP aligned", "Dedicated firewall", "Two-person operator rule", "Zero internet path", "Zero email access", "Full audit logging"],
    inbound: ["SWIFT partner traffic via dedicated link only — no internet, no email"],
    controls: ["Dedicated firewall — no shared policies with any other zone", "Two-person operator rule for all SWIFT operations", "All SWIFT messages logged and audited", "SWIFT CSP mandatory controls in full", "Physical and logical isolation from all other zones", "No web browsing or email from SWIFT workstations"],
    outbound: ["SWIFT partner network only (dedicated link)", "Audit logs → Z7 Security Ops (read-only feed)"],
    stack: ["SWIFT Alliance Access", "SWIFT Gateway", "Dedicated firewall", "SWIFT CSP controls", "Immutable audit log"],
  },
  {
    id: "Z7", short: "Security Ops", name: "Security Operations & Management", status: "OPERATIONAL",
    desc: "Central nervous system of the entire architecture. Every zone ships logs here. FortiAnalyzer, Wazuh, Elasticsearch, HIVE, and Kaspersky provide detection, correlation, incident response, and endpoint visibility.",
    comps: [
      { type: "LOG ANALYTICS", name: "FortiAnalyzer 400E", sub: "Centralised log correlation" },
      { type: "SIEM / XDR", name: "Wazuh", sub: "SIEM + XDR + EDR" },
      { type: "LOG STORAGE", name: "Elasticsearch", sub: "Log storage + search" },
      { type: "IR PLATFORM", name: "HIVE", sub: "Incident response & case mgmt" },
      { type: "ENDPOINT", name: "Kaspersky Security Center", sub: "Centralised endpoint security" },
      { type: "INFRA", name: "NTP / Syslog / Backup", sub: "Supporting services" },
    ],
    caps: ["Centralised log collection", "MITRE ATT&CK detection", "Alert triage", "Incident response", "EDR endpoint visibility", "Threat correlation", "SOC dashboards"],
    inbound: ["Logs from all zones (Z1–Z11, DC, DR)", "FortiGate NGFW + IPS events", "Wazuh agent telemetry from all endpoints", "SWIFT audit log feed"],
    controls: ["Log integrity and tamper protection", "Role-based SOC access control", "MITRE ATT&CK-mapped detection rules", "IR workflow via HIVE", "Kaspersky endpoint policy push to all devices", "NTP sync authority for all zones"],
    outbound: ["Alerts → SOC analysts (NetSecOps)", "IR cases → HIVE workflows", "Kaspersky policies → all endpoints", "NTP sync → all zones"],
    stack: ["FortiAnalyzer 400E", "Wazuh SIEM/XDR", "Elasticsearch", "HIVE IR", "Kaspersky Security Center", "NTP/Syslog"],
  },
  {
    id: "Z8", short: "HQ User Network", name: "Internal User Network — Head Office", status: "INTERNAL",
    desc: "Segmented HQ user network with department-specific VLANs. Finance, Business, IT, and Security teams are isolated. VoIP, printing, and Wi-Fi run on separate VLANs enforced at the access layer with 802.1X.",
    comps: [
      { type: "VLAN", name: "Finance VLAN", sub: "Finance department users" },
      { type: "VLAN", name: "Business VLAN", sub: "General business users" },
      { type: "VLAN", name: "IT VLAN", sub: "IT staff + admins" },
      { type: "VLAN", name: "Security VLAN", sub: "SOC + security team" },
      { type: "VOICE", name: "VoIP Network", sub: "Fanvil IP phones" },
      { type: "INFRA", name: "Access Layer Switches", sub: "L2/L3 policy enforcement" },
    ],
    caps: ["VLAN segmentation", "802.1X auth", "GPO-enforced policy", "VoIP VLAN isolation", "Wi-Fi segmentation", "Endpoint EDR"],
    inbound: ["User auth via Core AD", "VoIP signalling from Z11", "Policy push from Core GPO"],
    controls: ["VLAN isolation by department — no cross-VLAN access without FW approval", "802.1X NAC on all ports", "GPO-enforced endpoint configuration", "Wi-Fi on isolated SSID + separate VLAN", "Wazuh agent on all endpoints → Z7 telemetry"],
    outbound: ["App access → Z4 via Core Switches", "Internet browsing → Z2 (inspected)", "VoIP → Z11", "Endpoint telemetry → Z7"],
    stack: ["VLAN segmentation", "802.1X NAC", "Fanvil VoIP", "Access layer switches", "GPO / AD", "Wazuh agents"],
  },
  {
    id: "Z9", short: "Branch Network", name: "Branch Network — 200 Branches", status: "OPERATIONAL",
    desc: "200 distributed branches each running a dedicated FortiGate 600E for local NGFW enforcement. All traffic transits back to HQ via IPSec/MPLS — there is no branch-to-branch routing path anywhere in the design.",
    comps: [
      { type: "FIREWALL", name: "FortiGate 600E", sub: "Per-branch NGFW — centralised policy" },
      { type: "NETWORK", name: "Branch Switch / Router", sub: "Local LAN" },
      { type: "ENDPOINT", name: "PC / User Workstations", sub: "Wazuh EDR agent" },
      { type: "VOICE", name: "IP Phone (Fanvil)", sub: "VoIP handsets" },
      { type: "ACCESS CONTROL", name: "ZKTeco", sub: "Biometric access" },
      { type: "CAMERA", name: "IP Camera", sub: "Hikvision / Dahua surveillance" },
    ],
    caps: ["IPSec VPN / MPLS", "Centralised policy push", "No branch-to-branch routing", "Local NGFW", "EDR on all endpoints", "Physical + logical security"],
    inbound: ["User traffic from branch devices", "Management and policy from Z7 / Core HQ", "VPN keepalive from Z2"],
    controls: ["FortiGate 600E NGFW per branch with centralised policy from HQ", "IPSec/MPLS encrypted tunnels — no plaintext branch traffic", "No branch-to-branch routing", "Wazuh agent on all workstations → EDR to Z7", "ZKTeco biometric enforces physical access", "Camera feeds → Z10 NVR/VMS"],
    outbound: ["All traffic → HQ via IPSec/MPLS (Z2)", "Endpoint logs → Z7 via tunnel", "Camera feeds → Z10 NVR"],
    stack: ["FortiGate 600E", "IPSec VPN", "MPLS", "Wazuh agent", "ZKTeco", "Hikvision / Dahua", "Fanvil"],
  },
  {
    id: "Z10", short: "Physical Security", name: "Physical Security Zone", status: "OPERATIONAL",
    desc: "Centralised physical security management covering biometric access, IP surveillance, door controllers, and NVR/VMS storage across HQ and all 200 branches. All events feed into Z7 SIEM in real time.",
    comps: [
      { type: "BIOMETRICS", name: "ZKTeco", sub: "Fingerprint + card access" },
      { type: "CAMERA", name: "Hikvision / Dahua", sub: "IP camera network" },
      { type: "CONTROL", name: "Door Controllers", sub: "Physical access management" },
      { type: "STORAGE", name: "NVR / VMS", sub: "Video recording + management" },
    ],
    caps: ["Biometric authentication", "IP camera surveillance", "Centralised NVR/VMS", "Door control", "Physical event logging", "Z7 SIEM integration"],
    inbound: ["Camera streams from Z9 branches", "Biometric events from ZKTeco readers", "Door control signals from all sites"],
    controls: ["Biometric authentication for all controlled doors", "Encrypted camera streams", "NVR access restricted to Z7/SOC roles", "Physical access events logged → Z7 SIEM in real time", "Dedicated physical security VLAN"],
    outbound: ["Access logs → Z7 SIEM", "Video feeds → NVR/VMS storage", "Critical physical alerts → SOC team"],
    stack: ["ZKTeco biometric", "Hikvision IP cameras", "Dahua IP cameras", "Door controllers", "NVR/VMS"],
  },
  {
    id: "Z11", short: "Voice Network", name: "Voice Network", status: "OPERATIONAL",
    desc: "Isolated voice network for all IP telephony across HQ and branches. SBC enforces session border control between internal VoIP and PSTN. A dedicated VLAN prevents QoS degradation and cross-traffic risks.",
    comps: [
      { type: "ENDPOINT", name: "Fanvil IP Phones", sub: "HQ + all 200 branches" },
      { type: "SERVER", name: "VoIP Server / IP-PBX", sub: "Call routing + PBX functions" },
      { type: "BORDER", name: "SBC", sub: "Session border controller — PSTN" },
    ],
    caps: ["Dedicated voice VLAN", "SBC SIP security", "QoS / DSCP enforcement", "Session border control", "Call recording", "PSTN interface"],
    inbound: ["SIP from branch phones via Z9 VPN", "External PSTN calls via SBC", "Internal call requests from Z8 HQ users"],
    controls: ["Dedicated voice VLAN — isolated from data networks", "SBC enforces SIP security", "QoS DSCP tagging ensures voice priority", "No internet SIP without SBC mediation", "Call detail records logged for audit"],
    outbound: ["External PSTN calls via SBC", "Inter-branch and HQ-to-branch calls"],
    stack: ["Fanvil IP phones", "IP-PBX / VoIP server", "SBC session border controller", "SIP trunking", "QoS / DSCP"],
  },
  {
    id: "CORE", short: "Core Network", name: "Core Network + Servers & Services", status: "HA ACTIVE",
    desc: "Redundant core switching fabric connecting all internal zones. Hosts Active Directory, DNS, DHCP, file server, mail server, and CBS system server. All inter-zone traffic transits the core.",
    comps: [
      { type: "NETWORK", name: "Core Switches", sub: "Redundant HA pair" },
      { type: "IDENTITY", name: "AD / DNS / DHCP", sub: "Windows Server 2019" },
      { type: "FILE", name: "File Server", sub: "Centralised file services" },
      { type: "MAIL", name: "Mail Server", sub: "Internal mail relay" },
      { type: "CBS", name: "CBS System Server", sub: "Core banking system" },
    ],
    caps: ["Redundant core switching", "AD / DNS / DHCP", "Centralised file services", "Internal mail relay", "L3 inter-zone routing"],
    inbound: ["Traffic from all internal zones (Z4, Z5, Z8, Z9)", "User authentication requests", "DNS/DHCP from all endpoints"],
    controls: ["Core switch HA — automatic failover", "AD-enforced identity and access management", "DNS filtering for internal resolution", "GPO policy distribution to all domain endpoints"],
    outbound: ["Permitted traffic to Z4 Application Zone", "AD/GPO policy → all endpoints", "DNS → all zones"],
    stack: ["Core switches (HA)", "Windows Server 2019 AD", "DNS", "DHCP", "File server", "CBS system server"],
  },
  {
    id: "DC", short: "Data Center / DR", name: "Data Center Primary + DR Site", status: "HA ACTIVE",
    desc: "Primary DC runs VMware vSphere on an N+1 ESXi cluster with SAN/NAS storage. Sync/async replication keeps the warm-standby DR site current. RPO < 15 minutes, RTO < 1 hour — verified by regular DR drills.",
    comps: [
      { type: "HYPERVISOR", name: "VMware vSphere", sub: "Primary DC — production" },
      { type: "COMPUTE", name: "ESXi Host Cluster", sub: "N+1 — HA + vMotion" },
      { type: "STORAGE", name: "SAN / NAS", sub: "Primary storage tier" },
      { type: "BACKUP", name: "Backup Storage", sub: "Local backup + snapshot" },
      { type: "DR HYPERVISOR", name: "VMware vSphere", sub: "DR site — warm standby" },
      { type: "DR STORAGE", name: "Replicated Storage", sub: "Sync / async replication" },
    ],
    caps: ["VMware HA failover", "vMotion live migration", "Sync + async replication", "RPO < 15 min", "RTO < 1 hr", "N+1 cluster"],
    inbound: ["VM workload traffic from Z4", "Storage I/O from application tier", "Replication traffic from primary to DR"],
    controls: ["VMware HA automatic failover on host failure", "Storage replication monitoring with RPO alerting", "Backup integrity verification on schedule", "Separate DR network path", "Regular DR test exercises"],
    outbound: ["VM services → Z4 Application Zone", "Replicated state → DR site", "Backup data → Z7 Backup Server"],
    stack: ["VMware vSphere", "VMware ESXi", "SAN/NAS storage", "vSphere replication", "VMware HA", "Backup solution"],
  },
];

// ── SVG Overview ──────────────────────────────────────────────────────────────
function ArchitectureOverview({ onSelectZone }) {
  const stroke = "rgba(255,255,255,0.15)";
  const textPrimary = "#f0f4ff";
  const textMuted = "rgba(255,255,255,0.4)";

  const BOX = (id, x, y, w, h, l1, l2, fill, border) => (
    <g key={id} style={{ cursor: "pointer" }} onClick={() => onSelectZone(id)}>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={fill} stroke={border} strokeWidth={0.8} />
      <text x={x + 10} y={y + 20} fontSize={10.5} fontWeight={600} fill={textPrimary} fontFamily="system-ui">{l1}</text>
      {l2 && <text x={x + 10} y={y + 36} fontSize={9.5} fill={textMuted} fontFamily="system-ui">{l2}</text>}
    </g>
  );

  const ARROW = (x1, y1, x2, y2) => (
    <path d={`M${x1},${y1} L${x1},${(y1 + y2) / 2} L${x2},${(y1 + y2) / 2} L${x2},${y2}`}
      fill="none" stroke={stroke} strokeWidth={1.2} markerEnd="url(#ah)" />
  );
  const LINE = (x1, y1, x2, y2) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={1.2} markerEnd="url(#ah)" />
  );
  const DASH = (x1, y1, x2, y2) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={0.8} strokeDasharray="4,3" />
  );

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-3">
      <p className="mb-2 font-mono text-[10px] tracking-[0.2em] text-slate-500">ARCHITECTURE OVERVIEW — CLICK ANY ZONE TO EXPLORE</p>
      <svg viewBox="0 0 680 560" width="100%" style={{ minWidth: 520 }}>
        <defs>
          <marker id="ah" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={6} markerHeight={6} orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* ── Arrows ── */}
        {ARROW(340, 64, 150, 84)}
        {LINE(150, 138, 150, 158)}
        {ARROW(150, 212, 106, 232)}
        {ARROW(150, 212, 302, 232)}
        {LINE(106, 286, 106, 306)}
        {ARROW(106, 360, 137, 378)}
        {ARROW(137, 432, 80, 450)}
        {ARROW(137, 432, 232, 450)}
        {LINE(264, 405, 378, 405)}
        {ARROW(524, 432, 448, 450)}
        {ARROW(524, 432, 597, 450)}
        {DASH(304, 111, 290, 111)}

        {/* ── Zone boxes ── */}
        {BOX("Z1",  165,  10, 350, 54, "Z1  ·  Internet Zone", "ISP 1 / ISP 2 / ISP 3  ·  DDoS Cloud Scrubbing", "rgba(100,116,139,.12)", "rgba(100,116,139,.4)")}
        {BOX("Z2",  10,   84, 280, 54, "Z2  ·  Perimeter Firewall Layer", "FortiGate 1100E HA  ·  NGFW · IPS · SSL · VPN", "rgba(248,113,113,.1)", "rgba(248,113,113,.4)")}
        {BOX("Z7",  304,  84, 366, 54, "Z7  ·  Security Operations & Management", "FortiAnalyzer · Wazuh · HIVE · Elasticsearch", "rgba(34,211,238,.08)", "rgba(34,211,238,.35)")}
        {BOX("Z3",  10,  158, 280, 54, "Z3  ·  DMZ — De-Militarized Zone", "F5 BIG-IP WAF  ·  API Gateway  ·  FortiMail 400F", "rgba(251,146,60,.1)", "rgba(251,146,60,.4)")}
        {BOX("Z4",  10,  232, 190, 54, "Z4  ·  Application Zone", "CBS Servers  ·  VMware ESXi HA", "rgba(56,189,248,.08)", "rgba(56,189,248,.35)")}
        {BOX("Z6",  212, 232, 168, 54, "Z6  ·  SWIFT Zone  ★", "Dedicated FW  ·  Isolated  ·  CSP Aligned", "rgba(251,191,36,.1)", "rgba(251,191,36,.5)")}
        {BOX("Z5",  10,  306, 190, 54, "Z5  ·  Database Zone", "CBS DB · Reporting · Archive · Isolated VLAN", "rgba(167,139,250,.08)", "rgba(167,139,250,.4)")}
        {BOX("CORE",10,  378, 254, 54, "Core Network + Servers", "Core Switches HA  ·  AD/DNS/DHCP  ·  File  ·  Mail", "rgba(113,113,122,.1)", "rgba(113,113,122,.4)")}
        {BOX("DC",  378, 378, 292, 54, "Data Center Primary + DR Site", "VMware vSphere  ·  SAN/NAS  ·  RPO <15m  RTO <1h", "rgba(192,132,252,.08)", "rgba(192,132,252,.4)")}
        {BOX("Z8",  10,  450, 140, 54, "Z8  ·  HQ Users", "VLANs  ·  802.1X", "rgba(52,211,153,.08)", "rgba(52,211,153,.35)")}
        {BOX("Z9",  158, 450, 158, 54, "Z9  ·  Branch Network", "200 Sites  ·  FortiGate 600E  ·  IPSec", "rgba(45,212,191,.08)", "rgba(45,212,191,.35)")}
        {BOX("Z10", 378, 450, 140, 54, "Z10  ·  Physical", "ZKTeco  ·  Hikvision  ·  NVR/VMS", "rgba(100,116,139,.1)", "rgba(100,116,139,.4)")}
        {BOX("Z11", 526, 450, 144, 54, "Z11  ·  Voice", "Fanvil  ·  IP-PBX  ·  SBC", "rgba(129,140,248,.08)", "rgba(129,140,248,.4)")}

        {/* ── Compliance footer ── */}
        <text x={340} y={538} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.2)" fontFamily="monospace" letterSpacing={1}>
          ISO 27001  ·  NIST CSF 2.0  ·  Bangladesh Bank ICT  ·  SWIFT CSP  ·  PCI DSS
        </text>
      </svg>
    </div>
  );
}

// ── Zone detail panel ─────────────────────────────────────────────────────────
function ZoneDetail({ zone }) {
  const c = ZC[zone.id];
  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className={`rounded border px-2 py-0.5 font-mono text-[10px] font-semibold ${c.badge}`}>
            {zone.id}
          </span>
          <span className="font-mono text-[10px] tracking-[0.15em] text-slate-500">{zone.status}</span>
        </div>
        <h4 className="text-base font-bold text-white">{zone.name}</h4>
        <p className="mt-1 text-xs leading-relaxed text-slate-400">{zone.desc}</p>
      </div>

      {/* Components */}
      <div className="rounded-xl border border-white/10 bg-black/20 p-3">
        <p className="mb-2 font-mono text-[10px] tracking-[0.18em] text-slate-500">COMPONENTS</p>
        <div className="flex flex-wrap gap-2">
          {zone.comps.map((c) => (
            <div key={c.name} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-xs">
              <p className="font-mono text-[9px] tracking-wider text-slate-500">{c.type}</p>
              <p className="mt-0.5 font-medium text-white">{c.name}</p>
              {c.sub && <p className="text-slate-400">{c.sub}</p>}
            </div>
          ))}
        </div>
        {/* Capabilities */}
        <div className="mt-2 flex flex-wrap gap-1 border-t border-white/5 pt-2">
          {zone.caps.map((cap) => (
            <span key={cap} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">
              {cap}
            </span>
          ))}
        </div>
      </div>

      {/* Traffic + Controls */}
      <div className="grid gap-3 md:grid-cols-3">
        {[
          { label: "INBOUND TRAFFIC", items: zone.inbound },
          { label: "SECURITY CONTROLS", items: zone.controls },
          { label: "OUTBOUND TRAFFIC", items: zone.outbound },
        ].map(({ label, items }) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className={`mb-2 font-mono text-[9px] tracking-[0.15em] ${c.acc}`}>{label}</p>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item} className="flex gap-1.5 text-[11px] text-slate-400">
                  <span className={`mt-0.5 shrink-0 ${c.acc}`}>›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Stack */}
      <div className="rounded-xl border border-white/10 bg-black/20 p-3">
        <p className="mb-2 font-mono text-[9px] tracking-[0.15em] text-slate-500">TECH STACK</p>
        <div className="flex flex-wrap gap-1.5">
          {zone.stack.map((s) => (
            <span key={s} className={`rounded-full border px-2.5 py-0.5 text-[10px] ${c.badge}`}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ZoneDiagram() {
  const [view, setView]     = useState("explorer"); // "explorer" | "overview"
  const [active, setActive] = useState("Z2");

  const zone = ZONES.find((z) => z.id === active);

  return (
    <div className="space-y-4">
      {/* View toggle */}
      <div className="flex gap-2">
        {["explorer", "overview"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`rounded-lg border px-4 py-1.5 font-mono text-xs tracking-[0.15em] transition ${
              view === v
                ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                : "border-white/10 bg-white/5 text-slate-400 hover:text-slate-200"
            }`}
          >
            {v === "explorer" ? "ZONE EXPLORER" : "ARCHITECTURE OVERVIEW"}
          </button>
        ))}
      </div>

      {view === "overview" && (
        <ArchitectureOverview onSelectZone={(id) => { setActive(id); setView("explorer"); }} />
      )}

      {view === "explorer" && (
        <div className="flex gap-4">
          {/* Sidebar */}
          <div className="w-40 shrink-0 space-y-0.5">
            <p className="mb-2 font-mono text-[9px] tracking-[0.18em] text-slate-600">SECURITY ZONES</p>
            {ZONES.map((z) => {
              const c = ZC[z.id];
              return (
                <button
                  key={z.id}
                  onClick={() => setActive(z.id)}
                  className={`flex w-full items-center gap-2 rounded-lg border px-2.5 py-2 text-left text-xs transition ${
                    active === z.id
                      ? "border-white/15 bg-white/8 text-white"
                      : "border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  <span className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} />
                  <span className="truncate">{z.short}</span>
                  <span className={`ml-auto font-mono text-[9px] ${c.acc}`}>{z.id}</span>
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <div className="min-w-0 flex-1">
            {zone && <ZoneDetail zone={zone} />}
          </div>
        </div>
      )}
    </div>
  );
}
