import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

const HighlightLink: FC<Props> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="relative cursor-pointer text-brand-primary
        after:absolute after:left-0 after:-bottom-[1px]
        after:h-[1px] after:w-0 after:bg-brand-primary
        after:transition-all after:duration-220 after:ease-custom
        hover:after:w-full
      "
    >
      {children}
    </a>
  );
};

export default HighlightLink;
