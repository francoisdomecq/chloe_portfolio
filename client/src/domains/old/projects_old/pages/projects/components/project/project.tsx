import { useNavigate } from "react-router-dom";

import { Project as ProjectType } from "../../../../types";

import "./project.scss";

interface ProjectProps {
  project :ProjectType;
}
const Project= ({ project }:ProjectProps)=>{
    const navigate = useNavigate();

    return (
        <div className="project" onClick={()=>navigate(`/works/${project.title}`)}>
            <div className="project__details">
                <h2 className="project__title">{project.title}</h2>
                <h3 className="project__date">{project.date}</h3>
            </div>
            <img className="project__image" width="100%" height="100%" src={project.carouselImage} alt={project.title} />
        </div>
    );
};

export default Project;