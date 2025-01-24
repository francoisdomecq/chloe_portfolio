import "./various-management-list.scss"
import {Various as VariousType, Various} from "@domains/various/types";
import VariousImage from "@domains/various/components/various-image/various-image";
import {useState} from "react";
import VariousDrawer from "@domains/various/components/various-drawer/various-drawer";

interface VariousManagementListProps {
  variousList: Various[]
}

const VariousManagementList = (props: VariousManagementListProps) => {
  const {variousList} = props
  const [selectedExploration, setSelectedExploration] = useState<VariousType | undefined>(undefined);

  return (
    <div className="various-management-list">
      {variousList.map(various =>
        <VariousImage className="various-management-list__various" key={various.id} various={various}
                      selectedVarious={selectedExploration}
                      onSelectVarious={setSelectedExploration}/>)}
      <VariousDrawer various={selectedExploration} onCloseProject={() => setSelectedExploration(undefined)}/>
    </div>
  )
}

export default VariousManagementList