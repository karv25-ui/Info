# Threadwork

A subscription-based community for tutorials, behind-the-scenes posts, and how-tos —
where every tutorial is a thread other members can add to, extend, or make more efficient.

## Status

This is a working front-end prototype. Every screen is real, interactive React —
navigation, the tutorial threads (you can add an extension and it appends live),
the group voice-note/video-call panels, and the subscription tier switcher. None
of it is connected to a backend yet: there's no real database, auth, file storage,
payments, or live audio/video. That's the next phase — see **Roadmap** below.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS 4** (CSS-first config, see `app/globals.css`)
- **lucide-react** for icons
- Fonts: Fraunces (display) + Karla (body), self-hosted via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.jsx        root layout, fonts, metadata
  page.jsx           entry point → renders ThreadworkApp
  globals.css         Tailwind import + design tokens + component styles
components/
  ThreadworkApp.jsx   top-level shell: nav state, routes between pages
  Sidebar.jsx
  Feed.jsx            home feed + PostCard
  ThreadDetail.jsx     tutorial thread + "extend this thread" composer
  GroupsPage.jsx       groups list + voice-note/video-call session modal
  ProfilePage.jsx      MySpace-style profile customization
  SubscriptionPage.jsx tier comparison
  ui.jsx               shared Avatar / TierBadge / TypeTag
lib/
  data.js             mock content — stands in for real DB queries
  theme.js            color tokens used for dynamic (per-user) styling
```

## Roadmap — wiring up the real backend

Rough order, each one shippable on its own:

1. **Database** — Neon Postgres + Prisma. Models for users, posts, threads/extensions,
   groups, memberships, subscriptions.
2. **Auth** — NextAuth.js with Google, Apple, and magic-link (Resend) sign-in, same
   pattern as Frameshift. Route users into the app instead of the current hardcoded "Karv" user.
3. **Uploads** — Backblaze B2 (S3-compatible) for tutorial media, avatars, and
   voice-note/video recordings, with chunked upload for anything large.
4. **Payments** — Stripe subscriptions for Community / Plus / Pro, webhook-driven
   tier updates, and gating features (uploads, groups, voice/video) by tier server-side.
5. **Realtime voice & video** — a provider like LiveKit or Daily for actual group
   voice notes and tutorial video calls, replacing the current mock session modal.
6. **Threads as real data** — persist posts and extensions, replace `lib/data.js`
   with Prisma queries, add likes/saves as real relations.

`.env.example` lists the environment variables each of these will need.

## Deploying

Designed for Vercel, same as Frameshift: connect the repo, add the environment
variables from `.env.example` as they're filled in, deploy.
