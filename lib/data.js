// TEMPORARY mock data.
// This file stands in for real queries (e.g. Prisma + Postgres) and will be
// removed once the database is wired up — see README.md "Roadmap".

import { COLORS } from "./theme";

export const posts = [
  {
    id: 1,
    type: "tutorial",
    title: "Balancing Ambient + Flash for Golden Hour Portraits",
    author: { name: "Mara Ostrowski", initials: "MO", tier: "pro", color: COLORS.clay },
    excerpt:
      "Meter for the sky first, then bring your subject up to match with a single off-camera flash. Here's the exact settings I start with and why.",
    tags: ["lighting", "portraits"],
    likes: 142,
    extCount: 3,
    saves: 38,
    timeAgo: "2h",
  },
  {
    id: 2,
    type: "bts",
    title: "What a 12-hour wedding day actually looks like",
    author: { name: "Devon Ruiz", initials: "DR", tier: "plus", color: COLORS.sage },
    excerpt:
      "From a 5am alarm to the last dance at midnight — the real timeline, the gear I actually touch, and the parts nobody posts about.",
    tags: ["weddings", "workflow"],
    likes: 96,
    extCount: 0,
    saves: 21,
    timeAgo: "5h",
  },
  {
    id: 3,
    type: "howto",
    title: "Cutting a 3-Minute Highlight Reel in Under 30 Minutes",
    author: { name: "Priya Nakamura", initials: "PN", tier: "free", color: COLORS.slate },
    excerpt:
      "A repeatable timeline structure so you're not staring at a blank editor. Works for weddings, brand shoots, and events alike.",
    tags: ["editing", "video"],
    likes: 78,
    extCount: 2,
    saves: 45,
    timeAgo: "1d",
  },
  {
    id: 4,
    type: "tutorial",
    title: "Color Grading Skin Tones Without Losing Warmth",
    author: { name: "Mara Ostrowski", initials: "MO", tier: "pro", color: COLORS.clay },
    excerpt:
      "The three-node grade I use on every job. Small, boring adjustments that make a huge difference on real skin under real light.",
    tags: ["color", "editing"],
    likes: 211,
    extCount: 5,
    saves: 67,
    timeAgo: "1d",
  },
  {
    id: 5,
    type: "bts",
    title: "My actual camera bag for a full day shoot",
    author: { name: "Theo Bramwell", initials: "TB", tier: "free", color: COLORS.gold },
    excerpt:
      "Not a gear-flex post. This is what earns its weight on my back for 12 hours, and what I stopped carrying two years ago.",
    tags: ["gear"],
    likes: 54,
    extCount: 1,
    saves: 12,
    timeAgo: "2d",
  },
];

export const threadData = {
  1: [
    {
      id: "a",
      author: { name: "Jules Ferreira", initials: "JF", color: COLORS.slate },
      body: "Adding to this — if you're shooting a couple that keeps drifting out of the light, a small reflector bounced off the flash gives you a fill without a second strobe.",
      timeAgo: "1h",
    },
    {
      id: "b",
      author: { name: "Devon Ruiz", initials: "DR", color: COLORS.sage },
      body: "This is basically how I shoot every reception entrance now. One tweak: I drop my flash power a third of a stop when there's any white in the dress, saves a highlight recovery later.",
      timeAgo: "45m",
    },
    {
      id: "c",
      author: { name: "Priya Nakamura", initials: "PN", color: COLORS.slate },
      body: "For anyone on a budget flash without high-speed sync — you can fake this at f/2.8 and 1/200s in most golden hour light. Not identical but close.",
      timeAgo: "20m",
    },
  ],
  3: [
    {
      id: "a",
      author: { name: "Theo Bramwell", initials: "TB", color: COLORS.gold },
      body: "I add one more beat at the very front: 2 seconds of pure ambient sound before any music hits. Makes the whole reel feel less like an ad.",
      timeAgo: "20h",
    },
    {
      id: "b",
      author: { name: "Mara Ostrowski", initials: "MO", color: COLORS.clay },
      body: "Seconding the ambient-sound-first trick. Also — building a template sequence once and reusing markers saves me half the time listed here.",
      timeAgo: "12h",
    },
  ],
  4: [
    {
      id: "a",
      author: { name: "Devon Ruiz", initials: "DR", color: COLORS.sage },
      body: "This finally fixed the orange-y highlights I kept fighting on outdoor ceremonies. Thank you for actually showing the node graph.",
      timeAgo: "22h",
    },
  ],
};

export const groups = [
  {
    id: 1,
    name: "Golden Hour Shooters",
    focus: "Natural light portraiture",
    members: ["MO", "JF", "DR", "PN"],
    memberCount: 24,
    live: false,
  },
  {
    id: 2,
    name: "The Editing Bay",
    focus: "Color grading & video editing",
    members: ["PN", "TB", "MO", "DR", "JF"],
    memberCount: 41,
    live: true,
  },
  {
    id: 3,
    name: "New Studio Owners",
    focus: "Business & client workflow",
    members: ["TB", "DR"],
    memberCount: 17,
    live: false,
  },
];

export const tiers = [
  {
    name: "Community",
    price: "Free",
    tagline: "Learn from everyone, always",
    features: [
      "Browse all tutorials & how-tos",
      "Join 2 groups",
      "Comment & extend threads",
      "Text-based group chat",
    ],
  },
  {
    name: "Plus",
    price: "$9/mo",
    tagline: "For the actively learning",
    features: [
      "Everything in Community",
      "Unlimited groups",
      "Group voice notes",
      "Upload your own tutorials",
      "Save unlimited posts",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$24/mo",
    tagline: "For working creatives",
    features: [
      "Everything in Plus",
      "Group tutorial video calls",
      "Pro badge on your profile",
      "Priority thread visibility",
      "Early access to new tools",
    ],
  },
];

export const connections = [
  { name: "Mara Ostrowski", initials: "MO", color: COLORS.clay },
  { name: "Devon Ruiz", initials: "DR", color: COLORS.sage },
  { name: "Priya Nakamura", initials: "PN", color: COLORS.slate },
  { name: "Theo Bramwell", initials: "TB", color: COLORS.gold },
  { name: "Jules Ferreira", initials: "JF", color: "#9B6B9E" },
  { name: "Sana Okafor", initials: "SO", color: COLORS.clay },
];
