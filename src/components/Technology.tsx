"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "PEMF Therapy",
    subtitle: "Pulsed Electromagnetic Field",
    body: "Gentle, low-frequency electromagnetic pulses reach deep into your body to stimulate cellular repair, reduce inflammation, and restore the natural recovery processes that slow with age. Used in clinical settings for decades — now available for home use.",
  },
  {
    number: "02",
    title: "Terahertz Frequency",
    subtitle: "Cellular Resonance",
    body: "Terahertz waves operate at frequencies that match your body's own cellular vibrations. This resonance promotes circulation, supports cellular health, and activates your body's innate healing intelligence — gently, naturally, without chemicals.",
  },
  {
    number: "03",
    title: "Geomagnetism",
    subtitle: "Earth's Healing Field",
    body: "For millennia, humans lived in harmony with the Earth's magnetic field. Modern life has disconnected us. OlyLife's bioelectromagnetic technology reconnects your cells with these natural frequencies, restoring balance at the deepest level.",
  },
];

const outcomes = [
  "Reduced chronic pain",
  "Deeper, restorative sleep",
  "Improved circulation",
  "Greater mental clarity",
  "Reduced inflammation",
  "Stronger immune response",
  "Faster recovery",
  "Renewed energy",
];

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="technology" className="py-28 md:py-40 bg-warm-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-24"
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-sage mb-4 font-light">
            The Science
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.15] mb-6">
            Three ancient principles.
            <br />
            <em className="text-copper">One modern device.</em>
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed font-light">
            OlyLife doesn&apos;t mask symptoms. It works at the cellular level —
            supporting your body&apos;s natural ability to heal, restore, and
            protect itself.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="grid md:grid-cols-12 gap-6 md:gap-12 py-12 border-t border-sand/60"
            >
              <div className="md:col-span-1">
                <span className="text-stone text-sm font-light">
                  {pillar.number}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-1">
                  {pillar.title}
                </h3>
                <p className="text-[12px] tracking-[0.2em] uppercase text-sage font-light">
                  {pillar.subtitle}
                </p>
              </div>
              <div className="md:col-span-7">
                <p className="text-warm-gray leading-[1.8] font-light text-[15px]">
                  {pillar.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outcomes with lifestyle image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 pt-16 border-t border-sand/60"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[12px] tracking-[0.3em] uppercase text-sage mb-10 font-light">
                What our customers experience
              </p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-copper/60 flex-shrink-0" />
                    <span className="text-charcoal/70 text-[15px] font-light">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] hidden lg:block">
              <Image
                src="/images/lifestyle-woman.webp"
                alt="Wellness and healing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-white/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
