import PROJECTS from "../../../../config/works.json";
import PROJECTS_LIGHT from "../../../../config/works-light.json";
import {PortfolioPage} from "../../../core";

import Carousel from "./components/carousel/carousel";
import Project from "./components/project/project";

import "./projects.scss";
import {useContext} from "react";
import {AppContext} from "../../../../config/contexts/app-context";

const Projects = () => {

  const {theme} = useContext(AppContext)
  const projects = theme === "dark" ? PROJECTS : PROJECTS_LIGHT;
  return (
    <PortfolioPage className="projects">
      <div className="projects__carousel">
        <Carousel/>
      </div>
      <div className="projects__list">
        {projects.map((project, index) => <Project project={project} key={index}/>)}
      </div>
    </PortfolioPage>
  );
};

export default Projects;

