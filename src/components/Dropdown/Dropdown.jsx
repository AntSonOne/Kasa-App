import { useState } from "react";
import styles from "./Dropdown.module.scss";

function Dropdown(props) {
  const title = props.title;
  const description = props.description;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? styles.dropdownOpen : styles.dropdown}>
      <div className={styles.dropdownTitle}>
        <p>{title}</p>
        <i
          onClick={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
          className={"fa-solid fa-chevron-up"}
        ></i>
      </div>
      <div className={styles.dropdownDescription}>
        <p>
          {typeof description === "string"
            ? description
            : description.map((d) => {
                return <p>{d}</p>;
              })}
        </p>
      </div>
    </div>
  );
}

export default Dropdown;
