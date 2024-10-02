import { useTranslation } from "react-i18next";


import HoveredTitle from "../../../core/components/hovered-title/hovered-title.tsx";
import Experience from "../experience/experiences.tsx";

import { experiences } from "./experiences.config.ts";


import "./experiences.scss";

const Experiences = ()=>{
    const { t }=useTranslation("about");
    return (
        <div className="experiences">
            <HoveredTitle title={t("experiences")}/>
            <table className="experiences__list">
                {experiences.map((experience, index) => <Experience experience={experience} key={index}/>)}
            </table>
        </div>
    );
};

export default Experiences;