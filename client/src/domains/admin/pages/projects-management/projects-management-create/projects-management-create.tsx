import {CreateProject} from "@domains/projects/types";
import {ChangeEvent, Dispatch, SetStateAction} from "react";
import TextInput from "@core/components/text-input/text-input";
import Collapse from "@core/components/collapse/collapse";
import './projects-management-create.scss'
import XXX from "@domains/admin/pages/projects-management/projects-management-create/XXX";

interface ProjectsManagementCreateProps {
  onAddProject: () => void;
  project: CreateProject | undefined;
  onChangeProject: Dispatch<SetStateAction<CreateProject | undefined>>;
}


const ProjectsManagementCreate = (props: ProjectsManagementCreateProps) => {
  const {onAddProject, project, onChangeProject} = props

  const handleChangeProject = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    onChangeProject(prevVarious => ({...prevVarious as CreateProject, [name]: value}))
  }

  const handleDownloadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return
    }
    const file = event.target.files[0];
    onChangeProject(prevVarious => ({...prevVarious as CreateProject, carouselImage: file}));
  };

  const handleDownloadFiles = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return
    }
    const files = event.target.files;
    const content: File[] = [...project?.content ?? [], ...Array.from(files)];
    onChangeProject(prevVarious => ({...prevVarious as CreateProject, content}));
  };

  const handleAddFields = (value: string[], field: string) => {
    onChangeProject(prevProject => ({
      ...prevProject as CreateProject,
      description: {...prevProject?.description as CreateProject['description'], [field]: value}
    }))
  }

  const handleUpdateFont = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeProject(prevProject => ({
      ...prevProject as CreateProject,
      description: {...prevProject?.description as CreateProject['description'], fonts: event.target.value}
    }))
  }

  const handleUpdateTitle = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeProject(prevProject => ({
      ...prevProject as CreateProject,
      description: {...prevProject?.description as CreateProject['description'], title: event.target.value}
    }))
  }

  return (
    <Collapse className="projects-management-create">
      <TextInput className="projects-management-create__input" label="Title" name="title" type="text"
                 value={project?.title}
                 onChange={handleChangeProject}/>
      <TextInput className="projects-management-create__input" label="Date" name="date" type="text"
                 value={project?.date}
                 onChange={handleChangeProject}/>
      <TextInput className="projects-management-create__input" label="Title" name="date" type="text"
                 value={project?.description?.title}
                 onChange={handleUpdateTitle}/>
      <div>
        <XXX onConfirm={handleAddFields} name="subtitle"/>
        <XXX onConfirm={handleAddFields} name="content"/>
        <XXX onConfirm={handleAddFields} name="skills"/>
        <TextInput className="projects-management-create__input" label="Fonts" name="fonts" type="text"
                   value={project?.description?.fonts}
                   onChange={handleUpdateFont}/>
      </div>
      <input type="file" onChange={handleDownloadFile}/>
      <input type="file" multiple onChange={handleDownloadFiles}/>
      <button onClick={onAddProject}>Ajouter projet</button>
    </Collapse>
  )
}

export default ProjectsManagementCreate