"use client";

import { useEffect } from "react";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Featured from "@/components/sections/Featured";
import Others from "@/components/sections/Others";
import Contact from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      requestAnimationFrame(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Featured />
      <Others />
      <Contact />
    </>
  );
}
