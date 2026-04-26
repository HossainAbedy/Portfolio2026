import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import CaseStudyCard from "../cards/CaseStudyCard";
import Modal from "../common/Modal";
import CaseStudyDetailModal from "../common/modals/CaseStudyDetailModal";

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

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        {active && <CaseStudyDetailModal study={active} />}
      </Modal>
    </section>
  );
}