import { lazy, Suspense } from "react";
import {Route, Routes} from "react-router-dom";

import {AppContextProvider} from "@config/contexts/app-context";
import { ScrollToTop } from "@domains/core/components/scroll-to-top/scroll-to-top";

import "./App.scss";

const HomePage = lazy(() =>
  import("@domains/home/pages/home-page/home-page").then(m => ({ default: m.HomePage }))
);
const Projects = lazy(() =>
  import("@domains/works/pages/projects/projects").then(m => ({ default: m.Projects }))
);
const Project = lazy(() =>
  import("@domains/works/pages/project/project").then(m => ({ default: m.Project }))
);
const News = lazy(() =>
  import("@domains/news/pages/news/news").then(m => ({ default: m.News }))
);
const About = lazy(() =>
  import("@domains/about/pages/about/about").then(m => ({ default: m.About }))
);

export function App() {
  return (
    <div>
        <AppContextProvider>
          <ScrollToTop/>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/works" element={<Projects/>}/>
              <Route path="/works/:slug" element={<Project/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/about" element={<About/>}/>
            </Routes>
          </Suspense>
        </AppContextProvider>
    </div>
  );
}

