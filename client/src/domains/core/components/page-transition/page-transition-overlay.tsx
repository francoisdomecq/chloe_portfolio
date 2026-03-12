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
  const {isTransitioning, transitionImgSrc} = usePageTransition();

  return (
    <AnimatePresence>
      {isTransitioning &&  (
        <motion.div
          className="page-transition-overlay"
          variants={curtainVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {transitionImgSrc && <img src={transitionImgSrc}/> }
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransitionOverlay;
