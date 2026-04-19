import React from "react";
import SectionTitle from "../common/SectionTitle";
import CaseStudyCard from "../cards/CaseStudyCard";

export default function CaseStudiesSection({ caseStudies }) {
  return (
    <section id="cases" className="section-pad px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="// CASE_STUDIES"
          title="Real-World Impact"
          desc="Enterprise engagements demonstrating measurable security wins through intelligent operations, automation, and engineering."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}