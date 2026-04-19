import React from "react";

export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`premium-card rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}