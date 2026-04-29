import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-[0.25em] text-slate-500">
              HOSSAIN ABEDY // PORTFOLIO
            </p>
            <p className="text-sm text-slate-400">
              Cybersecurity, infrastructure, automation, and enterprise security engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-600">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-slate-300">systems operational</span>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-400">
              banking infrastructure · siem · gpo · fortinet
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/5 pt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-xs text-slate-600">
            © {year} — Engineered with precision & purpose
          </span>
          <span className="font-mono text-xs text-slate-700">
            secure by design · operational by intent
          </span>
        </div>
      </div>
    </footer>
  );
}