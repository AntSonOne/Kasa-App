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
  return (
    <div>
      <Carousel pictures={housing.pictures} />
      <div className={styles.housingInfos}>
        <div>
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <Tag className={styles.dropdownList} tags={housing.tags} />
        </div>
        <div>
          <div>
            {housing.host.name}
            <img
              className={styles.profilePicture}
              src={housing.host.picture}
              alt="profile picture"
            />
          </div>
          <div>{housing.rating}</div>
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
