import {useParams} from "react-router-dom";
import works from "@config/works.json"
import "./project.scss"
import {Project as ProjectType} from "../../types";
import {PortfolioPage} from "@core/index";
import {ProjectContent, ProjectContentMediaType} from "@domains/old/projects_old/types";
import ReactPlayer from "react-player";

const Project = () => {
  const params = useParams();
  const project:ProjectType|undefined = works.find(work=>work.id===params.id)

  const renderProjectContent = (projectContent: ProjectContent) => {
    if (projectContent.type === ProjectContentMediaType.IMAGE) {
      return  <div className="image-displayer" id={projectContent.id}>
        <img src={projectContent.source} className="image-displayer__image" alt={`project-${projectContent.source}`}/>
      </div>
    }
    return <ReactPlayer className="react-player__tablet" width="100%" height="100%" src={projectContent.source} playing loop muted controls/>;
  };

  return project && (
    <PortfolioPage >
      <div className="project">
        <div className="project__description" >
          <h1 className="project-project__title">{project.subtitle ?? project.title}</h1>
          <div className="project__details">
            <p className="project-description__label">Détails</p>
            <div>
              <hr className="divider"/>
              <div className="project__details-content">
                <p className="project__details-content-label">Catégorie</p>
                <p>Branding</p>
              </div>
              <hr className="divider"/>

              <div className="project__details-content">
                <p className="project__details-content-label">Services</p>
                <div className="project-skills">
                  {project.description.skills.map(skill=><p key={skill}>{skill}</p>)}</div>
              </div>
              <hr className="divider"/>

              <div className="project__details-content">
                <p className="project__details-content-label">Date</p>
                <p>{project.date}</p>
              </div>
              <hr className="divider"/>
            </div>
          </div>
          <div className="project__details">
            <p className="project-description__label">Description du projet</p>
            <div className="project-description__content">
              {project.description.content.map(content=><p style={{width:"100%"}}key={content}>{content}</p>)}
              {project.description?.coworkers?.map(content=><p key={content}>{content}</p>)}
            </div>
          </div>
        </div>
        <div className="project__content" >
          {project.content.map(renderProjectContent)}
        </div>
      </div>
    </PortfolioPage>
  )
}

export default Project;