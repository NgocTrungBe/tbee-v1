import React, { FC } from "react";

interface Props {
  isActive: boolean;
  onClick: () => void;
}

const BurgerButton: FC<Props> = ({ isActive, onClick }) => {
  const burgerBoxClass = [
    `absolute top-1/2 right-0 w-[30px] h-[2px] -translate-y-1/2 bg-brand-primary transition-all duration-220 ease-custom rotate-0 burger-transition
    ${isActive ? "h-[2px] active rotate-225 rounded-sm" : ""}`,
    "before:absolute before:right-0 before:top-[-10px] before:w-[36px] before:h-[2px] before:bg-brand-primary before:rotate-0 before:rounded-sm",
    "after:absolute after:right-0 after:bottom-[-10px] after:w-[24px] after:h-[2px] after:bg-brand-primary before:rotate-0 after:rounded-sm",
  ].join(" ");

  return (
    <button className="cursor-pointer p-4 mr-[-16px]" onClick={onClick}>
      <div className="relative  w-[30px]">
        <div className={burgerBoxClass}></div>
      </div>
    </button>
  );
};

export default BurgerButton;
