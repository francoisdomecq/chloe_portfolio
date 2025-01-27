import {ChangeEvent, useState} from "react";
import TextInput from "@core/components/text-input/text-input";

interface XXXProps {
  onConfirm: (value: string[], field: string) => void
  name: string
}

const XXX = (props: XXXProps) => {
  const {onConfirm, name} = props
  const [currentValue, setCurrentValue] = useState<string>('')
  const [array, setArray] = useState<string[]>([])

  const handleChangeCurrentValue = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value)
  }


  const removeArrayValue = (value: string) => {
    const newArray = array.filter((v) => v !== value)
    setArray(newArray)
    onConfirm(newArray, name)
  }

  const addArrayValue = () => {
    if (currentValue !== '') {
      setArray([...array, currentValue])
      onConfirm([...array, currentValue], name)
      setCurrentValue('')
    }
  }

  return (
    <div>
      <TextInput onChange={handleChangeCurrentValue} value={currentValue}/>
      {array.map((value, index) => <p onClick={() => removeArrayValue(value)} key={index}>{value}</p>)}
      <button onClick={addArrayValue}>Add value</button>
    </div>
  )

}

export default XXX