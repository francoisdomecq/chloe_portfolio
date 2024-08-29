import { useTranslation } from "react-i18next";

import Navbar from "../navbar/navbar.tsx";

import "./header.scss";


const Header = () => {
    const { t } = useTranslation("core");

    const handleClickHeaderTitle = () => {
        window.scroll(0, 0);
    };

    return (
        <header className="header">
            <div onClick={handleClickHeaderTitle}>
                <h1 className="header__title" >{t("header.name")}</h1>
            </div>
            <Navbar/>
        </header>
    );
};

export default Header;