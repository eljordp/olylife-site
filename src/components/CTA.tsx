"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-emerald text-sm font-semibold tracking-widest uppercase">
            Your Journey Starts Now
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mt-4 mb-6">
            Ready to Transform
            <br />
            <span className="gradient-text">Your Health?</span>
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto mb-10">
            Join over 50,000 people who have discovered the healing power of
            OlyLife. Browse our product catalog and find the perfect device for
            your wellness journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#products"
              className="flex items-center gap-2 bg-emerald hover:bg-emerald-dark text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide transition-all hover:scale-105 pulse-glow"
            >
              Browse Product Catalog
              <ArrowRight size={20} />
            </a>
            <a
              href="#testimonials"
              className="flex items-center gap-2 border-2 border-charcoal/20 hover:border-emerald text-charcoal px-10 py-4 rounded-full text-lg font-semibold tracking-wide transition-all hover:scale-105"
            >
              Read More Stories
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-charcoal/40 text-sm">
            <a
              href="tel:+1-800-OLYLIFE"
              className="flex items-center gap-2 hover:text-emerald transition-colors"
            >
              <Phone size={16} />
              <span>1-800-OLYLIFE</span>
            </a>
            <a
              href="mailto:info@olylife.com"
              className="flex items-center gap-2 hover:text-emerald transition-colors"
            >
              <Mail size={16} />
              <span>info@olylife.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
