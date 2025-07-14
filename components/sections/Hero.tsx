"use client";
import { motion, easeOut } from "framer-motion";
import React, { useEffect, useState } from "react";
import ResumeButton from "../ResumeButton";
import HighlightLink from "../HighlightLink";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.section className="md:mt-[var(--height-navbar)] md:pt-14 flex items-start justify-center md:justify-start flex-col min-h-screen h-screen sm:min-h-[90vh] sm:h-[90vh]">
      {isMounted && (
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={fadeUp}
            className="mb-5 md:mb-7 ml-1 text-base text-brand-primary font-fira"
          >
            Hi, my name is
          </motion.h1>
          <motion.h2
            variants={fadeUp}
            className="text-4xl text-lightest-slate font-bold md:text-5xl lg:text-6xl"
          >
            Ngoc Trung Be.
          </motion.h2>
          <motion.h3
            variants={fadeUp}
            className="mt-3 mb-8 text-slate text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
          >
            A Front-end Developer.
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="max-w-[540px] mb-12 text-slate text-base break-words whitespace-pre-line"
          >
            I specialize in building accessible, high-performance user
            interfaces with a user-centered experience, focusing on
            meticulousness and consistency in design, and continuously improving
            my <HighlightLink href="/#skills">skills</HighlightLink>.
          </motion.p>
          <motion.div variants={fadeUp}>
            <ResumeButton
              path="/resume.pdf"
              size="large"
              text="View My Full Resume!"
            />
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;
