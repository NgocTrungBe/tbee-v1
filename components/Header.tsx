"use client";

import React from "react";
import Nav from "./Nav";
import Menu from "./Menu";
import { useScrollDirection } from "@/hooks";

const Header = () => {
  const { scrollDir, scrolledToTop } = useScrollDirection();

  let scrollClass = "";

  if (!scrolledToTop) {
    if (scrollDir === "up") {
      scrollClass =
        "h-navbar-scroll translate-y-0 shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]";
    } else if (scrollDir === "down") {
      scrollClass = "h-navbar-scroll -translate-y-full";
    }
  }

  const headerClass = [
    "fixed top-0 right-0 w-full h-navbar px-6 md:px-12 flex items-center",
    "bg-[rgb(10_25_47_/_85%)] backdrop-blur-[10px]",
    "transition-all duration-300 ease-custom z-11",
    scrollClass,
  ].join(" ");

  return (
    <header className={headerClass}>
      <Nav />
      <Menu />
    </header>
  );
};
export default Header;
