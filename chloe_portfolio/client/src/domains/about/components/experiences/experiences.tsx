import {useTranslation} from "react-i18next";

import Experience from "../experience/experiences";

import {experiences} from "./experiences.config";

import "./experiences.scss";

const Experiences = () => {
  const {t} = useTranslation("about");
  return (
    <div className="experiences">
      <h1 className="experiences__title">{t("experiences")}</h1>
      <table className="experiences__list">
        {experiences.map((experience, index) => <Experience experience={experience} key={index}/>)}
      </table>
    </div>
  );
};

export default Experiences;