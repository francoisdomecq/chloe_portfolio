import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {AppContext} from "@config/contexts/app-context";


import "./home.scss";
import PortfolioPage from "../../../core/components/portfolio-page/portfolio-page";


const Home = () => {
  const {hoverElement, unhoverElement} = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <PortfolioPage>
      <div></div>
    </PortfolioPage>

  );
};
export default Home;