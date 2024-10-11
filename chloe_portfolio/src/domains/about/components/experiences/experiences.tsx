import { useTranslation } from "react-i18next";

import HoveredTitle from "../../../core/components/hovered-title/hovered-title";
import Experience from "../experience/experiences";

import { experiences } from "./experiences.config";

import "./experiences.scss";

const Experiences = ()=>{
    const { t }=useTranslation("about");
    return (
        <div className="experiences" >
            <HoveredTitle className="experiences__title" title={t("experiences")}/>
            <table className="experiences__list">
                {experiences.map((experience, index) => <Experience experience={experience} key={index}/>)}
            </table>
        </div>
    );
};

export default Experiences;