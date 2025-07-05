import React from "react";
import NumberedHeading from "../NumberedHeading";
import SkillList from "../SkillList";
import { skills } from "@/content/skills";

const Skills = () => {
  return (
    <section id="skills" className="max-w-[900px] m-auto mb-20">
      <NumberedHeading>My skills</NumberedHeading>
      <SkillList skills={skills} />
    </section>
  );
};

export default Skills;
