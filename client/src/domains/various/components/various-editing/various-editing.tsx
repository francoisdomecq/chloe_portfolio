import {UpdateVarious, Various} from "@domains/various/types";
import {ChangeEvent, useState} from "react";
import InputText from "@core/components/text-input/text-input";
import MultilineTextInput from "@core/components/multiline-text-input/multiline-text-input";
import axiosClient from "@config/axios";
import {useTranslation} from "react-i18next";
import ConfirmModal from "@core/components/confirm-modal/confirm-modal";

interface VariousEditingProps {
  editedVarious: Various
  closeDrawer: () => void
}

const VariousEditing = (props: VariousEditingProps) => {
  const {t} = useTranslation("admin")

  const [editedVarious, setEditedVarious] = useState<UpdateVarious>(props.editedVarious)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleUpdateVarious = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setEditedVarious(prevVarious => ({...prevVarious, [name]: value}))
  }

  const handleUpdateVariousDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setEditedVarious(prevVarious => ({...prevVarious, [name]: value}))
  }

  const handleDownloadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    const file = event.target.files[0];
    setEditedVarious(prevVarious => ({...prevVarious, newFileSrc: file}));
  };

  const handlePatchVarious = async () => {
    if (editedVarious) {
      const fileNameWithoutServer = editedVarious && editedVarious.fileSrc?.split("/").pop();
      await axiosClient.patch(`/various/${editedVarious.id}`, {
        ...editedVarious,
        fileSrc: fileNameWithoutServer,
        newFileSrc: undefined
      }).then(props.closeDrawer)

      if (!editedVarious.newFileSrc) return;

      const config = {headers: {'Content-Type': 'multipart/form-data'}};
      const formData = new FormData();
      formData.append("file", editedVarious.newFileSrc);

      axiosClient.patch(`/various/${editedVarious.id}/file`, formData, config).then(props.closeDrawer)
    }
  }

  const handleCloseModal = () => {
    setIsDeleting(false)
    props.closeDrawer()
  }

  const handleDeleteVarious = async () => {
    await axiosClient.delete(`/various/${editedVarious.id}`).then(handleCloseModal)
  }

  return (
    <div>
      <div className="various-management-create__text-inputs">
        <InputText className="various-management-create__input various-management-create__input--title" name="title"
                   label={t("various.create.title")} required
                   onChange={handleUpdateVarious} value={editedVarious?.title}/>
        <InputText className="various-management-create__input" name="date" label={t("various.create.date")} required
                   onChange={handleUpdateVarious} value={editedVarious?.date}/>
      </div>
      <MultilineTextInput className="various-management-create__textarea" name="description"
                          value={editedVarious?.description}
                          label={t("various.create.description")} required onChange={handleUpdateVariousDescription}/>
      <div className="various-management-create__file-submit">
        <input type="file" onChange={handleDownloadFile}/>
        <button className="various-management-create__submit"
                onClick={handlePatchVarious}>{t("various.create.submit")}</button>
      </div>
      <button onClick={() => setIsDeleting(true)}>Delete this various</button>
      <ConfirmModal onConfirm={handleDeleteVarious} onCancel={handleCloseModal} text={"delete"} title={"oui"}
                    isOpen={isDeleting}/>
    </div>
  )
}

export default VariousEditing