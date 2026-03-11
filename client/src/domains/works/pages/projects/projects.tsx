import {PortfolioPage} from "@core/index";
import {useTranslation} from "react-i18next";
import "./projects.scss"
import works from "@config/works.json"
import {useState} from "react";
import {Project} from "@domains/works/types";

const Projects=()=>{
  const {t}=useTranslation("works")
  const [hoveredProject, setHoveredProject]=useState<Project|undefined>(undefined)

  return(
    <PortfolioPage>
      <div className="page-title">
        <h1 className="title">{t("works.title")}</h1>
        <div className="project-infos">
          {!hoveredProject && <h2 className="invisible-title">TITLE</h2>}
          <h2 className="project-title">{hoveredProject?.title}</h2>
          <h2 className="project-title">{hoveredProject?.date}</h2>
        </div>
      </div>
      <div className="projects-grid">
        {works.map((project:Project)=>(
          <a href={`/works/${project.id}`} className="project" onMouseEnter={()=>setHoveredProject(project)} onMouseLeave={()=>setHoveredProject(undefined)} key={project.id} >
            <img width="80%" src={project.carouselImage} alt={project.title}/>
          </a>
        ))}
      </div>
    </PortfolioPage>
  )
}

export default Projects