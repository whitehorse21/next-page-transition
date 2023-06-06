export const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.25,
    },
  },
};

export const item = {
  hidden: {
    y: "100%",
  },
  show: {
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
