import "./various-management-list.scss"
import {Various as VariousType, Various} from "@domains/various/types";
import VariousImage from "@domains/various/components/various-image/various-image";

interface VariousManagementListProps {
  variousList: Various[]
  selectedVarious: VariousType | undefined
  onSelectVarious: (various: VariousType | undefined) => void
}

const VariousManagementList = (props: VariousManagementListProps) => {
  const {variousList, onSelectVarious, selectedVarious} = props

  return (
    <div className="various-management-list">
      {variousList.map(various =>
        <VariousImage className="various-management-list__various" key={various.id} various={various}
                      selectedVarious={selectedVarious}
                      onSelectVarious={onSelectVarious}/>)}
    </div>
  )
}

export default VariousManagementList