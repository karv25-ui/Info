"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import ThreadDetail from "@/components/ThreadDetail";
import GroupsPage from "@/components/GroupsPage";
import ProfilePage from "@/components/ProfilePage";
import SubscriptionPage from "@/components/SubscriptionPage";

export default function InfoApp() {
  const [active, setActive] = useState("home");
  const [openPost, setOpenPost] = useState(null);
  const [myTier, setMyTier] = useState("plus");

  const changeTab = (id) => {
    setActive(id);
    setOpenPost(null);
  };

  const renderMain = () => {
    if (openPost) return <ThreadDetail post={openPost} onBack={() => setOpenPost(null)} />;
    if (active === "home") return <Feed onOpen={setOpenPost} />;
    if (active === "groups") return <GroupsPage />;
    if (active === "profile") return <ProfilePage myTier={myTier} />;
    if (active === "upgrade") return <SubscriptionPage myTier={myTier} setMyTier={setMyTier} />;
    return null;
  };

  return (
    <div className="tw-root">
      <Sidebar active={active} setActive={changeTab} myTier={myTier} />
      <div className="tw-main">{renderMain()}</div>
    </div>
  );
}
