"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-warm-white" ref={ref} aria-label="Start your OlyLife healing journey">
      <div className="max-w-2xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.15] mb-6">
            Your healing journey
            <em className="text-copper"> starts with aloha.</em>
          </h2>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
            <a
              href="#products"
              className="group inline-flex items-center gap-3 bg-deep-green hover:bg-charcoal text-white px-10 py-4 text-[13px] tracking-[0.15em] uppercase transition-all duration-500"
            >
              View Devices
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="mailto:info@olyprocessing.com"
              className="text-warm-gray hover:text-charcoal text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
