import styles from "../styles/Banner.module.scss";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}

export default Banner;
