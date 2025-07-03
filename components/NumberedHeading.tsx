import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NumberedHeading: FC<Props> = ({ children }) => {
  return <h2 className="numbered-heading">{children}</h2>;
};

export default NumberedHeading;
