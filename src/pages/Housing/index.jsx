import { Navigate, useParams } from "react-router-dom";
import "../../assets/styles/App.scss";
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
import housings from "../../logements.json";
import styles from "./Housing.module.scss";

function Housing() {
  const { id } = useParams();
  const housing = housings.find((housing) => housing.id === id);
  const stars = [];
  const emptyStars = [];

  if (housing === undefined) {
    return <Navigate to="/notfound" replace={true} />;
  }

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
        <div className={styles.housingDetails}>
          <div>
            <h1 className={styles.housingTitle}>{housing.title}</h1>
            <p className={styles.housingDescription}>{housing.location}</p>
          </div>
          <ul>
            {housing.tags.map((tag) => (
              <Tag tag={tag} key={housing.id + Math.random()} />
            ))}
          </ul>
        </div>
        <div className={styles.hostDetailsAndRate}>
          <div className={styles.hostDetails}>
            <p className={styles.hostName}>{housing.host.name}</p>
            <img
              className={styles.profilePicture}
              src={housing.host.picture}
              alt="landlord"
            />
          </div>
          <div className={styles.stars}>
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
