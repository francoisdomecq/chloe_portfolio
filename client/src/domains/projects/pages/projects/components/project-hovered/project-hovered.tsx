import React, {useContext} from "react";
import {Project} from "../../../../types";
import {AppContext} from "../../../../../../config/contexts/app-context";
import "./project-hovered.scss"

interface ProjectHoveredProps {
  project: Project | undefined
}

const ProjectHovered = ({project}: ProjectHoveredProps) => {

  const {theme} = useContext(AppContext)

  return (
    <div className={`project-hovered project-hovered__${theme}`}>
      {project &&
          <>
              <div className="project-hovered-title">{project.title}</div>
              <div className="project-hovered-description">
                  <div className="project-hovered-date">{project.date}</div>
                  <i className="project-hovered-subtitle">{project.description.subtitle.join("/")}</i>
              </div>
          </>
      }
      {!project && <div className="project-hovered-title">Selected Works</div>}
    </div>
  )
}

export default ProjectHovered;