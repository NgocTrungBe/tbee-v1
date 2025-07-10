import Image from "next/image";
import React, { FC } from "react";

interface Props {
  name: string;
  icon: string;
}

const SkillTag: FC<Props> = ({ name, icon }) => {
  return (
    <li
      className="skill-box flex h-[44px] cursor-pointer items-center 
        justify-start gap-2 rounded-full bg-light-navy px-6 py-2 
        shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] 
        transition-all duration-200 ease-custom 
        hover:-translate-y-1
        sm:justify-between
      "
    >
      <div className="h-[26px] w-[26px] overflow-hidden rounded-full">
        <Image
          src={icon}
          alt={`${name} icon`}
          width={26}
          height={26}
          className="h-full w-full object-contain"
        />
      </div>
      <p className="text-sm font-fira text-lightest-slate">{name}</p>
    </li>
  );
};

export default SkillTag;
