import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

const HighlightLink: FC<Props> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="relative text-brand-primary after:transition-all after:duration-220 after:ease-custom cursor-pointer after:absolute after:left-0 after:-bottom-[1px] after:w-0 after:h-[1px] after:bg-brand-primary hover:after:w-full"
    >
      {children}
    </a>
  );
};

export default HighlightLink;
