import {ChangeEvent, Dispatch, SetStateAction} from "react";
import './various-management-create.scss'
import InputText from "@core/components/text-input/text-input";
import {useTranslation} from "react-i18next";
import {CreateVarious} from "@domains/various/types";
import MultilineTextInput from "@core/components/multiline-text-input/multiline-text-input";
import Collapse from "@core/components/collapse/collapse";

interface VariousManagementCreateProps {
  onAddVarious: () => void
  onChangeVarious: Dispatch<SetStateAction<CreateVarious | undefined>>;
  createdVarious: CreateVarious | undefined
}

const VariousManagementCreate = (props: VariousManagementCreateProps) => {
  const {t} = useTranslation("admin")
  const {onAddVarious, onChangeVarious, createdVarious} = props

  const handleUpdateVarious = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    onChangeVarious(prevVarious => ({...prevVarious as CreateVarious, [name]: value}))
  }

  const handleUpdateVariousDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    onChangeVarious(prevVarious => ({...prevVarious as CreateVarious, [name]: value}))
  }

  const handleDownloadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    const file = event.target.files[0];
    onChangeVarious(prevVarious => ({...prevVarious as CreateVarious, fileSrc: file}));
  };

  return (
    <Collapse className="various-management-create">
      <div className="various-management-create__text-inputs">
        <InputText className="various-management-create__input various-management-create__input--title" name="title"
                   label={t("various.create.title")} required
                   onChange={handleUpdateVarious} value={createdVarious?.title}/>
        <InputText className="various-management-create__input" name="date" label={t("various.create.date")} required
                   onChange={handleUpdateVarious} value={createdVarious?.date}/>
      </div>
      <MultilineTextInput className="various-management-create__textarea" name="description"
                          value={createdVarious?.description}
                          label={t("various.create.description")} required onChange={handleUpdateVariousDescription}/>
      <div className="various-management-create__file-submit">
        <input type="file" onChange={handleDownloadFile}/>
        <button className="various-management-create__submit"
                onClick={onAddVarious}>{t("various.create.submit")}</button>
      </div>

    </Collapse>
  )
}

export default VariousManagementCreate