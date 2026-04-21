import React, { useState } from "react";
import Modal from "./Modal";

export default function ProjectModal({ isOpen, onClose, project }) {
  const [tab, setTab] = useState("overview");
  const [imgIndex, setImgIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* HEADER */}
      <h2 className="mb-4 text-xl font-bold text-cyan-300">
        {project.title}
      </h2>

      {/* TABS */}
      <div className="mb-4 flex gap-2 text-xs">
        {["overview", "architecture", "screenshots"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded px-3 py-1 ${
              tab === t
                ? "bg-cyan-400/20 text-cyan-300"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-h-[60vh] overflow-y-auto pr-2 text-sm text-slate-300">

        {/* OVERVIEW */}
        {tab === "overview" && (
          <>
            <p className="mb-4">{project.details}</p>

            {/* METRICS */}
            {project.metrics && (
              <div className="mb-4 grid grid-cols-2 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded bg-[#020617] p-3"
                  >
                    <p className="text-xs text-slate-500">{m.label}</p>
                    <p className="text-cyan-300 font-bold">{m.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* TECH STACK */}
            <div className="mb-4">
              <h4 className="mb-2 text-xs text-slate-500">TECH STACK</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-cyan-400/10 px-2 py-1 text-xs text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* BULLETS */}
            <ul className="space-y-2">
              {project.bullets?.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
          </>
        )}

        {/* ARCHITECTURE */}
        {tab === "architecture" && (
          <div className="space-y-3">
            {project.architecture?.map((a, i) => (
              <p key={i}>• {a}</p>
            )) || <p>No architecture info added.</p>}
          </div>
        )}

        {/* SCREENSHOTS */}
        {tab === "screenshots" && images.length > 0 && (
          <div>
            <img
              src={images[imgIndex]}
              alt="screenshot"
              className="mb-3 rounded-lg"
            />

            {/* SLIDER CONTROLS */}
            {images.length > 1 && (
              <div className="flex justify-between text-xs text-cyan-300">
                <button
                  onClick={() =>
                    setImgIndex((prev) =>
                      prev === 0 ? images.length - 1 : prev - 1
                    )
                  }
                >
                  ◀ Prev
                </button>

                <span>
                  {imgIndex + 1} / {images.length}
                </span>

                <button
                  onClick={() =>
                    setImgIndex((prev) =>
                      prev === images.length - 1 ? 0 : prev + 1
                    )
                  }
                >
                  Next ▶
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ACTION BUTTONS */}
      <div className="mt-4 flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-cyan-300"
          >
            GitHub →
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-emerald-300"
          >
            Live Demo →
          </a>
        )}
      </div>
    </Modal>
  );
}