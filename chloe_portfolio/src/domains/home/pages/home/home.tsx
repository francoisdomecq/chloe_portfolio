import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import Projects from "../../../../config/works.json";
import { Footer, Header, PortfolioPage } from "../../../core";
import Icon from "../../../core/components/icon/icon";
import VideoPlayer from "../../../works/pages/project-details/components/video-player/video-player";
import type { Project } from "../../../works/types/index";

import HomeComponentDisplayer from "./components/home-component-displayer/home-component-displayer";
import HomePageTitle from "./components/home-page-title/home-page-title";

import "./home.scss";

const Home = ()=>{
    const { t }=useTranslation("home");
    const [inViewRef, inView] = useInView();

    const [displayAnimatedTitle,setDisplayAnimatedTitle]=useState(true);
    const [playMobileVideo,setPlayMobileVideo]=useState(false);

    const handleScrollToVideo=()=>{
        document.getElementById("home-showreel")?.scrollIntoView({ behavior: "smooth" });
        setTimeout(()=>{
            setDisplayAnimatedTitle(false);
        },1000);
    };

    useEffect(() => {
        const displayAnimationOnScroll = ()=>{
            const windowHeight = window.innerHeight;
            if (window.scrollY> windowHeight){
                setDisplayAnimatedTitle(false);
            }
        };

        window.addEventListener("scroll",displayAnimationOnScroll);

        return () => {
            window.removeEventListener("scroll",displayAnimationOnScroll);
        };
    }, []);

    const projectsImages : string[] = Projects.map((project:Project)=>project.carouselImage);

    return (
        <div className="home-page">
            <div className="home-page__animation">
                {displayAnimatedTitle && <HomePageTitle/>}
                {!displayAnimatedTitle &&
                  <div className="home-page__about" ref={inViewRef}>
                      <h2 className="home-page__welcome">{t("home.welcome")}</h2>
                      <h2 className="home-page__about-me">{t("home.brief-about")}</h2>
                      {inView && projectsImages.map((src,index)=>{
                          const rotateDirection = index % 2 === 0 ? 1 : -1;
                          return (
                              <motion.div className="home-about__image"
                                  key={src}
                                  initial={{ x:-1000 - index * 150, y: rotateDirection * 2,rotateZ: rotateDirection * 2 * index  }}
                                  animate={{ x:1200,zIndex: index * 2 }}
                                  transition={{ duration:10 , delay: 0.2 * (index - 1), repeat: Infinity, repeatType: "loop" }}
                              >
                                  <img className="home-about__image-class" src={src} alt={`home-page-${src}`}/>
                              </motion.div>
                          );
                      })}
                  </div>
                }
                <HomeComponentDisplayer>
                    <Header/>
                </HomeComponentDisplayer>
                <HomeComponentDisplayer className="home-page__footer">
                    <Footer/>
                </HomeComponentDisplayer>
                <HomeComponentDisplayer  >
                    <div className="scroll-button" onClick={handleScrollToVideo}>
                        <p className="scroll-button__text">{t("home.scroll-to-video")}</p>
                        <Icon name="arrow-right.svg#arrow-right" className="scroll-button__icon" />
                    </div>
                </HomeComponentDisplayer>
            </div>
            <PortfolioPage className="home-page-mobile">
                <div className="home-page-mobile__content">
                    <p className="home-page-mobile__welcome">{t("home.welcome-mobile")}</p>
                    <h1 className="home-page-mobile__title">{t("home.title-mobile")}</h1>
                    <h2 className="home-page-mobile__about-me">{t("home.brief-about-mobile")}</h2>
                    {playMobileVideo &&
                      <div className="home-page-mobile__showreel">
                          <VideoPlayer onChangeIsPlaying={setPlayMobileVideo} source="./projects/GAILLARD_CHLOE_SHOWREEL_24.mp4" loop waitForInView/>
                      </div>
                    }
                    {!playMobileVideo &&
                      <div  className="home-page-mobile__display-video" onClick={()=>setPlayMobileVideo(true)}>
                          {t("home.see-video")}
                      </div>}

                </div>
            </PortfolioPage>
            <div className="home__showreel" id="home-showreel">
                <VideoPlayer source="./projects/GAILLARD_CHLOE_SHOWREEL_24.mp4" loop waitForInView/>
            </div>
        </div>

    );
};
export default Home;