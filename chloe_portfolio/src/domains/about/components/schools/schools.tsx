import { useTranslation } from "react-i18next";


import Experience from "../experience/experiences.tsx";

import { schools } from "./schools.config.ts";

import "./schools.scss";

import HoveredTitle from "../../../core/components/hovered-title/hovered-title.tsx";


const Schools = ()=>{
    const { t }=useTranslation("about");
    return (
        <div className="schools">
            <HoveredTitle title= {t("school")}/>
            <table className="schools_list">
                {schools.map((school, index) => <Experience experience={school} key={index}/>)}
            </table>
        </div>
    );
};

export default Schools;