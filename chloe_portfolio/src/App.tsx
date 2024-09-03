import { Route, Routes } from "react-router-dom";

import { Header } from "./domains/core";
import ScrollToTop from "./domains/core/components/scroll-to-top/scroll-to-top.tsx";
import { Home } from "./domains/home";
import ProjectDetails from "./domains/works/pages/project-details/project-details.tsx";


import "./App.scss";

function App() {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works/:id" element={<ProjectDetails/>}/>
            </Routes>
        </div>
    );
}

export default App;
