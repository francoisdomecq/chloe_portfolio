import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import works from "@config/works.json"
import "./project.scss"
import {Project as ProjectType, ProjectContent, ProjectContentMediaType} from "../../types";
import {PortfolioPage} from "@core/index";
import ReactPlayer from "react-player";
import {motion, useReducedMotion} from "framer-motion";
import {fadeInUp, staggerContainer} from "@utils/animations";
import {usePageSeo} from "@utils/usePageSeo";

const DESKTOP_BP = 1024;

export const Project = () => {
  const params = useParams();
  const {t} = useTranslation("works");
  const project:ProjectType|undefined = works.find(work=>work.id===params.id)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= DESKTOP_BP);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= DESKTOP_BP);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectTitle = project ? `${project.title} — Chloé Gaillard` : "Chloé Gaillard";
  const projectDescription = project?.description.content[0]?.slice(0, 160) ?? "";
  usePageSeo(projectTitle, projectDescription);

  useEffect(() => {
    if (!isDesktop) return;

    const content = document.querySelector<HTMLElement>(".project__content");
    if (!content) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = content;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
      const atPageTop = window.scrollY <= 0;
      const scrollingDown = e.deltaY > 0;

      const shouldInterceptDown = scrollingDown && !atBottom;
      const shouldInterceptUp = !scrollingDown && atPageTop;

      if (shouldInterceptDown || shouldInterceptUp) {
        e.preventDefault();
        content.scrollTop += e.deltaY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isDesktop]);

  const renderProjectContent = (projectContent: ProjectContent, index: number) => {
    const {displayDesktop = true, displayMobile = true} = projectContent;

    if (isDesktop && !displayDesktop) return null;
    if (!isDesktop && !displayMobile) return null;

    if (projectContent.type === ProjectContentMediaType.IMAGE) {
      const isAboveFold = index < 2;
      return (
        <div key={projectContent.id ?? index} className="image-displayer" id={projectContent.id}>
          <img
            src={projectContent.source}
            className="image-displayer__image"
            alt={`${project?.title ?? ''} — image ${index + 1}`}
            loading={isAboveFold ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </div>
      );
    }
    return (
      <div key={projectContent.id ?? index} className="video-displayer">
        <ReactPlayer className="react-player__tablet" width="100%" height="100%" src={projectContent.source} playing loop muted controls/>
      </div>
    );
  };

  return project && (
    <PortfolioPage >
      <div className="project">
        <motion.div
          className="project__description"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="project-project__title"
            variants={prefersReducedMotion ? undefined : fadeInUp}
          >
            {project.subtitle ?? project.title}
          </motion.h1>
          <motion.div
            className="project__details"
            variants={prefersReducedMotion ? undefined : fadeInUp}
          >
            <p className="project-description__label">{t("works.project.details")}</p>
            <div className="project-description-content__content">
              <hr className="divider"/>
              <div className="project__details-content">
                <p className="project__details-content-label">{t("works.project.category")}</p>
                <p>{t("works.project.category")}</p>
              </div>
              <hr className="divider"/>

              <div className="project__details-content">
                <p className="project__details-content-label">{t("works.project.services")}</p>
                <div className="project-skills">
                  {project.description.skills.map(skill=><p key={skill}>{skill}</p>)}</div>
              </div>
              <hr className="divider"/>

              <div className="project__details-content">
                <p className="project__details-content-label">{t("works.project.date")}</p>
                <p>{project.date}</p>
              </div>
              <hr className="divider"/>
            </div>
          </motion.div>
          <motion.div
            className="project__details"
            variants={prefersReducedMotion ? undefined : fadeInUp}
          >
            <p className="project-description__label">{t("works.project.description")}</p>
            <div className="project-description__content">
              {project.description.content.map(content=><p className="project-description__text" key={content}>{content}</p>)}
              {project.description?.coworkers?.map(content=><p key={content}>{content}</p>)}
            </div>
          </motion.div>
        </motion.div>
        <div className="project__content" >
          {project.content.map((content, i) => renderProjectContent(content, i))}
        </div>
      </div>
    </PortfolioPage>
  )
}

