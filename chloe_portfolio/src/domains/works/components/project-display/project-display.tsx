import { useNavigate } from "react-router-dom";

import { Project } from "../../types";

interface WorkDisplayProps {
  work: Project;
}

const ProjectDisplay = ({ work }: WorkDisplayProps) => {
    const navigate = useNavigate();

    const handleNavigateToProjectDetails = () => {
        navigate(`/works/${work.id}`);
    };
    return (
        <div onClick={handleNavigateToProjectDetails}>
            <h1>{work.title}</h1>
            <p>{work.description}</p>
        </div>
    );
};

export default ProjectDisplay;