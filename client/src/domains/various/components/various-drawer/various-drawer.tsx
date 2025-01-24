import './various-drawer.scss'
import {motion} from "framer-motion";
import {Various} from "../../types";
import useClickOutside from "@core/hooks/use-click-outside";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "@config/contexts/app-context";
import VariousInDrawer from "@domains/various/components/various-in-drawer/various-in-drawer";
import {useLocation} from "react-router-dom";
import VariousEditing from "@domains/various/components/various-editing/various-editing";

interface ProjectDrawerProps {
  various: Various | undefined;
  onCloseProject: () => void
}

const VariousDrawer = ({various, onCloseProject}: ProjectDrawerProps) => {
  const location = useLocation()
  const ref = useClickOutside(onCloseProject)
  const {user} = useContext(AppContext)

  const [isEditing, setIsEditing] = useState(false)

  const isUserAdmin = user?.role === "ADMIN" && location.pathname.includes("admin")


  const handleChangeIsEditing = () => {
    setIsEditing(prevState => !prevState)
  }

  const renderVariousContent = () => {
    if (various) {
      if (isUserAdmin && isEditing) {
        return <VariousEditing editedVarious={various} closeDrawer={onCloseProject}/>
      }
      return <VariousInDrawer various={various}/>
    }
  }

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
      {isUserAdmin && <button onClick={handleChangeIsEditing}>Editer</button>}
      {renderVariousContent()}
    </motion.div>
  )
}

export default VariousDrawer