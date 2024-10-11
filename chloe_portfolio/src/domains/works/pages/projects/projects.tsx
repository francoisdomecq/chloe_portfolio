import { PortfolioPage } from "../../../core";
import projects from "../../config/works.json";

import Carousel from "./components/carousel/carousel";
import Project from "./components/project/project";

import "./projects.scss";

const Projects = () => {
    return (
        <PortfolioPage className="projects">
            <div className="projects__carousel">
                <Carousel/>
            </div>
            <div className="projects__list">
                {projects.map((project, index) => <Project project={project} key={index} />)}
            </div>
        </PortfolioPage>
    );
};

export default Projects;

