import { useTranslation } from "react-i18next";

import { PortfolioPage } from "../../../core";
import HoveredTitle from "../../../core/components/hovered-title/hovered-title";
import Experiences from "../../components/experiences/experiences";
import Schools from "../../components/schools/schools";
import Skills from "../../components/skills/skills";


import "./about.scss";

const About = () => {
    const { t }=useTranslation("about");
    return (
        <PortfolioPage>
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

