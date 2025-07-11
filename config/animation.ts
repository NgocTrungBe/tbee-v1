export const motionBaseProps = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.3 },
};

export const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
