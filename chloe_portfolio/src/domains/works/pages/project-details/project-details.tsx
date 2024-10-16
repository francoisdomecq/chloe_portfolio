import { useParams } from "react-router-dom";

import PROJECTS from "../../../../config/works.json";
import { PortfolioPage } from "../../../core";
import { type Project, type ProjectContent, ProjectContentMediaType } from "../../types";

import ImageDisplayer from "./components/image-displayer/image-displayer";
import ProjectDetailsDescription from "./components/project-details-description/project-details-description";
import ProjectNavigator from "./components/project-navigator/project-navigator";
import VideoPlayer from "./components/video-player/video-player";

import "./project-details.scss";

const ProjectDetails = () => {
    const projectId = useParams().id;

    const foundProject : Project | undefined = PROJECTS.find(projectToFind=> projectToFind.id === projectId);

    const renderProjectContent = (projectContent:ProjectContent) => {
        if (projectContent.type === ProjectContentMediaType.IMAGE){
            return <ImageDisplayer id={`image-${projectContent.id}`} key={projectContent.id} source={projectContent.source}/>;
        }
        return <VideoPlayer key={projectContent.id} source={projectContent.source}/>;
    };

    const parsedProjectId = projectId ? parseInt(projectId) : 0;

    return foundProject && (
        <PortfolioPage className="project-details">
            <ProjectDetailsDescription project={foundProject}/>
            <div className="project-details__content">
                {foundProject.content.map(renderProjectContent)}
            </div>
            <div className="project__navigation">
                <ProjectNavigator projectId={parsedProjectId} navigateTo="previous"/>
                <ProjectNavigator projectId={parsedProjectId} navigateTo="next"/>
            </div>
        </PortfolioPage>
    );
};

export default ProjectDetails;