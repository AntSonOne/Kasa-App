import Banner from "./Banner";
import Card from "./Card";
import "../styles/Main.css";

function Main() {
  return (
    <main>
      <Banner />
      <h1>Ici un joli container 🏗</h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default Main;
