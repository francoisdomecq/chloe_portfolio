import { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";


import { AppContext } from "../../../../config/contexts/app-context.tsx";

import "./mouse-cursor.scss";

const MouseCursor = () => {
    const { isTextHovered }=useContext(AppContext);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove",mouseMove);

        return ()=>{
            window.removeEventListener("mousemove",mouseMove);
        };
        
    }, []);

    const variants={
        default:{
            x:mousePosition.x - 16,
            y:mousePosition.y - 16,
            mixBlendMode:"multiply"
        },
        text:{
            x:mousePosition.x - 50,
            y:mousePosition.y - 50,
            height:100,
            width:100,
            mixBlendMode:"multiply"
        }
    };

    const cursorVariant = isTextHovered ? "text" : "default";

    return (
        <motion.div className="cursor" variants={variants} animate={cursorVariant}/>
    );
};
export default MouseCursor;