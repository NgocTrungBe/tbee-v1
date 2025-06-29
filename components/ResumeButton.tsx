import React, { FC } from "react";

interface Props {
  path: string;
}

const ResumeButton: FC<Props> = ({ path }) => {
  const resumeButtonClass = [
    "ml-4 px-4 py-2 text-brand-primary text-sm text-bold",
    "transition duration-300 linear border-solid border border-brand-primary rounded-sm",
    "hover:shadow-[3px_3px_0px_0px_#d8b4fe] hover:-translate-[4px] sm:hidden",
  ].join(" ");
  return (
    <a
      href={path}
      target="_blank"
      rel="noreferrer"
      className={resumeButtonClass}
    >
      Resume
    </a>
  );
};

export default ResumeButton;
