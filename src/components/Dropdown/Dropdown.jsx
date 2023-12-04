import "./Dropdown.scss";
import { useState } from "react";

function Dropdown(props) {
  const title = props.title;
  const description = props.description;
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div onClick={() => setIsOpen(false)} className="dropdown">
      <div className="dropdownTitle">
        <p>{title}</p>
        <i className="fa-solid fa-chevron-up"></i>
      </div>
      <div className="dropdownDescription">
        <p>{description}</p>
      </div>
    </div>
  ) : (
    <div onClick={() => setIsOpen(true)} className="dropdown">
      <div className="dropdownTitle">
        <p>{title}</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
}

export default Dropdown;
