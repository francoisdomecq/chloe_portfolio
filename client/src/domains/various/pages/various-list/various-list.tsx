import {PortfolioPage} from "@core/index";

import {useTranslation} from "react-i18next";
import NavigationHistory from "@core/components/navigation-history/navigation-history";
import './various-list.scss'
import {useEffect, useState} from "react";
import VariousDrawer from "@domains/various/components/various-drawer/various-drawer";
import {Various} from "../../types";
import VariousImage from "@domains/various/components/various-image/various-image";
import axiosClient from "@config/axios";

const VariousList = () => {
  const {t} = useTranslation("various")

  const [variousList, setVariousList] = useState<Various[]>([])
  const [selectedVarious, setSelectedVarious] = useState<Various | undefined>(undefined);
  const routerHistory = [{route: "/", label: "Home"}, {route: "/various", label: "VariousList"}];

  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (selectedVarious) {
        const displayNextProjectKeys = ["ArrowRight", "Tab", "Enter"]
        if (displayNextProjectKeys.includes(e.key)) {
          const nextExplorationIndex = (variousList.indexOf(selectedVarious) + 1) % variousList.length
          setSelectedVarious(variousList[nextExplorationIndex])
        } else if (e.key === "ArrowLeft") {
          const previousExplorationIndex = (variousList.indexOf(selectedVarious) - 1 + variousList.length) % variousList.length
          setSelectedVarious(variousList[previousExplorationIndex])
        }
      }
    }

    window.addEventListener("keydown", handleArrowKeys)

    return () => window.removeEventListener("keydown", handleArrowKeys)

  }, [selectedVarious])

  useEffect(() => {
    axiosClient.get("/various").then(res => setVariousList(res.data))
  }, []);

  return (
    <PortfolioPage>
      <div className={`various ${selectedVarious ? "various__drawer-active" : ""}`}>
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
          {variousList.map((various) => (
            <VariousImage key={various.id} various={various} onSelectVarious={setSelectedVarious}
                          selectedVarious={selectedVarious}/>
          ))}
        </div>
      </div>
      <VariousDrawer various={selectedVarious} onCloseProject={() => setSelectedVarious(undefined)}/>
    </PortfolioPage>
  )
}

export default VariousList