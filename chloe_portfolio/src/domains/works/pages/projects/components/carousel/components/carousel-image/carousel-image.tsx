import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";


import { AppContext } from "../../../../../../../../config/contexts/app-context.tsx";
import { Project } from "../../../../../../types";


import "./carousel-image.scss";

interface CarouselImageProps {
  project :Project;
}

const CarouselImage = ({ project }:CarouselImageProps)=>{
    const navigate = useNavigate();
    const { hoverElement,unhoverElement }=useContext(AppContext);
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
            onHoverStart={()=>{
                setShowOverlay(true);
                hoverElement("image");
            }}
            onHoverEnd={()=>{
                setShowOverlay(false);
                unhoverElement();
            }
            }
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
                        <h2>{project.date}</h2>
                    </div>
                </motion.div>
                <div className="carousel-image__image">
                    <img width="100%" height="100%" src={project.carouselImage} alt={`project-${project.title}`}/>
                </div>
            </div>
        </motion.div>
    );
};

export default CarouselImage;