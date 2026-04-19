import {
  Network,
  BarChart3,
  Video,
  Code2,
  ShieldAlert,
  Zap,
  Server,
  Box,
} from "lucide-react";

export const site = {
  name: "Hossain Abedy",
  role: "Cybersecurity Professional & AI-Assisted Security Specialist",
  subtitle:
    "I build, secure, review, and automate systems across security operations, applications, and infrastructure—combining hands-on engineering with intelligent threat analysis.",
  email: "hossain.abedy@example.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  cta: "Open to security operations, AppSec, automation, and AI-assisted security review roles.",
};

export const projects = [
  {
    title: "PC Inventory & Network Automation Platform",
    subtitle: "PC Inventory & Network Automation Platform",
    desc: "Real-time asset discovery and network scanning across distributed infrastructure with automated compliance reporting.",
    tags: ["Python", "Nessus API", "PostgreSQL", "React"],
    accent: "cyan",
    icon: Network,
    bullets: [
      "Automated discovery of 2,000+ endpoints across 50+ subnets",
      "AI-assisted asset risk scoring and compliance tagging",
      "Real-time inventory sync with SOC ticketing system",
    ],
  },
  {
    title: "IT Risk Analyzer & Branch Assessment Tool",
    subtitle: "IT Risk Analyzer",
    desc: "Comprehensive risk evaluation framework with automated scoring for banking branch and facility security posture.",
    tags: ["Node.js", "Vue.js", "MongoDB", "ML Scoring"],
    accent: "violet",
    icon: BarChart3,
    bullets: [
      "15-point risk matrix with automated compliance scoring",
      "Real-time dashboard for 50+ banking branches",
      "Executive summary reports with remediation roadmaps",
    ],
  },
  {
    title: "DVR Configuration Sync & Performance Monitor",
    subtitle: "DVR Config & Performance",
    desc: "Centralized management and synchronization platform for HIK Vision DVR systems with performance tracking and analytics.",
    tags: ["Go", "Grafana", "InfluxDB", "REST APIs"],
    accent: "green",
    icon: Video,
    bullets: [
      "Real-time sync across 100+ DVR devices",
      "Performance analytics and capacity planning",
      "Automated alerting for degraded video quality or failures",
    ],
  },
  {
    title: "Open Source & Internal Security Tools",
    subtitle: "Security Automation Tools",
    desc: "Collection of Python/Go utilities for threat analysis, automation, and security research deployed across SOC and infrastructure teams.",
    tags: ["Python", "GitHub", "Docker", "Kubernetes"],
    accent: "amber",
    icon: Code2,
    bullets: [
      "Automated IOC extraction and threat intel correlation",
      "Incident response playbook automation",
      "Multi-cloud security posture scanning tools",
    ],
  },
];

export const caseStudies = [
  {
    title: "SIEM Tuning & Detection Engineering",
    tag: "DETECTION",
    accent: "cyan",
    metricLabel: "MEAN TIME TO DETECT",
    metric: "45m → 8m",
    desc: "Reduced false positives by 62% through intelligent correlation rules and MITRE ATT&CK mapping.",
    bullets: [
      "1,200+ daily alerts audited and rebuilt",
      "Sigma rules and playbook integration",
      "SOC productivity up 3x",
    ],
  },
  {
    title: "Security Automation Platform",
    tag: "AUTOMATION",
    accent: "green",
    metricLabel: "RESPONSE TIME",
    metric: "-74%",
    desc: "Automated 85% of Tier-1 alerts, freeing 20+ analyst hours per week for strategic work.",
    bullets: [
      "SOAR playbooks for phishing, malware, brute-force",
      "AI-assisted alert enrichment and IOC correlation",
      "Confidence scoring for auto-closure",
    ],
  },
  {
    title: "Banking Branch Security Hardening",
    tag: "COMPLIANCE",
    accent: "amber",
    metricLabel: "AUDIT PASS RATE",
    metric: "100%",
    desc: "Achieved 100% audit compliance across 15 banking branches in 3 months through standardized baselines.",
    bullets: [
      "Security baseline standardization via GPO",
      "Automated compliance reporting and remediation",
      "Real-time monitoring integration",
    ],
  },
  {
    title: "AppSec Code Review & Remediation",
    tag: "APPSEC",
    accent: "violet",
    metricLabel: "VULNS FOUND & FIXED",
    metric: "47 Critical",
    desc: "Found and remediated 47 critical vulnerabilities before production release using AI-assisted analysis.",
    bullets: [
      "Manual + LLM-assisted code review",
      "OWASP Top 10 and logic flaw analysis",
      "Secure SDLC training delivery",
    ],
  },
  {
    title: "Network Security Audit",
    tag: "NETWORK",
    accent: "cyan",
    metricLabel: "POLICY VIOLATIONS FOUND",
    metric: "340",
    desc: "Comprehensive firewall policy review and network segmentation redesign for multi-site enterprise.",
    bullets: [
      "Firewall rule optimization and cleanup",
      "Micro-segmentation design and implementation",
      "IDS/IPS tuning for production traffic",
    ],
  },
  {
    title: "Vulnerability Assessment & VAPT",
    tag: "PENTEST",
    accent: "green",
    metricLabel: "OVERALL RISK REDUCTION",
    metric: "CRITICAL → LOW",
    desc: "Full-scope vulnerability and penetration testing with detailed remediation roadmap for SaaS platform.",
    bullets: [
      "Black-box and white-box testing",
      "Exploitability validation and risk scoring",
      "Remediation tracking and verification",
    ],
  },
];

export const capabilities = [
  {
    title: "Security Operations",
    icon: ShieldAlert,
    color: "cyan",
    bullets: [
      "SOC monitoring & incident response",
      "SIEM architecture & tuning",
      "Threat intelligence integration",
      "24/7 security monitoring",
    ],
    tags: ["Splunk", "Elastic", "MITRE ATT&CK"],
  },
  {
    title: "Security Automation",
    icon: Zap,
    color: "green",
    bullets: [
      "SOAR platform design & implementation",
      "Alert enrichment & auto-response",
      "Threat intel automation",
      "Playbook orchestration",
    ],
    tags: ["Python", "Ansible", "REST APIs"],
  },
  {
    title: "AppSec & Code Review",
    icon: Code2,
    color: "violet",
    bullets: [
      "Source code security review",
      "OWASP Top 10 analysis",
      "Secure SDLC integration",
      "Developer security training",
    ],
    tags: ["Semgrep", "Burp Suite", "SAST/DAST"],
  },
  {
    title: "Network Security",
    icon: Network,
    color: "amber",
    bullets: [
      "Firewall architecture & policy",
      "Network segmentation design",
      "IDS/IPS tuning & deployment",
      "VPN & branch hardening",
    ],
    tags: ["Palo Alto", "Suricata", "Zero Trust"],
  },
  {
    title: "System Administration",
    icon: Server,
    color: "cyan",
    bullets: [
      "Windows Server & Active Directory",
      "Group Policy hardening",
      "Cloud infrastructure (AWS/Azure)",
      "Linux system management",
    ],
    tags: ["AD/GPO", "AWS", "Terraform"],
  },
  {
    title: "Fullstack Development",
    icon: Box,
    color: "violet",
    bullets: [
      "Full-stack web applications",
      "REST APIs & microservices",
      "Database design & optimization",
      "Security-first architecture",
    ],
    tags: ["Node.js", "React", "PostgreSQL"],
  },
];

export const skills = [
  "VMware & Lab Environments",
  "VAPT & Pen Testing",
  "Office IT Hardware Setup",
  "SCCM & Endpoint Management",
  "Docker & Kubernetes",
  "Incident Forensics & IR",
  "Compliance Frameworks",
  "Data Privacy & GDPR",
];

export const philosophy = [
  [
    "Trace Input to Sink",
    "Follow every data path from entry point to execution. Understand the full attack surface.",
  ],
  [
    "Validate Exploitability",
    "A finding is not real until you prove impact. Theory and reality are different.",
  ],
  [
    "Separate Signal from Noise",
    "Eliminate false positives aggressively. Trust in your alerts drives action.",
  ],
  [
    "Think in Attack Paths",
    "Chain findings together. Understand what an adversary would do next.",
  ],
];

export const timeline = [
  [
    "Security Operations Analyst",
    "Banking & Financial Services",
    "2020–Present",
    "Led SOC operations for multi-branch banking infrastructure, managing SIEM, EDR, and incident response across 2,000+ endpoints.",
  ],
  [
    "Network Security Engineer",
    "Enterprise Infrastructure",
    "2018–2020",
    "Designed and maintained network security infrastructure including firewalls, IDS/IPS, VPN, and branch security.",
  ],
  [
    "Full Stack Software Developer",
    "Startup & Enterprise",
    "2015–2018",
    "Built production web applications with security-first design and secure data handling.",
  ],
  [
    "M.Sc. Cybersecurity",
    "Advanced Degree",
    "2013–2015",
    "Advanced coursework in cryptography, digital forensics, and network security.",
  ],
];