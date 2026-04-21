import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);

  if (!images.length) return null;

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <img
        src={images[index]}
        alt=""
        className="h-64 w-full rounded-xl object-cover border border-white/10"
      />

      {/* Controls only if multiple */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="mt-2 flex justify-center gap-1">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === index ? "bg-cyan-300" : "bg-slate-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}