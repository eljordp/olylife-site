"use client";

const footerLinks = {
  Collection: [
    { label: "Tera-P90+", href: "#products" },
    { label: "Tera-P90", href: "#products" },
    { label: "Vitality Wand", href: "#products" },
    { label: "Galaxy G-One", href: "#products" },
    { label: "H+ Hydrogen Infuser", href: "#products" },
  ],
  Company: [
    { label: "Our Mission", href: "#about" },
    { label: "The Science", href: "#technology" },
    { label: "Stories", href: "#testimonials" },
    { label: "Become a Distributor", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Shipping & Returns", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white" aria-label="OlyLife site footer">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl mb-6">OlyLife</p>
            <p className="text-white/35 text-[14px] leading-[1.8] font-light max-w-xs mb-8">
              Natural healing through PEMF and Terahertz technology.
              Better sleep. Less pain. More life.
            </p>
            <p className="text-[11px] text-white/15 leading-relaxed font-light">
              These statements have not been evaluated by the FDA. OlyLife
              products are not intended to diagnose, treat, cure, or prevent any
              disease. Individual results may vary.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] tracking-[0.25em] uppercase text-white/30 mb-6 font-light">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-white text-[14px] font-light transition-colors duration-300"
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

      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[12px] font-light">
            &copy; {new Date().getFullYear()} OlyLife International. All rights
            reserved.
          </p>
          <p className="text-white/15 text-[12px] font-light">
            Wellness inspired by nature.
          </p>
        </div>
      </div>
    </footer>
  );
}
