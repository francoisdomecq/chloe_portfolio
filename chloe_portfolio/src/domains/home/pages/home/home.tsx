import { About } from "../../../about";
import { Contact } from "../../../contact";
import PortfolioPage from "../../../core/components/portfolio-page/portfolio-page.tsx";
import { Works } from "../../../works";
import HomePage from "../home-page/home-page.tsx";

const Home = ()=>{
    return (
        <PortfolioPage>
            <HomePage/>
            <Works/>
            <About/>
            <Contact/>
        </PortfolioPage>
    );
};
export default Home;