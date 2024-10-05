import { useTranslation } from "react-i18next";

import { PortfolioPage } from "../../../core";
import { NavTabs } from "../../../core/types";
import Experiences from "../../components/experiences/experiences.tsx";
import Schools from "../../components/schools/schools.tsx";
import Skills from "../../components/skills/skills.tsx";

import "./about.scss";

import HoveredTitle from "../../../core/components/hovered-title/hovered-title.tsx";

const About = () => {
    const { t }=useTranslation("about");
    return (
        <PortfolioPage  id={NavTabs.ABOUT}>
            <div className="about">
                <div className="about__intro-container">
                    <HoveredTitle className="about__title" title={t("title")}/>
                    <div className="about__introduction">
                        <p>{t("introduction")}</p>
                    </div>
                </div>
                <Skills/>
                <Schools/>
                <Experiences/>
            </div>
        </PortfolioPage>
    );
};

export default About;

