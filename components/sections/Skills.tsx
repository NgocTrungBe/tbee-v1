import React from "react";
import NumberedHeading from "../NumberedHeading";
import SkillList from "../SkillList";
import { skills } from "@/content/skills";

const Skills = () => {
  return (
    <section id="skills" className="max-w-[900px] m-auto mb-20 scroll-mt-25">
      <NumberedHeading title="My skills" />
      <SkillList skills={skills} />
    </section>
  );
};

export default Skills;
