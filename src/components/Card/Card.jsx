import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

function Card(props) {
  const cover = props.cover;
  const title = props.title;
  const id = props.id;
  const path = `/housing/${id}`;

  return (
    <Link to={path}>
      <div>
        <div className={styles.cardBackground}>
          <div className={styles.cardDetails}>
            <div>
              <img src={cover} alt={title} />
            </div>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Card;
