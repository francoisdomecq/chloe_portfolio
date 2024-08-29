import "./home-page.scss";

import { NavTabs } from "../../../core/types";

const HomePage = () => {
    return (
        <section id={NavTabs.HOME} className="home-page">
            <div className="container">
                <div className="home-content">
                    <div className="text">
                        <h1>Chloe</h1>
                        <h2>Frontend Developer</h2>
                        <p>
              I am a frontend developer with a passion for creating beautiful
              and user-friendly web applications.
                        </p>
                        <a href="#about" className="btn">
              About Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
