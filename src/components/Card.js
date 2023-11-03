import styles from "../styles/Card.module.scss";

function Card() {
  return (
    <div className={styles.cardBackground}>
      <div className={styles.cardDetails}>
        <p>Title</p>
        <p>Description</p>
      </div>
    </div>
  );
}

export default Card;
