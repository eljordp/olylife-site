"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="OlyLife PEMF and Terahertz wellness therapy — start your healing journey"
    >
      <div className="absolute inset-0 bg-deep-green" />
      <div className="absolute inset-0 opacity-[0.08]">
        <Image
          src="/images/hawaii-ocean.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(61,139,139,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(212,148,76,0.12) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[13px] tracking-[0.3em] uppercase text-white/40 mb-6 font-light"
            >
              Aloha &middot; Welcome to OlyLife
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              Healing starts
              <br />
              with <em className="text-copper-light font-normal">ohana.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/50 text-lg max-w-md leading-relaxed font-light mb-10"
            >
              PEMF and Terahertz therapy that helps your body heal the way
              nature intended. Shared with aloha by 50,000+ people worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-5 items-start"
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 text-[13px] tracking-[0.15em] uppercase transition-all duration-500"
              >
                View Devices
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href="#testimonials"
                className="text-white/40 hover:text-white text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 py-4"
              >
                Read Stories
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex justify-center"
          >
            <Image
              src="/images/p90-device.webp"
              alt="OlyLife Tera-P90 PEMF and Terahertz therapy device"
              width={460}
              height={460}
              className="drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
