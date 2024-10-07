import { Route, Routes } from "react-router-dom";

import { Contact } from "./domains/contact";
import ScrollToTop from "./domains/core/components/scroll-to-top/scroll-to-top.tsx";
import { Home } from "./domains/home";
import ProjectDetails from "./domains/works/pages/project-details/project-details.tsx";

import "./App.scss";

import { About } from "./domains/about";
import MouseCursor from "./domains/core/components/mouse-cursor/mouse-cursor.tsx";
import { AppContextProvider } from "./config/contexts/app-context.tsx";
import { Projects } from "./domains/works";

import { AnimatePresence } from "framer-motion";

function App() {

    return (
        <div>
            <ScrollToTop/>
            <AppContextProvider>
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/works" element={<Projects/>}/>
                        <Route path="/works/:id" element={<ProjectDetails/>}/>
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
                </AnimatePresence>
                <MouseCursor/>
            </AppContextProvider>

        </div>
    );
}

export default App;
