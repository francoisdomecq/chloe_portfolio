import {ChangeEvent, useState} from "react";
import TextInput from "@core/components/text-input/text-input";
import './multi-values-input.scss'
import {useTranslation} from "react-i18next";
import MultilineTextInput from "@core/components/multiline-text-input/multiline-text-input";
import ConfirmModal from "@core/components/confirm-modal/confirm-modal";

interface MultiValuesInputProps {
  onConfirm: (value: string[], field: string) => void
  inputType?: 'input' | 'textarea'
  values: string[] | undefined
  name: string
}

const MultiValuesInput = (props: MultiValuesInputProps) => {
  const {t} = useTranslation('admin')
  const {onConfirm, name, inputType = 'input', values = []} = props

  const [currentValue, setCurrentValue] = useState<string>('')
  const [array, setArray] = useState<string[]>(values)
  const [textAreaValue, setTextAreaValue] = useState('')

  const handleChangeCurrentValue = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value)
  }

  const handleChangeCurrentValueTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(event.target.value)
  }


  const removeArrayValue = (value: string) => {
    const newArray = array.filter((v) => v !== value)
    setArray(newArray)
    onConfirm(newArray, name)
  }

  const addArrayValue = () => {
    if (currentValue !== '') {
      const updatedArray = [...array, currentValue]
      setArray(updatedArray)
      onConfirm(updatedArray, name)
      setCurrentValue('')
    }
  }

  const renderValue = (value: string) => {
    if (inputType === 'input') {
      return <p className="multi-values-input__value" onClick={() => removeArrayValue(value)} key={value}>{value}</p>
    }
    const formatValue = value.substring(0, 10) + (value.length > 10 ? '...' : '')
    return <p className="multi-values-input__value" onClick={() => setTextAreaValue(value)}
              key={value}>{formatValue}</p>
  }

  const handleRemoveTextAreaValue = () => {
    removeArrayValue(textAreaValue)
    setTextAreaValue('')
  }

  return (
    <div className="multi-values-input">
      {inputType === 'textarea' ?
        <MultilineTextInput value={currentValue} onChange={handleChangeCurrentValueTextArea}
                            label={t(`projects.create.${name}`)}/> :
        <TextInput className="multi-values-input__input" onChange={handleChangeCurrentValue}
                   label={t(`projects.create.${name}`)} value={currentValue}/>
      }
      <div className="multi-values-input__values">
        {array.map(renderValue)}
        <button className="multi-values-input__submit" onClick={addArrayValue}>+</button>
      </div>
      <ConfirmModal text={textAreaValue} onCancel={() => setTextAreaValue('')} title={"supprimer ?"}
                    onConfirm={handleRemoveTextAreaValue} isOpen={!!textAreaValue}/>
    </div>
  )

}

export default MultiValuesInput