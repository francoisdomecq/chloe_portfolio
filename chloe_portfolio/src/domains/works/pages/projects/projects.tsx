import { NavTabs } from "../../../core/types";
import ProjectDisplay from "../../components/project-display/project-display.tsx";
import WORKS from "../../config/works.json";
import { Project } from "../../types";

import "./projects.scss";


const Projects = () => {
    return (
        <section className="projects" id={NavTabs.WORKS}>
            {WORKS.map((work:Project) => <ProjectDisplay key={work.id} work={work}/>)}
        </section>
    );
};

export default Projects;

