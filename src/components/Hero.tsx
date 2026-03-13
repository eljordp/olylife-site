"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background — deep, warm, organic */}
      <div className="absolute inset-0 bg-deep-green" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(107,127,94,0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(184,124,76,0.15) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pb-24 pt-40 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-[13px] tracking-[0.3em] uppercase text-white/40 mb-8 font-light"
        >
          PEMF & Terahertz Wellness Technology
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.1] max-w-4xl mb-8 font-medium"
        >
          Start your
          <br />
          healing journey
          <br />
          <em className="text-copper-light font-normal">today.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-white/50 text-lg md:text-xl max-w-lg leading-relaxed font-light mb-12"
        >
          Thousands of people have rediscovered what it feels like to live
          without pain, sleep deeply, and move freely. This is where it begins.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 items-start"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-500"
          >
            View Product Brochure
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#testimonials"
            className="inline-flex items-center gap-3 text-white/50 hover:text-white text-sm tracking-[0.15em] uppercase transition-colors duration-300 py-4"
          >
            Read their stories
          </a>
        </motion.div>

        {/* Understated trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="mt-20 pt-8 border-t border-white/10 flex flex-wrap gap-12 text-white/25 text-[12px] tracking-[0.15em] uppercase font-light"
        >
          <span>50,000+ Customers Worldwide</span>
          <span>30-Day Satisfaction Guarantee</span>
          <span>Active in 30+ Countries</span>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ height: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-px bg-white/20 origin-top"
          style={{ height: 60 }}
        />
      </motion.div>
    </section>
  );
}
