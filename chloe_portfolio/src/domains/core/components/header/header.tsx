import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Navbar from "../navbar/navbar.tsx";

import "./header.scss";


const Header = () => {
    const navigate = useNavigate();
    const { t } = useTranslation("core");

    const handleClickHeaderTitle = () => {
        navigate("/");
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