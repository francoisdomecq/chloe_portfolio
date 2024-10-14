import { useTranslation } from "react-i18next";

import HoveredTitle from "../../../core/components/hovered-title/hovered-title";

import { skills } from "./skills.config";

import "./skills.scss";

const Skills = ()=>{
    const { t }=useTranslation("about");
    return (
        <div className="skills">
            <HoveredTitle title={t("skills")}/>
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