"use client";

import Link from "next/link";
import React, { useState } from "react";
import Nav from "./Nav";
import ResumeButton from "./ResumeButton";
import useScrollDirection from "@/hooks/useScrollDirection";
import BurgerButton from "./BurgerButton";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
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
    "fixed top-0 right-0 w-full h-navbar px-12 flex items-center",
    "bg-[rgb(10_25_47_/_85%)] backdrop-blur-[10px]",
    "transition-all duration-300 ease-custom z-[9999]",
    scrollClass,
  ].join(" ");

  return (
    <header className={headerClass}>
      <nav className="w-full flex items-center justify-between">
        <Link href={"/"} className="text-mint-500">
          Logo
        </Link>
        <div className="flex items-center">
          <Nav />
          <ResumeButton path="/" />
          <BurgerButton
            isActive={showMenu}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>
    </header>
  );
};
export default Header;
