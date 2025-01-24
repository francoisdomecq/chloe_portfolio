import {HTMLProps} from "react";
import './multiline-text-input.scss'

interface MultilineTextInputProps extends HTMLProps<HTMLTextAreaElement> {
  name?: string;
  value?: string;
  readonly?: boolean;
  className?: string;
  label?: string;
  required?: boolean;
}

const MultilineTextInput = (props: MultilineTextInputProps) => {
  const {name, value, readonly, className, required, label, onChange} = props
  return (
    <div className={`multiline-text-input ${className}`}>
      <label className="multiline-text-input__label">{label}</label>
      <textarea
        name={name}
        value={value}
        readOnly={readonly}
        onChange={onChange}
        required={required}
        className="multiline-text-input__textarea"
        rows={5}
      />
    </div>

  )
}

export default MultilineTextInput