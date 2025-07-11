import React, { FC, ReactNode, useState } from "react";
import IconCopy from "./icons/copy";
import { AnimatePresence } from "framer-motion";

interface Props {
  children: ReactNode;
  textToCopy: string;
  className?: string;
}

const ClipboardItem: FC<Props> = ({ children, textToCopy, className = "" }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      return err;
    }
  };
  return (
    <div className={className}>
      {children}
      <div className="icon icon-copy hover relative" onClick={handleCopy}>
        <IconCopy />
        <AnimatePresence>
          {copied && (
            <div
              className="absolute -top-[35px] -right-[35px] z-20
                py-1 px-2.5 rounded-lg text-sm font-fira
                bg-lightest-navy text-lightest-slate
                shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]
                transition duration-200 ease-custom"
            >
              Copied!
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ClipboardItem;
