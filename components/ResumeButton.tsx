import React, { FC } from "react";

interface Props {
  path: string;
  text?: string;
  size?: "small" | "large";
}

const ResumeButton: FC<Props> = ({ path, text = "resume", size = "small" }) => {
  const resumeButtonClass = [
    "inline-block text-brand-primary text-sm text-bold",
    "transition duration-300 linear border-solid border border-brand-primary rounded-sm",
    "hover:shadow-[3px_3px_0px_0px_#d8b4fe] hover:-translate-[4px]",
    `${
      size === "large"
        ? "py-5 px-7"
        : "px-14 mt-2 py-4 md:mt-0 md:ml-4 md:px-4 md:py-2 "
    }`,
  ].join(" ");

  return (
    <a
      href={path}
      target="_blank"
      rel="noreferrer"
      className={resumeButtonClass}
    >
      {text}
    </a>
  );
};

export default ResumeButton;
