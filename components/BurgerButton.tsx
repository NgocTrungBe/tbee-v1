import React, { FC } from "react";

interface Props {
  isActive: boolean;
  onClick: () => void;
}

const BurgerButton: FC<Props> = ({ isActive, onClick }) => {
  return (
    <button
      className="relative p-4 mr-[-16px] cursor-pointer z-10"
      aria-label="Menu"
      onClick={onClick}
    >
      <div className="relative w-[30px]">
        <div className={`burger-transition ${isActive ? "active" : ""}`} />
      </div>
    </button>
  );
};

export default BurgerButton;
