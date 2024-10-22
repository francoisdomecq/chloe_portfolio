import { Project } from "../../../../types";

import "./project-details-description.scss";

interface ProjectDetailsDescriptionProps {
  project: Project
}

const ProjectDetailsDescription=({ project }:ProjectDetailsDescriptionProps)=>{
    const scrollToFirstImage=()=>{
        document.getElementById("image-1")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="project-details-description">
            <div className="project-details-description__titles">
                <h1 className="project-details-description__title">{project.description.title}</h1>
                <div className="project-details-description__subtitle">
                    {project.description.subtitle.map(subtitle=><h2>{subtitle}</h2>)}
                </div>
            </div>
            <div className="project-details-description__details">
                <span className="project-details-description__description">Description</span>
                {project.description.content.map(content=><p className="project-details-description__content">{content}</p>)}
                <div className="project-details-description__info">
                    <span className="project-details-description__info-title">Date</span>
                    <span className="project-details-description__info-content">{project.date}</span>
                </div>
                <div className="project-details-description__info">
                    <span className="project-details-description__info-title">Skills</span>
                    <span className="project-details-description__info-content">{project.description.skills.join(" / ")}</span>
                </div>
                <div className="project-details-description__info">
                    <span className="project-details-description__info-title">Typography</span>
                    <span className="project-details-description__info-content">{project.description.fonts}</span>
                </div>
                <div className="project-details-description__scroll-button" onClick={scrollToFirstImage}>
                    En decouvrir +
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsDescription;