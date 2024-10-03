import { useContext } from "react";
import { useTranslation } from "react-i18next";


import { AppContext } from "../../../../config/contexts/app-context.tsx";
import HoveredTitle from "../../../core/components/hovered-title/hovered-title.tsx";

import { skills } from "./skills.config.ts";

import "./skills.scss";

const Skills = ()=>{
    const { hoverText,unhoverText }=useContext(AppContext);
    const { t }=useTranslation("about");
    return (
        <div className="skills">
            <HoveredTitle onMouseLeave={unhoverText} onMouseEnter={hoverText} title={t("skills")}/>
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