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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Features />
    <Contents />
    <Gallery />
  </StrictMode>,
);
