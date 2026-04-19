import React from "react";

export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-3 font-mono text-xs text-cyan-300">{eyebrow}</div>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {desc ? (
        <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
          {desc}
        </p>
      ) : null}
    </div>
  );
}