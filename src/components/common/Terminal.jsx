import React, { useEffect, useMemo, useRef, useState } from "react";
import { Server, Network, TriangleAlert, ShieldCheck } from "lucide-react";

const BOOT_LINES = [
  { type: "info", text: "Initializing security workspace..." },
  { type: "info", text: "Loading SIEM telemetry stream..." },
  { type: "ok", text: "Firewall status: ACTIVE" },
  { type: "ok", text: "EDR status: ONLINE" },
  { type: "ok", text: "Policy baseline: ENFORCED" },
];

const LIVE_FEED = [
  { type: "info", text: "Endpoint scan completed across 12 subnets" },
  { type: "warn", text: "Brute-force attempt rate rising on vpn-gateway-02" },
  { type: "ok", text: "Auto-remediation playbook executed successfully" },
  { type: "info", text: "New IOC added to detection ruleset" },
  { type: "crit", text: "Privilege escalation attempt blocked" },
  { type: "ok", text: "WAF signature updated and deployed" },
  { type: "warn", text: "DNS beaconing pattern under review" },
  { type: "info", text: "Threat hunting job scheduled" },
  { type: "info", text: "Asset inventory synchronized" },
  { type: "warn", text: "Unusual login source geolocation flagged" },
  { type: "ok", text: "GPO baseline validation passed" },
  { type: "info", text: "FortiAnalyzer correlation completed" },
  { type: "info", text: "AD sync completed for branch OU structure" },
];

const QUICK_COMMANDS = [
  "help",
  "status",
  "scan",
  "projects",
  "capabilities",
  "threat",
  "log",
];

function stampLine(line) {
  const stamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type: line.type,
    text: line.text,
    time: stamp,
  };
}

function getLineClass(type) {
  if (type === "crit") return "text-red-400";
  if (type === "warn") return "text-amber-400";
  if (type === "ok") return "text-emerald-400";
  if (type === "cmd") return "text-cyan-300";
  if (type === "sys") return "text-violet-300";
  return "text-slate-300";
}

function createResponse(cmd) {
  const clean = cmd.trim().toLowerCase();

  if (!clean) return [];

  if (clean === "help") {
    return [
      "Available commands:",
      "  help         show available commands",
      "  status       show system status",
      "  scan         run a mock security scan",
      "  projects     list flagship applications",
      "  capabilities show core skill areas",
      "  about        show profile summary",
      "  contact      show contact details",
      "  threat       show active threat snapshot",
      "  log          explain current log stream",
      "  branches     show branch coverage summary",
      "  mitre        show mapped detection focus",
      "  hardening    show baseline security posture",
      "  clear        clear terminal output",
      "  reset        restart terminal feed",
    ];
  }

  if (clean === "status") {
    return [
      "SYSTEM STATUS",
      "  SIEM: online",
      "  EDR: online",
      "  SOAR: active",
      "  IDS/IPS: monitoring",
      "  GPO baseline: enforced",
      "  risk-level: medium",
      "  response-mode: auto-remediation enabled",
    ];
  }

  if (clean === "scan") {
    return [
      "Running scan against 10.10.0.0/16 ...",
      "  14 hosts responded",
      "  3 high severity findings",
      "  9 medium severity findings",
      "  21 low severity findings",
      "  correlation complete",
      "Scan complete.",
    ];
  }

  if (clean === "projects") {
    return [
      "Flagship applications:",
      "  - PC Inventory & Risk Analysis Platform",
      "  - Attendance Sync Reliability Pipeline",
      "  - DVR Fleet Administration",
      "  - SafeOps Endpoint Health Review",
      "  - Active Directory Migration & Automation",
    ];
  }

  if (clean === "capabilities") {
    return [
      "Core capabilities:",
      "  - Security Operations",
      "  - Security Automation",
      "  - AppSec & Code Review",
      "  - Network Security",
      "  - System Administration",
      "  - Full-Stack Development",
    ];
  }

  if (clean === "about") {
    return [
      "Hossain Abedy",
      "Cybersecurity professional focused on SOC operations, automation, application security, and network security.",
      "Designed to bridge engineering, operations, and risk reduction.",
    ];
  }

  if (clean === "contact") {
    return [
      "Contact:",
      "  email: hossain.abedy@sbacbank.com",
      "  linkedin: linkedin.com/in/hossainabedy",
      "  github: github.com/HossainAbedy",
    ];
  }

  if (clean === "threat") {
    return [
      "ACTIVE THREAT SNAPSHOT",
      "  - brute force detected on vpn gateway",
      "  - DNS beaconing under analysis",
      "  - lateral movement indicators isolated",
      "  - mitigation: playbook already running",
    ];
  }

  if (clean === "log") {
    return [
      "Terminal log stream explanation:",
      "  INFO  = normal operational events",
      "  WARN  = suspicious activity that needs review",
      "  CRIT  = high risk or active attack indicator",
      "  CMD   = user-entered terminal action",
      "These lines are simulated to make the portfolio feel live.",
    ];
  }

  if (clean === "branches") {
    return [
      "Branch coverage summary:",
      "  - 125+ branches supported",
      "  - domain migration in progress across distributed sites",
      "  - inventory sync and posture review active",
      "  - compliance baseline monitoring enabled",
    ];
  }

  if (clean === "mitre") {
    return [
      "MITRE-focused detection and analysis:",
      "  - T1059: Command and Scripting Interpreter",
      "  - T1021: Remote Services",
      "  - T1078: Valid Accounts",
      "  - T1110: Brute Force",
      "  - T1003: OS Credential Dumping",
      "  - alert mapping and triage prioritization in use",
    ];
  }

  if (clean === "hardening") {
    return [
      "Baseline security posture:",
      "  - CIS benchmark-aligned controls",
      "  - GPO hardening and update enforcement",
      "  - firewall policy review",
      "  - endpoint encryption and secure boot checks",
      "  - audit-ready evidence tracking",
    ];
  }

  if (clean === "clear") {
    return [{ clear: true }];
  }

  if (clean === "reset") {
    return [{ reset: true }];
  }

  return [`Command not found: ${cmd}. Type 'help'.`];
}

// function StatusPill({ label, value, tone = "text-slate-200" }) {
//   return (
//     <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">
//       <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
//         {label}
//       </p>
//       <p className={`mt-1 text-sm font-semibold ${tone}`}>{value}</p>
//     </div>
//   );
// }

function CompactStat({ icon: Icon, label, value, tone, bar }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 px-2 py-1.5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className={`rounded-full border border-white/10 bg-white/5 p-1 ${tone}`}>
            <Icon className="h-3 w-3 animate-pulse" />
          </span>
          <div>
            <p className="font-mono text-[8px] leading-none tracking-[0.18em] text-slate-500">
              {label}
            </p>
            <p className={`mt-0.5 text-[11px] font-semibold leading-none ${tone}`}>
              {value}
            </p>
          </div>
        </div>

        <div className="flex items-end gap-0.5">
          <span className={`h-2 w-0.5 rounded-full ${bar} opacity-60`} />
          <span className={`h-3 w-0.5 rounded-full ${bar} opacity-80 animate-pulse`} />
          <span className={`h-2.5 w-0.5 rounded-full ${bar}`} />
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ label, value, tone = "bg-emerald-400" }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] text-slate-500">
          {label}
        </span>
        <span className="font-mono text-[10px] text-slate-400">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full ${tone}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function Terminal() {
  const [lines, setLines] = useState(() => BOOT_LINES.map(stampLine));
  const [command, setCommand] = useState("");
  const [booted, setBooted] = useState(false);
  const [connected, setConnected] = useState(false);
  const [stats, setStats] = useState({
    branches: 125,
    endpoints: 1482,
    alerts: 7,
    critical: 2,
  });

  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const historyRef = useRef([]);
  const historyIndexRef = useRef(-1);

  const liveFeed = useMemo(() => LIVE_FEED, []);

  useEffect(() => {
    const t1 = setTimeout(() => setBooted(true), 450);
    const t2 = setTimeout(() => {
      setConnected(true);
      setLines((prev) => [
        ...prev,
        stampLine({ type: "info", text: "Type 'help' for commands." }),
        stampLine({ type: "sys", text: "Interactive mode enabled." }),
      ]);
    }, 850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (!booted) return;

    const interval = setInterval(() => {
      const item = liveFeed[Math.floor(Math.random() * liveFeed.length)];
      setLines((prev) => {
        const next = [...prev, stampLine(item)];
        return next.length > 18 ? next.slice(next.length - 18) : next;
      });

      setStats((prev) => {
        const jitter = Math.random() > 0.5 ? 1 : -1;
        return {
          ...prev,
          alerts: Math.max(1, prev.alerts + jitter),
          critical: Math.max(0, Math.min(4, prev.critical + (Math.random() > 0.75 ? 1 : 0))),
        };
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [booted, liveFeed]);

  useEffect(() => {
    const el = terminalRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const executeCommand = (raw) => {
    const input = raw.trim();
    const output = createResponse(input);

    setLines((prev) => {
      if (output.length === 1 && output[0]?.clear) return [];
      if (output.length === 1 && output[0]?.reset) {
        return BOOT_LINES.map(stampLine);
      }

      const next = [...prev, stampLine({ type: "cmd", text: `> ${input || ""}` })];

      output.forEach((text) => {
        next.push(
          stampLine({
            type: text.startsWith("Command not found") ? "crit" : text.startsWith("SYSTEM STATUS") ? "sys" : "info",
            text,
          })
        );
      });

      return next.length > 22 ? next.slice(next.length - 22) : next;
    });

    if (input) {
      historyRef.current = [input, ...historyRef.current.filter((item) => item !== input)];
      historyIndexRef.current = -1;
    }

    setCommand("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(command);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const history = historyRef.current;
      if (!history.length) return;

      const nextIndex =
        historyIndexRef.current < history.length - 1
          ? historyIndexRef.current + 1
          : historyIndexRef.current;

      historyIndexRef.current = nextIndex;
      setCommand(history[nextIndex] || "");
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const history = historyRef.current;
      if (!history.length) return;

      if (historyIndexRef.current <= 0) {
        historyIndexRef.current = -1;
        setCommand("");
        return;
      }

      const nextIndex = historyIndexRef.current - 1;
      historyIndexRef.current = nextIndex;
      setCommand(history[nextIndex] || "");
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-[#020617] shadow-[0_0_30px_rgba(16,185,129,0.12)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-emerald-950/80 to-cyan-950/20 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="font-mono text-[11px] text-slate-400">
          SOC / live terminal
        </div>
        <div className="font-mono text-[11px] text-emerald-400">
          {connected ? "connected" : "booting"}
        </div>
      </div>

      <div className="grid gap-1.5 border-b border-white/10 px-2 py-2 md:grid-cols-4">
        <CompactStat
          icon={Network}
          label="Branches"
          value="125+"
          tone="text-white"
          bar="bg-cyan-400"
        />
        <CompactStat
          icon={Server}
          label="Endpoints"
          value={`${stats.endpoints.toLocaleString()}+`}
          tone="text-white"
          bar="bg-emerald-400"
        />
        <CompactStat
          icon={TriangleAlert}
          label="Alerts"
          value={`${stats.alerts}`}
          tone="text-amber-300"
          bar="bg-amber-400"
        />
        <CompactStat
          icon={ShieldCheck}
          label="Critical"
          value={`${stats.critical}`}
          tone="text-red-300"
          bar="bg-red-400"
        />
      </div>

      {/* <div className="grid gap-3 border-b border-white/10 p-3 md:grid-cols-4">
        <StatusPill label="Branches" value="125+" tone="text-white" />
        <StatusPill label="Endpoints" value={`${stats.endpoints.toLocaleString()}+`} tone="text-white" />
        <StatusPill label="Alerts" value={`${stats.alerts}`} tone="text-amber-300" />
        <StatusPill label="Critical" value={`${stats.critical}`} tone="text-red-300" />
      </div> */}

      {/* <div className="grid gap-3 border-b border-white/10 p-3 md:grid-cols-3">
        <ProgressBar label="SIEM Coverage" value={92} tone="bg-cyan-400" />
        <ProgressBar label="Policy Baseline" value={88} tone="bg-emerald-400" />
        <ProgressBar label="Audit Readiness" value={84} tone="bg-violet-400" />
      </div> */}

      <div
        ref={terminalRef}
        className="max-h-[260px] overflow-auto px-3 py-3 font-mono text-[11px] leading-5"
      >
        {lines.map((line) => (
          <div key={line.id} className="flex gap-2">
            <span className="w-16 shrink-0 text-slate-600">{line.time}</span>
            <span className={getLineClass(line.type)}>{line.text}</span>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
          <span className="text-cyan-300">$</span>
          <input
            ref={inputRef}
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent font-mono text-[11px] text-slate-200 outline-none placeholder:text-slate-600"
            placeholder="type help, status, scan..."
            autoComplete="off"
            spellCheck="false"
          />
          <span className="animate-pulse text-cyan-300">|</span>
        </form>

        <div className="mt-3 flex flex-wrap gap-2">
          {QUICK_COMMANDS.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => executeCommand(cmd)}
              className="rounded-md border border-white/10 px-2.5 py-1 text-[10px] text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              {cmd}
            </button>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="grid gap-2 md:grid-cols-2">
            <div className="text-[10px] text-slate-500">
              <span className="text-slate-400">Tip:</span> use Arrow Up/Down for history
            </div>
            <div className="text-[10px] text-slate-500 md:text-right">
              <span className="text-slate-400">Mode:</span> live simulated SOC feed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}