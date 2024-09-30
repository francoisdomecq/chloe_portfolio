import { Route, Routes } from "react-router-dom";

import { Header } from "./domains/core";
import ScrollToTop from "./domains/core/components/scroll-to-top/scroll-to-top.tsx";
import { Home } from "./domains/home";
import ProjectDetails from "./domains/works/pages/project-details/project-details.tsx";


import "./App.scss";

import { About } from "./domains/about";
import { Contact } from "./domains/contact";
import Footer from "./domains/core/components/footer/footer.tsx";

function App() {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works/:id" element={<ProjectDetails/>}/>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
