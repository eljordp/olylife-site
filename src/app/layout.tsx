import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OlyLife | Start Your Healing Journey Today",
  description:
    "Experience the future of wellness with OlyLife's PEMF and Terahertz therapy devices. Clinically-inspired technology for total body healing, pain relief, and cellular rejuvenation.",
  keywords:
    "OlyLife, PEMF therapy, terahertz therapy, wellness, healing, pain relief, cellular health",
  openGraph: {
    title: "OlyLife | Start Your Healing Journey Today",
    description:
      "Experience the future of wellness with OlyLife's PEMF and Terahertz therapy devices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
