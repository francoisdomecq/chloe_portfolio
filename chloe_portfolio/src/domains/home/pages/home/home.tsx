import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { AppContext } from "../../../../config/contexts/app-context.tsx";
import HoveredTitle from "../../../core/components/hovered-title/hovered-title.tsx";
import PortfolioPage from "../../../core/components/portfolio-page/portfolio-page.tsx";
import Carousel from "../../../works/pages/projects/carousel/carousel.tsx";

import "./home.scss";

const Home = ()=>{
    const { hoverText,unhoverText }=useContext(AppContext);
    const { t } = useTranslation("home");
    return (
        <PortfolioPage>
            <HoveredTitle className="home-page__title" onMouseEnter={hoverText} onMouseLeave={unhoverText} title={t("home.title")}/>
            <div>
                <p>{t("home.portfolio-description")}</p>
            </div>
            <Carousel/>
        </PortfolioPage>
    );
};
export default Home;