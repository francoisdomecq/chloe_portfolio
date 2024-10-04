import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";


import { Project } from "../../../../../../types";

import "./carousel-image.scss";

interface CarouselImageProps {
  project :Project;
}

const CarouselImage = ({ project }:CarouselImageProps)=>{
    const navigate = useNavigate();
    const [showOverlay, setShowOverlay] = useState(false);

    const handleNavigate = ()=>{
        navigate(`/works/${project.id}`);
    };

    const imageOverlayVariants = {
        hidden:{ opacity:0 },
        visible:{ opacity:1 }
    };

    const imageOverlayVariant = showOverlay ? "visible" : "hidden";

    const variants = {
        hover:{
            scale:1.1
        },
        notHovered:{
            scale:1
        }
    };


    const imageVariant=useMemo(()=>{
        if (showOverlay){
            return "hover";
        } else {
            return "notHovered";
        }
    },[showOverlay]);

    return (
        <motion.div className="carousel-image"
            initial={"default"}
            onHoverStart={()=>setShowOverlay(true)}
            onHoverEnd={()=>setShowOverlay(false)}
            onClick={handleNavigate}
            variants={variants}
            animate={imageVariant}
        >
            <div className="carousel-image__container">
                <motion.div className={"carousel-image__overlay"}
                    animate={imageOverlayVariant}
                    variants={imageOverlayVariants}
                >
                    <div className="carousel-image__overla">
                        <motion.h1>{project.title}</motion.h1>
                        <h2>{project.description}</h2>
                    </div>
                </motion.div>
                <motion.img width="100%" height="100%" className="carousel-image__image" src={project.carouselImage}/>
            </div>

        </motion.div>
    );
};

export default CarouselImage;