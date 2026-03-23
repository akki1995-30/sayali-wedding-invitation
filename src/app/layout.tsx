import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sayali | Wedding Invitation",
  description: "Wedding invitation for Sayali and Akash.",
  keywords: [
    "Sayali wedding invitation",
    "Sayali Akash Wedding",
    "marriage",
    "Dhule wedding",
    "wedding invitation",
    "Sayali Akash marriage",
    "Indian wedding",
    "Dhule marriage ceremony",
  ],
  openGraph: {
    title: "Sayali & Akash Wedding Invitation",
    description:
      "You are cordially invited to celebrate the wedding of Sayali and Akash in Dhule.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayali & Akash Wedding Invitation",
    description:
      "Join us for the wedding celebration of Sayali and Akash in Dhule.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
