"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    name: "Tera-P90+",
    subtitle: "The Complete Healing System",
    price: "$1,500",
    image: "/images/tera-p90-plus.png",
    description:
      "Everything you need in one elegant package. The Tera-P90 device, Frost Age Beauty Device, and Revitaluxe Massager — combining PEMF, Terahertz, RF, and EMS therapy for whole-body and facial rejuvenation.",
    highlights: [
      "Full body + face therapy",
      "Three devices included",
      "Our most comprehensive system",
    ],
    badge: "Recommended",
    featured: true,
  },
  {
    name: "Tera-P90",
    subtitle: "Flagship Therapy Device",
    price: "$1,000",
    image: "/images/tera-p90.png",
    description:
      "The device that started it all. Dual PEMF and Terahertz frequency therapy in a single, beautifully designed unit. The foundation of every OlyLife wellness routine.",
    highlights: [
      "PEMF & Terahertz combined",
      "Full body therapy",
      "Multiple settings",
    ],
    badge: "",
    featured: false,
  },
  {
    name: "Vitality Wand",
    subtitle: "Precision Targeted Relief",
    price: "$600",
    image: "/images/vitality-wand.jpg",
    description:
      "For those who know exactly where it hurts. Handheld terahertz and PEMF therapy designed for joints, muscles, and specific pressure points with pinpoint accuracy.",
    highlights: ["Targeted application", "Portable design", "Immediate relief"],
    badge: "",
    featured: false,
  },
  {
    name: "Galaxy G-One",
    subtitle: "PEMF Eye Therapy",
    price: "$500",
    image: "/images/galaxy-g1-alt.jpg",
    description:
      "Gentle electromagnetic therapy for tired, strained eyes. Relieves puffiness, reduces fatigue, and promotes deep relaxation through intelligently designed eye massager goggles.",
    highlights: ["Eye-specific PEMF", "Heat therapy", "Bluetooth audio"],
    badge: "",
    featured: false,
  },
  {
    name: "H+ Hydrogen Infuser",
    subtitle: "Molecular Hydrogen Water",
    price: "$600",
    image: "/images/hydrogen.jpg",
    description:
      "Transform ordinary water into antioxidant-rich, hydrogen-infused water. MRET technology creates molecular hydrogen for enhanced cellular hydration and daily wellness support.",
    highlights: ["MRET technology", "Antioxidant water", "Portable bottle"],
    badge: "",
    featured: false,
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="py-28 md:py-40 bg-background" ref={ref} aria-label="OlyLife PEMF therapy device collection">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-sage mb-4 font-light">
            The Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.15]">
            Our Devices
          </h2>
        </motion.div>

        {/* Featured product — Tera-P90+ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-deep-green text-white relative overflow-hidden">
            <span className="absolute top-8 right-8 z-10 text-[11px] tracking-[0.2em] uppercase text-copper-light border border-copper-light/30 px-3 py-1">
              Recommended
            </span>
            <div className="grid md:grid-cols-2">
              {/* Image side */}
              <div className="relative bg-deep-green flex items-center justify-center p-8 md:p-12 min-h-[300px] md:min-h-[400px]">
                <Image
                  src={products[0].image}
                  alt="OlyLife Tera-P90+ complete PEMF and Terahertz healing system — best PEMF device for home use"
                  width={420}
                  height={420}
                  className="object-contain drop-shadow-lg relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-transparent" />
              </div>
              {/* Copy side */}
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <p className="text-[12px] tracking-[0.3em] uppercase text-white/40 mb-3 font-light">
                  {products[0].subtitle}
                </p>
                <h3 className="font-serif text-4xl md:text-5xl mb-2">
                  {products[0].name}
                </h3>
                <p className="font-serif text-3xl text-copper-light mb-8">
                  {products[0].price}
                </p>
                <p className="text-white/60 leading-[1.8] font-light text-[15px] mb-8">
                  {products[0].description}
                </p>
                <div className="mb-8">
                  {products[0].highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-4 py-3 border-b border-white/10 last:border-0"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-copper-light" />
                      <span className="text-white/70 text-[15px] font-light">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 border border-white/30 hover:border-white/60 text-white px-8 py-3.5 text-[13px] tracking-[0.15em] uppercase transition-all duration-500 self-start"
                >
                  Learn more about the Tera-P90+
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 gap-px bg-sand/40">
          {products.slice(1).map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="bg-background group"
            >
              {/* Product image */}
              <div className="relative bg-ivory flex items-center justify-center p-6 aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.subtitle} — OlyLife PEMF wellness device`}
                  width={340}
                  height={340}
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Product info */}
              <div className="p-8 md:p-10">
                <p className="text-[11px] tracking-[0.25em] uppercase text-sage mb-3 font-light">
                  {product.subtitle}
                </p>
                <h3 className="font-serif text-2xl text-charcoal mb-1">
                  {product.name}
                </h3>
                <p className="font-serif text-xl text-copper mb-5">
                  {product.price}
                </p>
                <p className="text-warm-gray text-[14px] leading-[1.8] font-light mb-6">
                  {product.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-charcoal text-[13px] tracking-[0.1em] uppercase border-b border-charcoal/30 pb-0.5 hover:border-sage hover:text-sage transition-colors duration-300"
                >
                  View {product.name} details
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
