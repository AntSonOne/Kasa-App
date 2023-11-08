import "./CardList.scss";
import housings from "../../logements.json";
import Card from "../Card/Card";

function CardList() {
  return (
    <ul className="cardsGrid">
      {housings.map((housing) => (
        <Card
          key={housing.id}
          id={housing.id}
          cover={housing.cover}
          title={housing.title}
          description={housing.description}
        />
      ))}
    </ul>
  );
}

export default CardList;
