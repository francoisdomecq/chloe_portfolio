import { useTranslation } from "react-i18next";

import { NavTabs } from "../../../core/types";

import "./home-page.scss";

const HomePage = () => {
    const { t }=useTranslation("home");

    return (
        <section id={NavTabs.HOME} className="home-page">
            <h1 className="home-page__title">{t("home.title")}</h1>
            <div>
                <p>{t("home.portfolio-description")}</p>
            </div>
        </section>
    );
};

export default HomePage;
