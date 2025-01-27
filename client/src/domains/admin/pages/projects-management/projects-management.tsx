import {useEffect, useState} from "react";
import axiosClient from "../../../../config/axios";
import {CreateProject, Project} from "../../../projects/types";
import ProjectsManagementCreate
  from "@domains/admin/pages/projects-management/projects-management-create/projects-management-create";
import ProjectsManagementList
  from "@domains/admin/pages/projects-management/projects-management-list/projects-management-list";
import './projects-management.scss'

const ProjectsManagement = () => {

  const [projectList, setProjectList] = useState<Project[]>([])
  const [createdProject, setCreatedProject] = useState<CreateProject | undefined>(undefined)
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined)

  const handleFetchProjects = () => {
    axiosClient.get('projects').then(res => {
      setProjectList(res.data)
    })
  }

  useEffect(() => {
    handleFetchProjects()
  }, []);

  const handleAddProject = async () => {
    if (createdProject) {

      const postedProject = await axiosClient.post('/projects', {...createdProject, carouselImage: '', content: []})
      const postedProjectId = postedProject.data.id

      const config = {headers: {'Content-Type': 'multipart/form-data'}};
      const carousel = new FormData();
      carousel.append('file', createdProject.carouselImage);
      await axiosClient.patch(`/projects/${postedProjectId}/carousel`, carousel, config)

      const projectContentData = new FormData();
      createdProject.content.forEach((file) => {
        projectContentData.append('files', file);
      });
      await axiosClient.patch(`/projects/${postedProjectId}/content`, projectContentData, config)
    }
  }
  return (
    <div className="projects-management">
      <ProjectsManagementCreate onAddProject={handleAddProject} project={createdProject}
                                onChangeProject={setCreatedProject}/>
      <ProjectsManagementList projectList={projectList}/>

    </div>
  );
}

export default ProjectsManagement