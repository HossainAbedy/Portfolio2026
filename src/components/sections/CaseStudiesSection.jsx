import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import CaseStudyCard from "../cards/CaseStudyCard";
import Modal from "../common/Modal";
import TagChip from "../common/TagChip";
import ImageCarousel from "../common/ImageCarousel";

export default function CaseStudiesSection({ caseStudies }) {
  const [active, setActive] = useState(null);

  return (
    <section id="cases" className="section-pad px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="CASE STUDIES"
          title="Real-World Impact"
          desc="Enterprise engagements demonstrating measurable security wins through intelligent operations, automation, and engineering."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(caseStudies || []).map((study, index) => (
            <CaseStudyCard
              key={study.title}
              study={study}
              index={index}
              onClick={setActive}
            />
          ))}
        </div>
      </div>

      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        {active && (
          <div className="space-y-5">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
              <ImageCarousel images={active.images || []} />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <TagChip tone={active.accent}>{active.tag}</TagChip>
            </div>

            <div>
              <div className="font-mono text-xs text-slate-500">
                {active.metricLabel}
              </div>
              <div className="text-xl font-bold text-cyan-300">
                {active.metric}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">{active.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{active.desc}</p>
            </div>

            {active.bullets?.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-cyan-300">
                  What was done
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  {active.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}