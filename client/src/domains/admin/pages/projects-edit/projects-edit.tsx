import {useEffect, useState} from "react";
import axiosClient from "@config/axios";
import {useParams} from "react-router-dom";
import {UpdateProject} from "@domains/projects/types";
import ProjectsManagementEdit
  from "@domains/admin/pages/projects-management/projects-management-edit/projects-management-edit";
import './projects-edit.scss'

const ProjectsEdit = () => {
  const {id} = useParams()
  const [updatedProject, setUpdatedProject] = useState<UpdateProject>()

  useEffect(() => {
    axiosClient.get(`projects/${id}`).then(res => setUpdatedProject(res.data))
  }, []);

  const handleUpdateProject = async () => {
    if (updatedProject) {

      await axiosClient.patch(`/projects/${id}`, {
        ...updatedProject,
        newCarouselImage: '',
        newContent: undefined,
      })

      const config = {headers: {'Content-Type': 'multipart/form-data'}};

      if (updatedProject.newCarouselImage) {
        console.log('in update carousel')
        const carousel = new FormData();
        carousel.append('file', updatedProject.newCarouselImage);
        await axiosClient.patch(`/projects/${id}/carousel`, carousel, config)
      }

      if (updatedProject.newContent) {
        console.log("in update content")
        const projectContentData = new FormData();
        updatedProject.newContent.forEach((file) => {
          projectContentData.append('files', file);
        });
        await axiosClient.patch(`/projects/${id}/content`, projectContentData, config)
      }
    }
  }

  const handleDeleteProject = () => {
    axiosClient.delete(`/projects/${id}`)
  }

  return (
    <div className="projects-edit">
      <ProjectsManagementEdit onAddProject={handleUpdateProject} onChangeProject={setUpdatedProject}
                              project={updatedProject} isUpdate onDelete={handleDeleteProject}/>
    </div>
  )
}

export default ProjectsEdit