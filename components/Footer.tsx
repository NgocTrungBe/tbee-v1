"use client";

import { socialMedia } from "@/data";
import React, { useEffect, useState } from "react";
import Icon from "./icons/icon";
import { easeOut, motion } from "framer-motion";

const Footer = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
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
    <footer className="footer min-h-[70px] p-6">
      <div className="flex flex-col items-center">
        {isMounted && (
          <motion.div
            className="md:fixed md:left-5 md:bottom-0"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            <ul className="social-media flex items-center gap-1 md:flex-col md:after:h-[90px] md:after:w-[1px] md:after:bg-light-slate">
              {socialMedia &&
                socialMedia.map((item, i) => (
                  <li
                    key={i}
                    className="md:last-of-type:mb-3 md:hover:-translate-y-1 transition-all duration-220 ease-custom"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5"
                    >
                      <Icon name={item.name} />
                    </a>
                  </li>
                ))}
            </ul>
          </motion.div>
        )}

        <motion.div
          className="flex items-center justify-center p-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="text-sm text-gray-70 dark:text-gray-200 mr-2">
            ©
          </span>
          <p className="text-sm text-gray-70 dark:text-gray-200">
            2025 | Coded with ❤️️ by Trung Be
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
