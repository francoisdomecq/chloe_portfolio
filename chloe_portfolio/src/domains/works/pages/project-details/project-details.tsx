import { useParams } from "react-router-dom";

import { PortfolioPage } from "../../../core";
import PROJECTS from "../../config/works.json";
import { Project, ProjectContent, ProjectContentMediaType } from "../../types";

import ImageDisplayer from "./components/image-displayer/image-displayer.tsx";
import VideoPlayer from "./components/video-player/video-player.tsx";

import "./project-details.scss";

const ProjectDetails = () => {
    const projectId = useParams().id;

    const foundProject : Project = PROJECTS.find(projectToFind=> projectToFind.id === projectId);

    const renderProjectContent = (projectContent:ProjectContent) => {
        if (projectContent.type === ProjectContentMediaType.IMAGE){
            return <ImageDisplayer key={projectContent.id} source={projectContent.source}/>;
        }
        return <VideoPlayer key={projectContent.id} source={projectContent.source}/>;
    };

    return  (
        <PortfolioPage className="project-details">
            <div className="project-details__information">
                <h1 className="project-details__title">{foundProject.title}</h1>
                <p className="project-details__description">{foundProject.description}</p>
            </div>
            <div className="project-details__content">
                {foundProject.content.map(renderProjectContent)}
            </div>
        </PortfolioPage>
    );
};

export default ProjectDetails;