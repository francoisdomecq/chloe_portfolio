import { useContext, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import PROJECTS from "../../../../config/works.json";

import "./project-navigator.scss";

import { Project } from "../../../../types";
import { AppContext } from "../../../../../../config/contexts/app-context.tsx";


interface ProjectNavigatorProps{
  projectId: number
  navigateTo : "previous"|"next"
}

const ProjectNavigator = ({ projectId,navigateTo }:ProjectNavigatorProps)=>{
    const { mousePosition }=useContext(AppContext);
    const navigate=useNavigate();
    const { t }=useTranslation("works");

    const [displayProjectOverlay,setDisplayProjectOverlay]=useState(false);
    const projectToNavigate = navigateTo === "previous" ? projectId -1 : projectId+1;

    const handleNavigateToProject=()=>{
        navigate(`/works/${projectToNavigate}`);
    };

    const displayProjectNavigator = useMemo(()=>{
        if (navigateTo ==="previous" && projectId ===1){
            return false;
        }
        return !(navigateTo === "next" && projectId === PROJECTS.length);
    },[navigateTo,projectId]);

    const projectOverlayed : Project = PROJECTS.find((project)=>project.id == projectToNavigate);

    return displayProjectNavigator&& (
        <div className="project__navigator">
            {displayProjectOverlay && projectOverlayed &&
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}className={`project-overlay project-overlay__${navigateTo}`} >
                  <div className="project-overlay__info">
                      <h2 className="project-overlay__title">{projectOverlayed.title}</h2>
                  </div>
                  <img className="project-overlay__image" width="100%" src={projectOverlayed.carouselImage}/>
              </motion.div>
            }
            <motion.div whileHover={{ scale:1.1 }}
                onHoverStart={()=>setDisplayProjectOverlay(true)}
                onHoverEnd={()=>setDisplayProjectOverlay(false)}
                className="project__navigation-item"
                onClick={handleNavigateToProject}>
                {navigateTo === "previous" && <img className="project__navigation-icon previous" src="/arrow-right.svg" alt="arrow-left"/>}
                {t(`project-navigator.${navigateTo}`)}
                {navigateTo === "next" && <img className="project__navigation-icon" src="/arrow-right.svg" alt="arrow-right"/>}
            </motion.div>

        </div>

    );
};

export default ProjectNavigator;