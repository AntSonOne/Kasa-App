import "./CardList.scss";
import housings from "../../data/logements.json";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

function CardList() {
  const path = `/housing/`;

  return (
    <ul className="cardsGrid">
      {housings.map((housing) => (
        <Link to={path + housing.id} key={housing.id}>
          <Card
            key={housing.id}
            id={housing.id}
            cover={housing.cover}
            title={housing.title}
            description={housing.description}
          />
        </Link>
      ))}
    </ul>
  );
}

export default CardList;
