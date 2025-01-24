import {Various} from "@domains/various/types";
import {useContext} from "react";
import {AppContext} from "@config/contexts/app-context";

interface VariousImageProps {
  various: Various;
  selectedVarious: Various | undefined;
  onSelectVarious: (various: Various) => void;
  className?: string
}

const VariousImage = (props: VariousImageProps) => {
  const {various, selectedVarious, onSelectVarious, className} = props
  const {hoverElement, unhoverElement} = useContext(AppContext)

  return (
    <img
      key={various.id}
      className={`various__image ${className} ${selectedVarious && selectedVarious.id !== various.id ? "various__image--not-active" : ""}`}
      onMouseEnter={() => hoverElement("carouselImage")}
      onMouseLeave={unhoverElement} src={various.fileSrc}
      onClick={() => onSelectVarious(various)}
    />
  )
}

export default VariousImage