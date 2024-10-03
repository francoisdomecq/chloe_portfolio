import React, { useEffect } from "react";
import useMeasure from "react-use-measure";

import { animate, motion, useMotionValue } from "framer-motion";

import projects from "../../../../config/works.json";

import CarouselImage from "./components/carousel-image/carousel-image.tsx";

import "./carousel.scss";

const ProjectCarousel = () => {
    let [ref,{ width }]= useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        const finalPosition = - width /2 -8;
        const controls = animate(xTranslation,[0,finalPosition],{
            ease:"linear",
            duration:25,
            repeat:Infinity,
            repeatType:"loop",
            repeatDelay:0
        });
        return controls.stop;
    }, [xTranslation,width]);

    return (
        <motion.div className="carousel" ref={ref} style={{ x :xTranslation }}>
            {[...projects,...projects].map((project, index) =>
                <CarouselImage key={index} project={project}/>
            )}
        </motion.div>
    );
};

export default ProjectCarousel;