import {PortfolioPage} from "../../../core";

import {useTranslation} from "react-i18next";
import NavigationHistory from "../../../core/components/navigation-history/navigation-history";
import './explorations.scss'
import {useContext, useState} from "react";
import ExplorationDrawer from "./components/exploration-drawer/exploration-drawer";
import {Exploration} from "../../types";
import explorations from "../../../../config/explorations.json";
import {AppContext} from "../../../../config/contexts/app-context";

const Explorations = () => {
  const {t} = useTranslation("explorations")
  const {hoverElement} = useContext(AppContext);
  const [selectedExploration, setSelectedExploration] = useState<Exploration | undefined>(undefined);
  const routerHistory = [{route: "/", label: "Home"}, {route: "/explorations", label: "Explorations"}];

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
        <div className="explorations__grid">
          {explorations.map((exploration: Exploration) => (
            <img onMouseEnter={() => hoverElement("carouselImage")} src={exploration.src} key={exploration.id}
                 width="100%"
                 onClick={() => setSelectedExploration(exploration)}/>
          ))}
        </div>
        <ExplorationDrawer exploration={selectedExploration} onCloseProject={() => setSelectedExploration(undefined)}/>
      </div>

    </PortfolioPage>
  )
}

export default Explorations