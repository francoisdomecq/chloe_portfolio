import {Project} from "@domains/projects/types";

interface ProjectsManagementListProps {
  projectList: Project[];
}

const ProjectsManagementList = (props: ProjectsManagementListProps) => {
  return (
    <div>
      {props.projectList.map((project) =>
        <div>{project.title}</div>
      )}
    </div>
  )
}

export default ProjectsManagementList