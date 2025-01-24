interface ConfirmModalProps {
  onConfirm: () => void
  onCancel: () => void
  text: string
  title: string
  isOpen: boolean
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const {title, text, onConfirm, onCancel, isOpen} = props
  return isOpen && (
    <div className="confirm-modal">
      <h2>{title}</h2>
      <p>{text}</p>
      <button onClick={onCancel}>Annuler</button>
      <button onClick={onConfirm}>Confirmer</button>
    </div>
  )
}

export default ConfirmModal