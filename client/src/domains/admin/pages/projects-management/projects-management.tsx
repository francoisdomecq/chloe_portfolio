import {useEffect, useState} from "react";
import axiosClient from "../../../../config/axios";
import {Project, UpdateProject} from "../../../projects/types";
import ProjectsManagementEdit
  from "@domains/admin/pages/projects-management/projects-management-edit/projects-management-edit";
import ProjectsManagementList
  from "@domains/admin/pages/projects-management/projects-management-list/projects-management-list";
import './projects-management.scss'
import {useTranslation} from "react-i18next";

const ProjectsManagement = () => {
  const {t} = useTranslation('admin')
  const [projectList, setProjectList] = useState<Project[]>([])
  const [createdProject, setCreatedProject] = useState<UpdateProject | undefined>(undefined)

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

      if (createdProject.carouselImage) {
        const carousel = new FormData();
        carousel.append('file', createdProject?.carouselImage);
        await axiosClient.patch(`/projects/${postedProjectId}/carousel`, carousel, config)
      }

      if (createdProject.content) {
        const projectContentData = new FormData();
        createdProject.content.forEach((file) => {
          projectContentData.append('files', file);
        });
        await axiosClient.patch(`/projects/${postedProjectId}/content`, projectContentData, config).then(handleFetchProjects)
      }
    }
  }
  
  return (
    <div className="projects-management">
      <h1 className="projects-management__title">{t("projects.creation")}</h1>
      <ProjectsManagementEdit onAddProject={handleAddProject} project={createdProject}
                              onChangeProject={setCreatedProject}/>
      <ProjectsManagementList projectList={projectList}/>

    </div>
  );
}

export default ProjectsManagement