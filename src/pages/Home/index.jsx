import "../../assets/styles/App.scss";
import bannerHome from "../../assets/img/banner-home.png";
import Banner from "../../components/Banner/Banner";
import CardList from "../../components/CardList/CardList";
import "./Home.scss";

function Home() {
  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" image={bannerHome} />
      <div>
        <CardList />
      </div>
    </div>
  );
}

export default Home;
