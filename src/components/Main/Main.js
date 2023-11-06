import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import CardList from "../CardList.js/CardList";
import "./Main.scss";

function Main() {
  return (
    <div>
      <Banner />
      <div>
        <CardList />
      </div>
    </div>
  );
}

export default Main;
