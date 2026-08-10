"use client";

import { useState } from "react";
import { Mic, Video, X, UserPlus, PhoneOff } from "lucide-react";
import { Avatar } from "@/components/ui";
import { groups } from "@/lib/data";
import { ACCENTS } from "@/lib/theme";

function SessionModal({ group, mode, onClose }) {
  const isVoice = mode === "voice";
  return (
    <div className="tw-modal-backdrop" onClick={onClose}>
      <div className="tw-modal" onClick={(e) => e.stopPropagation()}>
        <div className="tw-modal-header">
          <div>
            <div className="tw-modal-kicker">
              {isVoice ? "Group voice note" : "Group tutorial video"} · {group.name}
            </div>
            <div className="tw-live-row">
              <span className="tw-live-dot" /> Recording
            </div>
          </div>
          <button className="tw-icon-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="tw-modal-body">
          {isVoice ? (
            <div className="tw-voice-wave">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.05}s`, height: 10 + ((i * 13) % 34) }} />
              ))}
            </div>
          ) : (
            <div className="tw-video-grid">
              {group.members.slice(0, 4).map((m, i) => (
                <div key={i} className="tw-video-tile">
                  <Avatar initials={m} color={ACCENTS[i % ACCENTS.length]} size={44} />
                </div>
              ))}
            </div>
          )}

          <div className="tw-participants">
            {group.members.map((m, i) => (
              <Avatar key={i} initials={m} color={ACCENTS[i % ACCENTS.length]} size={30} />
            ))}
          </div>
        </div>

        <div className="tw-modal-footer">
          <button className="tw-btn tw-btn-danger" onClick={onClose}>
            <PhoneOff size={16} /> Leave {isVoice ? "recording" : "call"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GroupsPage() {
  const [session, setSession] = useState(null);

  return (
    <div>
      <h1 className="tw-page-title">Groups</h1>
      <p className="tw-page-sub">
        Small circles built around one skill. Drop a voice note between shoots, or hop on a live tutorial call.
      </p>

      <div className="tw-groups-list">
        {groups.map((g) => (
          <div key={g.id} className="tw-card tw-group-card">
            <div className="tw-group-top">
              <div>
                <div className="tw-group-name">
                  {g.name}
                  {g.live && <span className="tw-live-pill">● live now</span>}
                </div>
                <div className="tw-group-focus">{g.focus}</div>
              </div>
              <div className="tw-group-avatars">
                {g.members.slice(0, 4).map((m, i) => (
                  <Avatar key={i} initials={m} color={ACCENTS[i % ACCENTS.length]} size={28} />
                ))}
                <span className="tw-group-count">{g.memberCount} members</span>
              </div>
            </div>

            <div className="tw-group-actions">
              <button className="tw-btn tw-btn-ghost" onClick={() => setSession({ group: g, mode: "voice" })}>
                <Mic size={15} /> Voice note
              </button>
              <button className="tw-btn tw-btn-ghost" onClick={() => setSession({ group: g, mode: "video" })}>
                <Video size={15} /> Tutorial call
              </button>
              <button className="tw-btn tw-btn-primary tw-btn-push-right">
                <UserPlus size={15} /> Join group
              </button>
            </div>
          </div>
        ))}
      </div>

      {session && (
        <SessionModal group={session.group} mode={session.mode} onClose={() => setSession(null)} />
      )}
    </div>
  );
}
