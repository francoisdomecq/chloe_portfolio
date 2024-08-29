import { useParams } from "react-router-dom";

import PROJECTS from "../../config/works.json";
import { Project, ProjectContent, ProjectContentMediaType } from "../../types";

import VideoPlayer from "./components/video-player/video-player.tsx";

import "./project-details.scss";

import ImageDisplayer from "./components/image-displayer/image-displayer.tsx";


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
        <div className="project-details">
            <h1>{foundProject.title}</h1>
            <p>{foundProject.description}</p>
            {foundProject.content.map(renderProjectContent)}
        </div>
    );
};

export default ProjectDetails;