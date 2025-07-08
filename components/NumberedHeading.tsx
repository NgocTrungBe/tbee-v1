"use client";

import { easeOut, motion } from "framer-motion";
import React, { FC } from "react";

interface Props {
  title: string;
  centered?: boolean;
  overline?: boolean;
}

const NumberedHeading: FC<Props> = ({
  title,
  centered = false,
  overline = false,
}) => {
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
      className={`numbered-heading ${centered ? "!justify-center" : ""} ${
        overline
          ? "!text-sm !text-brand-primary before:hidden after:!hidden font-fira !mb-5"
          : ""
      }`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  );
};

export default NumberedHeading;
