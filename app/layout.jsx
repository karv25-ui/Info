import "./globals.css";

export const metadata = {
  title: "Info — learn out loud",
  description:
    "A subscription community for tutorials, behind-the-scenes, and how-tos that grow every time someone adds to the thread.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
