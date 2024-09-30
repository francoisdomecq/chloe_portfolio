import React from "react";

import WORKS from "../../../config/works.json";

import "./carousel.scss";

import { Project } from "../../../types";

const ProjectCarousel = () => {

    const images = WORKS.map((project:Project )=> project.carouselImage);

    return (
        <div className="">
        </div>
    );
};

export default ProjectCarousel;