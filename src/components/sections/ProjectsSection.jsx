import React from "react";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../cards/ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <section id="flagship" className="section-pad px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="// FLAGSHIP_APPLICATIONS"
          title="Premium Project Portfolio"
          desc="Full-stack security systems and automation platforms built for enterprise scale, delivering measurable impact across operations, risk, and compliance."
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}