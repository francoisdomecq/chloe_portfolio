import {AnimatePresence, motion, useReducedMotion} from "framer-motion";
import {usePageTransition} from "./page-transition-context";
import {curtainVariants, curtainVariantsReduced} from "@utils/animations";
import "./page-transition-overlay.scss";

export const PageTransitionOverlay = () => {
  const {isTransitioning} = usePageTransition();
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? curtainVariantsReduced : curtainVariants;

  return (
    <AnimatePresence>
      {isTransitioning &&  (
        <motion.div
          className="page-transition-overlay"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
        </motion.div>
      )}
    </AnimatePresence>
  );
};

