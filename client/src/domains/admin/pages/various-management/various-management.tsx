import {useEffect, useState} from "react";
import axiosClient from "../../../../config/axios";
import {CreateVarious, Various} from "../../../various/types";
import VariousManagementCreate from "./components/various-management-create/various-management-create";
import VariousManagementList from "./components/various-management-list/various-management-list";
import './various-management.scss'
import {useTranslation} from "react-i18next";

const VariousManagement = () => {
  const {t} = useTranslation("admin")
  const [variousList, setVariousList] = useState<Various[]>([])
  const [createdVarious, setCreatedVarious] = useState<CreateVarious | undefined>(undefined)

  const fetchVariousList = () => {
    axiosClient.get('various').then(res => {
      setVariousList(res.data)
    })
  }

  const handleAddVarious = async () => {
    if (createdVarious) {
      const postedVarious = await axiosClient.post('/various', {...createdVarious, fileSrc: undefined})

      const config = {headers: {'Content-Type': 'multipart/form-data'}};
      const formData = new FormData();
      formData.append("file", createdVarious.fileSrc);

      axiosClient.patch(`/various/${postedVarious.data.id}/file`, formData, config).then(() => {
        fetchVariousList()
        setCreatedVarious(undefined)
      })
    }
  }

  useEffect(() => {
    fetchVariousList()
  }, [])

  return (
    <div className="various-management">
      <h1 className="various-management__title">{t("various.creation")}</h1>
      <VariousManagementCreate createdVarious={createdVarious} onChangeVarious={setCreatedVarious}
                               onAddVarious={handleAddVarious}/>
      <VariousManagementList variousList={variousList}/>
    </div>
  );
}

export default VariousManagement