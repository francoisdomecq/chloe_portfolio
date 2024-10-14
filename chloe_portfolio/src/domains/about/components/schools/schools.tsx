import { useTranslation } from "react-i18next";

import HoveredTitle from "../../../core/components/hovered-title/hovered-title";
import Experience from "../experience/experiences";

import { schools } from "./schools.config";


import "./schools.scss";

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