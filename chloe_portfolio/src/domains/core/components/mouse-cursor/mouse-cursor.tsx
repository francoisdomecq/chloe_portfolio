import { useContext, useEffect, useMemo, useState } from "react";

import { motion, Variants } from "framer-motion";


import { AppContext } from "../../../../config/contexts/app-context";

import "./mouse-cursor.scss";

const MouseCursor = () => {
    const { isHovering }=useContext(AppContext);
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

    const variants: Variants | undefined ={
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
        },
        image:{
            x:mousePosition.x - 16,
            y:mousePosition.y - 16,
            mixBlendMode:"normal"
        }
    };

    const cursorVariant = useMemo(()=>{
        if (isHovering==="text"){
            return "text";
        } else if (isHovering==="image"){
            return "image";
        }
        return "default";
    },[isHovering]);

    return (
        <motion.div className="cursor" variants={variants} animate={cursorVariant}></motion.div>
    );
};
export default MouseCursor;