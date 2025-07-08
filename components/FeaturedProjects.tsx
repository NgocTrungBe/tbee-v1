"use client";

import React, { FC } from "react";
import Image from "next/image";
import { FeaturedProject } from "@/types";
import { easeOut, motion } from "framer-motion";
import Icon from "./icons/icon";

interface Props {
  featuredProjects: FeaturedProject[];
}

const FeaturedProjects: FC<Props> = ({ featuredProjects }) => {
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
  return (
    <motion.ul className="w-full m-0">
      {featuredProjects &&
        featuredProjects.map((project, i) => {
          const isEven = (i + 1) % 2 === 0;
          return (
            <motion.li
              key={i}
              className="grid grid-cols-12 mb-8 lg:mb-24 gap-2.5 relative rounded-sm shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] lg:shadow-none"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div
                className={`project-image relative z-1 opacity-[.25] lg:opacity-100 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] ${
                  isEven
                    ? "col-start-1 col-end-13 lg:col-start-6 lg:col-end-13"
                    : "col-start-1 col-end-13 lg:col-end-8"
                }`}
              >
                <a
                  href={
                    project.external
                      ? project.external
                      : project.github
                      ? project.github
                      : "#"
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-block w-full h-full bg-brand-secondary rounded-sm z-1"
                >
                  <div className="image-wrapper">
                    <Image
                      className="h-full object-cover"
                      src={project.img}
                      alt={project.name}
                    />
                  </div>
                </a>
              </div>
              <div
                className={`project-content relative flex flex-col items-start justify-center p-6 pb-5 lg:p-0 ${
                  isEven
                    ? "col-start-1 col-end-13 lg:col-end-9 lg:items-start lg:text-left"
                    : "col-start-1 col-end-13 lg:col-start-5 lg:col-end-13 lg:items-end lg:text-right"
                }`}
              >
                <p className="my-2.5 font-fira text-brand-primary text-sm">
                  Featured Project
                </p>
                <h3 className="mb-2.5 text-white text-xl font-bold sm:text-[22px] lg:text-[24px] lg:mb-5 lg:text-lightest-slate transition duration-300 ease-m hover:text-brand-primary">
                  <a
                    href={
                      project.external
                        ? project.external
                        : project.github
                        ? project.github
                        : "#"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.name}
                  </a>
                </h3>
                <div className="relative py-5 lg:bg-light-navy rounded-sm text-base text-light-slate lg:p-6 lg:z-2 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]">
                  {project.desc}
                </div>
                <ul className="my-2.5 flex items-center flex-wrap lg:mt-6 lg:z-2">
                  {project.technicals &&
                    project.technicals.map((item, i) => (
                      <li
                        key={i}
                        className="mb-[5px] mr-2.5 font-fira text-sm text-lightest-slate lg:text-light-slate"
                      >
                        {item}
                      </li>
                    ))}
                </ul>
                <div className="-ml-2.5 project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Icon name="GitHub" />
                  </a>
                </div>
              </div>
            </motion.li>
          );
        })}
    </motion.ul>
  );
};

export default FeaturedProjects;
