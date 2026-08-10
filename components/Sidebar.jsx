"use client";

import { Home, Users, User, Sparkles } from "lucide-react";
import { Avatar, TierBadge } from "@/components/ui";
import { COLORS } from "@/lib/theme";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "groups", label: "Groups", icon: Users },
  { id: "profile", label: "Profile", icon: User },
  { id: "upgrade", label: "Upgrade", icon: Sparkles },
];

export default function Sidebar({ active, setActive, myTier }) {
  return (
    <div className="tw-sidebar">
      <div className="tw-brand">
        <div className="tw-brand-mark">I</div>
        <div className="tw-brand-text">
          <div className="tw-wordmark">Info</div>
          <div className="tw-tagline">learn out loud</div>
        </div>
      </div>

      <nav className="tw-nav">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`tw-nav-item ${isActive ? "tw-nav-item-active" : ""}`}
            >
              <Icon size={18} strokeWidth={2.2} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="tw-nav-footer">
        <button className="tw-mini-profile" onClick={() => setActive("profile")}>
          <Avatar initials="KV" color={COLORS.clay} size={34} />
          <div className="tw-mini-profile-text">
            <div className="tw-mini-name">Karv</div>
            <TierBadge tier={myTier} />
          </div>
        </button>
      </div>
    </div>
  );
}
