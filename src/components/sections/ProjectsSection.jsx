import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../cards/ProjectCard";
import Modal from "../common/Modal";
import TagChip from "../common/TagChip";
import ImageCarousel from "../common/ImageCarousel";

export default function ProjectsSection({ projects }) {
  const [active, setActive] = useState(null);

  return (
    <section id="flagship" className="section-pad px-6 md:px-8">
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow="FLAGSHIP APPLICATIONS"
          title="Project Portfolio"
          desc="Full-stack security systems and automation platforms built for enterprise scale, delivering measurable impact across operations, risk, and compliance."
        />

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {(projects || []).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => setActive(project)}  
            />
          ))}
        </div>

      </div>

      {/* MODAL */}
      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        {active && (
          <div className="space-y-5">

            {/* IMAGE CAROUSEL (SAFE GUARD) */}
            {active.images?.length > 0 && (
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                <ImageCarousel images={active.images} />
              </div>
            )}

            {/* TAGS */}
            <div className="flex flex-wrap items-center gap-2">
              {active.subtitle && (
                <TagChip tone={active.accent || "cyan"}>
                  {active.subtitle}
                </TagChip>
              )}

              {(active.tags || []).map((tag) => (
                <TagChip key={tag} tone="slate">
                  {tag}
                </TagChip>
              ))}
            </div>

            {/* TITLE + SUMMARY */}
            <div>
              <h3 className="text-2xl font-bold text-white">
                {active.title}
              </h3>

              {active.summary && (
                <p className="mt-2 text-sm text-slate-300">
                  {active.summary}
                </p>
              )}
            </div>

            {/* HIGHLIGHTS */}
            {(active.highlights || []).length > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-cyan-300">
                  Key highlights
                </h4>

                <ul className="space-y-2 text-sm text-slate-400">
                  {active.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* STACK + IMPACT */}
            <div className="grid gap-3 md:grid-cols-2">

              {/* STACK */}
              {(active.stack || []).length > 0 && (
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-violet-300">
                    Stack
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {active.stack.map((item) => (
                      <TagChip key={item} tone="violet">
                        {item}
                      </TagChip>
                    ))}
                  </div>
                </div>
              )}

              {/* IMPACT */}
              {(active.impact || []).length > 0 && (
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-emerald-300">
                    Impact
                  </h4>

                  <ul className="space-y-2 text-sm text-slate-400">
                    {active.impact.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        )}
      </Modal>
    </section>
  );
}