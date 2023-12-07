import { useState } from "react";
import styles from "./Dropdown.module.scss";

function Dropdown(props) {
  const title = props.title;
  const description = props.description;
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className={styles.dropdown}>
      <div className={styles.dropdownTitle}>
        <p>{title}</p>
        <i
          onClick={() => setIsOpen(false)}
          className={"fa-solid fa-chevron-up open"}
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
  ) : (
    <div className={styles.dropdown}>
      <div className={styles.dropdownTitle}>
        <p>{title}</p>
        <i
          onClick={() => setIsOpen(true)}
          className={"fa-solid fa-chevron-up"}
        ></i>
      </div>
    </div>
  );
}

export default Dropdown;
