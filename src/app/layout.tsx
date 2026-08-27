import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biohanced Labs | Research-Grade Peptides",
  description:
    "US-synthesized research-grade peptides, third-party verified by HPLC & mass spectrometry. Biology, upgraded.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon", type: "image/png" },
      { url: "/biohanced/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon", type: "image/png" }, { url: "/biohanced/apple-touch-icon.png" }],
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
