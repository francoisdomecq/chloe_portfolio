import {useTranslation} from "react-i18next";

import {skills} from "./skills.config";

import "./skills.scss";

const Skills = () => {
  const {t} = useTranslation("about");
  return (
    <div className={`skills`}>
      <h1 className="skill-title">{t("skills")}</h1>
      <div className="skills-list">
        {skills.map((skill) => (
          <p key={skill} className="skills-list-item">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;