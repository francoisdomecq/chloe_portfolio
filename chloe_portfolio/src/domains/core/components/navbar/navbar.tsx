import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { NAV_TABS } from "./navbar.config.ts";

import "./navbar.scss";


const Navbar = () => {
    const navigate = useNavigate();

    const { t } = useTranslation("core");

    const handleClickHeaderTitle = (tagId:string) => {
        navigate(`/${tagId}`);
    };
    return (
        <nav className="navbar">
            <ul className="navbar__nav-items">
                {NAV_TABS.map(tab =>
                    <li key={tab.key} onClick={()=>handleClickHeaderTitle(tab.tagId)}>
                        <span className="navbar__nav-item">{t(`navbar.tabs.${tab.key}`)}</span>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;