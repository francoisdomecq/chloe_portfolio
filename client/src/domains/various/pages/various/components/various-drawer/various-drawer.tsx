import './various-drawer.scss'
import {motion} from "framer-motion";
import {Various} from "../../../../types";
import useClickOutside from "../../../../../core/hooks/use-click-outside";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

interface ProjectDrawerProps {
  various: Various | undefined;
  onCloseProject: () => void
}

const VariousDrawer = ({various, onCloseProject}: ProjectDrawerProps) => {
  const {t} = useTranslation("various")
  const ref = useClickOutside(onCloseProject)

  useEffect(() => {
    const handleEscapeKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseProject()
      }
    }

    window.addEventListener("keydown", handleEscapeKeyPress)

    return () => window.removeEventListener("keydown", handleEscapeKeyPress)
  }, [onCloseProject])

  return various && (
    <motion.div ref={ref} className="various-drawer" initial={{x: 300}} animate={{x: 0}}>
      <h2 className="various-drawer__title">{various.title}</h2>
      <div className="various-drawer__date">
        <p className="various-drawer__date-title">{t("date")}</p>
        <p className="various-drawer__date-date">{various.date}</p>
      </div>
      <p className="various-drawer__description-title">{t("description.title")}</p>
      <p className="various-drawer__description-content">{various.description}</p>
      <img className="various-drawer__image" src={various.src}/>
    </motion.div>
  )
}

export default VariousDrawer