import i18next from "../../config/i18n";

import i18nCore from "./i18n/en.json";
import Home from "./pages/home/home";

i18next.addResourceBundle("en", "home", i18nCore);

export {
    Home
};
