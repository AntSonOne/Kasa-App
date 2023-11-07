import styles from "./Footer.module.scss";
import logo from "../../assets/img/logo.png";

function Footer() {
  return (
    <footer>
      <div className={styles.footerContent}>
        <img src={logo} alt="Kasa logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
