import React from "react";
import SectionTitle from "../common/SectionTitle";
import CapabilityCard from "../cards/CapabilityCard";

export default function CapabilitiesSection({ capabilities }) {
  return (
    <section id="capabilities" className="section-pad px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="CORE CAPABILITIES" title="Expertise Areas" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <CapabilityCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}