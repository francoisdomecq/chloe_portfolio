import {PortfolioPage} from "@core/index";
import {useTranslation} from "react-i18next";
import "./about.scss"
import { usePageSeo } from "@utils/usePageSeo";

const SKILL_KEYS = ["direction", "typography", "webdesign","identity", "social", "branding", "illustration" ] as const;

export const About = ()=>{
  const {t}=useTranslation("about")
  usePageSeo(
    "About — Chloé Gaillard",
    "Chloé Gaillard, designer graphique basée à Paris. Direction artistique, identité visuelle sur-mesure, typographie et illustration."
  );

  return (
    <PortfolioPage>
      <div className="about-container">
        <div className="about">
          <div className="skills-container">
            <h2 className="skills-title">{t("about.skills")}</h2>
            {SKILL_KEYS.map((key) => (
              <h2 key={key} className="skills">
                {t(`about.${key}`)}
              </h2>
            ))}
          </div>
        </div>
        <img className="picture" src="chlochlo.jpg"/>
      </div>
    </PortfolioPage>
  )
}

