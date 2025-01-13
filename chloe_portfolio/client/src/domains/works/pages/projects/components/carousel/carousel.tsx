import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

import { animate, motion, useMotionValue } from "framer-motion";

import projects from "../../../../../../config/works.json";
import { type  Project } from "../../../../types";

import CarouselImage from "./components/carousel-image/carousel-image";

import "./carousel.scss";

const SLOW_DURATION = 75;
const FAST_DURATION = 15;

const ProjectCarousel = () => {
    const [ref,{ width }]= useMeasure();
    const [duration, setDuration] = useState(FAST_DURATION);
    const [mustFinish , setMustFinish] = useState(false);
    const [projectHovered,setProjectHovered] = useState<Project | undefined>(undefined);
    const [rerender,setRererender] = useState(false);

    const xTranslation = useMotionValue(0);
    useEffect(() => {
        let controls;
        const finalPosition = - width /2 -8;
        if (mustFinish){
            controls = animate(xTranslation,[xTranslation.get(), finalPosition],{
                ease:"linear",
                duration : duration * (1 - xTranslation.get() / finalPosition),
                onComplete:()=>{
                    setMustFinish(false);
                    setRererender(!rerender);
                }
            });
        } else {
            controls = animate(xTranslation,[0, finalPosition],{
                ease:"linear",
                duration,
                repeat:Infinity,
                repeatType:"loop",
                repeatDelay:0
            });
        }
        return controls.stop;
    }, [xTranslation, width, duration, rerender, mustFinish]);

    const handleHoverProject = (project:Project|undefined)=>{
        setProjectHovered(project);
    };

    return (
        <div>
            <div className="carousel__project">
                <div className="carousel__project-info">
                    {projectHovered &&
                      <>
                          <div className="carousel__project-info__title">{projectHovered.title}</div>
                          <div className="carousel__project-info-description">
                              <div className="carousel__project-info__date">{projectHovered.date}</div>
                              <i className="carousel__project-info__subtitle">{projectHovered.description.subtitle.join("/")}</i>
                          </div>
                      </>
                    }
                    {!projectHovered && <div className="carousel__project-info__title">Selected Works</div>}
                </div>
                
            </div>
            <motion.div className="carousel"
                ref={ref}
                style={{ x:xTranslation }}
                onHoverStart={()=>{
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                }}
                onHoverEnd={()=>{
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                }}
            >
                {[...projects,...projects].map((project : Project, index) =>
                    <CarouselImage key={index} project={project}  onHoverProject={handleHoverProject} />
                )}
            </motion.div>
        </div>

    );
};

export default ProjectCarousel;