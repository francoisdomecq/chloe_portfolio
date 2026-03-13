import {AnimatePresence, motion} from "framer-motion";
import {usePageTransition} from "./page-transition-context";
import "./page-transition-overlay.scss";

const curtainVariants = {
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

const PageTransitionOverlay = () => {
  const {isTransitioning, transitionProjectTitle} = usePageTransition();

  return (
    <AnimatePresence>
      {isTransitioning &&  (
        <motion.div
          className="page-transition-overlay"
          variants={curtainVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            backgroundColor: transitionProjectTitle?.backgroundColor || "#CA4C35",
          }}
        >
          {transitionProjectTitle &&
          <h1 className="page-transition-title" style={{color:transitionProjectTitle.color}}>{transitionProjectTitle.title}</h1>}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransitionOverlay;
