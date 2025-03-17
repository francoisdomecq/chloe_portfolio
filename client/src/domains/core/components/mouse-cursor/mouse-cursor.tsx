import {useContext, useEffect, useMemo, useState} from "react";

import {motion, Variants} from "framer-motion";


import {AppContext} from "../../../../config/contexts/app-context";
import Icon from "../icon/icon";

import "./mouse-cursor.scss";

const MouseCursor = () => {
  const {isHovering} = useContext(AppContext);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const {theme} = useContext(AppContext)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({x: e.clientX, y: e.clientY});
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

  const backgroundImage = theme === "light" ? "url('/CURSOR-97-dark.svg')" : "url('/CURSOR-97.svg')";
  const hoverImageCursorColor = theme === "light" ? "black" : "white";

  const variants: Variants | undefined = {
    default: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundImage: backgroundImage,
      backgroundRepeat: "no-repeat",
      height: 60,
      width: 60
    },
    text: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundImage: backgroundImage,
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
      backgroundColor: hoverImageCursorColor,
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

  const hoverImageIcon = theme === "dark" ? "arrow-right.svg#arrow-right" : "arrow-right-white.svg#arrow-right-white";

  return (
    <motion.div className="cursor" variants={variants} animate={cursorVariant}>
      {isHovering === "carouselImage" && <Icon name={hoverImageIcon} className="cursor__text"/>}
    </motion.div>
  );
};
export default MouseCursor;