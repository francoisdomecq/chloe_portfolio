import { useTranslation } from "react-i18next";

import { PortfolioPage } from "../../../core";
import { NavTabs } from "../../../core/types";
import Experiences from "../../components/experiences/experiences.tsx";
import Schools from "../../components/schools/schools.tsx";
import Skills from "../../components/skills/skills.tsx";

import "./about.scss";


const About = () => {
    const { t }=useTranslation("about");
    return (
        <PortfolioPage className="about" id={NavTabs.ABOUT}>
            <div className="about__introduction">
                <p>{t("introduction")}</p>
            </div>
            <Skills/>
            <Experiences/>
            <Schools/>
        </PortfolioPage>
    );
};

export default About;

