import {initReactI18next} from "react-i18next";

import i18n from "i18next";

import coreTranslation from './core.json'
import homeTranslation from './home.json'
import worksTranslation from './works.json'
import aboutTranslation from './about.json'


// i18next t method can return a null value, needs to be prevented.
declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n.use(initReactI18next)
  .init({
    resources: {
      en: {
        core:coreTranslation ,
        home:homeTranslation,
        works:worksTranslation,
        about: aboutTranslation
      },
    },
    returnNull: false,
    lng: "en",
    fallbackLng:"en",
    ns: ["core"],
    interpolation: {
      escapeValue: false
    },
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "ul", "li", "p", "s", "u"]
    }
  });

export default i18n;