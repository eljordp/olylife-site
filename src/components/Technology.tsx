"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const pillars = [
  {
    title: "PEMF Therapy",
    body: "Low-frequency electromagnetic pulses stimulate cellular repair, reduce inflammation, and restore your body's natural recovery processes. Used clinically for decades.",
  },
  {
    title: "Terahertz Frequency",
    body: "Waves that match your cells' own vibrations promote circulation, support cellular health, and activate your body's healing intelligence — without chemicals.",
  },
  {
    title: "Geomagnetism",
    body: "OlyLife reconnects your cells with the Earth's natural magnetic frequencies, restoring balance at the deepest level.",
  },
];

const outcomes = [
  "Pain relief",
  "Better sleep",
  "Improved circulation",
  "Mental clarity",
  "Less inflammation",
  "More energy",
];

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="technology" className="relative py-24 md:py-32 bg-warm-white overflow-hidden" ref={ref} aria-label="PEMF and Terahertz therapy science and technology">
      <div className="absolute inset-0 opacity-[0.04]">
        <Image
          src="/images/tropical-leaves.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-sage mb-4 font-light">
            The Science of Healing
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.15] mb-6">
            Nature already has the answer.
            <br />
            <em className="text-copper">We bring it home to you.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                {pillar.title}
              </h3>
              <p className="text-warm-gray leading-[1.8] font-light text-[15px]">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-10 border-t border-sand/60"
        >
          {outcomes.map((outcome) => (
            <div key={outcome} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-copper/60" />
              <span className="text-charcoal/70 text-[14px] font-light">
                {outcome}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
