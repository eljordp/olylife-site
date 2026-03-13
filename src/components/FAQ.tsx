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
    question: "What is PEMF therapy?",
    answer:
      "PEMF (Pulsed Electromagnetic Field) therapy uses gentle electromagnetic pulses to stimulate cellular repair, reduce inflammation, and support your body's natural healing. It's been used clinically for decades and is now available for home use through OlyLife devices.",
  },
  {
    question: "What does Terahertz frequency do?",
    answer:
      "Terahertz waves match your cells' own vibrations, promoting circulation and cellular health naturally — without chemicals. OlyLife combines this with PEMF for a comprehensive approach.",
  },
  {
    question: "What's the difference between the Tera-P90 and P90+?",
    answer:
      "The Tera-P90 ($1,000) is our flagship PEMF and Terahertz device for full-body therapy. The Tera-P90+ ($1,500) includes everything in the P90 plus the Frost Age Beauty Device and Revitaluxe Massager for the complete experience.",
  },
  {
    question: "Is it safe?",
    answer:
      "Yes. PEMF therapy is non-invasive with no chemicals or side effects. OlyLife devices are designed for safe home use with adjustable settings. Consult your doctor if you have a pacemaker or are pregnant.",
  },
  {
    question: "How quickly will I feel results?",
    answer:
      "Many people feel a difference within the first few sessions. For chronic conditions, most notice significant improvement within 2-4 weeks of daily 30-minute sessions.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "Yes — every OlyLife device comes with a 30-day satisfaction guarantee and full product warranty. We stand behind our ohana.",
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
      className="py-24 md:py-32 bg-background"
      ref={ref}
      aria-label="Frequently Asked Questions about OlyLife PEMF therapy"
    >
      <div className="max-w-3xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.15]">
            Questions? <em className="text-copper">We got you.</em>
          </h2>
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
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-serif text-lg text-charcoal group-hover:text-copper transition-colors duration-300 leading-snug">
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
                    <p className="text-warm-gray text-[15px] leading-[1.9] font-light pb-6 pr-12">
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
