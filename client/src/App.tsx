import {Route, Routes} from "react-router-dom";

import {AppContextProvider} from "@config/contexts/app-context";
import ScrollToTop from "./domains/old/core/components/scroll-to-top/scroll-to-top";

import "./App.scss";
import {HomePage} from "./domains/home/pages/home-page/home-page";
import Project from "@domains/works/pages/project/project";

function App() {

  return (
    <div>
      <ScrollToTop/>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/works/:id" element={<Project/>}/>
        </Routes>
      </AppContextProvider>

    </div>
  );
}

export default App;
