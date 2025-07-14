import React from "react";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import ResumeButton from "./ResumeButton";
import { navs } from "@/data";
import Image from "next/image";
import Logo from "@/assets/logo.webp";

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
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const Nav = () => {
  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full flex items-center justify-between"
    >
      <motion.div className="logo mt-1 lg:mt-0" variants={fadeDown}>
        <Link href="/" className="text-mint-500 font-fira text-xl">
          <Image src={Logo} alt="logo" />
        </Link>
      </motion.div>

      <motion.div className="hidden lg:flex items-center">
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
            <ResumeButton path="/resume.pdf" />
          </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
