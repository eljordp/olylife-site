"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    name: "Tera-P90+",
    subtitle: "The Complete Healing System",
    price: "$1,500",
    description:
      "Everything you need in one elegant package. The Tera-P90 device, Frost Age Beauty Device, and Revitaluxe Massager — combining PEMF, Terahertz, RF, and EMS therapy for whole-body and facial rejuvenation.",
    highlights: ["Full body + face therapy", "Three devices included", "Our most comprehensive system"],
    badge: "Recommended",
    featured: true,
  },
  {
    name: "Tera-P90",
    subtitle: "Flagship Therapy Device",
    price: "$1,000",
    description:
      "The device that started it all. Dual PEMF and Terahertz frequency therapy in a single, beautifully designed unit. The foundation of every OlyLife wellness routine.",
    highlights: ["PEMF & Terahertz combined", "Full body therapy", "Multiple settings"],
    badge: "",
    featured: false,
  },
  {
    name: "Vitality Wand",
    subtitle: "Precision Targeted Relief",
    price: "$600",
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
    description:
      "Transform ordinary water into antioxidant-rich, hydrogen-infused water. MRET technology creates molecular hydrogen for enhanced cellular hydration and daily wellness support.",
    highlights: ["MRET technology", "Antioxidant water", "Portable bottle"],
    badge: "",
    featured: false,
  },
  {
    name: "A9 BamaAir",
    subtitle: "Negative Ion Air Purifier",
    price: "$500",
    description:
      "Create a healing environment. This smart negative ion air purifier removes pollutants and allergens, filling your space with clean, ionized air that supports respiratory health.",
    highlights: ["99.9% pollutant removal", "Whisper quiet", "Smart sensors"],
    badge: "",
    featured: false,
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="py-28 md:py-40 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-sage mb-4 font-light">
            The Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.15] mb-6">
            Instruments of
            <br />
            <em className="text-copper">healing.</em>
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed font-light">
            Each device is designed with a single purpose: to help your body do
            what it was always meant to do — heal itself.
          </p>
        </motion.div>

        {/* Featured product */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-deep-green text-white p-10 md:p-16 relative">
            <span className="absolute top-8 right-8 text-[11px] tracking-[0.2em] uppercase text-copper-light border border-copper-light/30 px-3 py-1">
              Recommended
            </span>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
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
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 border border-white/30 hover:border-white/60 text-white px-8 py-3.5 text-[13px] tracking-[0.15em] uppercase transition-all duration-500"
                >
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
              <div className="flex flex-col gap-4">
                {products[0].highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-4 py-4 border-b border-white/10 last:border-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-copper-light" />
                    <span className="text-white/70 text-[15px] font-light">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-sand/40">
          {products.slice(1).map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="bg-background p-8 md:p-10 group"
            >
              <p className="text-[11px] tracking-[0.25em] uppercase text-sage mb-4 font-light">
                {product.subtitle}
              </p>
              <h3 className="font-serif text-2xl text-charcoal mb-1">
                {product.name}
              </h3>
              <p className="font-serif text-xl text-copper mb-6">
                {product.price}
              </p>
              <p className="text-warm-gray text-[14px] leading-[1.8] font-light mb-6">
                {product.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-charcoal text-[13px] tracking-[0.1em] uppercase border-b border-charcoal/30 pb-0.5 hover:border-sage hover:text-sage transition-colors duration-300"
              >
                Details
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
