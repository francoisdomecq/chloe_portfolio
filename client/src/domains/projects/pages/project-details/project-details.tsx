import {useParams} from "react-router-dom";

import PROJECTS from "../../../../config/works.json";
import {PortfolioPage} from "../../../core";
import NavigationHistory from "../../../core/components/navigation-history/navigation-history";
import {type Project, type ProjectContent, ProjectContentMediaType} from "../../types";

import ImageDisplayer from "./components/image-displayer/image-displayer";
import ProjectDetailsDescription from "./components/project-details-description/project-details-description";
import ProjectNavigator from "./components/project-navigator/project-navigator";
import VideoPlayer from "./components/video-player/video-player";

import "./project-details.scss";
import {useContext, useEffect} from "react";
import {AppContext} from "../../../../config/contexts/app-context";

const ProjectDetails = () => {
  const projectId = useParams().id;
  const {theme, handleChangeTheme} = useContext(AppContext)
  const foundProject: Project | undefined = PROJECTS.find(projectToFind => projectToFind.title === projectId);

  const renderProjectContent = (projectContent: ProjectContent) => {
    if (projectContent.type === ProjectContentMediaType.IMAGE) {
      return <ImageDisplayer id={`image-${projectContent.id}`} key={projectContent.id} source={projectContent.source}/>;
    }
    return <VideoPlayer key={projectContent.id} source={projectContent.source}/>;
  };

  useEffect(() => {
    if (foundProject) {
      handleChangeTheme(foundProject?.theme)
    }
  }, [foundProject]);

  const parsedProjectId = foundProject ? parseInt(foundProject.id) : 0;

  const routerHistory = [{route: "/", label: "Home"}, {route: "/works", label: "Works"}, {
    route: `/works/${projectId}`,
    label: foundProject?.title ?? ""
  }];

  const projectNavigationModifier = parsedProjectId === 1 ? "project__navigation--flex-end" : ""
  return foundProject && (
    <PortfolioPage className={`project-details project-details__${theme}`}>
      <NavigationHistory history={routerHistory} className="project-details__navigation-history"/>
      <ProjectDetailsDescription project={foundProject}/>
      <div className="project-details__content">
        {foundProject.content.map(renderProjectContent)}
      </div>
      <div className="project__navigation-separator"></div>
      <div className={`project__navigation ${projectNavigationModifier}`}>
        <ProjectNavigator projectId={parsedProjectId} navigateTo="previous"/>
        <ProjectNavigator projectId={parsedProjectId} navigateTo="next"/>
      </div>
    </PortfolioPage>
  );
};

export default ProjectDetails;