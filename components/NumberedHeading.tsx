"use client";

import { easeOut, motion } from "framer-motion";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  centered?: boolean;
}

const NumberedHeading: FC<Props> = ({ children, centered = false }) => {
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
    <motion.h2
      className={`numbered-heading ${centered ? "items-center" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );
};

export default NumberedHeading;
