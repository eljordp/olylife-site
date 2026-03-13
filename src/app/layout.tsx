import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://olylife-site.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2D3B28",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "OlyLife | PEMF & Terahertz Therapy Devices for Pain Relief & Wellness",
    template: "%s | OlyLife",
  },
  description:
    "Discover OlyLife PEMF and Terahertz therapy devices — the Tera-P90, Tera-P90+, and more. Clinically-inspired wellness technology for natural pain relief, better sleep, improved circulation, and total body healing. Trusted by 50,000+ people worldwide. Best PEMF device for home use.",
  keywords: [
    "OlyLife",
    "OlyLife Tera-P90",
    "OlyLife review",
    "OlyLife PEMF",
    "PEMF therapy device",
    "PEMF for pain relief",
    "PEMF for seniors",
    "terahertz therapy",
    "terahertz frequency healing",
    "best PEMF device",
    "PEMF device for home use",
    "pain relief device",
    "natural pain relief",
    "wellness technology",
    "Tera-P90+",
    "PEMF therapy",
    "electromagnetic therapy",
    "pulsed electromagnetic field therapy",
  ],
  authors: [{ name: "OlyLife International" }],
  creator: "OlyLife International",
  publisher: "OlyLife International",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "OlyLife",
    title:
      "OlyLife | PEMF & Terahertz Therapy Devices for Pain Relief & Wellness",
    description:
      "Clinically-inspired PEMF and Terahertz therapy for total body wellness. Discover the Tera-P90 and Tera-P90+ — natural pain relief, better sleep, and renewed energy. Trusted by 50,000+ people worldwide.",
    images: [
      {
        url: "/images/p90-device.webp",
        width: 1200,
        height: 630,
        alt: "OlyLife Tera-P90 PEMF and Terahertz therapy device for natural pain relief and wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "OlyLife | PEMF & Terahertz Therapy Devices for Pain Relief & Wellness",
    description:
      "Clinically-inspired PEMF and Terahertz therapy for total body wellness. Natural pain relief, better sleep, and renewed energy — trusted by 50,000+ people worldwide.",
    images: ["/images/p90-device.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "OlyLife",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
