"use client";

import React, { FC } from "react";
import SkillTag from "./SkillBox";
import { SKill } from "@/types";
import { easeOut, motion } from "framer-motion";

interface Props {
  skills: SKill[];
}

const SkillList: FC<Props> = ({ skills }) => {
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
        duration: 0.8,
        ease: easeOut,
      },
    },
  };
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="skill-list flex items-center flex-wrap gap-x-4 gap-y-4"
    >
      {skills.map((skill, i) => (
        <motion.div key={i} variants={fadeUp}>
          <SkillTag icon={skill.icon} name={skill.name} />
        </motion.div>
      ))}
    </motion.ul>
  );
};

export default SkillList;
