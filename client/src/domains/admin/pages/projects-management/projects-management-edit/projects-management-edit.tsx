import {UpdateProject} from "@domains/projects/types";
import {ChangeEvent, Dispatch, SetStateAction} from "react";
import TextInput from "@core/components/text-input/text-input";
import Collapse from "@core/components/collapse/collapse";
import './projects-management-edit.scss'
import MultiValuesInput from "@core/components/multi-values-input/multi-values-input";

interface ProjectsManagementEditProps {
  onAddProject: () => void;
  project: UpdateProject | undefined;
  isUpdate?: boolean;
  onChangeProject: Dispatch<SetStateAction<UpdateProject | undefined>>;
  onDelete?: () => void;
}


const ProjectsManagementEdit = (props: ProjectsManagementEditProps) => {
  const {onAddProject, project, onChangeProject, isUpdate = false, onDelete} = props

  const handleChangeProject = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    onChangeProject(prevVarious => ({...prevVarious, [name]: value}))
  }

  const handleDownloadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return
    }
    const file = event.target.files[0];
    const contentToUpdate = isUpdate ? 'newCarouselImage' : 'carouselImage';
    onChangeProject(prevVarious => ({...prevVarious, [contentToUpdate]: file}));
  };

  const handleDownloadFiles = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return
    }
    const files = event.target.files;
    const contentToUpdate = isUpdate ? project?.newContent : project?.content;
    const content: File[] = [...contentToUpdate ?? [], ...Array.from(files)];
    onChangeProject(prevVarious => ({...prevVarious, content}));
  };

  const handleAddFields = (value: string[], field: string) => {
    onChangeProject(prevProject => ({
      ...prevProject as UpdateProject,
      description: {...prevProject?.description as UpdateProject['description'], [field]: value}
    }))
  }

  const handleUpdateFont = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeProject(prevProject => ({
      ...prevProject as UpdateProject,
      description: {...prevProject?.description as UpdateProject['description'], fonts: event.target.value}
    }))
  }

  return (
    <Collapse className="projects-management-create">
      {isUpdate && onDelete && <button onClick={onDelete}>Supprimer projet</button>}
      <div className="projects-management-create__inputs">
        <TextInput className="projects-management-create__input" label="Title" name="title" type="text"
                   value={project?.title}
                   onChange={handleChangeProject}/>
        <TextInput className="projects-management-create__input" label="Date" name="date" type="text"
                   value={project?.date}
                   onChange={handleChangeProject}/>
        <TextInput className="projects-management-create__input" label="Fonts" name="fonts" type="text"
                   value={project?.description?.fonts}
                   onChange={handleUpdateFont}/>
      </div>
      <MultiValuesInput onConfirm={handleAddFields} values={project?.description?.subtitle} name="subtitle"/>
      <MultiValuesInput onConfirm={handleAddFields} inputType="textarea" values={project?.description?.content}
                        name="content"/>
      <MultiValuesInput onConfirm={handleAddFields} values={project?.description?.skills} name="skills"/>

      <input type="file" onChange={handleDownloadFile}/>
      <input type="file" multiple onChange={handleDownloadFiles}/>
      <button onClick={onAddProject}>Ajouter projet</button>
    </Collapse>
  )
}

export default ProjectsManagementEdit