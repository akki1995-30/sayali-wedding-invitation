import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sayali | Wedding Invitation",
  description: "Wedding invitation for Sayali and Akash.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
