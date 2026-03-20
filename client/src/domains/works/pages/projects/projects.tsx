import {PortfolioPage} from "@core/index";
import {useTranslation} from "react-i18next";
import "./projects.scss"
import works from "@config/works.json"
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Project} from "@domains/works/types";
import {useNavigate} from "react-router-dom";
import ReactPlayer from "react-player";

const DESKTOP_BP = 1024;

export const Projects=()=>{
  const {t}=useTranslation("works")

  const [hoveredProject, setHoveredProject]=useState<Project|undefined>(undefined)
  const [isGridVisible, setIsGridVisible]=useState(true)
  const [isDesktop, setIsDesktop]=useState(window.innerWidth >= DESKTOP_BP)

  const gridRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate();

  const handleProjectClick = useCallback((e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    navigate(`/works/${project.id}`);
  }, [navigate]);

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

  const renderWork= (work:Project)=>{
    if(isDesktop){
      return (
        <a href={`/works/${work.id}`} className="projects-grid__project" onMouseEnter={()=>setHoveredProject(work)} onMouseLeave={()=>setHoveredProject(undefined)} key={work.id} onClick={(e) => handleProjectClick(e, work)}>
          {work.carousel?.mediaDesktop === "VIDEO" ?
            <ReactPlayer src={work.carousel.sourceDesktop}  width="100%" height="100%" className="selection-grid__item" muted autoPlay loop controls={false}/>
            :
            <img alt={work.title} src={work.carousel?.sourceDesktop} className="selection-grid__item"/>
          }
        </a>
      )
    }
    return (
      <a href={`/works/${work.id}`} className="projects-grid__project" onMouseEnter={()=>setHoveredProject(work)} onMouseLeave={()=>setHoveredProject(undefined)} key={work.id} onClick={(e) => handleProjectClick(e, work)}>
        {work.carousel?.mediaMobile === "VIDEO" ?
          <ReactPlayer src={work.carousel.sourceMobile} muted autoPlay loop controls={false}/>
          :
          <img src={work.carousel?.sourceMobile} alt={work.title} className="selection-grid__item"/>
        }
      </a>
    )
  }

  const sortedWorks= useMemo(()=>
    works.sort((workA,workB)=>workA.index - workB.index)
  ,[works]
  )

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
        {sortedWorks.map(renderWork)}
      </div>
    </PortfolioPage>
  )
}

