import { useTranslation } from "react-i18next";

import { PortfolioPage } from "../../../core";
import NavigationHistory from "../../../core/components/navigation-history/navigation-history";
import Experiences from "../../components/experiences/experiences";
import Schools from "../../components/schools/schools";
import Skills from "../../components/skills/skills";


import "./about.scss";

const About = () => {
    const { t }=useTranslation("about");

    const routerHistory = [{ route:"/",label:"Home" }, { route: "/about", label: "About" }];

    return (
        <PortfolioPage>
            <div className="about">
                <NavigationHistory history={routerHistory}/>
                <div className="about__intro-container">
                    <h1 className="about__title">{t("title")}</h1>
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

