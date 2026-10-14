import type { Metadata } from "next";
import { Geist, Space_Grotesk, VT323 } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-geist", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"], variable: "--font-space-grotesk", display: "swap" });
const vt323 = VT323({ subsets: ["latin"], weight: ["400"], variable: "--font-vt323", display: "swap" });

export const metadata: Metadata = {
  title: "Follow the bunny",
  description: "See what the gap in your referral-only growth is worth, and the 4-week sprint that builds your first outbound motion",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${spaceGrotesk.variable} ${vt323.variable}`}>
      <body>{children}</body>
    </html>
  );
}
