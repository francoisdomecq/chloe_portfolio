import {Experience as ExperienceType} from "../../types/experiences";

import "./experience.scss";
import {useContext} from "react";
import {AppContext} from "../../../../config/contexts/app-context";

interface ExperienceProps {
  experience: ExperienceType
}

const Experience = (props: ExperienceProps) => {
  const {experience} = props;
  const {theme} = useContext(AppContext)
  return (
    <>
      <tr className="experience__info">
        <th className="experience__content">{experience.title}</th>
        <th className="experience__content company__tablet">{experience.company}</th>
        <th className="experience__content">{experience.dates}</th>
        <i className="experience__content company__mobile">{experience.company}</i>
      </tr>
      <tr className={`experience__separator experience__separator__${theme}`}></tr>
    </>

  );
};


export default Experience;
