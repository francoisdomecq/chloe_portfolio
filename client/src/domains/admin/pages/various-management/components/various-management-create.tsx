import {ChangeEvent, useState} from "react";
import axiosClient from "../../../../../config/axios";
import './various-management-create.scss'
import InputText from "../../../../core/components/input-text/input-text";

interface Various {
  id: string;
  title: string;
  description: string;
  date: string;
  fileSrc: File;
}

const VariousManagementCreate = () => {
  const [createdVarious, setCreatedVarious] = useState<Various | undefined>(undefined)

  const handleAddVarious = async () => {
    if (createdVarious) {
      const postedVarious = await axiosClient.post('/various', {...createdVarious, fileSrc: undefined})

      const config = {headers: {'Content-Type': 'multipart/form-data'}};
      const formData = new FormData();
      formData.append("file", createdVarious.fileSrc);

      await axiosClient.patch(`/various/${postedVarious.data.id}/file`, formData, config)
    }
  }

  const handleUpdateVarious = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setCreatedVarious(prevVarious => ({...prevVarious as Various, [name]: value}))
  }


  const handleDownloadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    const file = event.target.files[0];
    setCreatedVarious(prevVarious => ({...prevVarious as Various, fileSrc: file}));
  };

  return (
    <div className="various-management-create">
      <InputText name="title" label="Various title" required onChange={handleUpdateVarious}/>
      <InputText name="description" label="Various description" required onChange={handleUpdateVarious}/>
      <InputText name="date" label="Various date" required onChange={handleUpdateVarious}/>
      <input type="file" onChange={handleDownloadFile}/>
      <button onClick={handleAddVarious}>Ajouter projet</button>
    </div>
  )
}

export default VariousManagementCreate