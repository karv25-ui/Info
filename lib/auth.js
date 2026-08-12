import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      from: process.env.EMAIL_FROM,
      // Custom sender: uses the Resend API directly instead of nodemailer/SMTP.
      async sendVerificationRequest({ identifier: email, url }) {
        if (!resend) {
          // No RESEND_API_KEY set (e.g. local dev) — log the link instead of sending it.
          console.log(`[dev] Magic link for ${email}: ${url}`);
          return;
        }
        await resend.emails.send({
          from: process.env.EMAIL_FROM,
          to: email,
          subject: "Sign in to Info",
          html: `
            <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; color: #332A21;">
              <h2 style="margin-bottom: 8px;">Sign in to Info</h2>
              <p style="color: #7A6E5D; line-height: 1.5;">
                Click the button below to sign in. This link expires in 24 hours and can only be used once.
              </p>
              <a href="${url}" style="display:inline-block; background:#C4623D; color:#fff; padding:12px 24px; border-radius:999px; text-decoration:none; font-weight:bold; margin: 16px 0;">
                Sign in
              </a>
              <p style="color: #7A6E5D; font-size: 12px; margin-top: 24px;">
                If you didn't request this, you can safely ignore this email.
              </p>
            </div>
          `,
        });
      },
    }),
  ],
  callbacks: {
    // Runs whenever a JWT is created or updated.
    async jwt({ token, user, trigger, session }) {
      // On sign in, `user` is the full row the Prisma adapter fetched/created —
      // seed the token with our custom fields.
      if (user) {
        token.id = user.id;
        token.tier = user.tier;
        token.bio = user.bio;
        token.accentColor = user.accentColor;
      }
      // Lets the client patch the token after e.g. an account update, via
      // `useSession().update({ ... })`, without waiting for the next sign-in.
      if (trigger === "update" && session) {
        token = { ...token, ...session };
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.tier = token.tier;
        session.user.bio = token.bio;
        session.user.accentColor = token.accentColor;
      }
      return session;
    },
  },
};