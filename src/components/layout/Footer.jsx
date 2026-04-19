import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 font-mono text-xs text-slate-600 md:px-8">
        <span>© 2026 — Engineered with precision & purpose</span>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span>systems operational</span>
        </div>
      </div>
    </footer>
  );
}