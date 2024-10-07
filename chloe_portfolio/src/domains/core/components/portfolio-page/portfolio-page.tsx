import { motion } from "framer-motion";

import { Footer, Header } from "../../index.ts";


import "./portfolio-page.scss";

interface PortfolioPageProps {
    children: React.ReactNode;
    className?:string;
}

const PortfolioPage = ({ children,className="" }:PortfolioPageProps) => {

    return (
        <div className={`portfolio-page ${className}`}>
            <Header/>
            <motion.div className="portfolio-page__content">
                {children}
            </motion.div>
            <Footer/>
            <motion.div className="slide-in"
                initial={{ scaleX:0 }}
                animate={{ scaleX:0 }}
                exit={{ scaleX:1 }}
                transition={{ duration:2,ease :[0.22,1,0.36,1] }}>
            </motion.div>
            <motion.div className="slide-out"
                initial={{ scaleX:1 }}
                animate={{ scaleX:0 }}
                exit={{ scaleX:0 }}
                transition={{ duration:1,ease :[0.22,1,3,2] }}>
            </motion.div>
        </div>
    );
};

export default PortfolioPage;