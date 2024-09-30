import i18next from "../../config/i18n";

import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import PortfolioPage from "./components/portfolio-page/portfolio-page.tsx";
import i18nCore from "./i18n/en.json";

i18next.addResourceBundle("en", "core", i18nCore);

export {
    Header,
    Footer,
    PortfolioPage
};
