"use client";

import { useState } from "react";
import { Clock, Heart, Share2, Bookmark, Flame, Send } from "lucide-react";
import { Avatar, TierBadge, TypeTag } from "@/components/ui";
import { threadData } from "@/lib/data";
import { COLORS } from "@/lib/theme";

export default function ThreadDetail({ post, onBack }) {
  const [extensions, setExtensions] = useState(threadData[post.id] || []);
  const [draft, setDraft] = useState("");

  const submit = () => {
    if (!draft.trim()) return;
    setExtensions([
      ...extensions,
      {
        id: `new-${extensions.length}`,
        author: { name: "Karv", initials: "KV", color: COLORS.clay },
        body: draft.trim(),
        timeAgo: "now",
      },
    ]);
    setDraft("");
  };

  return (
    <div className="tw-thread-view">
      <button className="tw-back" onClick={onBack}>
        ← Back to feed
      </button>

      <div className="tw-card tw-thread-original">
        <div className="tw-post-top">
          <TypeTag type={post.type} />
          <span className="tw-timeago">
            <Clock size={11} /> {post.timeAgo}
          </span>
        </div>
        <h2 className="tw-thread-title">{post.title}</h2>
        <p className="tw-thread-body">{post.excerpt}</p>
        <div className="tw-post-author" style={{ marginTop: 14 }}>
          <Avatar initials={post.author.initials} color={post.author.color} size={30} />
          <span>{post.author.name}</span>
          <TierBadge tier={post.author.tier} />
        </div>
        <div className="tw-thread-original-footer">
          <div className="tw-post-stats">
            <span>
              <Heart size={14} /> {post.likes}
            </span>
            <span>
              <Share2 size={14} /> Share
            </span>
            <span>
              <Bookmark size={14} /> Save
            </span>
          </div>
        </div>
      </div>

      <div className="tw-thread-label">
        <Flame size={15} color={COLORS.clay} />
        {extensions.length} {extensions.length === 1 ? "person has" : "people have"} extended this tutorial
      </div>

      <div className="tw-thread-chain">
        {extensions.map((ext) => (
          <div key={ext.id} className="tw-thread-item">
            <div className="tw-thread-line" />
            <Avatar initials={ext.author.initials} color={ext.author.color} size={32} />
            <div className="tw-card tw-thread-ext">
              <div className="tw-post-author" style={{ marginBottom: 6 }}>
                <span style={{ fontWeight: 600 }}>{ext.author.name}</span>
                <span className="tw-timeago" style={{ marginLeft: "auto" }}>
                  {ext.timeAgo}
                </span>
              </div>
              <p className="tw-thread-ext-body">{ext.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="tw-thread-compose">
        <Avatar initials="KV" color={COLORS.clay} size={32} />
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Add something that would make this even more useful..."
          className="tw-input"
        />
        <button className="tw-btn tw-btn-primary tw-btn-icon" onClick={submit}>
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
