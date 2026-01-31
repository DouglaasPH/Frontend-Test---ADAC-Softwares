// react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// css
import "./index.css";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contents from "./components/Contents";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import CTA from "./components/Cta";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex flex-col gap-50">
      <Navbar />
      <Hero />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  </StrictMode>,
);
