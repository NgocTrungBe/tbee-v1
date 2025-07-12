"use client";

import React, { FC } from "react";
import Image from "next/image";
import { FeaturedProject } from "@/types";
import { easeOut, motion } from "framer-motion";
import Icon from "./icons/icon";
import { motionBaseProps } from "@/config/animation";
interface Props {
  featuredProjects: FeaturedProject[];
}

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

const FeaturedProjects: FC<Props> = ({ featuredProjects }) => {
  return (
    <motion.ul className="m-0 w-full">
      {featuredProjects &&
        featuredProjects.map((project, i) => {
          const isEven = (i + 1) % 2 === 0;
          return (
            <motion.li
              key={i}
              className="relative mb-8 grid grid-cols-12 gap-2.5 rounded-sm 
                shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] 
                lg:mb-24 lg:shadow-none
              "
              variants={fadeUp}
              {...motionBaseProps}
            >
              <div
                className={`project-image relative z-1 opacity-[.25] 
                  shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] 
                  lg:opacity-100 
                  ${
                    isEven
                      ? "col-start-1 col-end-13 lg:col-start-6 lg:col-end-13"
                      : "col-start-1 col-end-13 lg:col-end-8"
                  }
                `}
              >
                <a
                  href={project.external || project.github || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    relative z-1 inline-block h-full w-full 
                    rounded-sm bg-brand-secondary
                  "
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
                className={`project-content relative flex flex-col items-start justify-center 
                  p-6 pb-5 lg:p-0
                  ${
                    isEven
                      ? "col-start-1 col-end-13 lg:col-end-9 lg:items-start lg:text-left"
                      : "col-start-1 col-end-13 lg:col-start-5 lg:col-end-13 lg:items-end lg:text-right"
                  }
                `}
              >
                <p className="my-2.5 text-sm font-fira text-brand-primary">
                  Featured Project
                </p>

                <h3
                  className="mb-2.5 text-xl font-bold text-white transition duration-300 ease-m 
                    hover:text-brand-primary sm:text-[22px] 
                    lg:mb-5 lg:text-[24px] lg:text-lightest-slate
                  "
                >
                  <a
                    href={project.external || project.github || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.name}
                  </a>
                </h3>

                <div
                  className="
                    relative rounded-sm py-5 text-base text-light-slate 
                    shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] 
                    lg:z-2 lg:bg-light-navy lg:p-6
                  "
                >
                  {project.desc}
                </div>

                <ul className="my-2.5 flex flex-wrap items-center lg:mt-6 lg:z-2">
                  {project.technicals?.map((item, i) => (
                    <li
                      key={i}
                      className="
                        mb-[5px] mr-2.5 text-sm font-fira 
                        text-lightest-slate lg:text-light-slate
                      "
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
