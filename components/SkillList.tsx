"use client";

import React, { FC } from "react";
import SkillTag from "./SkillBox";
import { SKill } from "@/types";
import { easeOut, motion } from "framer-motion";
import { container, motionBaseProps } from "@/config/animation";

interface Props {
  skills: SKill[];
}

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

const SkillList: FC<Props> = ({ skills }) => {
  return (
    <motion.ul
      variants={container}
      {...motionBaseProps}
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
