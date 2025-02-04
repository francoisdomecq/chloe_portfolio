import {Project} from "@domains/projects/types";
import {useNavigate} from "react-router-dom";
import './projects-management-list.scss'

interface ProjectsManagementListProps {
  projectList: Project[];
}

const ProjectsManagementList = (props: ProjectsManagementListProps) => {
  const navigate = useNavigate()
  return (
    <div className="projects-management-list">
      {props.projectList.map((project) =>
        <div className="projects-management-list__grid" key={project.id} onClick={() => navigate(project.id)}>
          <img className="projects-management-list__image" src={project.carouselImage} alt={project.title}/>
        </div>
      )}
    </div>
  )
}

export default ProjectsManagementList