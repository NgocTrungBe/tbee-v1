"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.webp";
import { motion, useAnimation } from "framer-motion";

const Loader = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
  const logoControls = useAnimation();
  const wrapperControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await logoControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1.5, delay: 1.5, ease: "easeOut" },
      });

      await logoControls.start({
        y: ["0", "-8px", "0"],
        transition: {
          duration: 0.8,
          delay: 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    };

    sequence();
  }, [logoControls]);

  const handleProgressComplete = async () => {
    await wrapperControls.start({
      opacity: 0,
      transition: { duration: 0.4 },
    });

    onAnimationEnd();
  };

  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-full flex items-center justify-center flex-col bg-dark-navy z-50"
      initial={{ opacity: 1 }}
      animate={wrapperControls}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 0 }}
        animate={logoControls}
      >
        <Image src={Logo} alt="logo" width={180} />
      </motion.div>

      <motion.div
        className="-top-[40px] w-[230px] md:w-[280px] h-[4px] bg-gray-800 rounded relative overflow-hidden shadow-inner border border-[rgba(255, 80, 80, 0.6)]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute top-0 left-0 h-full bg-brand-primary rounded"
          initial={{ width: "0%" }}
          animate={{ width: ["0%", "6%", "35%", "80%", "100%"] }}
          transition={{
            duration: 3,
            delay: 3.7,
            ease: "easeInOut",
          }}
          onAnimationComplete={handleProgressComplete}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
