import styles from "./Banner.module.scss";

function Banner(props) {
  const text = props.text;
  const backgroundImg = props.image;

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImg})`,
      }}
    >
      <div className={styles.container}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Banner;
