import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import HoveredTitle from "../../../core/components/hovered-title/hovered-title";
import Experience from "../experience/experiences";

import { schools } from "./schools.config";


import "./schools.scss";

const Schools = ()=>{
    const { t }=useTranslation("about");
    return (
        <motion.div className="schools" initial={{ opacity:0 ,y:20 }} whileInView={{ opacity: 1 ,y:0 }} viewport={{ once: true ,amount: 1 }}>
            <HoveredTitle title= {t("school")}/>
            <table className="schools_list">
                {schools.map((school, index) => <Experience experience={school} key={index}/>)}
            </table>
        </motion.div>
    );
};

export default Schools;