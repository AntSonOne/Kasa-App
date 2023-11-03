import styles from "../styles/Footer.module.scss";
import logo from "../img/logo.png";

function Footer() {
  return (
    <footer>
      <div className={styles.footerContent}>
        <img src={logo} alt="Kasa logo" />
        <h1>© 2020 Kasa. All rights reserved</h1>
      </div>
    </footer>
  );
}

export default Footer;
