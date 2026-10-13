import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glow Up v2",
  description: "A free audit of where revenue leaks in your commercial flow",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
