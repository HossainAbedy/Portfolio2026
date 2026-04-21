import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);

  if (!Array.isArray(images) || images.length === 0) return null;

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative w-full">
      {/* IMAGE WRAPPER */}
      <div className="relative w-full h-[320px] bg-black/40 rounded-xl overflow-hidden border border-white/10">
        <img
          src={images[index]}
          alt={`slide-${index}`}
          className="h-full w-full object-contain"
          loading="eager"
          onError={(e) => {
            console.log("❌ Image failed:", images[index]);
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* CONTROLS */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* DOTS */}
      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-1">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-cyan-300" : "bg-slate-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}