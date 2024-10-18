import { motion } from "framer-motion";

import AnimateText from "../../../../../core/components/animate-text/animate-text";
import { calculateInAnimationDelay } from "../../../../utils";
import {
    firstAnimationDuration,
    firstTextToAnimate,
    secondAnimationDelay,
    secondTextToAnimate
} from "../../animation-config";

import "./home-page-title.scss";

const HomePageTitle = () => {
    return (
        <>
            <motion.div className="home-page-title"
                initial={{ display:"flex" }}
                animate={{ opacity:0, display:"none" }}
                transition={{ delay: firstAnimationDuration }}>
                {firstTextToAnimate.map((text,index)=> {
                    const delay = calculateInAnimationDelay(firstTextToAnimate,index);
                    return <AnimateText text={text} key={index} delay={delay}/>;
                })}
            </motion.div>
            <motion.div className="home-page-title"
                initial={{ display:"none" }}
                animate={{ display:"flex" }}
                transition={{ delay: secondAnimationDelay }}>
                {secondTextToAnimate.map((text,index)=> {
                    const delay = calculateInAnimationDelay(secondTextToAnimate, index);
                    return <AnimateText text={text} key={index} delay={delay + secondAnimationDelay}/>;
                })}
            </motion.div>
        </>
    );

};

export default HomePageTitle;