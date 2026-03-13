"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-deep-green text-white overflow-hidden" ref={ref} aria-label="About OlyLife International and our wellness mission">
      <div className="absolute inset-0 opacity-[0.07]">
        <Image
          src="/images/hawaii-sunset.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-sage-light/60 mb-4 font-light">
            About OlyLife
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] mb-8">
            Your body wants to heal.
            <br />
            <em className="text-copper-light">We give it the tools.</em>
          </h2>
          <p className="text-white/50 text-[16px] leading-[1.9] font-light max-w-2xl mx-auto mb-16">
            OlyLife combines PEMF therapy, Terahertz frequency, and Earth&apos;s
            natural geomagnetism into devices that work with your body — not
            against it. No chemicals. No side effects. Just natural healing
            technology designed for better living. Founded in 2018, now trusted
            by 50,000+ people across 30+ countries.
          </p>

          <div className="flex flex-wrap justify-center gap-12">
            {[
              { number: "50,000+", label: "Customers" },
              { number: "30+", label: "Countries" },
              { number: "97%", label: "Recommend" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <p className="font-serif text-4xl text-copper-light mb-1">
                  {stat.number}
                </p>
                <p className="text-white/40 text-[13px] font-light">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
