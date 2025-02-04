import {Route, Routes} from "react-router-dom";

import {AppContextProvider} from "./config/contexts/app-context";
import {About} from "./domains/about";
import {Contact} from "./domains/contact";
import MouseCursor from "./domains/core/components/mouse-cursor/mouse-cursor";
import ScrollToTop from "./domains/core/components/scroll-to-top/scroll-to-top";
import {Home} from "./domains/home";
import {Projects} from "./domains/projects";

import ProjectDetails from "./domains/projects/pages/project-details/project-details";

import "./App.scss";

function App() {

  return (
    <div>
      <ScrollToTop/>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/works" element={<Projects/>}/>
          <Route path="/works/:id" element={<ProjectDetails/>}/>
          {/**<Route path="/various" element={<Various/>}/>**/}
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <MouseCursor/>
      </AppContextProvider>

    </div>
  );
}

export default App;
