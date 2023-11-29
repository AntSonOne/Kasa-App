import "../../assets/styles/App.scss";
import Banner from "../../components/Banner/Banner";
import bannerAbout from "../../assets/img/banner-about.jpg";
import Dropdown from "../../components/Dropdown/Dropdown";
import abouts from "../../abouts.json";
import styles from "./About.module.scss";

function About() {
  return (
    <div>
      <Banner text={null} image={bannerAbout} />
      <ul className={styles.dropdownList}>
        {abouts.map((about) => (
          <Dropdown
            key={about.id}
            title={about.title}
            description={about.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default About;
