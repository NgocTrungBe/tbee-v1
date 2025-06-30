import { navs } from "@/data/nav";
import React from "react";
import Link from "next/link";
import ResumeButton from "./ResumeButton";
import { motion, easeOut } from "framer-motion";

const Nav = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };
  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full flex items-center justify-between"
    >
      <motion.div variants={fadeDown}>
        <Link href={"/"} className="text-mint-500">
          Logo
        </Link>
      </motion.div>

      <motion.div className="hidden md:flex items-center">
        <ul className="flex items-center">
          {navs &&
            navs.map((nav) => (
              <motion.li
                key={nav.id}
                variants={fadeDown}
                className="text-sm m-[5px] p-[10px] font-fira hover:text-brand-primary"
              >
                <Link href={nav.path}>
                  <span className="text-brand-primary mr-[5px]">
                    {`${String(nav.id).padStart(2, "0")}.`}
                  </span>
                  {nav.name}
                </Link>
              </motion.li>
            ))}
          <motion.li variants={fadeDown}>
            <ResumeButton path="/" />
          </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
