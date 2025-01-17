import {useTranslation} from "react-i18next";

import {Project} from "../../../../types";


import "./project-details-description.scss";

interface ProjectDetailsDescriptionProps {
  project: Project
}

const ProjectDetailsDescription = ({project}: ProjectDetailsDescriptionProps) => {
  const {t} = useTranslation("works");

  return (
    <div className="project-details-description">
      <div className="project-details-description__titles">
        <h1 className="project-details-description__title">{project.description.title}</h1>
        <div className="project-details-description__subtitle">
          {project.description.subtitle.map(subtitle =>
            <h2 key={subtitle} className="project-details-description__subtitle-text">{subtitle}</h2>)}
        </div>
      </div>
      <div className="project-details-description__details">
        <i className="project-details-description__description">{t("project-details.description")}</i>
        {project.description.content.map(content =>
          <p key={content} className="project-details-description__content">{content}</p>)
        }
        <div className="project-details-description__info">
          <i className="project-details-description__info-title">{t("project-details.date")}</i>
          <span className="project-details-description__info-content">{project.date}</span>
        </div>
        <div className="project-details-description__info">
          <i className="project-details-description__info-title">{t("project-details.skills")}</i>
          <span className="project-details-description__info-content">{project.description.skills.join(" / ")}</span>
        </div>
        <div className="project-details-description__info">
          <i className="project-details-description__info-title">{t("project-details.font")}</i>
          <span className="project-details-description__info-content">{project.description.fonts}</span>
        </div>
        {project.description.coworkers &&
            <div className="project-details-description__info">
                <span className="project-details-description__info-title">{t("project-details.collaborators")}</span>
                <div className="project-details-description__info-content">
                  {project.description.coworkers.join(", ")}
                </div>
            </div>
        }
      </div>
    </div>
  );
};

export default ProjectDetailsDescription;