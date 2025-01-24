import {PortfolioPage} from "@core/index";

import {useTranslation} from "react-i18next";
import NavigationHistory from "@core/components/navigation-history/navigation-history";
import './various-list.scss'
import {useEffect, useState} from "react";
import VariousDrawer from "@domains/various/components/various-drawer/various-drawer";
import {Various as VariousType} from "../../types";
import various from "@config/various.json";
import VariousImage from "@domains/various/components/various-image/various-image";

const VariousList = () => {
  const {t} = useTranslation("various")
  const [selectedExploration, setSelectedExploration] = useState<VariousType | undefined>(undefined);
  const routerHistory = [{route: "/", label: "Home"}, {route: "/various", label: "VariousList"}];

  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (selectedExploration) {
        const displayNextProjectKeys = ["ArrowRight", "Tab", "Enter"]
        if (displayNextProjectKeys.includes(e.key)) {
          const nextExplorationIndex = (various.indexOf(selectedExploration) + 1) % various.length
          setSelectedExploration(various[nextExplorationIndex])
        } else if (e.key === "ArrowLeft") {
          const previousExplorationIndex = (various.indexOf(selectedExploration) - 1 + various.length) % various.length
          setSelectedExploration(various[previousExplorationIndex])
        }
      }
    }

    window.addEventListener("keydown", handleArrowKeys)

    return () => window.removeEventListener("keydown", handleArrowKeys)

  }, [selectedExploration])

  return (
    <PortfolioPage>
      <div className={`various ${selectedExploration ? "various__drawer-active" : ""}`}>
        <NavigationHistory history={routerHistory}/>
        <div className="various__titles">
          <h1 className="various__title">{t("title")}</h1>
          <div className="various__subtitle">
            <h2 className="various__subtitle-text">{t("skills.sketch")}</h2>
            <h2 className="various__subtitle-text">{t("skills.experiments")}</h2>
          </div>
        </div>
        <div className="various__description">
          <h2 className="various__description-title">{t("description.title")}</h2>
          <p className="various__description-content">{t("description.content")}</p>
        </div>
        <div className="various__grid">
          {various.map((various: VariousType, index) => (
            <VariousImage various={various} onSelectVarious={setSelectedExploration}
                          selectedVarious={selectedExploration}/>
          ))}
        </div>
      </div>
      <VariousDrawer various={selectedExploration} onCloseProject={() => setSelectedExploration(undefined)}/>
    </PortfolioPage>
  )
}

export default VariousList