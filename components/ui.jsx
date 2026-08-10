"use client";

import { Crown, Sparkles } from "lucide-react";
import { TYPE_META } from "@/lib/theme";

export function Avatar({ initials, color, size = 40 }) {
  return (
    <div
      className="tw-avatar"
      style={{
        width: size,
        height: size,
        background: color,
        fontSize: size * 0.36,
      }}
    >
      {initials}
    </div>
  );
}

export function TierBadge({ tier }) {
  if (tier === "pro") {
    return (
      <span className="tw-badge tw-badge-pro">
        <Crown size={11} strokeWidth={2.5} /> Pro
      </span>
    );
  }
  if (tier === "plus") {
    return (
      <span className="tw-badge tw-badge-plus">
        <Sparkles size={11} strokeWidth={2.5} /> Plus
      </span>
    );
  }
  return null;
}

export function TypeTag({ type }) {
  const meta = TYPE_META[type];
  return (
    <span className="tw-tag" style={{ color: meta.color, borderColor: meta.color }}>
      {meta.label}
    </span>
  );
}
