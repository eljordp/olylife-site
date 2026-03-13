"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-deep-green text-white" ref={ref} aria-label="About OlyLife International and our wellness mission">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-sage-light/60 mb-4 font-light">
            Our Ohana
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] mb-8">
            We take care of our own.
            <br />
            <em className="text-copper-light">That&apos;s the aloha way.</em>
          </h2>
          <p className="text-white/50 text-[16px] leading-[1.9] font-light max-w-2xl mx-auto mb-16">
            OlyLife combines PEMF therapy, Terahertz frequency, and Earth&apos;s
            natural geomagnetism into devices that work with your body — not
            against it. No chemicals. No side effects. Like the healing spirit
            of the islands, we believe wellness is meant to be shared. Founded
            in 2018, our ohana now spans 50,000+ people across 30+ countries.
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
