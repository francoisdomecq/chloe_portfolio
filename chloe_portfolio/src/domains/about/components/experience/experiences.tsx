import { Experience as ExperienceType } from "../../types/experiences";

import "./experience.scss";

interface ExperienceProps{
experience : ExperienceType
}

const Experience = (props: ExperienceProps) => {
    const { experience } = props;
    return (
        <tbody className="experience">
            <tr className="experience__info">
                <th className="experience__title">{experience.title}</th>
                <th className="experience__company">{experience.company}</th>
                <th className="experience__dates">{experience.dates}</th>
            </tr>
            <span className="experience__separator"></span>
        </tbody>
    );
};


export default Experience;
