"use client";

import { Job } from "@/types";
import React, { FC, useState } from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { motionBaseProps } from "@/config/animation";

interface Props {
  jobs: Job[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: easeOut,
    },
  },
};

const ExperienceTabs: FC<Props> = ({ jobs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const JobTabClass = (i: number) =>
    [
      "relative flex items-center justify-center sm:text-start",
      "min-w-[var(--tab-width)] md:max-w-[var(--tab-max-width)] w-full px-3.5 sm:px-5 h-[42px]",
      "font-fira text-sm whitespace-nowrap",
      "transition-all duration-220 ease-custom cursor-pointer hover:bg-light-navy",
      "border-b-[2px] sm:border-b-0 sm:border-l-[2px] border-solid border-lightest-navy",
      activeTab === i ? "text-brand-primary bg-light-navy" : "",
    ].join(" ");

  return (
    <motion.div
      className="flex flex-col sm:flex-row"
      variants={fadeUp}
      {...motionBaseProps}
    >
      {/* Tabs */}
      <div
        className="relative flex items-center overflow-x-auto sm:overflow-x-visible sm:flex-col"
        role="tablist"
        aria-label="Job tabs"
      >
        {jobs.map((job, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={JobTabClass(i)}
            role="tab"
            aria-selected={activeTab === i ? true : false}
            aria-controls={`panel-${i}`}
          >
            {job.company}
            <AnimatePresence mode="wait">
              {activeTab === i && (
                <motion.div
                  layoutId="highlight"
                  className="absolute bottom-[-2px] left-0 h-[2px] w-full 
                             sm:top-0 sm:left-[-2px] sm:h-full sm:w-[2px] 
                             bg-brand-primary"
                />
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>

      {/* Job content */}
      <div className="mt-10 p-[10px_5px] sm:mt-0 sm:ml-6">
        <AnimatePresence mode="wait">
          {jobs.map((job, i) =>
            activeTab === i ? (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-lg font-bold">
                  <span>{job.title}</span>
                  <span className="text-brand-primary">
                    <a href={job.url} target="_blank" rel="noreferrer">
                      &nbsp;&nbsp;@{job.company}
                    </a>
                  </span>
                </h3>
                <p className="text-sm mt-2 mb-6 font-fira">{job.range}</p>
                <ul>
                  {job.content.map((ct, j) => (
                    <li
                      key={j}
                      className="relative pl-[30px] mb-2.5 text-slate
                                 before:content-['▹'] before:absolute before:left-0 
                                 before:text-brand-primary"
                    >
                      {ct}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ExperienceTabs;
