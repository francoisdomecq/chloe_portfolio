import { useTranslation } from "react-i18next";

import { NAV_TABS } from "./navbar.config.ts";

import "./navbar.scss";

const Navbar = () => {
    const { t } = useTranslation("core");
    return (
        <nav className="navbar">
            <ul className="navbar__nav-items">
                {NAV_TABS.map(tab =>
                    <li key={tab.key}>
                        <a className="navbar__nav-item" href={`#${tab.tagId}`}>{t(`navbar.tabs.${tab.key}`)}</a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;