"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-40 bg-warm-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-sage mb-6 font-light">
            Your Journey Begins Here
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.15] mb-8">
            You deserve to feel
            <br />
            <em className="text-copper">like yourself again.</em>
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed font-light mb-12 max-w-xl mx-auto">
            Join the thousands of people who woke up one morning and realized the
            pain was gone, the sleep was deep, and life felt possible again.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#products"
              className="group inline-flex items-center gap-3 bg-deep-green hover:bg-charcoal text-white px-10 py-4 text-[13px] tracking-[0.15em] uppercase transition-all duration-500"
            >
              Browse the collection
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="#testimonials"
              className="inline-flex items-center gap-2 text-warm-gray hover:text-charcoal text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 border-b border-warm-gray/30 pb-0.5"
            >
              Read more stories
            </a>
          </div>

          <div className="mt-16 pt-10 border-t border-sand/60">
            <p className="text-warm-gray/50 text-[13px] font-light">
              Questions? Reach us at{" "}
              <a
                href="mailto:info@olyprocessing.com"
                className="text-sage hover:text-charcoal transition-colors border-b border-sage/30 pb-px"
              >
                info@olyprocessing.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
