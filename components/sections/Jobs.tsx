import React from "react";
import NumberedHeading from "../NumberedHeading";
import JobList from "../JobList";
import { jobs } from "@/content/jobs";

const Jobs = () => {
  return (
    <section id="jobs" className="max-w-[700px] m-auto py-20 md:py-27">
      <NumberedHeading>Where I’ve Worked</NumberedHeading>
      <JobList jobs={jobs} />
    </section>
  );
};

export default Jobs;
