import styles from "./Card.module.scss";

function Card(props) {
  const cover = props.cover
  const title = props.title
  const description = props.description

  return (
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
  );
}

export default Card;
