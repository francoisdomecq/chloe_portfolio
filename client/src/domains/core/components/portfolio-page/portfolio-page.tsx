import {motion} from "framer-motion";

import {Footer, Header} from "../../index";


import "./portfolio-page.scss";
import {useContext} from "react";
import {AppContext} from "../../../../config/contexts/app-context";

interface PortfolioPageProps {
  children: React.ReactNode;
  className?: string;
}

const PortfolioPage = ({children, className = ""}: PortfolioPageProps) => {
  const {theme} = useContext(AppContext)
  return (
    <div className={`portfolio-page portfolio-page__${theme} ${className}`}>
      <Header/>
      <motion.div className="portfolio-page__content">
        {children}
      </motion.div>
      <Footer/>
    </div>
  );
};

export default PortfolioPage;