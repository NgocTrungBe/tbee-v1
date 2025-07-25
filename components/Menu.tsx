import React, { RefObject, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ResumeButton from "./ResumeButton";
import BurgerButton from "./BurgerButton";

import { navs } from "@/data";
import { useClickOutside } from "@/hooks";
import { easeOut, motion } from "framer-motion";

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const Menu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  useClickOutside(menuRef as RefObject<HTMLElement>, () => setShowMenu(false));

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overlay");
    } else {
      document.body.classList.remove("overlay");
    }
    return () => document.body.classList.remove("overlay");
  }, [showMenu]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
        document.body.classList.remove("overlay");
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const menuClass = [
    "fixed top-0 right-0 py-10 px-6 h-screen bg-light-navy w-[min(75vw,_400px)]",
    ` translate-x-[100vw] invisible ${
      showMenu ? "visible !translate-x-0" : undefined
    }`,
    " transition-all duration-300 ease-custom z-9",
  ].join(" ");

  return (
    <div ref={menuRef} className="lg:hidden">
      <motion.div variants={fadeDown} initial="hidden" animate="show">
        <BurgerButton
          isActive={showMenu}
          onClick={() => setShowMenu(!showMenu)}
        />
      </motion.div>

      <aside className={menuClass} aria-hidden={!showMenu}>
        <ul className="flex h-full flex-col items-center justify-center">
          {navs.map((nav) => (
            <li
              key={nav.id}
              className="
                mb-4 w-full p-[10px] text-center text-md font-fira 
                hover:text-brand-primary
              "
            >
              <Link href={nav.path} onClick={() => setShowMenu(false)}>
                <span className="mr-[5px] text-sm text-brand-primary">
                  {`${String(nav.id).padStart(2, "0")}.`}
                </span>
                {nav.name}
              </Link>
            </li>
          ))}
          <ResumeButton path="/resume.pdf" />
        </ul>
      </aside>
    </div>
  );
};
export default Menu;
