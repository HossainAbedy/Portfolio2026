import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ProjectsSection from "./components/sections/ProjectsSection";
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import CapabilitiesSection from "./components/sections/CapabilitiesSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ContactSection from "./components/sections/ContactSection";
import Metrics from "./components/common/Metrics";
import DividerLine from "./components/common/DividerLine";
import {
  site,
  projects,
  caseStudies,
  capabilities,
  skills,
  philosophy,
  experience,
  education,
  certifications,
  publications,
} from "./data/portfolioData";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(135deg,#0a0e27_0%,#0f1230_50%,#1a0a2e_100%)] text-slate-100 antialiased">
      <Navbar brand="HOSSAIN ABEDY" />
      <main>
        <Hero site={site} />
        <Metrics metrics={site.metrics} />
        <DividerLine className="my-16" />
        <ProjectsSection projects={projects} />

        <DividerLine className="my-16" />
        <CaseStudiesSection caseStudies={caseStudies} />

        <DividerLine className="my-16" />
        <CapabilitiesSection capabilities={capabilities} />

        <ExperienceSection
          skills={skills}
          philosophy={philosophy}
          experience={experience}
          education={education}
          certifications={certifications}
          publications={publications}
        />

        <DividerLine className="my-16" />
        <ContactSection site={site} />
      </main>
      <Footer />
    </div>
  );
}