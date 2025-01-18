import {PortfolioPage} from "../../../core";

import {useTranslation} from "react-i18next";
import NavigationHistory from "../../../core/components/navigation-history/navigation-history";
import './explorations.scss'

const Explorations = () => {
  const {t} = useTranslation("explorations")

  const routerHistory = [{route: "/", label: "Home"}, {route: "/", label: "Explorations"}];

  return (
    <PortfolioPage>
      <div className="explorations">
        <NavigationHistory history={routerHistory}/>
        <div className="explorations__titles">
          <h1 className="explorations__title">{t("title")}</h1>
          <div className="explorations__subtitle">
            <h2 className="explorations__subtitle-text">{t("skills.sketch")}</h2>
            <h2 className="explorations__subtitle-text">{t("skills.experiments")}</h2>
          </div>
        </div>
        <div>
          <h2 className="explorations__description-title">{t("description.title")}</h2>
          <p className="explorations__description-content">{t("description.content")}</p>
        </div>
      </div>

    </PortfolioPage>
  )
}

export default Explorations