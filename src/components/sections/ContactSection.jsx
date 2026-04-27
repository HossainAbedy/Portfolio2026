import React from "react";
import { motion } from "framer-motion";

export default function ContactSection({ site }) {
  const cards = [
    {
      label: "EMAIL",
      value: site.email,
      href: `mailto:${site.email}`,
      desc: "Direct contact for roles, projects, and collaboration.",
      tone:
        "from-cyan-500/10 to-transparent border-cyan-400/20 hover:border-cyan-300/40",
    },
    {
      label: "LINKEDIN",
      value: "Professional Profile",
      href: site.linkedin,
      desc: "Experience, network, and career conversations.",
      tone:
        "from-violet-500/10 to-transparent border-violet-400/20 hover:border-violet-300/40",
    },
    {
      label: "GITHUB",
      value: "Code & Projects",
      href: site.github,
      desc: "Applications, automation, and engineering work.",
      tone:
        "from-emerald-500/10 to-transparent border-emerald-400/20 hover:border-emerald-300/40",
    },
  ];

  return (
    <section id="contact" className="section-pad px-6 pb-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-[11px] tracking-[0.3em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            CONTACT_CHANNELS
          </div>

          <h2 className="mb-5 bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Ready to Build Secure Systems
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            {site.cta ||
              "Open to cybersecurity, infrastructure, automation, and engineering opportunities. If you need someone who can bridge operations and technical execution, let's connect."}
          </p>
        </motion.div>

        {/* Dashboard strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mx-auto mt-8 grid max-w-5xl gap-3 md:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] tracking-[0.25em] text-slate-500">
              RESPONSE MODE
            </p>
            <p className="mt-1 text-sm font-semibold text-emerald-300">
              Open to Opportunities
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] tracking-[0.25em] text-slate-500">
              SPECIALIZATION
            </p>
            <p className="mt-1 text-sm font-semibold text-cyan-300">
              Security + Automation + Infra
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-mono text-[11px] tracking-[0.25em] text-slate-500">
              STATUS
            </p>
            <p className="mt-1 text-sm font-semibold text-violet-300">
              Available to Connect
            </p>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "EMAIL" ? "_self" : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group rounded-2xl border bg-gradient-to-br ${item.tone} p-5 transition`}
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] tracking-[0.28em] text-slate-500">
                  {item.label}
                </p>

                <span className="text-cyan-300 transition group-hover:translate-x-1">
                  →
                </span>
              </div>

              <p className="mt-4 text-lg font-semibold text-white">
                {item.value}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {item.desc}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Footer terminal style */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#020617]"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>

            <p className="font-mono text-[11px] text-slate-500">
              contact_terminal
            </p>

            <p className="font-mono text-[11px] text-emerald-400">
              connected
            </p>
          </div>

          <div className="space-y-1 px-4 py-4 font-mono text-[12px] leading-6">
            <p className="text-slate-500">
              &gt; awaiting inbound connection...
            </p>
            <p className="text-cyan-300">
              &gt; recruiter_message --priority high
            </p>
            <p className="text-slate-300">
              establishing secure conversation...
            </p>
            <p className="text-emerald-300">
              channel ready
              <span className="ml-1 animate-pulse">|</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}