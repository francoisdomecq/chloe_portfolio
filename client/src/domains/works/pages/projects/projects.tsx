import {PortfolioPage} from "@core/index";
import {useTranslation} from "react-i18next";
import "./projects.scss"
import works from "@config/works.json"
import {useEffect, useRef, useState} from "react";
import {Project} from "@domains/works/types";

const DESKTOP_BP = 960;

const Projects=()=>{
  const {t}=useTranslation("works")
  const [hoveredProject, setHoveredProject]=useState<Project|undefined>(undefined)
  const [isGridVisible, setIsGridVisible]=useState(true)
  const [isDesktop, setIsDesktop]=useState(window.innerWidth >= DESKTOP_BP)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= DESKTOP_BP);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

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
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGridVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, [isDesktop]);

  return(
    <PortfolioPage className="projects">
      <div className={`page-title ${isGridVisible ? "" : "page-title--hidden"}`} id="projects">
        <h1 className="title">{t("works.title")}</h1>
        <div className="project-infos">
          {!hoveredProject && <h2 className="invisible-title">TITLE</h2>}
          <h2 className="project-title">{hoveredProject?.title}</h2>
          <h2 className="project-title">{hoveredProject?.date}</h2>
        </div>
      </div>
      <div className="projects-grid" ref={gridRef}>
        {works.map((project:Project)=>(
          <a href={`/works/${project.id}`} className="projects-grid__project" onMouseEnter={()=>setHoveredProject(project)} onMouseLeave={()=>setHoveredProject(undefined)} key={project.id} >
            <span className="project__title">{project.title}</span>
            <img width="80%" src={project.carouselImage} alt={project.title}/>
          </a>
        ))}
      </div>
    </PortfolioPage>
  )
}

export default Projects