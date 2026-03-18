import {PortfolioPage} from "@core/index";
import {useTranslation} from "react-i18next";
import "./about.scss"
export const About = ()=>{
  const {t}=useTranslation("about")
  return (
    <PortfolioPage>
      <div className="about-container">
        <div className="about">
          <p className="description">{t("about.description")}</p>
          <div className={"skills-container"}>
            <h2 className="skills-title">{t("about.skills")}</h2>
            <h2 className="skills">{t("about.direction")}</h2>
            <h2 className="skills">{t("about.typography")}</h2>
            <h2 className="skills">{t("about.identity")}</h2>
            <h2 className="skills">{t("about.branding")}</h2>
            <h2 className="skills">{t("about.illustrations")}</h2>
            <h2 className="skills">{t("about.webdesign")}</h2>
          </div>
        </div>
        <img className="picture" src="projects/CHLOE/CHLOE_1.jpg"/>
      </div>

    </PortfolioPage>
  )
}

