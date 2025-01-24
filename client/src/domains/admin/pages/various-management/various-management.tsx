import {useEffect, useState} from "react";
import axiosClient from "../../../../config/axios";
import {Various} from "../../../various/types";
import VariousManagementCreate from "./components/various-management-create";

const VariousManagement = () => {

  const [variousList, setVariousList] = useState<Various[]>([])


  useEffect(() => {
    axiosClient.get('various').then(res => {
      setVariousList(res.data)
    })

    axiosClient.get('projects').then(res => {
    })
  }, [])

  console.log(variousList)
  return (
    <div className="various-management">
      <VariousManagementCreate/>
      {variousList.map(various => {
        return (
          <div>
            {various.title} {various.description} {various.date}
            <img src={various.fileSrc}/>
          </div>
        )
      })}

    </div>
  );
}

export default VariousManagement