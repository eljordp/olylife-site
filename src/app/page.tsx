import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "OlyLife | PEMF & Terahertz Therapy Devices for Pain Relief & Wellness",
  description:
    "Discover the OlyLife Tera-P90 and Tera-P90+ — clinically-inspired PEMF and Terahertz therapy devices for natural pain relief, better sleep, improved circulation, and total body wellness. Best PEMF device for home use. Trusted by 50,000+ customers worldwide.",
  alternates: {
    canonical: "https://olylife-site.vercel.app",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OlyLife International",
  url: "https://olylife-site.vercel.app",
  logo: "https://olylife-site.vercel.app/images/oly-life-badge.png",
  description:
    "OlyLife International creates clinically-inspired PEMF and Terahertz therapy devices for total body wellness, natural pain relief, and healing.",
  foundingDate: "2018",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@olyprocessing.com",
    contactType: "customer service",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "OlyLife Tera-P90+",
  description:
    "The complete OlyLife healing system. Includes the Tera-P90 PEMF and Terahertz therapy device, Frost Age Beauty Device, and Revitaluxe Massager — combining PEMF, Terahertz, RF, and EMS therapy for whole-body and facial rejuvenation. The best PEMF device for home use.",
  image: "https://olylife-site.vercel.app/images/tera-p90-plus.png",
  brand: {
    "@type": "Brand",
    name: "OlyLife",
  },
  offers: {
    "@type": "Offer",
    price: "1500.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://olylife-site.vercel.app/#products",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50000",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OlyLife",
  url: "https://olylife-site.vercel.app",
  description:
    "Clinically-inspired PEMF and Terahertz therapy devices for natural pain relief, better sleep, and total body wellness.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://olylife-site.vercel.app/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is PEMF therapy and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PEMF (Pulsed Electromagnetic Field) therapy uses gentle, low-frequency electromagnetic pulses to stimulate cellular repair and regeneration. These pulses penetrate deep into your body, promoting circulation, reducing inflammation, and supporting your cells' natural energy production. PEMF therapy has been used in clinical settings for decades and is now available for home use through devices like the OlyLife Tera-P90.",
      },
    },
    {
      "@type": "Question",
      name: "What is Terahertz frequency therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Terahertz frequency therapy operates at wavelengths that match your body's own cellular vibrations — typically in the range of 0.1 to 10 THz. This resonance promotes circulation, supports cellular health, and activates your body's innate healing intelligence. OlyLife devices combine Terahertz frequency with PEMF technology for a comprehensive, multi-modal approach to wellness.",
      },
    },
    {
      "@type": "Question",
      name: "What is the OlyLife Tera-P90 and what does it include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The OlyLife Tera-P90 is our flagship PEMF and Terahertz therapy device, priced at $1,000. It combines dual PEMF and Terahertz frequency therapy in a single, beautifully designed unit with multiple therapy settings. The Tera-P90+ ($1,500) is our most comprehensive system and includes the Tera-P90 device, the Frost Age Beauty Device for facial rejuvenation, and the Revitaluxe Massager.",
      },
    },
    {
      "@type": "Question",
      name: "Who can benefit from using OlyLife PEMF devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OlyLife devices are designed for anyone seeking natural pain relief, better sleep, improved circulation, or overall wellness support. They are especially popular among seniors and people managing chronic pain, arthritis, joint stiffness, poor sleep, low energy, and inflammation. Over 50,000 customers across 30+ countries use OlyLife devices daily.",
      },
    },
    {
      "@type": "Question",
      name: "Is PEMF therapy safe for home use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PEMF therapy is non-invasive and has been studied extensively for safety. OlyLife devices are designed specifically for safe, effective home use with multiple intensity settings. There are no chemicals, no side effects, and no recovery time. Consult your healthcare provider if you have a pacemaker, are pregnant, or have specific medical concerns.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to feel results from the Tera-P90?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many OlyLife customers report feeling a difference within the first few sessions. For chronic conditions like joint pain, inflammation, or sleep issues, most customers notice significant improvement within 2 to 4 weeks of consistent daily use. We recommend daily 30-minute sessions for optimal benefits.",
      },
    },
    {
      "@type": "Question",
      name: "Can PEMF therapy help with pain relief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PEMF therapy is widely recognized for its ability to support natural pain relief. By stimulating cellular repair, reducing inflammation, and improving circulation, PEMF devices like the OlyLife Tera-P90 help address the root causes of pain rather than simply masking symptoms.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the Tera-P90 and the Tera-P90+?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Tera-P90 ($1,000) is our flagship standalone PEMF and Terahertz therapy device for full-body treatment. The Tera-P90+ ($1,500) includes everything in the Tera-P90 plus the Frost Age Beauty Device for facial rejuvenation and the Revitaluxe Massager with RF and EMS therapy.",
      },
    },
    {
      "@type": "Question",
      name: "Does OlyLife offer a satisfaction guarantee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OlyLife stands behind every device with a 30-day satisfaction guarantee. We also provide a full product warranty to protect your investment in your health.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use the OlyLife Tera-P90 at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Place the device on or near the area you want to treat, select your preferred setting, and relax for a 30-minute session. Most customers incorporate it into their daily routine. The device is portable, quiet, and designed for effortless home use with no setup or maintenance required.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://olylife-site.vercel.app",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main>
        <Navigation />
        <Hero />
        <Technology />
        <Products />
        <Testimonials />
        <About />
        <CTA />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
