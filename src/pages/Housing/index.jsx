import "../../assets/styles/App.scss";
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
import styles from "./Housing.module.scss";
import { useParams } from "react-router-dom";
import housings from "../../logements.json";

function Housing() {
  const { id } = useParams();
  const housing = housings.find((housing) => housing.id === id);
  const stars = [];
  const emptyStars = [];
  for (let i = 0; i < housing.rating; i++) {
    stars.push(
      <i key={housing.id + Math.random()} className="fa-solid fa-star"></i>
    );
  }
  if (stars.length < 5) {
    const totalStars = 5 - stars.length;
    for (let i = 0; i < totalStars; i++) {
      emptyStars.push(
        <i
          key={housing.id + Math.random()}
          className={"fa-solid fa-star " + styles.emptyStar}
        ></i>
      );
    }
  }

  return (
    <div>
      <Carousel pictures={housing.pictures} />
      <div className={styles.housingInfos}>
        <div>
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <ul className={styles.dropdownList}>
            {housing.tags.map((tag) => (
              <Tag tag={tag} key={housing.id + Math.random()} />
            ))}
          </ul>
        </div>
        <div>
          <div>
            {housing.host.name}
            <img
              className={styles.profilePicture}
              src={housing.host.picture}
              alt="landlord"
            />
          </div>
          <div>
            {stars}
            {emptyStars}
          </div>
        </div>
      </div>
      <div className={styles.dropdownList}>
        <Dropdown title="Description" description={housing.description} />
        <Dropdown title="Équipements" description={housing.equipments} />
      </div>
    </div>
  );
}

export default Housing;
