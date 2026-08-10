"use client";

import { Check } from "lucide-react";
import { tiers } from "@/lib/data";
import { COLORS } from "@/lib/theme";

export default function SubscriptionPage({ myTier, setMyTier }) {
  return (
    <div>
      <h1 className="tw-page-title">Grow with the community</h1>
      <p className="tw-page-sub">
        Every tier can learn from every tutorial. Higher tiers unlock more ways to connect and contribute.
      </p>

      <div className="tw-tiers">
        {tiers.map((t) => {
          const key = t.name.toLowerCase();
          const isMine = myTier === key || (key === "community" && myTier === "free");
          return (
            <div
              key={t.name}
              className={`tw-card tw-tier-card ${t.highlighted ? "tw-tier-card-highlighted" : ""}`}
              style={{ borderColor: t.highlighted ? COLORS.clay : COLORS.line }}
            >
              {t.highlighted && <div className="tw-tier-flag">Most popular</div>}
              <div className="tw-tier-name">{t.name}</div>
              <div className="tw-tier-price">{t.price}</div>
              <div className="tw-tier-tagline">{t.tagline}</div>
              <ul className="tw-tier-features">
                {t.features.map((f) => (
                  <li key={f}>
                    <Check size={14} color={COLORS.sage} /> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`tw-btn tw-tier-btn ${t.highlighted ? "tw-btn-primary" : "tw-btn-ghost"}`}
                onClick={() => setMyTier(key === "community" ? "free" : key)}
                disabled={isMine}
              >
                {isMine ? "Current plan" : `Choose ${t.name}`}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
