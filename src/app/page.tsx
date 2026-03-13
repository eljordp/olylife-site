import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Technology />
      <Products />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
