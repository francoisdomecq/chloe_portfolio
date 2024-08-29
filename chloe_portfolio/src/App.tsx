import { Route, Routes } from "react-router-dom";

import { Header } from "./domains/core";
import { Home } from "./domains/home";
import ProjectDetails from "./domains/works/pages/project-details/project-details.tsx";

import "./App.scss";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works/:id" element={<ProjectDetails/>}/>
            </Routes>
        </div>
    );
}

export default App;
