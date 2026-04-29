import React, { useEffect, useState } from "react";

export default function Navbar({ brand = "HOSSAIN ABEDY" }) {
  const [open, setOpen] = useState(false);

  const links = [
    // ["Hero", "#top"],
    ["Projects", "#flagship"],
    ["Capabilities", "#capabilities"],
    ["Case Studies", "#cases"],
    ["Contact", "#contact"],
  ];

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#0a0e27]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.75)]" />
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold tracking-[0.22em] text-cyan-300">
                {/* {brand} */}
              </span>
              <span className="font-mono text-[10px] tracking-[0.22em] text-slate-500">
                ENTERPRISE SECURITY PORTFOLIO
              </span>
            </div>
          </a>

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

            <a
              href="#contact"
              className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 font-mono text-xs font-semibold text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/15 hover:text-cyan-100"
            >
              Available
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-mono text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-300 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="pb-4 md:hidden">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="grid gap-2">
                {links.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-white/5 bg-black/20 px-4 py-3 font-mono text-xs text-slate-300 transition hover:border-cyan-300/20 hover:text-cyan-300"
                  >
                    {label}
                  </a>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-mono text-[11px] text-slate-400">
                    systems operational
                  </span>
                </div>
                <span className="font-mono text-[11px] text-cyan-300">
                  live
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}