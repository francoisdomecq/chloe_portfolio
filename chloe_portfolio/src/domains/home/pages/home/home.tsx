import { About } from "../../../about";
import { Contact } from "../../../contact";
import PortfolioPage from "../../../core/components/portfolio-page/portfolio-page.tsx";
import { Projects } from "../../../works";
import HomePage from "../home-page/home-page.tsx";

import "./home.scss";

const Home = ()=>{
    return (
        <PortfolioPage>
            <HomePage/>
            <Projects/>
            <About/>
            <Contact/>
        </PortfolioPage>
    );
};
export default Home;