import Image from "next/image";
import React, { FC } from "react";

interface Props {
  name: string;
  icon: string;
}
const SkillBox: FC<Props> = ({ name, icon }) => {
  return (
    <li className="skill-box flex items-center justify-start sm:justify-between h-[44px] gap-2 bg-light-navy px-6 py-2 rounded-full shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] cursor-pointer hover:translate-y-[-4px] transition-all duration-200 ease-custom">
      <div className="w-[26px] h-[26px] overflow-hidden rounded-full">
        <Image
          src={icon}
          alt={`${name} icon`}
          width={26}
          height={26}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-sm font-fira text-lightest-slate">{name}</p>
    </li>
  );
};

export default SkillBox;
