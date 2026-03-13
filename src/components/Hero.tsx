"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-emerald-dark opacity-90" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8"
        >
          <Sparkles size={16} className="text-gold" />
          <span className="text-white/80 text-sm tracking-wide">
            PEMF & Terahertz Wellness Technology
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
        >
          Start Your
          <br />
          <span className="gradient-text">Healing Journey</span>
          <br />
          Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Discover how thousands of people are transforming their health with
          OlyLife&apos;s revolutionary PEMF and Terahertz frequency technology.
          Pain relief. Better sleep. Total body wellness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#products"
            className="bg-emerald hover:bg-emerald-dark text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide transition-all hover:scale-105 pulse-glow"
          >
            Browse Products
          </a>
          <a
            href="#testimonials"
            className="border-2 border-white/30 hover:border-white/60 text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide transition-all hover:scale-105"
          >
            See Real Results
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald rounded-full" />
            <span>FDA Registered Facility</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald rounded-full" />
            <span>50,000+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald rounded-full" />
            <span>30-Day Money Back</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
