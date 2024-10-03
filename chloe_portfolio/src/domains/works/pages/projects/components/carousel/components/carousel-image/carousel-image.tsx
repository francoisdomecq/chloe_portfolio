import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";


import { Project } from "../../../../../../types";

import "./carousel-image.scss";

interface CarouselImageProps {
  project :Project
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

    return (
        <motion.div className="carousel-image"
            onHoverStart={()=>setShowOverlay(true)}
            onHoverEnd={()=>setShowOverlay(false)}
            onClick={handleNavigate}
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
                <img width="100%" height="100%" className="carousel-image__image" src={project.carouselImage}/>
            </div>

        </motion.div>
    );
};

export default CarouselImage;