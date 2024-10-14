import { motion } from "framer-motion";

import { Footer, Header } from "../../../core";
import AnimateText from "../../../core/components/animate-text/animate-text.tsx";
import VideoPlayer from "../../../works/pages/project-details/components/video-player/video-player";


import "./home.scss";


const Home = ()=>{
    const firstTextToAnimate = ["HI", "THERE"];
    const secondTextToAnimate = ["I'm", "Chloé","Gaillard"];

    const firstAnimationDuration = (firstTextToAnimate.join("").length -1) * 0.25;
    const secondAnimationDuration = (secondTextToAnimate.join("").length -1) * 0.25;
    const secondAnimationDelay = firstAnimationDuration + 0.3;

    const calculateInAnimationDelay = (textToAnimate:string[],index:number) => {
        if (index === 0) {
            return 0;
        }
        return textToAnimate[index-1].length * 0.15;
    };

    const handleScrollToVideo=()=>{
        document.getElementById("home-showreel")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="home-page">
            <div className="home-page__animation">
                <motion.div className="home-page__animation-text"
                    initial={{ display:"flex" }}
                    animate={{ opacity:0, display:"none" }}
                    transition={{ delay: firstAnimationDuration }}>
                    {firstTextToAnimate.map((text,index)=> {
                        const delay = calculateInAnimationDelay(firstTextToAnimate,index);
                        return <AnimateText text={text} key={index} delay={delay}/>;
                    })}
                </motion.div>
                <motion.div className="home-page__animation-text"
                    initial={{ display:"none" }}
                    animate={{ display:"flex" }}
                    transition={{ delay: secondAnimationDelay }}>
                    {secondTextToAnimate.map((text,index)=> {
                        const delay = calculateInAnimationDelay(secondTextToAnimate, index);
                        return <AnimateText text={text} key={index} delay={delay + secondAnimationDelay}/>;
                    })}
                </motion.div>
                <motion.div initial={{ display:"none", opacity:0 }}
                    animate={{ display:"flex" ,opacity:1 }}
                    transition={{ delay: firstAnimationDuration + secondAnimationDuration / 2 }}>
                    <Header/>
                </motion.div>
                <motion.div
                    style={{ position:"absolute",bottom:0,left:0,width:"100%" }}
                    initial={{ display:"none", opacity:0 }}
                    animate={{ display:"flex" ,opacity:1 }}
                    transition={{ delay: firstAnimationDuration + secondAnimationDuration/2 }}>
                    <Footer/>
                </motion.div>
                <motion.div initial={{ opacity:"0" }} animate={{ "opacity":1 }}
                    transition={{ delay: firstAnimationDuration+secondAnimationDuration/2 }}
                    className="scroll-button" onClick={handleScrollToVideo}
                >
                    <p className="scroll-button__text">Scroll to video</p>
                    <img className="scroll-button__icon" src="./arrow-right.svg" alt="scroll-down-icon"/>
                </motion.div>
            </div>
            <div className="home__showreel" id="home-showreel">
                <VideoPlayer source="./projects/GAILLARD_CHLOE_SHOWREEL_24.mp4" loop waitForInView/>
            </div>
        </div>

    );
};
export default Home;