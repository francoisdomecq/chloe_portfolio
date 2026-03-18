import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import works from "@config/works.json"
import "./project.scss"
import {Project as ProjectType, ProjectContent, ProjectContentMediaType} from "../../types";
import {PortfolioPage} from "@core/index";
import ReactPlayer from "react-player";

const DESKTOP_BP = 1024;

export const Project = () => {
  const params = useParams();
  const {t} = useTranslation("works");
  const project:ProjectType|undefined = works.find(work=>work.id===params.id)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= DESKTOP_BP);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= DESKTOP_BP);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderProjectContent = (projectContent: ProjectContent) => {
    const {displayDesktop = true, displayMobile = true} = projectContent;

    if (isDesktop && !displayDesktop) return null;
    if (!isDesktop && !displayMobile) return null;

    if (projectContent.type === ProjectContentMediaType.IMAGE) {
      return (
        <div className="image-displayer" id={projectContent.id}>
          <img src={projectContent.source} className="image-displayer__image" alt={`project-${projectContent.source}`}/>
        </div>
      );
    }
    return <ReactPlayer className="react-player__tablet" width="100%" height="100%" src={projectContent.source} playing loop muted controls/>;
  };

  return project && (
    <PortfolioPage >
      <div className="project">
        <div className="project__description">
          <h1 className="project__title">{project.subtitle ?? project.title}</h1>

          <div className="project__meta">
            <div className="project__meta-item">
              <span className="project__meta-label">{t("works.project.category")}</span>
              <span className="project__meta-value">
                {project.description.subtitle.join(" / ")}
              </span>
            </div>

            <div className="project__meta-item">
              <span className="project__meta-label">{t("works.project.services")}</span>
              <span className="project__meta-value">
                {project.description.skills.join(", ")}
              </span>
            </div>

            <div className="project__meta-item">
              <span className="project__meta-label">{t("works.project.date")}</span>
              <span className="project__meta-value">{project.date}</span>
            </div>
          </div>

          <div className="project__body">
            {project.description.content.map(content =>
              <p className="project__body-text" key={content}>{content}</p>
            )}
            {project.description?.coworkers?.map(content =>
              <p className="project__body-text" key={content}>{content}</p>
            )}
          </div>
        </div>
        <div className="project__content" >
          {project.content.map(renderProjectContent)}
        </div>
      </div>
    </PortfolioPage>
  )
}

