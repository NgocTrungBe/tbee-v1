import React from "react";
import { easeOut, motion } from "framer-motion";
import ClipboardItem from "./ClipboardItem";
import Icon from "./icons/icon";
import { motionBaseProps } from "@/config/animation";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: easeOut,
    },
  },
};

const Info = () => {
  return (
    <motion.div
      className="flex w-full flex-col items-center justify-center gap-1 sm:flex-row sm:gap-6"
      variants={fadeUp}
      {...motionBaseProps}
    >
      <ClipboardItem
        textToCopy="bengoctrung23@gmail.com"
        className="relative mb-2 flex items-center gap-3"
      >
        <div className="icon">
          <Icon name="Mail" />
        </div>
        <a
          href="mailto:bengoctrung23@gmail.com"
          className="text-sm text-lightest-slate"
        >
          bengoctrung23@gmail.com
        </a>
      </ClipboardItem>

      <ClipboardItem
        textToCopy="+84 352392573"
        className="relative mb-2 flex items-center gap-3"
      >
        <div className="icon">
          <Icon name="Phone" />
        </div>
        <p className="text-sm text-lightest-slate">+84 352392573</p>
      </ClipboardItem>
    </motion.div>
  );
};

export default Info;
