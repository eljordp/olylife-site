"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, Leaf } from "lucide-react";

const stats = [
  { number: "50K+", label: "Happy Customers", icon: Users },
  { number: "30+", label: "Countries", icon: Globe },
  { number: "15+", label: "Award-Winning Products", icon: Award },
  { number: "100%", label: "Natural Technology", icon: Leaf },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-navy text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald text-sm font-semibold tracking-widest uppercase">
              About OlyLife
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Empowering Health.
              <br />
              <span className="text-gold">Enriching Life.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              OlyLife was founded on a simple belief: health is the foundation of
              happiness. Our mission is to make cutting-edge wellness technology
              widely available, empowering people to take control of their health
              journey.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              By combining PEMF therapy, Terahertz frequency technology, and the
              principles of Earth&apos;s natural geomagnetism, we&apos;ve created devices
              that work with your body — not against it. From Hong Kong to the
              United States, from Southeast Asia to Europe, our community of
              wellness seekers continues to grow every day.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-emerald/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <stat.icon size={18} className="text-emerald" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">
                      {stat.number}
                    </p>
                    <p className="text-sm text-white/40">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-emerald/20 to-gold/20 rounded-3xl p-12 aspect-square flex items-center justify-center">
              {/* Decorative rings */}
              <div className="absolute inset-8 border border-emerald/20 rounded-full" />
              <div className="absolute inset-16 border border-gold/20 rounded-full" />
              <div className="absolute inset-24 border border-emerald/10 rounded-full" />

              {/* Center content */}
              <div className="text-center relative z-10">
                <div className="w-24 h-24 bg-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-white">O</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">OlyLife</h3>
                <p className="text-white/50 text-sm">
                  Wellness Technology
                  <br />
                  Inspired by Nature
                </p>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/10"
              >
                <p className="text-sm font-semibold">PEMF</p>
                <p className="text-xs text-white/50">Therapy</p>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-12 left-4 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/10"
              >
                <p className="text-sm font-semibold">Terahertz</p>
                <p className="text-xs text-white/50">Frequency</p>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 right-0 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/10"
              >
                <p className="text-sm font-semibold">Geo</p>
                <p className="text-xs text-white/50">Magnetic</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
