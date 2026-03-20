import {PortfolioPage} from "@core/index";
import {useTranslation} from "react-i18next";
import "./about.scss"
import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { usePageSeo } from "@utils/usePageSeo";

const SKILL_KEYS = ["direction", "typography", "identity", "branding", "illustrations", "webdesign"] as const;

export const About = ()=>{
  const {t}=useTranslation("about")
  usePageSeo(
    "About — Chloé Gaillard",
    "Chloé Gaillard, designer graphique basée à Paris. Direction artistique, identité visuelle sur-mesure, typographie et illustration."
  );
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.round(v * (SKILL_KEYS.length - 1));
    setActiveIndex(Math.max(0, Math.min(index, SKILL_KEYS.length - 1)));
  });

  return (
    <PortfolioPage>
      <div className="about-container">
        <div className="about">
          <p className="description">{t("about.description")}</p>
          <div className="skills-container" ref={skillsRef}>
            <h2 className="skills-title">{t("about.skills")}</h2>
            {SKILL_KEYS.map((key, i) => (
              <h2 key={key} className={`skills${activeIndex === i ? " skills--active" : ""}`}>
                {t(`about.${key}`)}
              </h2>
            ))}
          </div>
        </div>
        <img className="picture" src="projects/CHLOE/CHLOE_1.jpg"/>
      </div>
    </PortfolioPage>
  )
}

