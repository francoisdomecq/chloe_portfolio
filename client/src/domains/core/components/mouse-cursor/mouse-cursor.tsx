import {useContext, useEffect, useMemo, useState} from "react";

import {motion, Variants} from "framer-motion";


import {AppContext} from "../../../../config/contexts/app-context";
import Icon from "../icon/icon";

import "./mouse-cursor.scss";

const MouseCursor = () => {
  const {isHovering} = useContext(AppContext);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({x: e.clientX, y: e.clientY});
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

  const variants: Variants | undefined = {
    default: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundImage: "url('/CURSOR-97.svg')",
      backgroundRepeat: "no-repeat",
      height: 60,
      width: 60
    },
    text: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundImage: "url('/CURSOR-97.svg')",
      backgroundRepeat: "no-repeat"
    },
    carouselImage: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      mixBlendMode: "normal",
      height: 64,
      width: 64,
      borderRadius: 64,
      padding: "8px",
      backgroundColor: "white",
      backgroundImage: "none"

    }
  };

  const cursorVariant = useMemo(() => {
    if (isHovering === "text") {
      return "text";
    } else if (isHovering === "carouselImage") {
      return "carouselImage";
    }
    return "default";
  }, [isHovering]);

  return (
    <motion.div className="cursor" variants={variants} animate={cursorVariant}>
      {isHovering === "carouselImage" && <Icon name="arrow-right.svg#arrow-right" className="cursor__text"/>}
    </motion.div>
  );
};
export default MouseCursor;