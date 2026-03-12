import {Route, Routes} from "react-router-dom";

import {AppContextProvider} from "@config/contexts/app-context";
import ScrollToTop from "./domains/old/core/components/scroll-to-top/scroll-to-top";

import "./App.scss";
import {HomePage} from "./domains/home/pages/home-page/home-page";
import Project from "@domains/works/pages/project/project";
import Projects from "@domains/works/pages/projects/projects";
import News from "@domains/news/pages/news/news";
import About from "@domains/about/pages/about/about";
import {PageTransitionProvider} from "@domains/core/components/page-transition/page-transition-context";
import PageTransitionOverlay from "@domains/core/components/page-transition/page-transition-overlay";

function App() {

  return (
    <div>
      <ScrollToTop/>
      <PageTransitionProvider>
        <AppContextProvider>
          <PageTransitionOverlay/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/works" element={<Projects/>}/>
            <Route path="/works/:id" element={<Project/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </AppContextProvider>
      </PageTransitionProvider>

    </div>
  );
}

export default App;
