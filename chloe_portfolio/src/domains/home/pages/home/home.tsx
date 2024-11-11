import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import Projects from "../../../../config/works.json";
import type { Project } from "../../../works/types/index";

import "./home.scss";

import { Header } from "../../../core";
import { AppContext } from "../../../../config/contexts/app-context.tsx";

const Home = ()=>{
    const { t }=useTranslation("home");
    const [inViewRef, inView] = useInView();
    const [displayProjectsAnimation,setDisplayProjectsAnimation]=useState(false);
    const [playMobileVideo,setPlayMobileVideo]=useState(false);
    const { hoverElement }=useContext(AppContext);

    const handleScrollToVideo=()=>{
        document.getElementById("home-showreel")?.scrollIntoView({ behavior: "smooth" });
        setTimeout(()=>{
            setDisplayProjectsAnimation(true);
        },1000);
    };

    useEffect(() => {
        const displayAnimationOnScroll = ()=>{
            const windowHeight = window.innerHeight;
            if (window.scrollY> windowHeight){
                setDisplayProjectsAnimation(true);
            }
        };

        window.addEventListener("scroll",displayAnimationOnScroll);

        return () => {
            window.removeEventListener("scroll",displayAnimationOnScroll);
        };
    }, []);

    const projectsImages : string[] = Projects.map((project:Project)=>project.carouselImage);

    const projectImagesWithCoordinates = [
        { src:projectsImages[0],x:0,y:1200 },
        { src:projectsImages[1],x:80,y:1200 },
        { src:projectsImages[2],x:190,y:1200 },
        { src:projectsImages[3],x:245,y:1200 },
        { src:projectsImages[4],x:300,y:1200 },
        { src:projectsImages[5],x:-505,y:1200 },
        { src:projectsImages[6],x:-450,y:1000 },
        { src:projectsImages[7],x:-200,y:1200 }
    ];

    return (
        <>
            <motion.video autoPlay loop muted onHoverStart={()=>hoverElement("carouselImage")}
                style={{ position:"fixed",bottom:0,right:0,width:"100%",height:"100%",objectFit:"cover" }}
            >
                <source src="/projects/GAILLARD_CHLOE_SHOWREEL_24.mp4" type="video/mp4" />
            </motion.video>
            <Header className="home-page__header"/>
        </>

    );
};
export default Home;