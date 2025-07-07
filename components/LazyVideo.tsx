"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  videoSrc: string;
  poster?: string;
  thumbnailSrc?: string;
  alt?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  videoSrc,
  poster,
  thumbnailSrc,
  alt = "Video thumbnail",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Thumbnail trigger */}
      <motion.button onClick={() => setIsOpen(true)} className="group w-full">
        <div className="relative video-thumbnail aspect-video rounded-sm overflow-hidden group-hover:-translate-y-4 transition duration-250 ease-custom cursor-pointer bg-brand-secondary shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]">
          <img
            src={thumbnailSrc}
            alt={alt}
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <svg
              className="w-12 h-12 text-brand-lightest-slate"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </motion.button>

      {/* Modal overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-navy backdrop-blur-lg cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="w-full max-w-xl aspect-video bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videoSrc}
                poster={poster}
                controls
                autoPlay
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoModal;
