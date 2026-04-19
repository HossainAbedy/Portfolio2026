import React from "react";

export default function Navbar({ brand = "HOSSAIN ABEDY" }) {
  const links = [
    ["Projects", "#flagship"],
    ["Capabilities", "#capabilities"],
    ["Case Studies", "#cases"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#0a0e27]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.75)]" />
          <span className="font-mono text-sm font-semibold tracking-[0.22em] text-cyan-300">
            {brand}
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs text-slate-400 transition hover:text-cyan-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}