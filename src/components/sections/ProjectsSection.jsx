import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../cards/ProjectCard";
import Modal from "../common/Modal";
import ProjectDetailModal from "../common/modals/ProjectDetailModal";

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

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
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

      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        {active && <ProjectDetailModal project={active} />}
      </Modal>
    </section>
  );
}