import {useEffect, useState} from "react";
import axiosClient from "../../../../config/axios";

interface Various {
  id: string;
  title: string;
  description: string;
  date: string;
  fileSrc: string;
}

const VariousManagement = () => {

  const [various, setVarious] = useState<Various | undefined>(undefined)
  const [variousFetch, setVariousFetch] = useState<Various[]>([])

  const handleAddVarious = async () => {
    if (various) {

      const createdVarious = await axiosClient.post('/various', {...various, fileSrc: undefined})

      const config = {headers: {'Content-Type': 'multipart/form-data'}};
      const formData = new FormData();
      formData.append("file", various.fileSrc);

      await axiosClient.patch(`/various/${createdVarious.data.id}/file`, formData, config)
    }
  }

  const handleUpdateVarious = (e, field: string) => {
    setVarious(prevVarious => ({...prevVarious as Various, [field]: e.target.value}))
  }


  const handleDownloadFile = (e) => {
    const file = e.target.files[0];
    setVarious(prevVarious => ({...prevVarious as Various, fileSrc: file}));
  };

  useEffect(() => {
    axiosClient.get('/various').then(res => {
      setVariousFetch(res.data)
    })
  }, [])


  return (
    <div>
      hello
      <input type="text" onChange={(e) => handleUpdateVarious(e, 'title')}/>
      <input type="text" onChange={(e) => handleUpdateVarious(e, 'description')}/>
      <input type="text" onChange={(e) => handleUpdateVarious(e, 'date')}/>
      <input type="file" onChange={handleDownloadFile}/>
      <button onClick={handleAddVarious}>Ajouter projet</button>

      {variousFetch.map(various => {
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