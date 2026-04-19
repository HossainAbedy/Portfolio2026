import React, { useEffect, useMemo, useRef, useState } from "react";

const BOOT_LINES = [
  { type: "info", text: "Initializing security workspace..." },
  { type: "info", text: "Loading SIEM telemetry stream..." },
  { type: "ok", text: "Firewall status: ACTIVE" },
  { type: "ok", text: "EDR status: ONLINE" },
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
  return "text-slate-300";
}

function runCommand(input) {
  const cmd = input.trim().toLowerCase();

  if (!cmd) return [];

  if (cmd === "help") {
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
      "  clear        clear terminal output",
    ];
  }

  if (cmd === "status") {
    return [
      "SYSTEM STATUS",
      "  SIEM: online",
      "  EDR: online",
      "  SOAR: active",
      "  IDS/IPS: monitoring",
      "  risk-level: medium",
      "  response-mode: auto-remediation enabled",
    ];
  }

  if (cmd === "scan") {
    return [
      "Running scan against 172.19.0.0/16 ...",
      "  14 hosts responded",
      "  3 high severity findings",
      "  9 medium severity findings",
      "  21 low severity findings",
      "  correlation complete",
      "Scan complete.",
    ];
  }

  if (cmd === "projects") {
    return [
      "Flagship apps:",
      "  - PC Inventory & Network Automation Platform",
      "  - IT Risk Analyzer & Branch Assessment Tool",
      "  - DVR Configuration Sync & Performance Monitor",
      "  - Open Source & Internal Security Tools",
    ];
  }

  if (cmd === "capabilities") {
    return [
      "Core capabilities:",
      "  - Security Operations",
      "  - Security Automation",
      "  - AppSec & Code Review",
      "  - Network Security",
      "  - System Administration",
      "  - Fullstack Development",
    ];
  }

  if (cmd === "about") {
    return [
      "Hossain Abedy",
      "Cybersecurity professional focused on SOC operations, automation, application security, and network security.",
      "Designed to bridge engineering, operations, and risk reduction.",
    ];
  }

  if (cmd === "contact") {
    return [
      "Contact:",
      "  email: hossain.abedy@example.com",
      "  linkedin: linkedin.com/in/hossainabedy",
      "  github: github.com/hossainabedy",
    ];
  }

  if (cmd === "threat") {
    return [
      "ACTIVE THREAT SNAPSHOT",
      "  - brute force detected on vpn gateway",
      "  - DNS beaconing under analysis",
      "  - lateral movement indicators isolated",
      "  - mitigation: playbook already running",
    ];
  }

  if (cmd === "log") {
    return [
      "Terminal log stream explanation:",
      "  INFO  = normal operational events",
      "  WARN  = suspicious activity that needs review",
      "  CRIT  = high risk or active attack indicator",
      "These lines are simulated to make the portfolio feel live.",
    ];
  }

  if (cmd === "clear") {
    return [{ clear: true }];
  }

  return [`Command not found: ${input}. Type 'help'.`];
}

export default function Terminal() {
  const [lines, setLines] = useState(() => BOOT_LINES.map(stampLine));
  const [command, setCommand] = useState("");
  const [booted, setBooted] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const liveFeed = useMemo(() => LIVE_FEED, []);

  useEffect(() => {
    const t1 = setTimeout(() => setBooted(true), 400);
    const t2 = setTimeout(() => {
      setLines((prev) => [
        ...prev,
        stampLine({ type: "info", text: "Type 'help' for commands." }),
      ]);
    }, 700);

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
        return next.length > 14 ? next.slice(next.length - 14) : next;
      });
    }, 3200);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const output = runCommand(command);

    setLines((prev) => {
      if (output.length === 1 && output[0]?.clear) return [];

      const next = [...prev, stampLine({ type: "cmd", text: `> ${command || ""}` })];

      output.forEach((text) => {
        next.push(
          stampLine({
            type: text.startsWith("Command not found") ? "crit" : "info",
            text,
          })
        );
      });

      return next.length > 16 ? next.slice(next.length - 16) : next;
    });

    setCommand("");
  };

  const quickCommands = ["help", "status", "scan", "projects", "capabilities"];

  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-[#020617] shadow-[0_0_30px_rgba(16,185,129,0.12)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-emerald-950/80 to-cyan-950/20 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="font-mono text-[11px] text-slate-400">SOC / live terminal</div>
        <div className="font-mono text-[11px] text-emerald-400">connected</div>
      </div>

      <div
        ref={terminalRef}
        className="max-h-[230px] overflow-auto px-3 py-3 font-mono text-[11px] leading-5"
      >
        {lines.map((line) => (
          <div key={line.id} className="flex gap-2">
            <span className="w-16 shrink-0 text-slate-600">{line.time}</span>
            <span className={getLineClass(line.type)}>{line.text}</span>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-2">
          <span className="text-cyan-300">$</span>
          <input
            ref={inputRef}
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="w-full bg-transparent font-mono text-[11px] text-slate-200 outline-none placeholder:text-slate-600"
            placeholder="type help, status, scan..."
            autoComplete="off"
            spellCheck="false"
          />
          <span className="animate-pulse text-cyan-300">|</span>
        </form>

        <div className="mt-2 flex flex-wrap gap-2">
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => setCommand(cmd)}
              className="rounded-md border border-white/10 px-2.5 py-1 text-[10px] text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}