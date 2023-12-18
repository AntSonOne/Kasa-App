import styles from "./Card.module.scss";

function Card(props) {
  const cover = props.cover;
  const title = props.title;

  return (
    <div
      className={styles.cardBackground}
      style={{
        backgroundImage: `
        linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(0, 0, 0, 0.5) 100%
            ), url(${cover})`,
      }}
    >
      <p>{title}</p>
    </div>
  );
}
export default Card;
