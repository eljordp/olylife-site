"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 md:py-40 bg-deep-green text-white" ref={ref} aria-label="About OlyLife International and our wellness mission">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[12px] tracking-[0.3em] uppercase text-sage-light/60 mb-4 font-light">
              Our Mission
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] mb-8">
              Health is the foundation
              <br />
              <em className="text-copper-light">of happiness.</em>
            </h2>
            <div className="space-y-6 text-white/50 text-[15px] leading-[1.9] font-light">
              <p>
                OlyLife was built on a belief that resonates with everyone who
                has ever struggled with pain, sleeplessness, or the slow erosion
                of vitality that comes with age: your body wants to heal. It just
                needs the right support.
              </p>
              <p>
                By combining PEMF therapy, Terahertz frequency technology, and
                the principles of Earth&apos;s natural geomagnetism, we created
                devices that work with your body&apos;s intelligence — not
                against it. No chemicals. No side effects. Just your body, doing
                what it was designed to do.
              </p>
              <p>
                From Hong Kong to the United States, from Southeast Asia to
                Europe, our community of people reclaiming their health grows
                every day. We are honored to be part of their journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            {/* Lifestyle images */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/hero-lady.webp"
                  alt="Senior woman enjoying improved wellness and natural pain relief with OlyLife PEMF therapy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-deep-green/20" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/lifestyle-man.webp"
                  alt="Active senior man benefiting from OlyLife Terahertz frequency healing and PEMF therapy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-deep-green/20" />
              </div>
            </div>

            <div className="space-y-0">
              {[
                { number: "50,000+", label: "People using OlyLife worldwide" },
                { number: "30+", label: "Countries with active customers" },
                { number: "2018", label: "Year founded" },
                {
                  number: "97%",
                  label: "Of customers recommend to family & friends",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="py-8 border-b border-white/10 first:pt-0 last:border-0"
                >
                  <p className="font-serif text-4xl text-copper-light mb-2">
                    {stat.number}
                  </p>
                  <p className="text-white/40 text-[14px] font-light">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
