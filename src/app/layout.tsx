import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OlyLife | Start Your Healing Journey",
  description:
    "Clinically-inspired PEMF and Terahertz therapy for total body wellness. Trusted by over 50,000 people worldwide.",
  openGraph: {
    title: "OlyLife | Start Your Healing Journey",
    description:
      "Clinically-inspired PEMF and Terahertz therapy for total body wellness.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
