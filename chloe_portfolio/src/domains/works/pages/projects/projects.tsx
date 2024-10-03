import { PortfolioPage } from "../../../core";

import Carousel from "./components/carousel/carousel.tsx";

import "./projects.scss";

const Projects = () => {
    return (
        <PortfolioPage className="projects">
            <div className="projects__carousel">
                <Carousel/>
            </div>
        </PortfolioPage>
    );
};

export default Projects;

