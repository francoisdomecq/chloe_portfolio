import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import Projects from "../../../../config/works.json";
import { Footer, Header, PortfolioPage } from "../../../core";
import Icon from "../../../core/components/icon/icon";
import VideoPlayer from "../../../works/pages/project-details/components/video-player/video-player";
import type { Project } from "../../../works/types/index";

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

    const projectImagesWithCoordinates = [
        { src:projectsImages[0],x:-450,y:1235 },
        { src:projectsImages[1],x:-300,y:1800 },
        { src:projectsImages[2],x:-350,y:1000 },
        { src:projectsImages[3],x:0,y:1000 },
        { src:projectsImages[4],x:-320,y:1400 },
        { src:projectsImages[5],x:700,y:1200 },
        { src:projectsImages[6],x:800,y:1200 },
        { src:projectsImages[7],x:50,y:1200 }
    ];
    return (
        <div className="home-page">
            <div className="home-page__animation">
                <h1>Hi there</h1>
                <section>
                    <HomePageTitle baseVelocity={5}>I'M CHLOE GAILLARD </HomePageTitle>
                    <HomePageTitle baseVelocity={-5}>A GRAPHIC DESIGNER</HomePageTitle>
                    {inView && projectImagesWithCoordinates.map((imageWithCoordinates,index)=>{
                        return (
                            <motion.div className="home-about__image"
                                key={imageWithCoordinates.src}
                                initial={{ x:imageWithCoordinates.x, y: imageWithCoordinates.y }}
                                animate={{ x:imageWithCoordinates.x,y: -2000 }}
                                transition={{ duration:8 + index *1 , delay: 0.2 * (index - 1), repeat: Infinity, repeatType: "loop" }}
                            >
                                <img className="home-about__image-class" src={imageWithCoordinates.src} alt={`home-page-${imageWithCoordinates.src}`}/>
                            </motion.div>
                        );
                    })}
                </section>
                <Header/>
                <div className="home-page__footer">
                    <Footer/>
                </div>
                <div className="scroll-button" onClick={handleScrollToVideo}>
                    <p className="scroll-button__text">{t("home.scroll-to-video")}</p>
                    <Icon name="arrow-right.svg#arrow-right" className="scroll-button__icon" />
                </div>
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