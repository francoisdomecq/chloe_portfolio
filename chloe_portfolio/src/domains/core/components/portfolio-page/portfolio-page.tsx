import { motion } from "framer-motion";

import { Footer, Header } from "../../index";


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
        </div>
    );
};

export default PortfolioPage;