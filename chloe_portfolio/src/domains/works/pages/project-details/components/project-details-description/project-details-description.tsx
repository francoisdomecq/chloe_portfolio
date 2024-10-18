import { Project } from "../../../../types";

import "./project-details-description.scss";

interface ProjectDetailsDescriptionProps {
  project: Project
}

const ProjectDetailsDescription=({ project }:ProjectDetailsDescriptionProps)=>{
    return (
        <div className="project-details-description">
            <h1 className="project-details-description__title">{project.description.title}</h1>
            <div className="project-details-description__details">
                <span className="project-details-description__description">Description</span>
                <p className="project-details-description__content">{project.description.content}</p>
                <div className="project-details-description__info">
                    <span className="project-details-description__info-title">Date</span>
                    <span className="project-details-description__info-content">{project.date}</span>
                </div>
                <div className="project-details-description__info">
                    <span className="project-details-description__info-title">Skills</span>
                    <span className="project-details-description__info-content">{project.description.skills.join(", ")}</span>
                </div>
                <div className="project-details-description__info">
                    <span className="project-details-description__info-title">Typography</span>
                    <span className="project-details-description__info-content">{project.description.fonts}</span>
                </div>
                <div className="project-details-description__scroll-button">
                    En decouvrir +
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsDescription;