import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { AppContext } from "../../../../config/contexts/app-context";
import { Header } from "../../../core";


import "./home.scss";


const Home = ()=>{
    const { hoverElement,unhoverElement }=useContext(AppContext);
    const navigate =useNavigate();

    return (
        <>
            <motion.video autoPlay loop muted onHoverStart={ () =>hoverElement("carouselImage")}
                onClick={()=>{
                    navigate("/works");
                    unhoverElement();
                }}
                style={{ position:"fixed",bottom:0,right:0,width:"100%",height:"100%",objectFit:"cover" }}
            >
                <source src="/projects/GAILLARD_CHLOE_SHOWREEL_24.mp4" type="video/mp4" />
            </motion.video>
            <Header className="home-page__header"/>
        </>

    );
};
export default Home;