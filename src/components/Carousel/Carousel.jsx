import "./Carousel.scss";
import { useState } from "react";

function Carousel(props) {
  const pictures = props.pictures;
  const [index, updateIndex] = useState(0);
  const lastPicture = pictures.length - 1;
  return (
    <div
      className="carousel"
      style={{
        backgroundImage: `url(${pictures[index]})`,
      }}
    >
      <div
        onClick={() => {
          index <= 0 ? updateIndex(lastPicture) : updateIndex(index - 1);
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div
        onClick={() => {
          index >= lastPicture ? updateIndex(0) : updateIndex(index + 1);
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
}

export default Carousel;
