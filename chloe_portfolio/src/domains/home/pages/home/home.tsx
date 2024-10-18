import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { AppContext } from "../../../../config/contexts/app-context";
import Projects from "../../../../config/works.json";
import { Footer, Header } from "../../../core";
import Icon from "../../../core/components/icon/icon";
import VideoPlayer from "../../../works/pages/project-details/components/video-player/video-player";
import type { Project } from "../../../works/types/index";

import HomeComponentDisplayer from "./components/home-component-displayer/home-component-displayer";
import HomePageTitle from "./components/home-page-title/home-page-title";

import "./home.scss";

const Home = ()=>{
    const { t }=useTranslation("home");
    const { hoverElement,unhoverElement }=useContext(AppContext);
    const [inViewRef, inView] = useInView();

    const [displayAnimatedTitle,setDisplayAnimatedTitle]=useState(true);

    const handleScrollToVideo=()=>{
        document.getElementById("home-showreel")?.scrollIntoView({ behavior: "smooth" });
        setTimeout(()=>{
            setDisplayAnimatedTitle(false);
        },1000);
    };

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
                          const xPosition = index %2===0 ? index * 50 : index * - 50;
                          const yPosition = index * - 20;
                          return (
                              <motion.div className="home-about__image"
                                  whileHover={{ zIndex: 100 }}
                                  onHoverStart={()=>hoverElement("image")}
                                  onHoverEnd={()=>unhoverElement()}
                                  initial={{ y:"100vh" }}
                                  animate={
                                      { x:xPosition ,y:yPosition, rotateY:360 }
                                  }
                                  exit={{ y:0 }}
                                  transition={{ duration : 3, delay: index * 2 }}
                              >
                                  <img className="home-about__image-class"src={src}/>
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
            <div className="home__showreel" id="home-showreel">
                <VideoPlayer source="./projects/GAILLARD_CHLOE_SHOWREEL_24.mp4" loop waitForInView/>
            </div>
        </div>

    );
};
export default Home;