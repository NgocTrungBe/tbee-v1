import React from "react";
import { easeOut, motion } from "framer-motion";
import IconMail from "./icons/email";
import IconPhone from "./icons/phone";
import ClipboardItem from "./ClipboardItem";
import Icon from "./icons/icon";

const Info = () => {
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
  return (
    <motion.div
      className="w-full flex items-center justify-center flex-col sm:flex-row gap-1 sm:gap-6"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <ClipboardItem
        textToCopy="bengoctrung23@gmail.com"
        className="mb-2 flex items-center gap-3 relative"
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
        className="mb-2 flex items-center gap-3 relative"
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
