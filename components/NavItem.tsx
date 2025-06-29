import Link from "next/link";
import React, { FC } from "react";

interface Props {
  id: number;
  name: string;
  path: string;
}

const NavItem: FC<Props> = ({ id, name, path }) => {
  return (
    <li className="text-sm m-[5px] p-[10px] hover:text-brand-primary">
      <Link href={path}>
        <span className="text-brand-primary mr-[5px]">
          {`${String(id).padStart(2, "0")}.`}
        </span>
        {name}
      </Link>
    </li>
  );
};
export default NavItem;
