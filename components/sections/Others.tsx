"use client";

import React from "react";
import LazyVideo from "../LazyVideo";
import { easeOut, motion } from "framer-motion";

const Others = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };
  return (
    <section className="max-w-[700px] m-auto pb-10">
      <motion.h2
        className="text-center text-2xl sm:text-[28px] font-bold mt-2.5 mb-10 text-lightest-slate"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        🎶 Music & Creativity
      </motion.h2>
      <motion.p
        className="text-gray-400 mb-16 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Music is my creative outlet outside of coding. I love covering acoustic
        songs and sharing them with others.
      </motion.p>
      <motion.div
        className="flex items-center flex-wrap sm:flex-nowrap justify-center gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <LazyVideo
            videoSrc="/videos/cover-2.mp4"
            thumbnailSrc="/videos/cover-2-thumb.jpg"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <LazyVideo
            videoSrc="/videos/cover-1.mp4"
            thumbnailSrc="/videos/cover-1-thumb.jpg"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <a
          href="https://www.youtube.com/@trungbeofficial9958"
          target="_blank"
          className="relative text-white font-fira hover:text-brand-primary text-green after:transition-all after:duration-220 after:ease-custom cursor-pointer after:absolute after:left-0 after:-bottom-[1px] after:w-0 after:h-[1px] after:bg-brand-primary hover:after:w-full"
        >
          See more on my channel →
        </a>
      </motion.div>
    </section>
  );
};

export default Others;
