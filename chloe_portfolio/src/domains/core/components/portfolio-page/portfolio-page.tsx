import "./portfolio-page.scss";

interface PortfolioPageProps {
    children: React.ReactNode;
    className?:string;
}

const PortfolioPage = ({ children,className }:PortfolioPageProps) => {
    return (
        <div className={`portfolio-page ${className}`}>
            {children}
        </div>
    );
};

export default PortfolioPage;