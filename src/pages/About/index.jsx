import "../../assets/styles/App.scss";
import Banner from "../../components/Banner/Banner";
import bannerAbout from "../../assets/img/banner-about.jpg";

function About() {
  return (
    // TODO implement A propos page and router
    <div>
      <Banner text={null} image={bannerAbout} />
    </div>
  );
}

export default About;
