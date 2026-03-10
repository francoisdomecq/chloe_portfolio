import {motion} from "framer-motion";



import "./portfolio-page.scss";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";

interface PortfolioPageProps {
  children: React.ReactNode;
  className?: string;
}

const PortfolioPage = ({children, className = ""}: PortfolioPageProps) => {

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