import {useParams} from "react-router-dom";
import works from "@config/works.json"
import "./project.scss"
import {Project as ProjectType} from "../../types";
import {PortfolioPage} from "@core/index";
import {ProjectContent, ProjectContentMediaType} from "@domains/old/projects_old/types";
import ReactPlayer from "react-player";
import {motion} from "framer-motion";

const DESKTOP_BP = 960;

const pageVariants = {
  hidden: {opacity: 0, y: 40},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: {opacity: 0, y: 30},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]},
  },
};

const Project = () => {
  const params = useParams();
  const project:ProjectType|undefined = works.find(work=>work.id===params.id)
  const isDesktop = window.innerWidth >= DESKTOP_BP;

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
      <motion.div
        className="project"
        variants={isDesktop ? pageVariants : undefined}
        initial={isDesktop ? "hidden" : undefined}
        animate={isDesktop ? "visible" : undefined}
      >
        <motion.div className="project__description" variants={isDesktop ? childVariants : undefined}>
          <h1 className="project__title">{project.title}</h1>
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
              {project.description.content.map(content=><p key={content}>{content}</p>)}
              {project.description?.coworkers?.map(content=><p key={content}>{content}</p>)}
            </div>
          </div>
        </motion.div>
        <motion.div className="project__content" variants={isDesktop ? childVariants : undefined}>
          {project.content.map(renderProjectContent)}
        </motion.div>
      </motion.div>
    </PortfolioPage>
  )
}

export default Project;