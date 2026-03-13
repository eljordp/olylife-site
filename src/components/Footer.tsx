"use client";

import { Heart } from "lucide-react";

const footerLinks = {
  Products: [
    { label: "Tera-P90+", href: "#products" },
    { label: "Tera-P90", href: "#products" },
    { label: "Vitality Wand", href: "#products" },
    { label: "Galaxy G-One", href: "#products" },
    { label: "H+ Hydrogen Infuser", href: "#products" },
    { label: "A9 BamaAir", href: "#products" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Technology", href: "#technology" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Become a Distributor", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#" },
    { label: "Shipping & Returns", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "User Guides", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-2xl font-bold">OlyLife</span>
            </div>
            <p className="text-white/50 leading-relaxed mb-6 max-w-sm">
              Supporting total body wellness through innovative PEMF and
              Terahertz technology. Empowering health. Enriching life.
            </p>
            <p className="text-xs text-white/20 leading-relaxed">
              These statements have not been evaluated by the FDA. This product
              is not intended to diagnose, treat, cure, or prevent any disease.
              OlyLife devices are wellness products, not medical devices.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm tracking-widest uppercase mb-4 text-white/80">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-emerald text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} OlyLife International. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1 text-white/30 text-sm">
            Made with <Heart size={14} className="text-emerald" /> for your
            wellness journey
          </p>
        </div>
      </div>
    </footer>
  );
}
