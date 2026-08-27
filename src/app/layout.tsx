import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Found | Weight Loss Medication Personalized for You",
  description:
    "Weight Care from Found. Achievable and maintainable weight loss with individualized, medically-guided programs that fit your life. Take the quiz to see if it's right for you.",
  icons: {
    icon: "/biohanced/favicon.png",
    apple: "/biohanced/apple-touch-icon.png",
  },
  openGraph: {
    title: "Found | Weight Loss Medication Personalized for You",
    description:
      "Weight Care from Found. Achievable and maintainable weight loss with individualized, medically-guided programs that fit your life. Take the quiz to see if it's right for you.",
    type: "website",
    images: [
      {
        url: "https://cdn.prod.website-files.com/65d8ac86401a1ef9f1915fdb/66589a64b2c1ba62e57f44bd_Found%20OG%20Image.png",
        width: 1200,
        height: 630,
        alt: "Found weight care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Found | Weight Loss Medication Personalized for You",
    description:
      "Weight Care from Found. Achievable and maintainable weight loss with individualized, medically-guided programs that fit your life.",
    images: [
      "https://cdn.prod.website-files.com/65d8ac86401a1ef9f1915fdb/66589a64b2c1ba62e57f44bd_Found%20OG%20Image.png",
    ],
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
