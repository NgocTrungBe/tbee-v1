import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Featured from "@/components/sections/Featured";
import Others from "@/components/sections/Others";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Featured />
      <Others />
      <Contact />
      <Others />
    </>
  );
}
