export const motionBaseProps = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true },
};

export const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
