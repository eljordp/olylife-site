"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ArrowRight, Zap, Eye, Wind, Droplets } from "lucide-react";

const products = [
  {
    name: "Tera-P90+",
    subtitle: "Ultimate Wellness Bundle",
    price: "$1,500",
    originalPrice: "$2,100",
    badge: "BEST SELLER",
    description:
      "The complete healing system. Includes the Tera-P90 device, Frost Age Beauty Device, and Revitaluxe Massager. PEMF + Terahertz + RF + EMS in one premium package.",
    features: [
      "Dual PEMF & Terahertz therapy",
      "Frost Age Beauty Device included",
      "Revitaluxe Massager included",
      "Full body + face treatment",
    ],
    icon: Zap,
    featured: true,
  },
  {
    name: "Tera-P90",
    subtitle: "Flagship Therapy Device",
    price: "$1,000",
    originalPrice: "$1,200",
    badge: "MOST POPULAR",
    description:
      "Our pioneering dual-technology device combining PEMF and Terahertz frequency therapy. The device that started a wellness revolution.",
    features: [
      "PEMF & Terahertz combined",
      "Full body therapy",
      "Multiple intensity settings",
      "Portable design",
    ],
    icon: Zap,
    featured: false,
  },
  {
    name: "Vitality Wand",
    subtitle: "Targeted Therapy",
    price: "$600",
    originalPrice: "$695",
    badge: "",
    description:
      "Precision terahertz and PEMF therapy in a handheld wand. Perfect for targeted treatment of specific areas — joints, muscles, and pressure points.",
    features: [
      "Terahertz + PEMF",
      "Pinpoint accuracy",
      "Lightweight & portable",
      "USB-C rechargeable",
    ],
    icon: Wind,
    featured: false,
  },
  {
    name: "Galaxy G-One",
    subtitle: "PEMF Eye Massager",
    price: "$500",
    originalPrice: "$645",
    badge: "",
    description:
      "Smart PEMF eye massager goggles designed to relieve eye strain, reduce puffiness, and promote relaxation through gentle electromagnetic therapy.",
    features: [
      "PEMF eye therapy",
      "Reduces eye strain",
      "Gentle heat therapy",
      "Bluetooth audio",
    ],
    icon: Eye,
    featured: false,
  },
  {
    name: "H+ Hydrogen Infuser",
    subtitle: "Molecular Hydrogen Water",
    price: "$600",
    originalPrice: "$695",
    badge: "",
    description:
      "Transform ordinary water into hydrogen-rich, antioxidant water. MRET Technology infuses molecular hydrogen for enhanced cellular hydration and recovery.",
    features: [
      "MRET Technology",
      "Molecular hydrogen",
      "Antioxidant water",
      "Portable bottle",
    ],
    icon: Droplets,
    featured: false,
  },
  {
    name: "A9 BamaAir",
    subtitle: "Smart Air Purifier",
    price: "$500",
    originalPrice: "$600",
    badge: "",
    description:
      "Smart negative ion air ionizer that creates a clean, healing environment. Removes pollutants, allergens, and creates an atmosphere of pure wellness.",
    features: [
      "Negative ion technology",
      "Removes 99.9% pollutants",
      "Whisper quiet",
      "Smart sensors",
    ],
    icon: Wind,
    featured: false,
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        product.featured
          ? "bg-navy text-white col-span-1 md:col-span-2 lg:col-span-2"
          : "bg-white text-charcoal border border-gray-100 hover:shadow-2xl"
      }`}
    >
      {product.badge && (
        <div
          className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
            product.featured
              ? "bg-gold text-navy"
              : "bg-emerald/10 text-emerald"
          }`}
        >
          {product.badge}
        </div>
      )}

      <div className="p-8 md:p-10">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
            product.featured ? "bg-emerald/20" : "bg-cream"
          }`}
        >
          <product.icon
            size={26}
            className={product.featured ? "text-emerald" : "text-emerald"}
          />
        </div>

        <p
          className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
            product.featured ? "text-gold" : "text-emerald"
          }`}
        >
          {product.subtitle}
        </p>

        <h3
          className={`text-3xl font-bold mb-2 ${
            product.featured ? "text-white" : "text-charcoal"
          }`}
        >
          {product.name}
        </h3>

        <div className="flex items-baseline gap-3 mb-4">
          <span
            className={`text-3xl font-bold ${
              product.featured ? "text-gold" : "text-emerald"
            }`}
          >
            {product.price}
          </span>
          <span
            className={`text-sm line-through ${
              product.featured ? "text-white/40" : "text-charcoal/30"
            }`}
          >
            {product.originalPrice}
          </span>
        </div>

        <p
          className={`mb-6 leading-relaxed ${
            product.featured ? "text-white/70" : "text-charcoal/60"
          }`}
        >
          {product.description}
        </p>

        <ul className="space-y-2 mb-8">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  product.featured ? "bg-gold" : "bg-emerald"
                }`}
              />
              <span
                className={
                  product.featured ? "text-white/80" : "text-charcoal/70"
                }
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 ${
              product.featured
                ? "bg-emerald hover:bg-emerald-dark text-white"
                : "bg-charcoal hover:bg-navy text-white"
            }`}
          >
            Learn More
            <ArrowRight size={16} />
          </button>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  product.featured
                    ? "text-gold fill-gold"
                    : "text-gold fill-gold"
                }
              />
            ))}
            <span
              className={`text-xs ml-1 ${
                product.featured ? "text-white/50" : "text-charcoal/40"
              }`}
            >
              4.9
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="products"
      className="py-24 md:py-32 bg-background"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-emerald text-sm font-semibold tracking-widest uppercase">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mt-4 mb-6">
            Wellness Technology
            <br />
            <span className="gradient-text">Built to Heal</span>
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            From full-body therapy to targeted treatments, every OlyLife device
            is designed to support your body&apos;s natural healing abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
