"use client";

import { useState } from "react";
import { Avatar, TierBadge } from "@/components/ui";
import { PostCard } from "@/components/Feed";
import { posts, connections } from "@/lib/data";
import { COLORS, ACCENTS } from "@/lib/theme";

export default function ProfilePage({ myTier }) {
  const [accent, setAccent] = useState(COLORS.clay);
  const [bio, setBio] = useState(
    "Studio owner learning in public. Mostly lighting and color grading. Always happy to swap notes."
  );

  return (
    <div>
      <div className="tw-card tw-profile-header" style={{ borderTop: `4px solid ${accent}` }}>
        <div className="tw-profile-top">
          <Avatar initials="KV" color={accent} size={64} />
          <div style={{ flex: 1 }}>
            <div className="tw-profile-name">
              Karv <TierBadge tier={myTier} />
            </div>
            <div className="tw-profile-handle">@karv25 · Studio owner</div>
          </div>
          <button className="tw-btn tw-btn-ghost">Edit profile</button>
        </div>

        <textarea
          className="tw-bio-input"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={2}
        />

        <div className="tw-accent-picker">
          <span>Profile color</span>
          {ACCENTS.map((c) => (
            <button
              key={c}
              onClick={() => setAccent(c)}
              className="tw-swatch"
              style={{ background: c, outline: accent === c ? `2px solid ${COLORS.ink}` : "none" }}
            />
          ))}
        </div>

        <div className="tw-stat-row">
          <div className="tw-stat">
            <div className="tw-stat-num">12</div>
            <div className="tw-stat-label">Tutorials posted</div>
          </div>
          <div className="tw-stat">
            <div className="tw-stat-num">27</div>
            <div className="tw-stat-label">Threads extended</div>
          </div>
          <div className="tw-stat">
            <div className="tw-stat-num">{connections.length}</div>
            <div className="tw-stat-label">Connections</div>
          </div>
        </div>
      </div>

      <div className="tw-card tw-section">
        <div className="tw-section-title">Connections</div>
        <div className="tw-connections-grid">
          {connections.map((c, i) => (
            <div key={i} className="tw-connection">
              <Avatar initials={c.initials} color={c.color} size={44} />
              <span>{c.name.split(" ")[0]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="tw-card tw-section">
        <div className="tw-section-title">Pinned tutorials</div>
        <div className="tw-feed">
          {posts.slice(0, 2).map((p) => (
            <PostCard key={p.id} post={p} onOpen={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
}
