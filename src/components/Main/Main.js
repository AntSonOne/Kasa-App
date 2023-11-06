import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import CardList from "../CardList.js/CardList";
import "./Main.scss";

function Main() {
  return (
    <main>
      <Banner />
      <div>
        <CardList />
      </div>
    </main>
  );
}

export default Main;
