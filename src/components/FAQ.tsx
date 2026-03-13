"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is PEMF therapy and how does it work?",
    answer:
      "PEMF (Pulsed Electromagnetic Field) therapy uses gentle, low-frequency electromagnetic pulses to stimulate cellular repair and regeneration. These pulses penetrate deep into your body, promoting circulation, reducing inflammation, and supporting your cells' natural energy production. PEMF therapy has been used in clinical settings for decades and is now available for home use through devices like the OlyLife Tera-P90.",
  },
  {
    question: "What is Terahertz frequency therapy?",
    answer:
      "Terahertz frequency therapy operates at wavelengths that match your body's own cellular vibrations — typically in the range of 0.1 to 10 THz. This resonance promotes circulation, supports cellular health, and activates your body's innate healing intelligence. OlyLife devices combine Terahertz frequency with PEMF technology for a comprehensive, multi-modal approach to wellness.",
  },
  {
    question: "What is the OlyLife Tera-P90 and what does it include?",
    answer:
      "The OlyLife Tera-P90 is our flagship PEMF and Terahertz therapy device, priced at $1,000. It combines dual PEMF and Terahertz frequency therapy in a single, beautifully designed unit with multiple therapy settings. The Tera-P90+ ($1,500) is our most comprehensive system and includes the Tera-P90 device, the Frost Age Beauty Device for facial rejuvenation, and the Revitaluxe Massager — combining PEMF, Terahertz, RF, and EMS therapy.",
  },
  {
    question: "Who can benefit from using OlyLife PEMF devices?",
    answer:
      "OlyLife devices are designed for anyone seeking natural pain relief, better sleep, improved circulation, or overall wellness support. They are especially popular among seniors and people managing chronic pain, arthritis, joint stiffness, poor sleep, low energy, and inflammation. Over 50,000 customers across 30+ countries use OlyLife devices as part of their daily wellness routine.",
  },
  {
    question: "Is PEMF therapy safe for home use?",
    answer:
      "Yes. PEMF therapy is non-invasive and has been studied extensively for safety. OlyLife devices are designed specifically for safe, effective home use with multiple intensity settings so you can customize your therapy sessions. There are no chemicals, no side effects, and no recovery time. As with any wellness device, consult your healthcare provider if you have a pacemaker, are pregnant, or have specific medical concerns.",
  },
  {
    question: "How long does it take to feel results from the Tera-P90?",
    answer:
      "Many OlyLife customers report feeling a difference within the first few sessions — often a sense of relaxation, warmth, and improved circulation. For chronic conditions like joint pain, inflammation, or sleep issues, most customers notice significant improvement within 2 to 4 weeks of consistent daily use. Individual results vary, and we recommend daily 30-minute sessions for optimal benefits.",
  },
  {
    question: "Can PEMF therapy help with pain relief?",
    answer:
      "PEMF therapy is widely recognized for its ability to support natural pain relief. By stimulating cellular repair, reducing inflammation, and improving circulation, PEMF devices like the OlyLife Tera-P90 help address the root causes of pain rather than simply masking symptoms. Our customers have experienced relief from chronic knee pain, back pain, arthritis, fibromyalgia, plantar fasciitis, and many other conditions.",
  },
  {
    question: "What is the difference between the Tera-P90 and the Tera-P90+?",
    answer:
      "The Tera-P90 ($1,000) is our flagship standalone PEMF and Terahertz therapy device for full-body treatment. The Tera-P90+ ($1,500) is our most comprehensive system — it includes everything in the Tera-P90 plus the Frost Age Beauty Device for facial rejuvenation and the Revitaluxe Massager with RF and EMS therapy. The Tera-P90+ is our recommended package for customers who want the complete healing and beauty experience.",
  },
  {
    question: "Does OlyLife offer a satisfaction guarantee?",
    answer:
      "Yes. OlyLife stands behind every device with a 30-day satisfaction guarantee. We want you to experience the benefits of PEMF and Terahertz therapy with confidence. If you are not satisfied with your results within 30 days, contact our support team. We also provide a full product warranty to protect your investment in your health.",
  },
  {
    question: "How do I use the OlyLife Tera-P90 at home?",
    answer:
      "Using the OlyLife Tera-P90 is simple. Place the device on or near the area you want to treat, select your preferred setting, and relax for a 30-minute session. Most customers incorporate it into their daily routine — in the morning for energy and circulation, or in the evening for relaxation and better sleep. The device is portable, quiet, and designed for effortless home use with no setup or maintenance required.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-28 md:py-40 bg-background"
      ref={ref}
      aria-label="Frequently Asked Questions about OlyLife PEMF therapy"
    >
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-sage mb-4 font-light">
            Common Questions
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.15] mb-6">
            Everything you need
            <br />
            <em className="text-copper">to know.</em>
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed font-light max-w-2xl">
            Learn more about PEMF therapy, Terahertz frequency healing, and how
            OlyLife devices can support your wellness journey.
          </p>
        </motion.div>

        <div className="divide-y divide-sand/60">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full py-7 flex items-start justify-between gap-6 text-left group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-serif text-lg md:text-xl text-charcoal group-hover:text-copper transition-colors duration-300 leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-warm-gray flex-shrink-0 mt-1 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-warm-gray text-[15px] leading-[1.9] font-light pb-7 pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
