import Banner from "./Banner";
import Card from "./Card";
import "../styles/Main.scss";

function Main() {
  return (
    <main>
      <Banner />
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default Main;
