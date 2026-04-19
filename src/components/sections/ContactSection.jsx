import React from "react";

export default function ContactSection({ site }) {
  return (
    <section id="contact" className="section-pad px-6 pb-24 md:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-4 font-mono text-xs text-cyan-300">LET'S TALK</div>
        <h2 className="mb-6 bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          Ready to Build Something Great
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-slate-400">{site.cta}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="premium-card rounded-xl px-8 py-4 text-slate-300 transition hover:-translate-y-0.5"
          >
            <span className="font-mono text-sm">{site.email}</span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="premium-card rounded-xl px-8 py-4 text-slate-300 transition hover:-translate-y-0.5"
          >
            <span className="font-mono text-sm">LinkedIn</span>
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="premium-card rounded-xl px-8 py-4 text-slate-300 transition hover:-translate-y-0.5"
          >
            <span className="font-mono text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}