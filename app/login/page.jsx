"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSending(true);
    try {
      await signIn("email", { email: email.trim(), redirect: false, callbackUrl: "/" });
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="tw-login-root">
      <div className="tw-card tw-login-card">
        <div className="tw-login-brand">
          <div className="tw-brand-mark">I</div>
          <div>
            <div className="tw-wordmark">Info</div>
            <div className="tw-tagline">learn out loud</div>
          </div>
        </div>

        <h1 className="tw-login-title">Welcome</h1>
        <p className="tw-login-sub">
          Sign in to browse tutorials, join groups, and add to what the community's already building.
        </p>

        <button
          className="tw-btn tw-btn-ghost tw-login-google"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.5 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.7-.4-3.5z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 45c5.4 0 10.3-2.1 14-5.5l-6.5-5.3c-2 1.4-4.6 2.3-7.5 2.3-5.3 0-9.7-3.3-11.3-8l-6.6 5.1C9.6 40.6 16.3 45 24 45z"/>
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4 5.7l6.5 5.3C41.5 36 44 30.5 44 24c0-1.4-.1-2.7-.4-3.5z"/>
          </svg>
          Continue with Google
        </button>

        <div className="tw-login-divider">
          <span>or</span>
        </div>

        {sent ? (
          <div className="tw-login-sent">
            <Mail size={18} />
            Check <strong>{email}</strong> for a sign-in link.
          </div>
        ) : (
          <form onSubmit={handleEmailSignIn} className="tw-login-email-form">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="tw-login-input"
            />
            <button type="submit" className="tw-btn tw-btn-primary" disabled={sending}>
              {sending ? "Sending…" : "Email me a link"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}