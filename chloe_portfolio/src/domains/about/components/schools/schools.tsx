import { useTranslation } from "react-i18next";


import Experience from "../experience/experiences.tsx";

import { schools } from "./schools.config.ts";

import "./schools.scss";


const Schools = ()=>{
    const { t }=useTranslation("about");
    return (
        <div className="schools">
            <h1>{t("school")}</h1>
            <table className="schools_list">
                {schools.map((school, index) => <Experience experience={school} key={index}/>)}
            </table>
        </div>
    );
};

export default Schools;