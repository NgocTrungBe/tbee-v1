import React from "react";
import NumberedHeading from "../NumberedHeading";
import ExperienceTabs from "../ExperienceTabs";
import { jobs } from "@/content/jobs";

const Experience = () => {
  return (
    <section id="experience" className="max-w-[700px] m-auto py-20 md:py-28">
      <NumberedHeading title="Where I’ve Worked" />
      <ExperienceTabs jobs={jobs} />
    </section>
  );
};

export default Experience;
