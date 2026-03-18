import {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";

import {createRoot} from "react-dom/client";

import { App } from "./App";
import "./index.css";
import "@config/i18n/index"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>
);
