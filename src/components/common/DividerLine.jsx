import React from "react";

export default function DividerLine({ className = "" }) {
  return (
    <div className={`mx-auto max-w-7xl px-6 md:px-8 ${className}`}>
      <div className="accent-line" />
    </div>
  );
}