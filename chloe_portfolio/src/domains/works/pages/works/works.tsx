import ReactPlayer from "react-player";

import { NavTabs } from "../../../core/types";
import ProjectDisplay from "../../components/project-display/project-display.tsx";
import WORKS from "../../config/works.json";
import { Project } from "../../types";

import "./works.scss";


const Works = () => {
    return (
        <section className="works" id={NavTabs.WORKS}>
          WORKS
            {WORKS.map((work:Project) => <ProjectDisplay key={work.id} work={work}/>)}
            <div className="player-wrapper">
                <ReactPlayer className="react-player"  width="100%" height="200%"url="./src/assets/projects/ODETTE-WEB/TYPO.mp4" playing loop/>

            </div>
        </section>
    );
};

export default Works;

