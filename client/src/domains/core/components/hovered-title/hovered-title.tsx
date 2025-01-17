import {useContext} from "react";

import {AppContext} from "../../../../config/contexts/app-context";

import "./hovered-title.scss";

interface HoveredTitleProps {
  title: string;
  className?: string
}

const HoveredTitle = ({title, className}: HoveredTitleProps) => {
  const {hoverElement, unhoverElement} = useContext(AppContext);
  return (
    <h1 className={`${className} hovered-title`} onMouseEnter={() => hoverElement("text")}
        onMouseLeave={unhoverElement}>{title}</h1>
  );
};

export default HoveredTitle;