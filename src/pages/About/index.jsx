import "../../assets/styles/App.scss";
import Banner from "../../components/Banner/Banner";
import bannerAbout from "../../assets/img/banner-about.jpg";
import Dropdown from "../../components/Dropdown/Dropdown";
import abouts from "../../abouts.json";

function About() {
  return (
    <div>
      <Banner text={null} image={bannerAbout} />
      <ul>
        {abouts.map((about) => (
          <Dropdown title={about.title} description={about.description} />
        ))}
      </ul>
    </div>
  );
}

export default About;
