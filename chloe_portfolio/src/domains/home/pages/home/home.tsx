import { useState } from "react";

import { PortfolioPage } from "../../../core";
import VideoPlayer from "../../../works/pages/project-details/components/video-player/video-player";

import "./home.scss";


const Home = ()=>{
    const [isVideoPlaying,setIsVideoPlaying] = useState(true);
    return (
        <>
            {isVideoPlaying &&
              <div className="home__showreel">
                  <VideoPlayer source="./projects/GAILLARD_CHLOE_SHOWREEL_24.mp4" loop={false} onChangeIsPlaying={setIsVideoPlaying}/>
              </div>
            }
            {!isVideoPlaying &&
              <PortfolioPage >
                  <div className="home-page">
                      <div className="home__showreel-small">
                          <VideoPlayer source="./projects/GAILLARD_CHLOE_SHOWREEL_24.mp4" loop={false}/>
                      </div>
                  </div>
              </PortfolioPage>
            }
        </>

    );
};
export default Home;