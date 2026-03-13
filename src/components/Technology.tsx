"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Radio, Globe, Heart, Brain, Shield } from "lucide-react";

const technologies = [
  {
    icon: Zap,
    title: "PEMF Technology",
    subtitle: "Pulsed Electromagnetic Field",
    description:
      "Low-frequency electromagnetic fields pulsed into the body to enhance natural recovery processes by stimulating cellular repair, improving circulation, and reducing inflammation at the cellular level.",
  },
  {
    icon: Radio,
    title: "Terahertz Frequency",
    subtitle: "Cellular Resonance Therapy",
    description:
      "Terahertz waves resonate with the natural frequencies of the human body, promoting cellular health, improving blood circulation, and enhancing overall energy levels for deep, lasting wellness.",
  },
  {
    icon: Globe,
    title: "Geomagnetism",
    subtitle: "Earth's Natural Healing Field",
    description:
      "Harnessing the Earth's natural magnetic field through bioelectromagnetic technology to enhance cellular function — aligning your body with the healing frequencies found in nature.",
  },
];

const benefits = [
  { icon: Heart, label: "Pain Relief", desc: "Reduce chronic and acute pain" },
  { icon: Brain, label: "Better Sleep", desc: "Deep, restorative rest" },
  {
    icon: Shield,
    label: "Immune Support",
    desc: "Strengthen natural defenses",
  },
  { icon: Zap, label: "More Energy", desc: "Cellular-level vitality" },
  { icon: Heart, label: "Circulation", desc: "Improved blood flow" },
  { icon: Brain, label: "Mental Clarity", desc: "Sharper cognitive function" },
];

function AnimatedCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Technology() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="py-24 md:py-32 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-emerald text-sm font-semibold tracking-widest uppercase">
            The Science
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mt-4 mb-6">
            Three Technologies.
            <br />
            <span className="gradient-text">One Mission.</span>
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            OlyLife combines PEMF, Terahertz, and Geomagnetic frequencies into
            devices that support your body&apos;s natural ability to heal,
            recover, and thrive.
          </p>
        </motion.div>

        {/* Technology cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {technologies.map((tech, i) => (
            <AnimatedCard key={tech.title} delay={i * 0.2}>
              <div className="group relative bg-cream rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-emerald/20">
                <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald/20 transition-colors">
                  <tech.icon size={28} className="text-emerald" />
                </div>
                <p className="text-xs text-emerald font-semibold tracking-widest uppercase mb-2">
                  {tech.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  {tech.title}
                </h3>
                <p className="text-charcoal/60 leading-relaxed">
                  {tech.description}
                </p>
                {/* Decorative line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald to-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Benefits grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            What OlyLife Can Do For You
          </h3>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            Backed by thousands of real testimonials from people who have
            experienced life-changing results.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((benefit, i) => (
            <AnimatedCard key={benefit.label} delay={0.8 + i * 0.1}>
              <div className="bg-cream rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald group-hover:text-white transition-colors">
                  <benefit.icon
                    size={22}
                    className="text-emerald group-hover:text-white transition-colors"
                  />
                </div>
                <h4 className="font-bold text-charcoal text-sm mb-1">
                  {benefit.label}
                </h4>
                <p className="text-xs text-charcoal/50">{benefit.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
