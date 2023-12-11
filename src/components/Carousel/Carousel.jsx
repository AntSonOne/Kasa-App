import "./Carousel.scss";
import { useState } from "react";

function Carousel(props) {
  const pictures = props.pictures;
  const [index, updateIndex] = useState(0);
  const lastPicture = pictures.length;
  const lastPictureIndex = lastPicture - 1;

  return (
    <div
      className="carousel"
      style={{
        backgroundImage: `url(${pictures[index]})`,
      }}
    >
      <div className="arrows">
        <div
          onClick={() => {
            index <= 0 ? updateIndex(lastPictureIndex) : updateIndex(index - 1);
          }}
        >
          <i
            className={
              lastPicture === 1 ? "hideItem" : "fa-solid fa-chevron-left"
            }
          ></i>
        </div>
        <div
          onClick={() => {
            index >= lastPictureIndex ? updateIndex(0) : updateIndex(index + 1);
          }}
        >
          <i
            className={
              lastPicture === 1 ? "hideItem" : "fa-solid fa-chevron-right"
            }
          ></i>
        </div>
      </div>
      <div className={lastPicture === 1 ? "hideItem" : "picturesCounter"}>
        {index + 1}/{lastPicture}
      </div>
    </div>
  );
}

export default Carousel;
