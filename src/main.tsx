// react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// css
import "./index.css";

// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Features />
  </StrictMode>,
);
