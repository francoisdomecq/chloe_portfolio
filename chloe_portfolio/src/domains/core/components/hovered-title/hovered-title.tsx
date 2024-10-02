import { useContext } from "react";

import { AppContext } from "../../../../config/contexts/app-context.tsx";

interface HoveredTitleProps {
    title: string;
    className?:string
}

const HoveredTitle = ({ title,className }:HoveredTitleProps) => {
    const { hoverText,unhoverText } = useContext(AppContext);
    return (
        <h1 className={className} onMouseEnter={hoverText} onMouseLeave={unhoverText}>{title}</h1>
    );
};

export default HoveredTitle;