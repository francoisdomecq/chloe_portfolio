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
            <div className="portfolio-page__content">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default PortfolioPage;