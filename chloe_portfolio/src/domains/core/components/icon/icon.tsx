import type { FunctionComponent } from "react";


import "./icon.scss";

interface IconProps {
  name?: string;
  className?: string;
}

const Icon: FunctionComponent<IconProps> = (props: IconProps) => {
    const { name, className = "" } = props;

    return (
        <div className={`icon-wrapper ${className}`}>
            <svg role="img" focusable="false" className="icon">
                <use xlinkHref={`${name}`} />
            </svg>
        </div>
    );
};

export default Icon;
