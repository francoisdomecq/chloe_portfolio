import {PortfolioPage} from "@core/index";
import {useTranslation} from "react-i18next";
import "./projects.scss"
import works from "@config/works.json"
import {useEffect, useState} from "react";
import {Project} from "@domains/works/types";

const Projects=()=>{
  const {t}=useTranslation("works")
  const [hoveredProject, setHoveredProject]=useState<Project|undefined>(undefined)

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector<HTMLElement>(".header");
      if (header) {
        const headerBottom = header.getBoundingClientRect().bottom;
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerBottom + 48}px`
        );
      }
    };

    updateHeaderHeight();
    window.addEventListener("scroll", updateHeaderHeight, {passive: true});
    window.addEventListener("resize", updateHeaderHeight, {passive: true});

    return () => {
      window.removeEventListener("scroll", updateHeaderHeight);
      window.removeEventListener("resize", updateHeaderHeight);
      document.documentElement.style.removeProperty("--header-height");
    };
  }, []);

  return(
    <PortfolioPage className="projects">
      <div className="page-title" id="projects">
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