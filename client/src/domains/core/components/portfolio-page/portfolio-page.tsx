import {motion} from "framer-motion";

import "./portfolio-page.scss";
import { Header } from "@components/header/header";
import { Footer } from "@components/footer/footer";

interface PortfolioPageProps {
  children: React.ReactNode;
  className?: string;
}

export const PortfolioPage = ({children, className = ""}: PortfolioPageProps) => {
  return (
    <>
      <Header/>
      <div className={`portfolio-page ${className}`}>
        <motion.div className="portfolio-page__content">
          {children}
        </motion.div>
      </div>
      <Footer/>
    </>

  );
};

