import React from "react";
import SectionTitle from "../common/SectionTitle";
import TimelineItem from "../cards/TimelineItem";

export default function ExperienceSection({ timeline, philosophy, skills }) {
  return (
    <>
      <section className="px-6 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="mb-3 font-mono text-xs text-slate-600">
              {/* SUPPORTING_SKILLS  */}
            </div>
            <h2 className="text-2xl font-bold text-slate-300">
              Also Proficient In
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="tag-chip border border-white/10 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto my-16 max-w-7xl px-6 md:px-8">
        <div className="accent-line" />
      </div>

      <section className="section-pad px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="// METHODOLOGY"
            title="Security Philosophy"
            desc="Core principles that guide threat analysis, vulnerability research, and security architecture decisions."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {philosophy.map(([title, desc], index) => (
              <div
                key={title}
                className="premium-card relative overflow-hidden rounded-xl p-6"
              >
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${
                    ["from-cyan-300", "from-emerald-300", "from-violet-300", "from-amber-300"][index]
                  } to-transparent`}
                />
                <div className="mb-3 font-mono text-xs text-slate-600">
                  0{index + 1}
                </div>
                <h3 className="mb-3 font-semibold text-white">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto my-16 max-w-7xl px-6 md:px-8">
        <div className="accent-line" />
      </div>

      <section className="section-pad px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="// BACKGROUND" title="Experience & Education" />
          <div className="max-w-4xl space-y-6">
            {timeline.map((item, index) => (
              <TimelineItem
                key={item[0]}
                item={item}
                index={index}
                last={index === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}