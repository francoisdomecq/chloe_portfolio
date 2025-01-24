import {Various} from "@domains/various/types";
import {useTranslation} from "react-i18next";
import './various-in-drawer.scss'

interface VariousInDrawerProps {
  various: Various;
}

const VariousInDrawer = (props: VariousInDrawerProps) => {
  const {t} = useTranslation("various")
  const {various} = props

  return (
    <>
      <h2 className="various-in-drawer__title">{various.title}</h2>
      <div className="various-in-drawer__date">
        <p className="various-in-drawer__date-title">{t("date")}</p>
        <p className="various-in-drawer__date-date">{various.date}</p>
      </div>
      <p className="various-in-drawer__description-title">{t("description.title")}</p>
      <p className="various-in-drawer__description-content">{various.description}</p>
      <img className="various-in-drawer__image" src={various.fileSrc}/>
    </>
  )
}

export default VariousInDrawer