import { Experience as ExperienceType } from "../../types/experiences";

import "./experience.scss";

interface ExperienceProps{
experience : ExperienceType
}

const Experience = (props: ExperienceProps) => {
    const { experience } = props;
    return (
        <>
            <tr className="experience__info">
                <th className="experience__content">{experience.title}</th>
                <th className="experience__content company__tablet">{experience.company}</th>
                <th className="experience__content">{experience.dates}</th>
                <i className="experience__content company__mobile">{experience.company}</i>
            </tr>
            <tr className="experience__separator"></tr>
        </>

    );
};


export default Experience;
