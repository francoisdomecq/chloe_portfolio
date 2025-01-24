import {useState} from "react";
import axiosClient from "../../../../config/axios";
import {Project, ProjectDescription} from "../../../projects/types";


interface Project {
  id: string;
  title: string;
  description: ProjectDescription;
  date: string;
  carouselImage: string;
  content: File[];
}

const ProjectsManagement = () => {

  const [project, setProject] = useState<Project | undefined>({
    description: {
      "title": "Odette, la cuisine du souvenir",
      "subtitle": [
        "Typeface Design",
        "Editorial project"
      ],
      "content": [
        "This project blends typeface design and editorial work, resulting in a recipe book featuring the recipes of my great-great-grandmother. The book also serves as a type specimen, showcasing the process of creating a typeface based on her handwriting. This custom typography adds authenticity to the book, paying tribute to family heritage while providing a unique visual and emotional experience."
      ],
      "skills": [
        "Typeface design",
        "illustrations",
        "editorial project",
        "writing",
        "research"
      ],
      "fonts": "Minion Pro, an Adobe Original Typeface designed by Robert Slimbach / Satoshi designed by Deni Anggara for the Indian Type Foundry / Odette designed by Chloé Gaillard, a personal typeface design project"
    }
  } as unknown as Project)
  const [variousFetch, setVariousFetch] = useState<Project[]>([])

  const handleAddVarious = async () => {
    if (project) {

      const createdProject = await axiosClient.post('/projects', {...project, carouselImage: '', content: []})

      const config = {headers: {'Content-Type': 'multipart/form-data'}};

      const carousel = new FormData();
      await axiosClient.patch(`/projects/${createdProject.data.id}/carousel`, carousel, config)

      const projectContentData = new FormData();
      project.content.forEach((file, index) => {
        projectContentData.append('files', file);
      });
      await axiosClient.patch(`/projects/${createdProject.data.id}/content`, projectContentData, config)
    }
  }

  const handleUpdateProject = (e, field: string) => {
    setProject(prevVarious => ({...prevVarious as Project, [field]: e.target.value}))
  }


  const handleDownloadFile = (e) => {
    const file = e.target.files[0];
    setProject(prevVarious => ({...prevVarious as Project, carouselImage: file}));
  };

  const handleDownloadFiles = (e) => {
    const files = e.target.files;
    const content: File[] = [...project?.content ?? [], ...Array.from(files)];
    setProject(prevVarious => ({...prevVarious as Project, content}));
  };

  return (
    <div>
      hello
      <input type="text" onChange={(e) => handleUpdateProject(e, 'title')}/>
      <input type="text" onChange={(e) => handleUpdateProject(e, 'date')}/>
      <input type="file" onChange={handleDownloadFile}/>
      <input type="file" multiple onChange={handleDownloadFiles}/>
      <button onClick={handleAddVarious}>Ajouter projet</button>

      {variousFetch.map(various => {
        return (
          <div>
            {various.title} {various.description.content} {various.date}
            <img src={various.carouselImage}/>
          </div>
        )
      })}

    </div>
  );
}

export default ProjectsManagement