import { useTranslation } from "react-i18next";


import { motion } from "framer-motion";

import HoveredTitle from "../../../core/components/hovered-title/hovered-title.tsx";
import Experience from "../experience/experiences.tsx";

import { experiences } from "./experiences.config.ts";

import "./experiences.scss";

const Experiences = ()=>{
    const { t }=useTranslation("about");
    return (
        <motion.div className="experiences" initial={{ opacity:0 ,y:20 }} whileInView={{ opacity: 1 ,y:0 }} viewport={{ once: true ,amount: 1 }}>
            <HoveredTitle className="experiences__title" title={t("experiences")}/>
            <table className="experiences__list">
                <tbody className="experiences__list-body">
                    {experiences.map((experience, index) => <Experience experience={experience} key={index}/>)}
                </tbody>
            </table>
        </motion.div>
    );
};

export default Experiences;