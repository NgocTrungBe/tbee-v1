import React, { FC } from "react";
import IconGitHub from "./icons/github";
import Image from "next/image";
import { FeaturedProject } from "@/types";

interface Props {
  featuredProjects: FeaturedProject[];
}

const FeaturedProjects: FC<Props> = ({ featuredProjects }) => {
  return (
    <ul className="w-full m-0">
      {featuredProjects &&
        featuredProjects.map((project, i) => {
          const isEven = (i + 1) % 2 === 0;
          return (
            <li
              key={i}
              className="grid grid-cols-12 mb-8 md:mb-24 gap-2.5 relative rounded-sm  shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] md:shadow-none"
            >
              <div
                className={`project-image relative z-1 opacity-[.25] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] ${
                  isEven
                    ? "col-start-1 col-end-13 md:col-end-8"
                    : "col-start-1 col-end-13 md:col-end-8"
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
                  className="relative inline-block w-full h-full bg-[#64ffda] rounded-sm z-1"
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
                className={`project-content relative z-5 p-6 pb-5 md:p-0 ${
                  isEven
                    ? "col-start-1 col-end-13 md:text-right"
                    : "col-start-1 col-end-13 md:col-start-5 md:col-end-13 md:text-right"
                }`}
              >
                <p className="my-2.5 font-fira text-brand-primary text-sm">
                  Featured Project
                </p>
                <h3 className="mb-2.5 text-white text-xl font-bold md:text-2xl md:mb-5 md:text-lightest-slate transition duration-300 ease-m hover:text-brand-primary">
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
                <div className="py-5 md:bg-light-navy rounded-sm text-base text-light-slate md:p-6">
                  {project.desc}
                </div>
                <ul className="my-2.5 flex items-center justify-start md:justify-end flex-wrap gap-4 md:mt-6">
                  {project.technicals &&
                    project.technicals.map((item, i) => (
                      <li
                        key={i}
                        className="font-fira text-sm text-light-slate"
                      >
                        {item}
                      </li>
                    ))}
                </ul>
                <div className="-ml-2.5 project-links flex items-center justify-start md:justify-end">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <IconGitHub />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default FeaturedProjects;
