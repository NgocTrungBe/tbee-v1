import React, { FC } from "react";
import IconGitHub from "./github";
import IconLinkedin from "./linkedin";
import IconMail from "./email";
import IconCopy from "./copy";
import IconPhone from "./phone";
import IconLogo from "./logo";

interface Props {
  name: string;
}

const Icon: FC<Props> = ({ name }) => {
  switch (name) {
    case "Mail":
      return <IconMail />;

    case "Phone":
      return <IconPhone />;

    case "Copy":
      return <IconCopy />;

    case "GitHub":
      return <IconGitHub />;

    case "Linkedin":
      return <IconLinkedin />;

    case "Logo":
      return <IconLogo />;

    default:
      return <IconGitHub />;
  }
};

export default Icon;
