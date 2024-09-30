import PortfolioPage from "../../../core/components/portfolio-page/portfolio-page.tsx";

import "./home.scss";

import { useTranslation } from "react-i18next";

const Home = ()=>{
    const { t } = useTranslation("home");
    return (
        <PortfolioPage>
            <h1 className="home-page__title">{t("home.title")}</h1>
            <div>
                <p>{t("home.portfolio-description")}</p>
            </div>
        </PortfolioPage>
    );
};
export default Home;