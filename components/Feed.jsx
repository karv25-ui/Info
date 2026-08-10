"use client";

import { Plus, Clock, Heart, MessageSquare, Bookmark, Camera, PlayCircle } from "lucide-react";
import { Avatar, TierBadge, TypeTag } from "@/components/ui";
import { posts } from "@/lib/data";
import { TYPE_META } from "@/lib/theme";

export function PostCard({ post, onOpen }) {
  return (
    <div className="tw-card tw-post" onClick={() => onOpen(post)}>
      <div className="tw-post-media" style={{ background: `${TYPE_META[post.type].color}1A` }}>
        {post.type === "bts" ? (
          <Camera size={22} color={TYPE_META[post.type].color} strokeWidth={1.6} />
        ) : (
          <PlayCircle size={22} color={TYPE_META[post.type].color} strokeWidth={1.6} />
        )}
      </div>

      <div className="tw-post-body">
        <div className="tw-post-top">
          <TypeTag type={post.type} />
          <span className="tw-timeago">
            <Clock size={11} /> {post.timeAgo}
          </span>
        </div>

        <h3 className="tw-post-title">{post.title}</h3>
        <p className="tw-post-excerpt">{post.excerpt}</p>

        <div className="tw-post-tags">
          {post.tags.map((t) => (
            <span key={t} className="tw-hashtag">
              #{t}
            </span>
          ))}
        </div>

        <div className="tw-post-footer">
          <div className="tw-post-author">
            <Avatar initials={post.author.initials} color={post.author.color} size={26} />
            <span>{post.author.name}</span>
            <TierBadge tier={post.author.tier} />
          </div>
          <div className="tw-post-stats">
            <span>
              <Heart size={14} /> {post.likes}
            </span>
            <span>
              <MessageSquare size={14} /> {post.extCount}
            </span>
            <span>
              <Bookmark size={14} /> {post.saves}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Feed({ onOpen }) {
  return (
    <div>
      <div className="tw-hero">
        <div>
          <h1 className="tw-page-title">Welcome back</h1>
          <p className="tw-page-sub">
            Fresh from people building the same skills you are. Add to a thread, save what helps, share what you know.
          </p>
        </div>
        <button className="tw-btn tw-btn-primary">
          <Plus size={16} /> Share something
        </button>
      </div>

      <div className="tw-feed">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}
