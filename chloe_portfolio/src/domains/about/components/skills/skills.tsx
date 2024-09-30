import { useTranslation } from "react-i18next";

import "./skills.scss";

import { skills } from "../skills/skills.config.ts";

const Skills = ()=>{
    const { t }=useTranslation("about");
    return (
        <div className="skills">
            <h1>{t("skills")}</h1>
            <div className="skills__list">
                {skills.map((skill, index) => (
                    <p key={skill} className="skills__list-item">
                        {skill}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Skills;