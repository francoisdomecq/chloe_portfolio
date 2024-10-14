import { useTranslation } from "react-i18next";

import { PortfolioPage } from "../../../core";
import VideoPlayer from "../../../works/pages/project-details/components/video-player/video-player";


import "./home.scss";


const Home = ()=>{
    const { t }=useTranslation("home");
    return (
        <PortfolioPage >
            <div className="home-page">
                <h1 className="home-page__title">{t("home.title")}</h1>
                <div className="home__showreel">
                    <VideoPlayer source="./projects/GAILLARD_CHLOE_SHOWREEL_24.mp4" loop/>
                </div>
            </div>
        </PortfolioPage>

    );
};
export default Home;