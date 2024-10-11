import i18next from "../../config/i18n";

import i18nCore from "./i18n/en.json";
import Contact from "./pages/contact/contact";

i18next.addResourceBundle("en", "contact", i18nCore);

export {
    Contact
};
