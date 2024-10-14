import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Footer, Header } from "../../../core";
import VideoPlayer from "../../../works/pages/project-details/components/video-player/video-player";

import HomeComponentDisplayer from "./components/home-component-displayer/home-component-displayer";
import HomePageTitle from "./components/home-page-title/home-page-title";


import "./home.scss";

const Home = ()=>{
    const { t }=useTranslation("home");
    const [display,setDisplay]=useState(false);

    const handleScrollToVideo=()=>{
        document.getElementById("home-showreel")?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const onScroll = ()=>setDisplay(true);
        document.addEventListener("onscroll",onScroll);
        return ()=> {
            document.removeEventListener("onscroll",onScroll);
        };
    }, []);

    console.log(display);

    return (
        <div className="home-page">
            <div className="home-page__animation">
                {
                    !display &&
                  <>
                      <HomePageTitle/>
                      <HomeComponentDisplayer>
                          <Header/>
                      </HomeComponentDisplayer>
                      <HomeComponentDisplayer className="home-page__footer">
                          <Footer/>
                      </HomeComponentDisplayer>
                      <HomeComponentDisplayer  >
                          <div className="scroll-button" onClick={handleScrollToVideo}>
                              <p className="scroll-button__text">{t("home.scroll-to-video")}</p>
                              <img className="scroll-button__icon" src="/arrow-right.svg" alt="scroll-down-icon"/>
                          </div>
                      </HomeComponentDisplayer>
                  </>
                }
            </div>
            <div className="home__showreel" id="home-showreel">
                <VideoPlayer source="./projects/GAILLARD_CHLOE_SHOWREEL_24.mp4" loop waitForInView/>
            </div>
        </div>

    );
};
export default Home;