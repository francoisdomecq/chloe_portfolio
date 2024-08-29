import i18next from "../../config/i18n";

import i18nCore from "./i18n/en.json";
import About from "./pages/about/about.tsx";
i18next.addResourceBundle("en", "about", i18nCore);

export {
    About
};
