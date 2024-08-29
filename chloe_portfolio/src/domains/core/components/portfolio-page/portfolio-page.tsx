import "./portfolio-page.scss";

interface PortfolioPageProps {
    children: React.ReactNode;
}

const PortfolioPage = ({ children }:PortfolioPageProps) => {
    return (
        <div className="portfolio-page">
            {children}
        </div>
    );
};

export default PortfolioPage;