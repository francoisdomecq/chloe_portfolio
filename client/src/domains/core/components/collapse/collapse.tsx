import {useState} from "react";
import "./collapse.scss"

interface CollapseProps {
  isOpenByDefault?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Collapse = (props: CollapseProps) => {
  const {isOpenByDefault = false, children, className} = props;
  const [isOpen, setIsOpen] = useState(isOpenByDefault)

  return (
    <div className={`collapse ${className}`}>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Hide' : 'Show'}
        </button>
      </div>
      {isOpen && children}
    </div>
  )
}

export default Collapse