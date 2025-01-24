import i18next from "../../config/i18n";
import i18nCore from "./i18n/en.json";
import VariousList from "@domains/various/pages/various-list/various-list";

i18next.addResourceBundle("en", "various", i18nCore);


export {
  VariousList
}