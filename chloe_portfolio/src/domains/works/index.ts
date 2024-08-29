import i18next from "../../config/i18n";

import i18nCore from "./i18n/en.json";
import Works from "./pages/works/works.tsx";
i18next.addResourceBundle("en", "works", i18nCore);

export {
    Works
};
