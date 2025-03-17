import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

import {PortfolioPage} from "../../../core";
import NavigationHistory from "../../../core/components/navigation-history/navigation-history";
import Experiences from "../../components/experiences/experiences";
import Schools from "../../components/schools/schools";
import Skills from "../../components/skills/skills";


import "./about.scss";
import {useContext} from "react";
import {AppContext} from "../../../../config/contexts/app-context";


const About = () => {
  const {t} = useTranslation("about");
  const navigate = useNavigate();
  const {theme} = useContext(AppContext)

  const routerHistory = [{route: "/", label: "Home"}, {route: "/about", label: "About"}];

  return (
    <PortfolioPage>
      <div className={`about about__${theme}`}>
        <NavigationHistory className="about__navigation-history" history={routerHistory}/>
        <div className="about__intro-container">
          <div className="about__introduction">
            <p>{t("introduction")}</p>
          </div>
        </div>
        <Skills/>
        <Schools/>
        <Experiences/>
        <div className="about__contact-button" onClick={() => navigate("/contact")}>{t("contact")}</div>
      </div>
    </PortfolioPage>
  );
};

export default About;

