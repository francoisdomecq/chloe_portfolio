import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { AppContext } from "../../../../../../../../config/contexts/app-context";
import { Project } from "../../../../../../types";


import "./carousel-image.scss";

interface CarouselImageProps {
  project :Project;
  onHoverProject: (project:Project | undefined)=>void;
}

const CarouselImage = ({ project, onHoverProject }:CarouselImageProps)=>{
    const navigate = useNavigate();
    const { hoverElement,unhoverElement }=useContext(AppContext);
    const [showOverlay, setShowOverlay] = useState(false);

    const handleNavigate = ()=>{
        navigate(`/works/${project.title}`);
        unhoverElement();
    };


    const variants = {
        hover:{
            scale:1
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
                onHoverProject(project);
                hoverElement("carouselImage");
            }}
            onHoverEnd={()=>{
                setShowOverlay(false);
                unhoverElement();
                onHoverProject(undefined);
            }}
            onClick={handleNavigate}
            variants={variants}
            animate={imageVariant}
        >
            <div className="carousel-image__container">
                <div className="carousel-image__image">
                    <img width="100%" height="100%" src={project.carouselImage} alt={`project-${project.title}`}/>
                </div>
            </div>
        </motion.div>
    );
};

export default CarouselImage;