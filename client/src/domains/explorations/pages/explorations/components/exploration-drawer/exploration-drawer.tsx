import './exploration-drawer.scss'
import {motion} from "framer-motion";
import {Exploration} from "../../../../types";
import useClickOutside from "../../../../../core/hooks/use-click-outside";
import {useTranslation} from "react-i18next";

interface ProjectDrawerProps {
  exploration: Exploration | undefined;
  onCloseProject: () => void
}

const ExplorationDrawer = ({exploration, onCloseProject}: ProjectDrawerProps) => {
  const {t} = useTranslation("explorations")
  const ref = useClickOutside(onCloseProject)

  return exploration && (
    <motion.div ref={ref} className="exploration-drawer" initial={{x: 300}} animate={{x: 0}}>
      <h2 className="exploration-drawer__title">{exploration.title}</h2>
      <div className="exploration-drawer__date">
        <p className="exploration-drawer__date-title">{t("date")}</p>
        <p className="exploration-drawer__date-date">{exploration.date}</p>
      </div>
      <p className="exploration-drawer__description-title">{t("description.title")}</p>
      <p className="exploration-drawer__description-content">{exploration.description}</p>

      <img className="exploration-drawer__image" src={exploration.src} width="100%"/>

    </motion.div>
  )
}

export default ExplorationDrawer