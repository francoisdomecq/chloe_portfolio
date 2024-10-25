import { useNavigate } from "react-router-dom";

import "./navigation-history.scss";

interface NavigationHistoryProps {
  history: {route:string, label:string}[];
  className?:string;
}

const NavigationHistory = ({ history, className }:NavigationHistoryProps) => {
    const navigate = useNavigate();
    const navigateTo = (route:string) => {
        navigate(route);
    };

    const renderRoute = (route:{route:string, label:string},index:number) => {
        const isActive = index === history.length - 1;

        return (
            <li key={route.route} className="navigation-history__item">
                <p onClick={()=>navigateTo(route.route)}> {route.label}</p>
                <p>{isActive ? "" :"/"}</p>
            </li>
        );
    };

    return (
        <div className={`navigation-history ${className}`}>
            <ul className="navigation-history__list">
                {history.map(renderRoute)}
            </ul>
        </div>
    );
};

export default NavigationHistory;