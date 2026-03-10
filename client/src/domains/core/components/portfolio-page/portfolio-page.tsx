import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";

import "./portfolio-page.scss";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";

interface PortfolioPageProps {
  children: React.ReactNode;
  className?: string;
}

const PortfolioPage = ({children, className = ""}: PortfolioPageProps) => {
  const footerRef = useRef<HTMLElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {threshold: 0.1}
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header isHidden={isFooterVisible}/>
      <div className={`portfolio-page ${className}`}>
        <motion.div className="portfolio-page__content">
          {children}
        </motion.div>
      </div>
      <Footer ref={footerRef}/>
    </>

  );
};

export default PortfolioPage;