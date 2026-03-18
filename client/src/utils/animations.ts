import { Variants } from "framer-motion";

export const curtainVariants: Variants = {
  initial: {
    scaleY: 0,
    transformOrigin: "bottom",
  },
  animate: {
    scaleY: 1,
    transformOrigin: "bottom",
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    scaleY: 0,
    transformOrigin: "top",
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const curtainVariantsReduced: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};
