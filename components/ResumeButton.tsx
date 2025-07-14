import React, { FC } from "react";

interface Props {
  path: string;
  text?: string;
  size?: "small" | "large";
}

const ResumeButton: FC<Props> = ({ path, text = "Resume", size = "small" }) => {
  return (
    <a
      href={path}
      target="_blank"
      rel="noreferrer"
      className={`button ${
        size === "large"
          ? "py-5 px-7"
          : "px-14 mt-2 py-4 md:mt-0 md:ml-4 md:px-4 md:py-2 font-fira"
      }`}
    >
      {text}
    </a>
  );
};

export default ResumeButton;
