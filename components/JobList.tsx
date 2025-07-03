"use client";

import { Job } from "@/types";
import React, { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  jobs: Job[];
}

const JobList: FC<Props> = ({ jobs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const JobTabClass = (i: number) =>
    [
      "relative flex items-center justify-center min-w-[120px] px-3.5 h-[42px] font-fira text-sm ",
      "transition-all duration-220 ease-custom cursor-pointer hover:bg-light-navy",
      "border-b-[2px] border-solid border-lightest-navy",
      `${activeTab === i ? "text-brand-primary bg-light-navy" : ""}`,
    ].join(" ");

  const highLightClass = [
    "absolute top-auto bottom-0 after:absolute left-0 w-[120px] h-[2px]",
    "bg-brand-primary rounded transition-all duration-220 ease-custom",
  ].join(" ");

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex items-center sm:flex-col overflow-x-auto sm:overflow-y-auto relative">
        {jobs &&
          jobs.map((job, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={JobTabClass(i)}
            >
              {job.company}
            </button>
          ))}
        <div
          className={highLightClass}
          style={{
            transform: `translateX(${activeTab * 120}px)`,
          }}
        />
      </div>

      <div className="mt-10 p-[10px_5px] sm:mt-0">
        <AnimatePresence>
          {jobs.map(
            (job, i) =>
              activeTab === i && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  hidden={activeTab !== i}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-lg font-bold">
                    <span>{job.title}</span>
                    <span className="text-brand-primary">
                      &nbsp;@&nbsp;
                      <a href={job.url} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    </span>
                  </h3>
                  <p className="text-sm mb-6 font-fira">{job.range}</p>
                  <ul className="">
                    {job.content.map((ct, j) => (
                      <li
                        key={j}
                        className="relative pl-[30px] mb-2.5 before:content-['▹'] before:absolute before:left-0 before:text-brand-primary"
                      >
                        {ct}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JobList;
