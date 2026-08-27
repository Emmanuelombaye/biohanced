import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biohanced Labs | Research-Grade Peptides",
  description:
    "US-synthesized research-grade peptides, third-party verified by HPLC & mass spectrometry. Biology, upgraded.",
  icons: {
    icon: "/biohanced/favicon.png",
    shortcut: "/biohanced/favicon.png",
    apple: "/biohanced/apple-touch-icon.png",
  },
  openGraph: {
    title: "Biohanced Labs | Research-Grade Peptides",
    description:
      "US-synthesized research-grade peptides, third-party verified by HPLC & mass spectrometry. Biology, upgraded.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biohanced Labs | Research-Grade Peptides",
    description:
      "US-synthesized research-grade peptides, third-party verified by HPLC & mass spectrometry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
