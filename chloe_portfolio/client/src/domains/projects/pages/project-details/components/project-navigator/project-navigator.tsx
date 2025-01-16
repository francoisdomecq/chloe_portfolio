import {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

import {motion} from "framer-motion";

import PROJECTS from "../../../../../../config/works.json";
import Icon from "../../../../../core/components/icon/icon";

import "./project-navigator.scss";

import {Project} from "../../../../types";

interface ProjectNavigatorProps {
  projectId: number
  navigateTo: "previous" | "next"
}

const ProjectNavigator = ({projectId, navigateTo}: ProjectNavigatorProps) => {
  const navigate = useNavigate();
  const {t} = useTranslation("works");

  const projectIdToNavigate = navigateTo === "previous" ? projectId - 1 : projectId + 1;
  const foundProject: Project | undefined = PROJECTS.find(projectToFind => parseInt(projectToFind.id) === projectIdToNavigate);

  const handleNavigateToProject = () => {
    navigate(`/works/${foundProject?.title}`);
  };

  const displayProjectNavigator = useMemo(() => {
    if (navigateTo === "previous" && projectId === 1) {
      return false;
    }
    return !(navigateTo === "next" && projectId === PROJECTS.length);
  }, [navigateTo, projectId]);


  return displayProjectNavigator && (
    <div className="project__navigator">
      <motion.div whileHover={{scale: 1.1}}
                  className={"project__navigation-item"}
                  onClick={handleNavigateToProject}>
        {navigateTo === "previous" &&
            <Icon className="project__navigation-icon previous" name="/arrow-right.svg#arrow-right"/>}
        {t(`project-navigator.${navigateTo}`)}
        {navigateTo === "next" && <Icon className="project__navigation-icon" name="/arrow-right.svg#arrow-right"/>}
      </motion.div>

    </div>

  );
};

export default ProjectNavigator;