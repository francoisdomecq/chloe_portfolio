import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import PROJECTS from "../../../../config/works.json";

import "./project-navigator.scss";


interface ProjectNavigatorProps{
  projectId: number
  navigateTo : "previous"|"next"
}

const ProjectNavigator = ({ projectId,navigateTo }:ProjectNavigatorProps)=>{
    const navigate=useNavigate();
    const { t }=useTranslation("works");
    

    const handleNavigateToProject=()=>{
        const projectToNavigate = navigateTo === "previous" ? projectId -1 : projectId+1;
        navigate(`/works/${projectToNavigate}`);
    };

    const displayProjectNavigator = useMemo(()=>{
        if (navigateTo ==="previous" && projectId ===1){
            return false;
        }
        return !(navigateTo === "next" && projectId === PROJECTS.length);

    },[navigateTo,projectId]);


    return displayProjectNavigator&&(
        <motion.div whileHover={{ scale:1.1 }} className="project__navigation-item" onClick={handleNavigateToProject}>
            {t(`project-navigator.${navigateTo}`)}
        </motion.div>
    );
};

export default ProjectNavigator;