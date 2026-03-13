"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Science", href: "#technology" },
  { label: "Collection", href: "#products" },
  { label: "Stories", href: "#testimonials" },
  { label: "Our Mission", href: "#about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-sand/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
          <a href="#hero" className="group">
            <span
              className={`font-serif text-2xl font-medium tracking-wide transition-colors duration-500 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              OlyLife
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] font-light tracking-[0.15em] uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-warm-gray hover:text-charcoal"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#products"
              className={`text-[13px] tracking-[0.15em] uppercase border-b transition-all duration-300 pb-0.5 ${
                scrolled
                  ? "text-charcoal border-charcoal hover:border-sage hover:text-sage"
                  : "text-white border-white/50 hover:border-white"
              }`}
            >
              View Products
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-8 text-charcoal"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-serif text-3xl text-charcoal hover:text-sage transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#products"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-sm tracking-[0.2em] uppercase border-b border-charcoal pb-1 text-charcoal"
              >
                View Products
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
