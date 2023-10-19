import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPGenius",
  description: "Interactive CPG Marketing Reports",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
