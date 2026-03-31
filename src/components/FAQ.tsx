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
      "Results vary based on individual experience. Many people notice a difference within their first few sessions — for ongoing conditions, most see meaningful improvement within 2-4 weeks of consistent daily use.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "We stand behind every device we sell. Not sure yet? We encourage you to try a free session first — experience the results before you commit. Contact us to book yours.",
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
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
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

        <div className="divide-y divide-sand/60 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full py-5 sm:py-6 flex items-start justify-between gap-4 sm:gap-6 text-left group"
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
                    <p className="text-warm-gray text-[15px] leading-[1.9] font-light pb-6 pr-4 sm:pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border border-sand/60 p-8 sm:p-12 text-center"
        >
          <p className="text-[12px] tracking-[0.3em] uppercase text-sage mb-4 font-light">
            Experience It First
          </p>
          <h3 className="font-serif text-3xl text-charcoal mb-3">
            Try a free session.
          </h3>
          <p className="text-warm-gray text-[15px] leading-[1.8] font-light mb-8 max-w-md mx-auto">
            Feel relaxation, pain relief, and renewed energy before you buy.
            Inquire below to book your complimentary session.
          </p>
          <a
            href="mailto:info@olyprocessing.com"
            className="group inline-flex items-center justify-center gap-3 bg-deep-green hover:bg-charcoal text-white px-10 py-4 text-[13px] tracking-[0.15em] uppercase transition-all duration-500"
          >
            Book Your Free Session
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
