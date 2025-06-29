import { navs } from "@/data/nav";
import React from "react";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <ul className="md:flex items-center hidden">
      {navs.map((nav) => (
        <NavItem key={nav.id} id={nav.id} path={nav.path} name={nav.name} />
      ))}
    </ul>
  );
};

export default Nav;
