import "../../assets/styles/App.scss";
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
import housings from "../../logements.json";
import styles from "./Housing.module.scss";

function Housing(props) {
  const id = props.id;
  console.log(id);

  return (
    <div>
      <Carousel key={id} />
      <h1>Title</h1>
      <p>Location</p>
      <div>Renter</div>
      <div>Rate</div>
      <Tag />
      <div className={styles.dropdownList}>
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  );
}

export default Housing;
