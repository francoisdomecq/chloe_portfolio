import { useTranslation } from "react-i18next";

import "./experiences.scss";

import { experiences } from "./experiences.config.ts";

import Experience from "../experience/experiences.tsx";

const Experiences = ()=>{
    const { t }=useTranslation("about");
    return (
        <div className="experiences">
            <h1>{t("experiences")}</h1>
            <table className="experiences__list">
                {experiences.map((experience, index) => <Experience experience={experience} key={index}/>)}
            </table>
        </div>
    );
};

export default Experiences;